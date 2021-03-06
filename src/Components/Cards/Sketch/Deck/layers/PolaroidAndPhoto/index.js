import { CompositeLayer } from '@deck.gl/core';
import {BitmapLayer} from '@deck.gl/layers';
import {TileLayer} from '@deck.gl/geo-layers';
import {SimpleMeshLayer, ScenegraphLayer} from '@deck.gl/mesh-layers';
import GL from '@luma.gl/constants';
import {CustomGeometry} from "./CustomGeometry";

const materialLayoutData = [
    {position: [-10, -10, 0.0], angle : 5},
];

const plane = new CustomGeometry({size : 1, m : 1, holed  : false});

export default class PolaroidAndPhotoLayer extends CompositeLayer {

    initializeState() {

        let self = this;

    }

    finalizeState() {
        super.finalizeState();
    }

    renderLayers() {
        const { altitude , cameraBearing} = this.state;
        const {  data, scale } = this.props;

        console.log(scale);

        return [

            // new SimpleMeshLayer({
            //     id: 'polaroid' + id,
            //     getOrientation: d => [0, d.angle,0],
            //     getScale: [100009,100090,1],
            //     opacity: 1,
            //     data : data,
            //     mesh: plane,
            //     getPosition: d => d.position,
            //     texture : '/textures/blank_polaroid.png',
            //     material : {
            //         ambient: 0.4,
            //         diffuse: 0.5,
            //         shininess: 0.5,
            //         //specularColor: [255, 255, 255]
            //     },
            //     parameters: {
            //         depthTest: true,
            //         depthMask: true,
            //         blend: true,
            //         blendEquation: GL.FUNC_ADD,
            //         blendFunc: [GL.ONE, GL.ONE_MINUS_SRC_COLOR]
            //     }
            // }),

        new ScenegraphLayer({
            id: 'scenegraph-layer',
            data,
            pickable: true,
            material : {
                ambient: 0.4,
                diffuse: 0.5,
                shininess: 1.5,
                specularColor: [255, 255, 255]
            },
            scenegraph: '/textures/scene77.glb',

            getPosition: d => d.position,
            getTranslation : [0,0,0],

            getOrientation: d => [0, d.angle, 90 ],
            getScale: (d) =>[d.scale,d.scale,d.scale],

            sizeScale: 1,
            _lighting: 'pbr'
        })

        ];
    }
}

PolaroidAndPhotoLayer.componentName = 'PolaroidAndPhotoLayer';
