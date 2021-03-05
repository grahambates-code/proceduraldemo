import { CompositeLayer } from '@deck.gl/core';
import {BitmapLayer} from '@deck.gl/layers';
import GL from '@luma.gl/constants';
import * as turf from "@turf/turf";

export default class MaskLayer extends CompositeLayer {

    renderLayers() {

        const {  image, bounds } = this.props;

        // console.log(bounds);
        const boundsSmall = turf.polygon([bounds.concat([bounds[0]])]);

       const t = turf.simplify(turf.buffer(boundsSmall, '-76', {units : 'kilometers'}), {tolerance : 1});

       //console.log(t.geometry.coordinates[0]);

        const papermasklayer = new BitmapLayer({
            id: 'mask-bitmap-paper-layer',
           //
           bounds,
            image: './textures/blank_polaroid.png',
            parameters: {
                depthTest: true,
                depthMask: true,
                blend: true,
                blendEquation: GL.FUNC_ADD,
                blendFunc: [GL.ONE, GL.ONE_MINUS_SRC_COLOR]
            }

        });

        const photo = new BitmapLayer({
            id: 'bitmap-photo-layer',
            bounds: t.geometry.coordinates[0],
            image: image,
            parameters: {
                depthTest: false,
            }
        });

        return [  photo, papermasklayer ];
    }
}

MaskLayer.componentName = 'MaskLayer';
