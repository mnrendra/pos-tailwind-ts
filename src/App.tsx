import React from 'react'
import { Routes, Route } from 'react-router-dom'

import {
  Main,
  Header,
  Content
} from './components'

import {
  Dashboard,
  Stock,
  Selling,
  Purchasing,
  Profile,
  Settings,
  Signout
} from './contents'

const App = (): JSX.Element => {
  return (
    <Main>
      <>
        <Header />
        <Content>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/stock' element={<Stock />} />
            <Route path='/selling' element={<Selling />} />
            <Route path='/purchasing' element={<Purchasing />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/signout' element={<Signout />} />
          </Routes>
        </Content>
      </>
    </Main>
  )
}

export default App
