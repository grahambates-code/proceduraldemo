import React, { useLayoutEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import * as portals from "react-reverse-portal";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CardSaver from "./../../Saver";

import './index.less';
import Deck from "../../Deck";
import CarouselExample from "../../Carousel";

gsap.registerPlugin(ScrollTrigger);

function RenderingCard(props) {

    const [slideIndex, setSlideIndex]   = useState(0);
    const [viewState,  setViewState]    = useState(props.card.slides[0].camera);

    return (
        <div className="sketch-card">
            <div>

                <CardSaver refetch={props.refetch}>

                    {
                        (updateSlide, updateMap, updateTable, updateAnnotation, updateLandscape, loading, error) => {
                            return <div>
                                <Deck slideIndex={slideIndex} refetch={props.refetch} viewState={viewState} setViewState={setViewState} width={props.width} updateSlide={updateSlide} updateMap={updateMap} updateAnnotation={updateAnnotation} trip={props.trip} card={props.card} />
                                <CarouselExample setSlideIndex={setSlideIndex} setViewState={setViewState} refetch={props.refetch} card={props.card}/>
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
