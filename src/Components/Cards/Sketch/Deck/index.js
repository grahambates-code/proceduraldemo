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
import { EditableGeoJsonLayer, TransformMode, RotateMode } from "nebula.gl";

const emptyFeatureCollection = {
    "type": "FeatureCollection",
    "features": [

    ]
}

export default class extends Component {

    constructor(props) {
        super(props);

        this.search  = _.debounce(e => e(), 300);
        this.search2 = _.debounce(e => e(), 300);

        // this.defaultViewstate = {map : props.card.camera || {longitude : 1, latitude : 1, zoom : 1}};

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
                id: 'geojson-layer',
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

            this.props.currentPhoto ? (new EditableGeoJsonLayer({
                id: 'mask-geojson-layer-linestring' ,
                data: this.props.currentPhoto,
                opacity : 1,
                mode: TransformMode,
                selectedFeatureIndexes: [0],

                _subLayerProps: {
                    geojson: {
                        getFillColor: (feature) => [255,0,255,255],
                        getLineColor: (feature) => [255,255,255,0],
                    }
                },

                onEdit: (event) => {
                    const { updatedData } = event;
                    this.props.setCurrentPhoto(updatedData);
                    const slide = that.props.card.slides[that.props.slideIndex];
                    that.search2(() => this.props.updateSlide({variables : {slide_id : slide.id, camera : slide.camera, data : {...slide.data, geojson : updatedData} }}));
                }
            })) : null,


            ];

        if (true || this.props.card.annotations) {

           // let x = this.props.card.annotations.features[0].geometry.coordinates[0];
           // let y = this.props.card.annotations.features[1].geometry.coordinates[0];

            //let xx =
            //;

           // console.log({type : 'FeatureCollection', features : [this.props.currentPhoto]});


            // layers= layers.concat(slide.media.map(m =>
            //
            //     new EditableGeoJsonLayer({
            //         id: 'mask-geojson-layer-linestring' + m.id,
            //         xdata: {type : 'FeatureCollection', features : [this.props.currentPhoto]},
            //         data: this.props.currentPhoto,
            //         opacity : 1,
            //         mode: TransformMode,
            //         selectedFeatureIndexes: [0],
            //
            //         _subLayerProps: {
            //             geojson: {
            //                 getFillColor: (feature) => [255,255,255,0],
            //                 getLineColor: (feature) => [255,255,255,0],
            //             }
            //         },
            //
            //         onEdit: (event) => {
            //             const { editType, updatedData } = event;
            //            // this.setState({data : updatedData});
            //             this.props.setCurrentPhoto(updatedData);
            //             //alert(this.props.updateAnnotation);
            //             //console.log('onEdit');
            //           //  that.search2(() => this.props.updateAnnotation({variables : {card_id : that.props.card.id, annotations : updatedData }}));
            //         }
            //     }),
            //
            //     // new BitmapLayer({
            //     //     opacity : 1,
            //     //     id: 'mask-arrow-layer',
            //     //     bounds: [x[0], x[3], x[2], x[1]],
            //     //     image : '/textures/postit.png',
            //     //     pickable : true,
            //     //     parameters: {
            //     //         depthTest: false
            //     //     },
            //     //     onClick: ({bitmap, layer}) => {
            //     //         console.log('aasd');
            //     //         if (bitmap) {
            //     //             const pixelColor = readPixelsToArray(layer.props.image, {
            //     //                 sourceX: bitmap.pixel[0],
            //     //                 sourceY: bitmap.pixel[1],
            //     //                 sourceWidth: 1,
            //     //                 sourceHeight: 1
            //     //             })
            //     //             console.log('Color at picked pixel:', pixelColor)
            //     //         }
            //     //     },
            //     // }),
            //
            //     // new TapeLayer({
            //     //     bounds: [y[0], y[3], y[2], y[1]],
            //     // })
            // ));

        }


      //  console.log((this.state.myBox));
        let that = this;

        class Controller extends MapController {

            constructor(props) {
                super(props);
            }

            handleEvent(event) {

                super.handleEvent(event);

                if ((event.type === 'panend' || event.type === 'wheel' )) {
                    const slide = that.props.card.slides[that.props.slideIndex];
                    that.search(() => that.props.updateSlide({variables : {slide_id : slide.id, data : slide.data, camera : this.controllerState._viewportProps}}));
                }
            }
        }

        let controller = Controller;

        //return <div>test of expensive component</div>

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

                            ref={deck => {
                                this.deckGL = deck;
                            }}

                            onViewStateChange={({viewId, viewState}) => {
                                    this.props.setViewState(viewState);
                            }

                            }

                            layers={layers}/>
                    </div>

                    {/*<DeckGL*/}

                    {/*    viewState={this.props.viewState}*/}
                    {/*    controller={{type: controller, touchRotate : false, dragRotate : false, scrollZoom: true, doubleClickZoom : false}}*/}
                    {/*    _animate={false}*/}
                    {/*    height="100%"*/}
                    {/*    width="100%"*/}

                    {/*    ref={deck => {*/}
                    {/*        this.deckGL = deck;*/}
                    {/*    }}*/}

                    {/*    onViewStateChange={({viewId, viewState}) => {*/}
                    {/*            this.props.setViewState(viewState);*/}
                    {/*    }*/}

                    {/*    }*/}

                    {/*    layers={layers}/>*/}

                </div>


                {/*<Landscape updateLandscape={this.props.updateLandscape} card={this.props.card}/>*/}
            </div>
        );
    }
}
