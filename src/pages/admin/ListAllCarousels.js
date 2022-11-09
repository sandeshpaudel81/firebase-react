import React from 'react'

const ListAllCarousels = () => {
  return (
    <div>
        <div className='container mx-auto px-5 py-10 md:py-20'>
            <div className='border-l-8 border-primary px-5'>
                <h2 className='text-primary font-bold text-3xl'>All <span className='text-primaryDark'>Slides</span></h2>
                <p className='text-gray-600 text-sm font-medium mt-2'>Add | Update | Delete</p>
            </div>

            <div class="antialiased bg-gray-100 text-gray-600 h-screen px-4" x-data="app">
                <div class="flex flex-col justify-center h-full">
                    <div class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                        <div class="overflow-x-auto p-3">
                            <table class="table-auto w-full">
                                <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                    <tr>
                                        <th></th>
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
                                    </tr>
                                </thead>

                                <tbody class="text-sm divide-y divide-gray-100">
                                    <tr>
                                        <td class="p-2">
                                            <input type="checkbox" class="w-5 h-5" value="id-1"/>
                                        </td>
                                        <td class="p-2">
                                            <div class="font-medium text-gray-800">
                                                Samsung Galaxy Note 4
                                            </div>
                                        </td>
                                        <td class="p-2">
                                            <div class="text-left">1</div>
                                        </td>
                                        <td class="p-2">
                                            <div class="text-left font-medium text-green-500">
                                                RM 2,890.66
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
                                </tbody>
                            </table>
                        </div>

                        <div class="flex justify-end font-bold space-x-4 text-2xl border-t border-gray-100 px-5 py-4">
                            <div>Total</div>
                            <div class="text-blue-600">RM <span x-text="total.toFixed(2)"></span></div>
                        </div>

                        <div class="flex justify-end">
                            <input type="hidden" class="border border-black bg-gray-50" x-model="selected" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ListAllCarousels