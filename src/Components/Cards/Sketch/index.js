import React, { useLayoutEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import * as portals from "react-reverse-portal";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CardSaver from "./../../Saver";

import './index.less';
import Deck from "../../Deck";

gsap.registerPlugin(ScrollTrigger);

function RenderingCard(props) {

    const [inViewport, setInViewport]   = useState(false);
    const [viewState, setViewState]     = useState(props.card.camera);

    const ref = useRef();

    useLayoutEffect(() => {
        const scroller =  ScrollTrigger.create({
            trigger: ref.current,
            start: () => 'top bottom',
            end: () => 'bottom top',
            onEnter: () => {
                setInViewport(true);
            },
            onEnterBack: () => {
                setInViewport(true);
            },
            onLeave: () => {
                setInViewport(false);
            },
            onLeaveBack: () => {
                setInViewport(false);
            },
            scrub: 1
        });

        return () => {
            scroller.kill();
        }
    });

    return (
        <div className="sketch-card" ref={ref}>
            <div>

                {false && inViewport ? <portals.OutPortal viewState={viewState} setViewState={setViewState} node={props.portalNode2} updateLandscape={()=> {}} updateMap={()=>{}} updateAnnotation={()=>{}} trip={props.trip} card={props.card}  /> : null}

                <CardSaver refetch={props.refetch}>

                    {
                        (updateMap, updateTable, updateAnnotation, updateLandscape, loading, error) => {
                            return <div>
                                <Deck refetch={props.refetch} viewState={viewState} setViewState={setViewState} width={props.width} updateLandscape={updateLandscape} updateMap={updateMap} updateAnnotation={updateAnnotation} trip={props.trip} card={props.card} />
                                {false && inViewport ? <portals.OutPortal viewState={viewState} setViewState={setViewState} node={props.portalNode2} updateLandscape={updateLandscape} updateMap={updateMap} updateAnnotation={updateAnnotation} trip={props.trip} card={props.card}  /> : null}
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
