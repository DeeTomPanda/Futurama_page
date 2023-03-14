import { 
	useState,
	useEffect
} from 'react'
import { 
	Box,
	Flex,
	Menu,
	MenuButton,
        MenuList,
        MenuItem,
        MenuItemOption,
        MenuGroup,
        MenuOptionGroup,
        MenuDivider,
	Button,
	ButtonGroup,
	Center,
	Heading,
	Text,
	AspectRatio,
	Image,
	Card,
	CardBody,
	CardFooter,
	Avatar,
	Icon
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { 
	AiFillHeart,
	AiOutlineEye
} from "react-icons/ai";
import axios from 'axios'
import Hover from './Hover.jsx'

const Body=()=>{

	const [data,setData]=useState()
	const [isLoading,setIsLoading]=useState(true)
	useEffect(()=>{
		const getData=async()=>{
			await axios.get("https://api.sampleapis.com/futurama/characters")
			.then((res)=>setData(res.data),(err)=>console.log(err))
		setIsLoading(false)}
		getData()}
	,[])
	console.log(data)
	return(
		isLoading?(<Box><Center width='100vw' height='100vh'>{"Loading"}</Center></Box>):
		(
		<Box flexDirection={"column"}>
		   <Flex mr={"auto"} pl={"25px"}>
		      <Menu>
		         <MenuButton as={Button} variant={'outline'} opacity={'0.6'} >
		           {"Popular"} {<ChevronDownIcon/>}
		         </MenuButton>
		      </Menu>
		   </Flex>
		   <Center mb={{sm:'5%',md:'1%'}} flexDirection={'column'}>
		      <Heading pt={{sm:'7%',md:'3%'}} pb={{sm:'5%'}}>
		         {"LOREM"}
		      </Heading>
		      <Text textAlign={'center'} pr={{sm:'5%',md:'1%'}} pl={{sm:'5%',md:'1%'}}>
		         {`Lorem ipsum Design a mobile first respofollowing:
			    Display 4 Futurama profiles as shown in the
			    e Figure1 jfafs fhkhfkhf fuff`}
		      </Text>
		   </Center>
		   <Card>
		      <CardBody minW={'80%'} ml='auto' mr='auto'>
		         <AspectRatio _hover={{boxShadow:'inset 0px -12vh 0 12px  rgba(153, 144, 148, 0.3)'}}
			  margin='auto'  maxW={{sm:'60%',md:'20%'}} maxH={{sm:'70%',md:'30%'}} 
			  ratio={{sm:0.55,md:0.55}}>
		      	 <Image 
			  src={data[0].images.main} fit='contain' alt='image'/>	
		   	 </AspectRatio>
		      </CardBody>
		      <CardFooter ml={{sm:'3%'}}>
			 <Flex minW='80vw' alignItems='center' flexDirection='row' justifyContent='space-between'>
		            <Hover data={data}/>
			    <ButtonGroup opacity='0.6' size='sm' isAttached>
			       <Button bg='none' leftIcon={<Icon as={AiFillHeart}/>}>{90}</Button>
			       <Button bg='none' leftIcon={<Icon as={AiOutlineEye}/>}>{"76.4k"}</Button>
			    </ButtonGroup>
			</Flex>
		      </CardFooter>
		   </Card>
		</Box>)
	)}

export default Body
