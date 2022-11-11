import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarousel } from '../../slices/carouselSlice';
import { FaEdit } from 'react-icons/fa';
import AdminNavbar from '../../components/AdminNavbar';


const ListAllCarousels = () => {
    const dispatch = useDispatch();
    const {data: slides, success: carouselSuccess} = useSelector(state => state.carousel.getCarousel)

    useEffect(() => {
        if (!carouselSuccess){
            dispatch(fetchCarousel())
        }
    }, [dispatch, carouselSuccess])

    return (
        <div>
            <div className='container mx-auto px-5 py-10 md:py-20'>
                <AdminNavbar/>
                <div className='border-l-8 border-primary px-5 mt-5'>
                    <h2 className='text-primary font-bold text-3xl'>All <span className='text-primaryDark'>Slides</span></h2>
                    <p className='text-gray-600 text-sm font-medium mt-2'>Add | Update | Delete</p>
                </div>

                <div className="antialiased bg-gray-100 text-gray-600 px-5">
                    <div className="flex flex-col justify-center">
                        <div className="w-full bg-white">
                            <div className="overflow-x-auto p-3">
                                <table className="table-auto w-full">
                                    <thead className="text-xs font-semibold uppercase text-gray-800 bg-gray-300">
                                        <tr>
                                            <th className="p-2">
                                                <div className="font-semibold text-left">Image</div>
                                            </th>
                                            <th className="p-2">
                                                <div className="font-semibold text-left">Caption</div>
                                            </th>
                                            <th className="p-2">
                                                <div className="font-semibold text-left">Status</div>
                                            </th>
                                            <th className="p-2">
                                                <div className="font-semibold text-left">LinkTo</div>
                                            </th>
                                            <th className="p-2">
                                                <div className="font-semibold text-left">Uploaded Datetime</div>
                                            </th>
                                            <th></th>
                                        </tr>
                                    </thead>

                                    <tbody className="text-sm divide-y divide-gray-400">
                                        {slides.map((slide) => (
                                        <tr key={slide.id}>
                                            <td className="p-2">
                                                <img src={slide.imageUrl} alt={slide.caption} className='h-[50px] w-[50px] object-cover'/>
                                            </td>
                                            <td className="p-2">
                                                <div className="font-medium">
                                                    {slide.caption}
                                                </div>
                                            </td>
                                            <td className="p-2">
                                                <input type="checkbox" className="w-5 h-5" checked={slide.is_active} readOnly/>
                                            </td>
                                            <td className="p-2">
                                                <div className="text-left font-medium">
                                                    {slide.linkTo}
                                                </div>
                                            </td>
                                            <td className="p-2">
                                                <div className="font-medium">
                                                    {slide.datetime}
                                                </div>
                                            </td>
                                            <td className="p-2">
                                                <div className="flex justify-center">
                                                    <button>
                                                        <FaEdit className='text-2xl text-primary hover:text-primaryDark'/>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListAllCarousels