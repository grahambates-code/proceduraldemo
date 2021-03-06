import React, {Fragment, useState} from 'react';
import DeckGL from '@deck.gl/react';
import {GeoJsonLayer} from '@deck.gl/layers';
import {MapController, LinearInterpolator, FlyToInterpolator} from '@deck.gl/core';
import {BitmapLayer} from '@deck.gl/layers';
import {TileLayer} from '@deck.gl/geo-layers';
import {Component} from 'react';
import _ from "lodash";
import './index.less';
import CustomPathLayer  from './layers/CustomPathLayer'
import { EditableGeoJsonLayer, TransformMode, TranslateMode } from "nebula.gl";

import MaskLayer from './layers/MaskLayer';
import PolaroidAndPhoto from './layers/PolaroidAndPhoto';

import {bbox}  from '@turf/turf'
import gql from "graphql-tag";
import {AmbientLight, PointLight, DirectionalLight, LightingEffect} from '@deck.gl/core';

// create ambient light source
const ambientLight = new AmbientLight({
    color: [255, 255, 255],
    intensity: 2.5
});

const lightingEffect = new LightingEffect({ambientLight});


const emptyFeatureCollection = {
    "type": "FeatureCollection",
    "features": [

    ]
}

const SAVE_SLIDE_DATA = gql`

    mutation( $slide_id : Int,  $data : jsonb){
                    update_card_slide(where: {id: {_eq: $slide_id}}, _set: { data: $data}) {
                        returning {
                                    id
                                  }
    }
    }
`;

export default class extends Component {

    constructor(props) {
        super(props);

        this.debounce  = _.debounce(e => e(), 300);

        this.state = {
            //data:       props.card && props.card.annotations ? props.card.annotations : myFeatureCollection,
          //  viewState:  props.card && props.card.camera ? props.card.camera : {longitude: 1, latitude: 1, zoom: 1}
        }

    }

    render() {

        const slide = this.props.card.slides[this.props.slideIndex];

        let layers = [

            new TileLayer({
                id: 'TileLayer',
                data: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
                tileSize: 256,

                // onClick : (e) => {
                //     this.props.updateLandscape({variables : {card_id : this.props.card.id, landscapecamera : { longitude : e.coordinate[0], latitude : e.coordinate[1]}}});
                // },

                renderSubLayers: props => {
                    const {
                        bbox: {west, south, east, north}
                    } = props.tile;

                    return new BitmapLayer(props, {
                        data: null,
                        desaturate : 1,
                        //opacity : 0.7,
                        //transparentColor : [0,0,0,0],
                        image: props.data,
                        bounds: [west, south, east, north]
                    });
                },
               // pickable: true,
            }),


            new GeoJsonLayer({
                id: 'route-layer',
                data : this.props.card.data || emptyFeatureCollection,
                lineWidthScale: 1,
                lineWidthMinPixels: 12,
                lineWidthMaxPixels: 14,
                getLineColor: [255, 238,100, 255],
                getRadius: 100,
                getLineWidth: 20,
                //modelMatrix : new Matrix4().makeTranslation(0,0,10 ),

                _subLayerProps: {
                    "line-strings": {type: CustomPathLayer},
                }

            }),

          new EditableGeoJsonLayer({
                id: 'mask-editor',
                data:  this.props.slidePhotoRotation.position,
                opacity : 1,
                mode: TranslateMode,
                selectedFeatureIndexes: [0],

                _subLayerProps: {
                    geojson: {
                        getFillColor: (feature) => [255,0,255,0],
                        getLineColor: (feature) => [255,255,255,0],
                        pointRadiusMinPixels : 100
                    }
                },

                onEdit: (event) => {

                    const { updatedData, editType } = event;

                    this.props.setSlidePhotoRotation({ ...this.props.slidePhotoRotation, position : updatedData});
                    // if (editType === 'rotated' || editType === 'translated') {
                    //     const slide = that.props.card.slides[that.props.slideIndex];
                    //     this.props.client.mutate({mutation: SAVE_SLIDE_DATA, variables : {slide_id : slide.id, data : {...slide.data, geojson : updatedData} } });
                    // }

                }
            }),

            slide.data.pointB ? new PolaroidAndPhoto({
                id : "media",
                data : [{
                    position    : this.props.slidePhotoRotation.position.features[0].geometry.coordinates,
                    scale       : this.props.slidePhotoRotation.scale,
                    angle       : this.props.slidePhotoRotation.rotation}]}) : null

            ];

        let that = this;

        class Controller extends MapController {

            constructor(props) {
                super(props);
            }

            handleEvent(event) {

                super.handleEvent(event);

                if ((event.type === 'panend' || event.type === 'wheel' )) {
                    const slide = that.props.card.slides[that.props.slideIndex];
                   that.debounce(() => that.props.updateSlide({variables : {slide_id : slide.id,  camera : this.controllerState._viewportProps}}));
                }
            }
        }

        let controller = Controller;

        return (
            <div>

                <div className="Deck" >

                    <div className="poster">
                        <DeckGL

                            viewState={this.props.viewState}
                            //controller={true}
                            controller={{type: controller, inertia: true, touchRotate : true, dragRotate : true, scrollZoom: true, doubleClickZoom : false}}
                            _animate={false}
                            height="100%"
                            width="100%"
                            effects={[lightingEffect]}
                            ref={deck => {
                                this.deckGL = deck;
                            }}

                            onViewStateChange={({viewId, viewState}) => {
                                    this.props.setViewState(viewState);
                            }

                            }

                            layers={layers}/>
                    </div>

                </div>

            </div>
        );
    }
}
