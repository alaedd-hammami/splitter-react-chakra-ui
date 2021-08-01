import { Text } from '@chakra-ui/react'
import React from 'react'

const Label = ({ color = 'brand.300', children }) => {
  return (
    <Text
      alignSelf="flex-start"
      fontSize="md"
      fontWeight="bold"
      color={color}
      mb={2}
    >
      {children}
    </Text>
  )
}

export default Label
