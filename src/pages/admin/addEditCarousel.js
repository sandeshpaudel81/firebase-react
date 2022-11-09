import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaChevronLeft } from 'react-icons/fa'
import UploadProgress from '../../components/UploadProgress'
import { addCarouselReset, addNewCarousel, uploadCarouselImage, uploadCarouselImageReset } from '../../slices/carouselSlice'


const AddEditCarousel = () => {
    const [image, setImage] = useState("")
    const [caption, setCaption] =  useState("Caption of the slide")
    const [isActive, setIsActive] =  useState(true)
    const [linkTo, setLinkTo] =  useState("http://localhost:3000/")
    const [imageUrl, setImageUrl] = useState("Url of the image")
    const [progress, setProgress] = useState(0)

    const dispatch = useDispatch()

    const {carouselImage:uploadedImageUrl, progress:uploadProgress, success:uploadSuccess} = useSelector(state => state.carousel.uploadCarouselImage);
    const {success: addCarouselSuccess} = useSelector(state => state.carousel.addCarousel)

    const uploadImageHandler = () => {
        if (image!==null){
            dispatch(uploadCarouselImage(image));
        }
    }

    const addCarouselHandler = () => {
        dispatch(addNewCarousel({
            caption: caption,
            imageUrl: imageUrl,
            is_active: isActive,
            linkTo: linkTo
        }))
    }

    useEffect(() => {
        if (addCarouselSuccess){
            dispatch(uploadCarouselImageReset())
            dispatch(addCarouselReset())
        }
    }, [dispatch, addCarouselSuccess])

    useEffect(() => {
        setProgress(uploadProgress)
    }, [uploadProgress])

    useEffect(() => {
        if(uploadSuccess){
            setImageUrl(uploadedImageUrl)
        }
    }, [uploadSuccess, uploadedImageUrl])

    return (
        <div>
            <div className='container mx-auto px-5 py-10 md:py-20'>
                <div className='border-l-8 border-primary px-5'>
                    <h2 className='text-primary font-bold text-3xl'>Add <span className='text-primaryDark'>Slides</span></h2>
                    <p className='uppercase text-gray-600 text-sm font-medium mt-2'>Appear on homescreen</p>
                </div>
                <div className='mt-5 md:mt-10'>
                    <div className='w-1/2'>
                        <div className='flex flex-col mb-5'>
                            <p className='uppercase font-semibold'>Image</p>
                            {(progress > 0) && (
                                <UploadProgress progress={progress}/>
                            )}
                            <input type='file' accept='image/*' onChange={(e) => setImage(e.target.files[0])}></input>
                            <button className='uppercase bg-primaryD w-1/5 text-white mt-3 rounded-md hover:bg-primaryDark' onClick={uploadImageHandler}>Upload</button>
                        </div>
                    </div>
                    <form className='w-1/2'>
                        <div className='flex flex-col mb-5'>
                            <label className='uppercase font-semibold'>Caption of the slide</label>
                            <input type='text' className='bg-gray-300 p-2 focus:border-primary focus:bg-gray-400 rounded-lg' name='carousel_caption' value={caption} onChange={(e) => setCaption(e.target.value)}></input>
                        </div>
                        <div className='flex mb-5'>
                            <label className='uppercase font-semibold mr-5'>Slide Status</label>
                            <input type='checkbox' className='h-5 w-5 mr-5' name='carousel_is_active' checked={isActive} onChange={(e) => setIsActive(e.target.checked)}></input>
                            <p>Active</p>
                        </div>
                        <div className='flex flex-col mb-5'>
                            <label className='uppercase font-semibold'>Link to follow</label>
                            <input type='text' className='bg-gray-300 p-2 focus:border-primary focus:bg-gray-400 rounded-lg' name='carousel_linkTo' value={linkTo} onChange={(e) => setLinkTo(e.target.value)}></input>
                        </div>
                        <div>
                            {uploadSuccess ? (
                                <img src={imageUrl} alt='slide' className='w-[200px] h-[150px] object-cover object-center'/>
                            ) : <></> }
                        </div>
                        <div className='flex flex-col mb-5'>
                            <label className='uppercase font-semibold'>Image URL</label>
                            <input type='text' className='bg-slate-400 text-white p-2 focus:border-primary focus:bg-gray-400 rounded-lg' name='carousel_imageUrl' value={imageUrl} disabled></input>
                        </div>
                        <div>
                            <input type='submit' className='bg-primary px-8 py-3 text-white rounded-lg hover:bg-primaryDark cursor-pointer' onClick={addCarouselHandler}></input>
                        </div>
                    </form>
                </div>
                <div className='flex justify-start mt-5'>
                    <Link to="#" className='uppercase text-primary hover:text-primaryDark'>
                        <p className='flex items-center font-medium'><FaChevronLeft className='mr-3'/>All Slides</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AddEditCarousel