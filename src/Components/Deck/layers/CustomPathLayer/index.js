import {Layer, project32, picking} from '@deck.gl/core';
import PathLayer from './path-layer/path-layer.js';

import vs from './path-layer/path-layer-vertex.glsl';
import fs from './path-layer/path-layer-fragment.glsl';

// re-use joint code
const filterCall = 'DECKGL_FILTER_COLOR';

const vertexShaderParts = vs.split(filterCall);
const vertexShader = `
		attribute float instanceLengths;
		attribute float instanceNextLengths;
		varying float vLength;
	` +
	vertexShaderParts[0] + `
		vLength = instanceLengths + (instanceNextLengths - instanceLengths) * vPathPosition.y / vPathLength;
	` +
	filterCall +
	vertexShaderParts[1];

const fragmentShaderParts = fs.split(filterCall);
const fragmentShader = `
		varying float vLength;
	` +
	fragmentShaderParts[0] + `
		float a = 0.0;
		for (int i = 1; i < 4; i++) {
			float w = 0.2 / float(i);
			float s = sin( 12345.6 * vLength / (8.7 - float(i)) + float(i) );
			float d = abs( (1.0 - 2.0 * w) * s - vPathPosition.x );
			a = max( a, smoothstep(w, w - 0.05, d) );
		}
		gl_FragColor.a = a;
	` +
	filterCall +
	fragmentShaderParts[1];

export default class CustomPathLayer extends PathLayer {
	constructor(start, your, free, trial, now) {
		start.getLengths = (data) => {
			let lengthSoFar = 0;
			let fu = this.props.getPath(data).map(function(point, index, points) {
				lengthSoFar += index ? Math.sqrt(
					(point[0] - points[index - 1][0])**2 +
					(point[1] - points[index - 1][1])**2
				) : 0;
				return lengthSoFar;
			});
			//console.log(fu);
			return fu;
		}

		super(start, your, free, trial, now);
	}
	getShaders() {
		return Layer.prototype.getShaders.call(this, {vs: vertexShader, fs: fragmentShader, modules: [project32, picking]});
	}

	initializeState(params) {
		super.initializeState(params);

		const attributeManager = this.getAttributeManager();
		attributeManager.addInstanced({
			lengths: {
				size: 1,
				accessor: 'getLengths',
				shaderAttributes: {
					instanceLengths: {
						vertexOffset: 0
					},
					instanceNextLengths: {
						vertexOffset: 1
					}
				}
			}
		});
	}
}
