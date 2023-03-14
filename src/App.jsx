import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import  './../styles/App.scss'
import Header from '../components/Header.jsx'
import Body from '../components/Body.jsx'

function App() {

  return (
	  <div className='container'>
	     <Header/>
	     <Body/> 
	  </div>

  )
}

export default App
