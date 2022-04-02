import React from 'react'

interface Props {
  children?: JSX.Element
}

const Content = ({ children }: Props): JSX.Element => {
  return (
    <main>
      <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
        {/* Replace with your content */}
        <div className='px-4 py-6 sm:px-0'>
          <div className='border-4 border-dashed border-gray-200 rounded-lg h-96' />
        </div>
        {/* /End replace */}
      </div>
    </main>
  )
}

export default Content
