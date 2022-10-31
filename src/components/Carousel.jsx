import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCarousel } from '../slices/carouselSlice'
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'

const Carousel = () => {
    const dispatch = useDispatch();
    const {data: slides, success: carouselSuccess} = useSelector(state => state.carousel)
    let autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;

    const [currentSlide, setCurrentSlide] = useState(0)
    const slideLength = slides.length;

    const nextSlide = () => {
        setCurrentSlide(currentSlide===slideLength-1 ? 0 : currentSlide+1)
    }

    const prevSlide = () => {
        setCurrentSlide(currentSlide===0 ? slideLength-1 : currentSlide-1)
    }

    function auto() {
        slideInterval = setInterval(nextSlide, intervalTime)
    }
    
    useEffect(() => {
        setCurrentSlide(0)
        if (!carouselSuccess){
            dispatch(fetchCarousel())
        }
    }, [dispatch, carouselSuccess])

    useEffect(() => {
        if (autoScroll) {
            auto();
        }
        return () => clearInterval(slideInterval)
    }, [currentSlide])
    return (
        <div className='carouselBg py-2 md:py-20 relative z-10'>
            <div className='container mx-auto relative'>
                <button className='absolute p-2 group left-0 top-5 md:inset-y-0' onClick={prevSlide}><FaAngleLeft className='text-white group-hover:text-primary text-5xl'/></button>
                <button className='absolute p-2 group top-5 md:inset-y-0 right-0' onClick={nextSlide}><FaAngleRight className='text-white group-hover:text-primary text-5xl'/></button>
                {slides.map((slide, index) => (
                    <div className={index === currentSlide ? "grid grid-cols-8" : "hidden"} key={index}>
                        <div className='col-span-8 md:col-span-5 md:order-last p-2 md:p-3 md:px-20'>
                            <img src={slide.imageUrl} alt={slide.caption} className='w-full h-[350px] md:h-[600px] object-contain rounded-md bg-transparent'/>
                        </div>
                        <div className='col-span-8 md:col-span-3 text-white p-2 md:pt-48 md:pl-20' initial={{opacity: 0}} animate={{opacity: 1, transition:{duration: 0.5}}}>
                            <p className='bg-gray-600/75 p-3 rounded-md'>{slide.caption}</p>
                            <div><a href={slide.linkTo} target="_blank" rel='noreferrer'><button className='bg-primary rounded-lg px-5 py-3 mt-3 md:mt-8 hover:bg-primaryDark'>See More...</button></a></div>
                        </div>
                    </div>
                ))}
                <div className='flex justify-center'>
                    {slides.map((slide, index) => (
                        <div className={index===currentSlide ? "h-1 bg-primary w-3 md:w-5 lg:w-10 mx-2 rounded-md" : "h-1 bg-white w-3 md:w-5 lg:w-10 mx-2 rounded-md"} key={index}></div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Carousel