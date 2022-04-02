import React from 'react'
import Logo from './logo.svg'

const App = (): JSX.Element => {
  return (
    <div className='p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 dark:bg-slate-900'>
      <div className='shrink-0'>
        <img className='h-12 w-12' src={Logo} alt='ChitChat Logo' />
      </div>
      <div>
        <div className='text-xl font-medium dark:text-white'>ChitChat</div>
        <p className='dark:text-slate-400'>You have a new message!</p>
      </div>
    </div>
  )
}

export default App
