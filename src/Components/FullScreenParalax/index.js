import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './index.css';

gsap.registerPlugin(ScrollTrigger);

function FullScreenParallax(props) {
    const ref = useRef(null);

    useEffect(() => {
        const rootElement = ref.current;
        const borderElement = rootElement.querySelector('.full-screen-parallax-border');

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: rootElement,
                start: "top top",
                end: "bottom top",
                scrub: true,
                onEnter: (self) => {
                    gsap.to(
                        borderElement,
                        { borderWidth: 0 },
                    );
                    
                    if (props.onEnter) {
                        props.onEnter(self);
                    }
                },
                onEnterBack: (self) => {
                    if (props.onEnter) {
                        props.onEnter(self);
                    }
                },
                onLeave: (self) => {
                    if (props.onLeave) {
                        props.onLeave(self);
                    }
                },
                onLeaveBack: (self) => {
                    if (props.onLeave) {
                        props.onLeave(self);
                    }
                },
                onToggle: (self) => {
                    if (self.progress === 0 && self.direction === -1) {
                        gsap.to(
                            borderElement,
                            { borderWidth: 150 },
                        );
                    }
                },
            }
        });

        gsap.utils.toArray(rootElement.querySelectorAll('.full-screen-parallax-text-wrapper')).forEach((el, i) => {
            const textEl = el.querySelector('.full-screen-parallax-text');
            const tl = gsap.timeline();
            
            tl.fromTo(
                textEl,
                { y: 0, opacity: 0 },
                { y: -120, opacity: 1 },
            );
            tl.to(textEl, { opacity: 0, y: -240 });
            
            tl.eventCallback('onStart', () => {
                if (props.onEnterItem) {
                    props.onEnterItem(props.data[i]);
                }
            });

            timeline.add(tl);
        });

        return () => {
            timeline.kill();
        }
    }, [props.data]);

    return (
        <div className="full-screen-parallax-root" ref={ref}>
            <div className="full-screen-parallax">
                <div className="full-screen-parallax-media-wrapper">
                    <div className="full-screen-parallax-media">
                        {props.mediaComponent}
                    </div>
                    {props.data.map((d, i) => (
                        <div className="full-screen-parallax-text-wrapper" key={i}>
                            <div className="full-screen-parallax-text">
                                {props.renderItem(d)}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="full-screen-parallax-border" />
            </div>
        </div>
    );
}

FullScreenParallax.props = {
    mediaComponent: PropTypes.node.isRequired,
    data: PropTypes.array.isRequired,
    renderItem: PropTypes.func.isRequired,
    onEnter: PropTypes.func,
    onLeave: PropTypes.func,
    onEnterItem: PropTypes.func,
    onLeaveItem: PropTypes.func,
};

export default FullScreenParallax;
