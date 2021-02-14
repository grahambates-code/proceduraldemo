import React, { useLayoutEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import * as portals from "react-reverse-portal";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CardSaver from "./../../Saver";

import Label from './Label'

import './index.less';
import Deck from "../../Deck";
import CarouselExample from "../../Carousel";

gsap.registerPlugin(ScrollTrigger);

function RenderingCard(props) {

    const [slideIndex, setSlideIndex]   = useState(0);
    const [viewState,  setViewState]    = useState(props.card.slides.length ? props.card.slides[0]?.camera : {longitude : 0, latitude : 50, zoom : 4 });


    return (
        <div className="sketch-card">
            <div>

                <CardSaver refetch={props.refetch}>

                    {
                        (updateSlide, updateMap, updateTable, updateAnnotation, updateLandscape, loading, error) => {
                            return <div>
                                <Label/>

                                <Deck slideIndex={slideIndex} refetch={props.refetch} viewState={viewState} setViewState={setViewState} width={props.width} updateSlide={updateSlide} updateMap={updateMap} updateAnnotation={updateAnnotation} trip={props.trip} card={props.card} />
                                <CarouselExample slideIndex={slideIndex} setSlideIndex={setSlideIndex} viewState={viewState}  setViewState={setViewState} refetch={props.refetch} card={props.card}/>
                            </div>
                        }
                    }
                </CardSaver>


            </div>
        </div>
    );
}

RenderingCard.propTypes = {
    card: PropTypes.any,
};

export default RenderingCard;
