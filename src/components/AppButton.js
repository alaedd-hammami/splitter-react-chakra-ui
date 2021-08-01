import { Button } from '@chakra-ui/react'
import React from 'react'

const AppButton = ({ value, isActive, onClick }) => {
  return (
    <Button
      bg="brand.600"
      color="white"
      minW="100px"
      h="37px"
      fontWeight="bold"
      value={value}
      _hover={{ bg: '#9fe8df', color: 'brand.600' }}
      _active={{ bg: 'brand.500', color: 'brand.600' }}
      onClick={(e) => onClick(e)}
      isActive={isActive}
    >
      {value}%
    </Button>
  )
}

export default AppButton
