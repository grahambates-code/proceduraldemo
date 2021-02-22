import React, {Component, useLayoutEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import * as portals from "react-reverse-portal";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CardSaver from "./../../Saver";

import Label from './Label'

import './index.less';
import Deck from "./Deck";
import CarouselExample from "../../Carousel";

gsap.registerPlugin(ScrollTrigger);

export default class extends Component {

    constructor(props) {
        super(props);

        this.state = {
            slideIndex :0,
            viewState : props.card.slides.length ? props.card.slides[0]?.camera : {longitude : 0, latitude : 50, zoom : 4 },
            currentPhoto : props.card.slides[0]?.data?.media
        }

    }

    render() {

        let {currentPhoto, slideIndex, viewState} = this.state;

        let setCurrentPhoto = (p) => this.setState({currentPhoto : p});
        let setSlideIndex   = (p) => this.setState({slideIndex   : p});
        let setViewState    = (p) => this.setState({viewState    : p});

        let props = this.props;

        return <div className="sketch-card">
                    <div>

                        <CardSaver refetch={props.refetch}>

                            {
                                (updateSlide, updateMap, updateTable, updateAnnotation, updateLandscape, updateSlideMedia, loading, error) => {
                                    return <div>
                                        <Label card={props.card}/>
                                        {/*<code>{JSON.stringify(currentPhoto)}</code>*/}
                                        <Deck setCurrentPhoto={setCurrentPhoto} currentPhoto={currentPhoto} slideIndex={slideIndex} refetch={props.refetch} viewState={viewState} setViewState={setViewState} width={props.width} updateSlide={updateSlide} updateSlideMedia={updateSlideMedia} updateMap={updateMap} updateAnnotation={updateAnnotation} trip={props.trip} card={props.card} />
                                        {/*<CarouselExample setCurrentPhoto={setCurrentPhoto} slideIndex={slideIndex} setSlideIndex={setSlideIndex} viewState={viewState}  setViewState={setViewState} refetch={props.refetch} card={props.card}/>*/}
                                    </div>
                                }
                            }
                        </CardSaver>


                    </div>
                </div>
    }
}

