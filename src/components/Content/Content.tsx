import React from 'react'

interface Props {
  children?: JSX.Element
}

const Content = ({ children }: Props): JSX.Element => {
  return (
    <main className='flex w-full h-full bg-gray-100'>
      <div className='w-full max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
        {children === undefined || children === null
          ? (
            <div className='px-4 py-6 sm:px-0'>
              <div className='border-4 border-dashed border-gray-200 rounded-lg h-96'>
                {children}
              </div>
            </div>)
          : children}
      </div>
    </main>
  )
}

export default Content
