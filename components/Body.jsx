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
	Center,
	Heading,
	Text
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

const Body=()=>{
	return(
		<Box flexDirection={"column"}>
		   <Flex mr={"auto"} pl={"25px"}>
		      <Menu>
		         <MenuButton as={Button} variant={'outline'} opacity={'0.6'} >
		           {"Popular"} {<ChevronDownIcon/>}
		         </MenuButton>
		      </Menu>
		   </Flex>
		   <Center flexDirection={'column'}>
		      <Heading pt={'10%'} pb={'5%'}>
		         {"LOREM"}
		      </Heading>
		      <Text textAlign={'center'} pr={'1%'} pl={'1%'}>
		         {`Lorem ipsum Design a mobile first respofollowing:
			    Display 4 Futurama profiles as shown in the
			    e Figure1 jfafs fhkhfkhf fuff`}
		      </Text>
		   </Center>
		</Box>)}

export default Body
