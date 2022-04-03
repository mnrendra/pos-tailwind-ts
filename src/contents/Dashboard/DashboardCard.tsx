import React from 'react'

import stockInUnits from './stockInUnits'

const DashboardCard = (): JSX.Element => {
  return (
    <div className='w-full max-w-7xl h-auto max-h-full mx-auto py-6 sm:px-6 lg:px-8'>
      <div className='w-full h-auto max-h-full mx-auto'>
        <div className='w-full h-auto max-h-full overflow-auto shadow sm:rounded-lg bg-white'>
          {/* */}
          <table className='table-auto w-full h-auto max-h-full'>
            <thead className='flex flex-col w-full px-0 py-2 bg-white border-b border-gray-200'>
              <tr className='flex w-full px-1'>
                <th className='flex w-12 px-2 py-3 text-md font-medium text-gray-600 text-center'>#</th>
                <th className='flex w-full px-2 py-3 text-md font-medium text-gray-600 text-left'>Item</th>
                <th className='flex w-24 px-2 py-3 text-md font-medium text-gray-600 text-center'>Prev</th>
                <th className='flex w-24 px-2 py-3 text-md font-medium text-gray-600 text-center'>New</th>
                <th className='flex w-24 px-2 py-3 text-md font-medium text-gray-600 text-center'>Sold</th>
                <th className='flex w-24 px-2 py-3 text-md font-medium text-gray-600 text-center'>Curr</th>
              </tr>
            </thead>
            <tbody className='flex flex-col w-full h-auto max-h-96 overflow-auto'>
              {stockInUnits.map((stock, idx) => (
                <tr key={stock.id} className={idx % 2 === 0 ? 'bg-white-50 flex w-full px-1' : 'bg-gray-50 w-full flex px-1'}>
                  <td className='flex w-12 px-2 py-3 text-md font-regular text-gray-600 text-center'>{idx + 1}</td>
                  <td className='flex w-full px-2 py-3 text-md font-regular text-gray-600 text-left'>{stock.name}</td>
                  <td className='flex w-24 px-2 py-3 text-md font-regular text-gray-600 text-center'>{stock.prev}</td>
                  <td className='flex w-24 px-2 py-3 text-md font-regular text-gray-600 text-center'>{stock.new}</td>
                  <td className='flex w-24 px-2 py-3 text-md font-regular text-gray-600 text-center'>{stock.sold}</td>
                  <td className='flex w-24 px-2 py-3 text-md font-medium text-gray-600 text-center'>{stock.curr}</td>
                </tr>
              ))}
            </tbody>
            <tfoot className='flex w-full px-0 py-2 bg-white border-t border-gray-200'>
              <tr className='flex w-full px-1'>
                <th className='flex w-12 px-2 py-3 text-md font-regular text-gray-600 text-center'>{}</th>
                <th className='flex w-full px-2 py-3 text-md font-regular text-gray-600 text-left'>Total</th>
                <th className='flex w-24 px-2 py-3 text-md font-regular text-gray-600 text-center'>30</th>
                <th className='flex w-24 px-2 py-3 text-md font-regular text-gray-600 text-center'>9</th>
                <th className='flex w-24 px-2 py-3 text-md font-regular text-gray-600 text-center'>15</th>
                <th className='flex w-24 px-2 py-3 text-md font-regular text-gray-600 text-center'>24</th>
              </tr>
            </tfoot>
          </table>
          {/* */}
        </div>
      </div>
    </div>
  )
}

export default DashboardCard
