import { Button } from '@chakra-ui/react'
import React from 'react'

const ResultButton = ({ disabled, children, onClick }) => {
  return (
    <Button
      w="100%"
      bg="brand.500"
      color="brand.600"
      fontWeight="bold"
      fontSize="xl"
      textTransform="uppercase"
      disabled={disabled}
      _active={{ bg: 'brand.500' }}
      _hover={{ bg: '#9fe8df' }}
      _focus={{ outline: 0 }}
      onClick={() => onClick()}
    >
      {children}
    </Button>
  )
}

export default ResultButton
