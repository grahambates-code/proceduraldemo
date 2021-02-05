import React, {useEffect, useMemo} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useSpringCarousel } from 'react-spring-carousel-js';

import CarouselActions from './CarouselActions';
import Frame from './Slide/Frame'
import './index.less';

function Carousel({ card,refetch, className, style }) {

    const { carouselFragment, slideToPrevItem, slideToNextItem } = useSpringCarousel({
        withLoop: false,
        items: card.slides.map((slide, index) => ({
            id: index,
            renderItem: <Frame card={card} slide={slide} refetch={refetch}></Frame>
        }))
    });

    //if slides increased, move along
    useEffect(() => {
        slideToNextItem();
    }, [card.slides]);

    return (
        <div
            className={classNames(
                'carousel',
                className,
            )}
            style={style}
        >

            <div className="carousel-wrapper">
                <div style={{ flex: 1 }}>
                    {carouselFragment}
                </div>
            </div>

        </div>
    );
}

Carousel.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node
};

Carousel.ItemActions = CarouselActions;

export default Carousel;
