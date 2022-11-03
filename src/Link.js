import { useState } from 'react';
import { mean } from './mean';
import imageTwo from "./arrow11.png"
import imageThree from "./arrow22.png"

function Link() {

const [slide, setSlide] = useState(0);
const {image} = mean[slide];
// console.log(data[slide]);


const previousSlide = () => {
    setSlide((slide) => {
        slide --;
            if (slide < 0) {
            return mean.length-1;
        }
    return slide;
})
}

const nextSlide = () => {
    setSlide((slide) => {
        slide ++;
    if (slide > mean.length-1) {
        slide = 0;
    }
    return slide;
})
}

    return (
        <div className='slides'>
                <button className='btnSlide' onClick={previousSlide}><img className='nextPrevious' src={imageThree} alt='' width='40px'/></button>
                <img className='imgSlide' src={image} alt=""/>
                <button className='btnSlide' onClick={nextSlide}><img className='nextPrevious' src={imageTwo} alt='' width='40px'/></button>
        </div>
  );
}

export default Link;