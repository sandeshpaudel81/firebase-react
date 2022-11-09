import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarousel } from '../../slices/carouselSlice';

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
                <div className='border-l-8 border-primary px-5'>
                    <h2 className='text-primary font-bold text-3xl'>All <span className='text-primaryDark'>Slides</span></h2>
                    <p className='text-gray-600 text-sm font-medium mt-2'>Add | Update | Delete</p>
                </div>

                <div class="antialiased bg-gray-100 text-gray-600 px-4" x-data="app">
                    <div class="flex flex-col justify-center">
                        <div class="w-full bg-white">
                            <div class="overflow-x-auto p-3">
                                <table class="table-auto w-full">
                                    <thead class="text-xs font-semibold uppercase text-gray-800 bg-gray-300">
                                        <tr>
                                            <th class="p-2">
                                                <div class="font-semibold text-left">Image</div>
                                            </th>
                                            <th class="p-2">
                                                <div class="font-semibold text-left">Caption</div>
                                            </th>
                                            <th class="p-2">
                                                <div class="font-semibold text-left">Status</div>
                                            </th>
                                            <th class="p-2">
                                                <div class="font-semibold text-left">LinkTo</div>
                                            </th>
                                            <th class="p-2">
                                                <div class="font-semibold text-center">Uploaded Datetime</div>
                                            </th>
                                            <th></th>
                                        </tr>
                                    </thead>

                                    <tbody class="text-sm divide-y divide-gray-400">
                                        {slides.map((slide) => (
                                        <tr>
                                            <td class="p-2">
                                                <img src={slide.imageUrl} alt={slide.caption} className='h-[150px] object-cover'/>
                                            </td>
                                            <td class="p-2">
                                                <div class="font-medium text-gray-800">
                                                    {slide.caption}
                                                </div>
                                            </td>
                                            <td class="p-2">
                                                <input type="checkbox" class="w-5 h-5" checked={slide.is_active}/>
                                            </td>
                                            <td class="p-2">
                                                <div class="text-left font-medium text-green-500">
                                                    {slide.linkTo}
                                                </div>
                                            </td>
                                            <td class="p-2">
                                                <div class="font-medium text-gray-800">
                                                    {/* {slide.datetime} */}
                                                </div>
                                            </td>
                                            <td class="p-2">
                                                <div class="flex justify-center">
                                                    <button>
                                                        delete
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