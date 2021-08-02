import { Button } from '@chakra-ui/react'
import React from 'react'

const AppButton = ({ value, isActive, onClick }) => {
  return (
    <Button
      bg="brand.600"
      color="white"
      minW="100px"
      h="37px"
      fontWeight="semibold"
      value={value}
      isActive={isActive}
      fontSize="xl"
      transition="none"
      _hover={{ bg: '#9fe8df', color: 'brand.600' }}
      _active={{ bg: 'brand.500', color: 'brand.600', outlineOffset: '0' }}
      _focus={{ outline: 0 }}
      onClick={(e) => onClick(e)}
    >
      {value}%
    </Button>
  )
}

export default AppButton
