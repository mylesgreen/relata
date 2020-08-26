import React, {useState, useEffect} from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://dummyimage.com/1400x695/ffffff/ffffff.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://dummyimage.com/1400x695/ffffff/ffffff.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'https://dummyimage.com/1400x695/ffffff/ffffff.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

const QuotesCarousel = () => {

  
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (

        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
        
        <img src={item.src} alt={item.altText} style={{minWidth: '100%', opacity: '.1'}}/>
        

          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>

    );
  });
  

  return (
    <React.Fragment>
    <div style={{backgroundImage: 'url("https://dummyimage.com/1400x695/000000/ffffff.jpg")'}}>

    <Carousel
    activeIndex={activeIndex}
    next={next}
    previous={previous}
    // className="carousel-fade"
  >
    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
    {slides}
    <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
    <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
  </Carousel>
  </div>


    </React.Fragment>
  );
}

export default QuotesCarousel;