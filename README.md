# POS (Point of Sale) Tailwind TS

Hi! This is my POS ReactJs project built using Tailwind and Typescript.

## If you wanna create your own project like this (build ReactJs using Tailwind and Typescript), please following these steps:

### 1. Created using CRA and Typescript tamplate:
### `npx create-react-app pos-tailwind-ts --template typescript`
### `cd pos-tailwind-ts`


### 2. Install Tailwind by following:
### [https://tailwindcss.com/docs/guides/create-react-app](https://tailwindcss.com/docs/guides/create-react-app)

### 3. Replace `tailwind.config.js` by:
```
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}',
    './public/index.html'
  ],
  theme: {
    extend: {}
  },
  plugins: []
}
```

### 4. Try to teplace `App.tsx` by:
```
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
```

*Noted: you can replace the `Logo` by your own logo.

#### Thank you!
