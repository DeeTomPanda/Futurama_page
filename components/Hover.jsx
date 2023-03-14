import {
  Button,
  Box,
  Image,
  Text,
  Flex,
  Card,
  CardHeader, 
  CardBody, 
  CardFooter,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Heading
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons' 

const Hover=({data})=>{
	return(
		 <Popover trigger='hover'>
		    <PopoverTrigger>
		               <Button bg='none' _hover={{borderColor:'transparent'}}>
			         <Flex alignItems='center'>
			            {<Avatar size='sm' objectFit='cover' src={data[0].images.main} />}		
			            {data[0].name.first}
			         </Flex>
			      </Button>
			   </PopoverTrigger>
			   <PopoverContent  minW={'80%'}>
			      <Card minW={'100vw'}>
			         <CardHeader>
		                    <Flex alignItems='center'>
		                       <Avatar size='lg' objectFit='scale-down' src={data[0].images.main}/>
		                       <Box>
		                          <Heading as={'h4'} size='md'>
					     {`${data[0].name.first} ${data[0].name.last}`}
		                          </Heading>
		                          <Text>{`${data[0].species}, ${data[0].homePlanet}`}</Text>
		                       </Box>
		                       <Button leftIcon={<AddIcon/>} ml={'auto'}>
					  {"Follow"}
		                       </Button>
		                    </Flex>
			         </CardHeader>
		                 <CardBody>
		                    <Flex flexDirection='row'>
		                       <Image boxSize='150px' objectFit='contain' src={data[1].images.main}/>
				       <Image boxSize='150px' objectFit='contain' src={data[2].images.main}/>
		                       <Image boxSize='150px' objectFit='contain' src={data[3].images.main}/>
		                    </Flex>
		                 </CardBody>
			      </Card>
			   </PopoverContent>
		         </Popover>)
}

export default Hover
