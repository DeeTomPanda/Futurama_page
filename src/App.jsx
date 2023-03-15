import { useState,useEffect } from 'react'
import { Center,Box } from '@chakra-ui/react'
import  './../styles/App.scss'
import Header from '../components/Header.jsx'
import Body from '../components/Body.jsx'
import axios from 'axios'

function App() {
  
  const [data,setData]=useState()
  const [isLoading,setIsLoading]=useState(true)
  const [hover,setHover]=useState(false)
  var DATA=[]	
	useEffect(()=>{
		const getData=async()=>{
			await axios.get("https://api.sampleapis.com/futurama/characters")
			.then((res)=>setData(res.data),(err)=>console.log(err))
			setIsLoading(false)}
		getData()}
	,[])
	
  return (
	  isLoading?(<Box><Center width='100vw' height='100vh'>{"Loading"}</Center></Box>):(
	  <>{
	     data.map((v,i)=>(
	        <div className='container'>
	           <Header/>
	           <Body data={v} setIsLoading={setIsLoading} isLoading={isLoading} hover={hover} 
	            setHover={setHover}  Data={data} /> 
	        </div>))}
  	</>)

  )}

export default App
