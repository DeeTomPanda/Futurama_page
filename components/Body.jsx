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
	Icon,
	Stack
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { 
	AiFillHeart,
	AiOutlineEye,
	AiFillFolderAdd
} from "react-icons/ai";
import axios from 'axios'
import Hover from './Hover.jsx'
import './../styles/App.scss'

const Body=({ data,setIsLoading,isLoading,hover,setHover,Data })=>{
	console.log(data," is data")
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
		   <Center className="center" mb={{sm:'5%',md:'1%'}} flexDirection={'column'}>
		      <Heading pt={{sm:'7%',md:'3%'}} pb={{sm:'5%'}}>
		         {"LOREM"}
		      </Heading>
		      <Text className='text' textAlign={'center'} pr={{sm:'5%',md:'1%'}} pl={{sm:'5%',md:'1%'}}>
		         {`Lorem ipsum Design a mobile first respofollowing:
			    Display 4 Futurama profiles as shown in the
			    e Figure1 The aspect-ratio feature is specified as a <ratio> value representing the width-
			    to-height aspect ratio of the viewport. It is a range feature, meaning you can also use th
			    e prefixed min-aspect-ratio and max-aspect-ratio variants to query minimum and
			    maximum values, respectively.`}
		      </Text>
		   </Center>
		   <Card minW='inherit'>
		      <CardBody mx='auto'>
		         <AspectRatio className='aspect' minW={{sm:'20vw',md:'20vw'}} minH='inherit' 
			  align='center' justify='center'  
			  onMouseEnter={()=>setHover(true)} 
			  onMouseLeave={()=>setHover(false)} 
			  _hover={{boxShadow:'inset 0px -12vh 0 12px  rgba(153, 144, 148, 0.3)'}}
			  margin='auto' maxW={{sm:'60%',md:'30%'}} 
			  maxH={{sm:'70%',md:'30%'}} 
			  ratio={{sm:0.55,md:0.58}}>
			<>
		      	    <Image className='avatarImg' 
			     src={data.images.main}  alt='image'/>    
			   {hover?(
			    <Box as='div' flexDirection='column' justify='flex-start'>
			       <div className={"dummyDiv"}>{"dummyDiv"}</div>
			       <Flex ml='0' p='0' w='inherit' mb={{sm:'10%'}} align='center' justify='space-between'> 
			          <Heading color='white' size='sm'>{data.name.first}</Heading> 
			          <ButtonGroup>
			             <Button size='md' bg='ghostwhite'>
			                <Icon as={AiFillFolderAdd}/>
			             </Button>
			             <Button size='md' bg='ghostwhite'>
			                <Icon as={AiFillHeart}/>
			             </Button>   
			          </ButtonGroup>
			       </Flex>
			   </Box>)
			   :null}
			 </>
		   	 </AspectRatio>
		      </CardBody>
		      <CardFooter ml={{sm:'3%'}}>
			 <Flex className='flexBox' minW={{sm:'85vw',md:'90vw'}} alignItems='center' 
			  flexDirection='row' 
				 justifyContent='space-between'>
		            <Hover data={data} Data={Data}/>
			    <ButtonGroup className='buttons' opacity='0.6' size='sm' isAttached>
			       <Button bg='none' leftIcon={<Icon as={AiFillHeart}/>}>{90}</Button>
			       <Button bg='none' leftIcon={<Icon as={AiOutlineEye}/>}>{"76.4k"}</Button>
			    </ButtonGroup>
			</Flex>
		      </CardFooter>
		   </Card>
		</Box>)
	)
}

export default Body
