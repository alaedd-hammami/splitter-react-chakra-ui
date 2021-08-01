import { Center, Image } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/logo.svg'

const Logo = () => {
  return (
    <Center p={10} py={{ md: 20 }} color="brand.400">
      <Image src={logo} />
    </Center>
  )
}

export default Logo
