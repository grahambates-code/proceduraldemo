import React, {Component, useLayoutEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import * as portals from "react-reverse-portal";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CardSaver from "./../../Saver";

import Label from './Label'

import './index.less';
import Deck from "./Deck";
import Slides from "../../Carousel";

gsap.registerPlugin(ScrollTrigger);

export default class extends Component {

    constructor(props) {
        super(props);

        this.state = {
            slideIndex :0,
            slidePhotoRotation : {rotation : 0, scale : 100, position :  {
                    "type": "FeatureCollection",
                    "features": [
                        {
                            "type": "Feature",
                            "properties": {},
                            "geometry": {
                                "type": "Point",
                                "coordinates": [
                                    -3.061065673828125,
                                    54.482804559582554
                                ]
                            }
                        }
                    ]
                }},
            viewState : props.card.slides.length ? props.card.slides[0]?.camera : {longitude : 0, latitude : 50, zoom : 4 },
            currentPhoto : props.card.slides[0]?.data?.geojson
        }

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {slideIndex} = this.state;

        if (JSON.stringify(prevProps.card.slides[slideIndex]?.data) !== JSON.stringify(this.props.card.slides[slideIndex]?.data)) {
            this.setState({ currentPhoto : this.props.card.slides[slideIndex]?.data?.geojson});
        }
    }

    render() {

        let {currentPhoto, slideIndex, viewState, slidePhotoRotation} = this.state;
        let {client} = this.props;

        let setCurrentPhoto = (p) => this.setState({currentPhoto : p});
        let setSlideIndex   = (p) => this.setState({slideIndex   : p});
        let setViewState            = (p) => this.setState({viewState    : p});
        let setSlidePhotoRotation   = (p) => this.setState({slidePhotoRotation    : p});

        let props = this.props;

        console.log(slidePhotoRotation);

        return <div className="sketch-card">
                    <div>

                        <CardSaver refetch={props.refetch}>

                            {
                                (updateSlide, updateMap, updateTable, updateAnnotation, updateLandscape, updateSlideMedia, loading, error) => {
                                    return <div>

                                        <Label card={props.card}/>

                                        <Deck slidePhotoRotation={slidePhotoRotation} setSlidePhotoRotation={setSlidePhotoRotation} client={client} setCurrentPhoto={setCurrentPhoto} currentPhoto={currentPhoto} slideIndex={slideIndex} refetch={props.refetch} viewState={viewState} setViewState={setViewState} width={props.width} updateSlide={updateSlide} updateSlideMedia={updateSlideMedia} updateMap={updateMap} updateAnnotation={updateAnnotation} trip={props.trip} card={props.card} />

                                        <Slides slidePhotoRotation={slidePhotoRotation} setSlidePhotoRotation={setSlidePhotoRotation} setCurrentPhoto={setCurrentPhoto} slideIndex={slideIndex} setSlideIndex={setSlideIndex} viewState={viewState}  setViewState={setViewState} refetch={props.refetch} card={props.card}/>

                                    </div>
                                }
                            }
                        </CardSaver>


                    </div>
                </div>
    }
}

