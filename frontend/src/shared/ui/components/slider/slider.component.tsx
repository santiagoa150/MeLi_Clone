import type { JSX, ReactNode } from 'react';
import Carousel from 'react-multi-carousel';
import './slider.component.css';

/**
 * SliderComponent is a functional component that wraps the react-slick Slider component.
 */
export default function SliderComponent({ children }: { children: ReactNode }): JSX.Element {
    return (
        <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className="w-[75%] h-[400px]"
            containerClass=""
            dotListClass="dot_button_container"
            draggable
            focusOnSelect={false}
            infinite
            itemClass="flex items-center justify-center"
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
                desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024,
                    },
                    items: 1,
                },
                mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0,
                    },
                    items: 1,
                },
                tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464,
                    },
                    items: 1,
                },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots
            removeArrowOnDeviceType={['mobile']}
            sliderClass=""
            slidesToSlide={1}
            swipeable
        >
            {children}
        </Carousel>
    );
}
