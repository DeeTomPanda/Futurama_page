import {useRef} from 'react'
import { 
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
	Input,
	InputGroup,
	InputLeftElement
} from '@chakra-ui/react'
import { 
	CloseIcon, 
	HamburgerIcon,
	SearchIcon
} from '@chakra-ui/icons'

const ItemInput=()=>(
	<InputGroup>
	   <InputLeftElement
      	      pointerEvents='none'
              children={<SearchIcon/>}/>
	   <Input size='md' placeholder='search'/>
	</InputGroup>)

const Header=()=>{
	
	return(
		<Flex p='25px' alignItems='center' justifyContent='space-between'>
		   <Menu isFocusable={true}>
		      {({isOpen})=>(
		         <> 
		         <MenuButton opacity={'0.6'} >
			    {!isOpen?<HamburgerIcon/>:<CloseIcon/>}
		         </MenuButton>
		         <MenuList>
			    <MenuItem closeOnSelect={false}>
			       {<ItemInput/>}
			    </MenuItem>
		            <MenuItem>{"Home"}</MenuItem>
		            <MenuItem>{"Futurama"}</MenuItem>
		            <MenuItem>{"Characters"}</MenuItem>
		            <MenuItem>{"Go Pro"}</MenuItem>
		            <MenuItem>{"Custom Character"}</MenuItem>
		         </MenuList>
			 </>)}
		  </Menu>
		   <Button variant='ghost' opacity={'0.6'} >{"Sign in"}</Button>
		</Flex>)
}

export default Header
