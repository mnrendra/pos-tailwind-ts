import React from 'react'

interface Props {
  children: JSX.Element
}

const Main = ({ children }: Props): JSX.Element => {
  return (
    <div className='flex flex-col w-full h-full bg-gray-100'>
      {children}
    </div>
  )
}

export default Main
