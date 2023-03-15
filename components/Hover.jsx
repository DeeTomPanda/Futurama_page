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

const Hover=({data,Data})=>{
	return(
		 <Popover trigger='hover'>
		    <PopoverTrigger>
		               <Button bg='none' _hover={{borderColor:'transparent'}}>
			         <Flex alignItems='center'>
			            {<Avatar size='sm' objectFit='cover' src={data.images.main} />}		
			            {data.name.first}
			         </Flex>
			      </Button>
			   </PopoverTrigger>
			   <PopoverContent  minW={'80%'}>
			      <Card minW={'100vw'}>
			         <CardHeader>
		                    <Flex alignItems='center'>
		                       <Avatar size='lg' objectFit='scale-down' src={data.images.main}/>
		                       <Box>
		                          <Heading as={'h4'} size='md'>
					     {`${data.name.first} ${data.name.last}`}
		                          </Heading>
		                          <Text>{`${data.species}, ${data.homePlanet}`}</Text>
		                       </Box>
		                       <Button leftIcon={<AddIcon/>} ml={'auto'}>
					  {"Follow"}
		                       </Button>
		                    </Flex>
			         </CardHeader>
		                 <CardBody>
		                    <Flex flexDirection='row'>
		                       <Image boxSize='150px' objectFit='contain' src={Data[5].images.main}/>
				       <Image boxSize='150px' objectFit='contain' src={Data[2].images.main}/>
		                       <Image boxSize='150px' objectFit='contain' src={Data[4].images.main}/>
		                    </Flex>
		                 </CardBody>
			      </Card>
			   </PopoverContent>
		         </Popover>)
}

export default Hover
