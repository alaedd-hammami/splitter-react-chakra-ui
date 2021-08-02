import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react'
import React from 'react'
import Label from './Label'

const AppInput = ({
  width = '100%',
  placeholder = 0,
  leftElement,
  label,
  value,
  error,
  isInvalid,
  onChange,
}) => {
  return (
    <Box w={width}>
      {label && (
        <Flex justify="space-between">
          <Label>{label}</Label>
          {error && <Label color="red.400">{error}</Label>}
        </Flex>
      )}
      <InputGroup>
        {leftElement && <InputLeftElement children={leftElement} />}
        <Input
          type="number"
          borderWidth="0"
          placeholder={placeholder}
          textAlign="right"
          bg="brand.100"
          color="brand.600"
          fontWeight="bold"
          fontSize="xl"
          isInvalid={isInvalid}
          errorBorderColor="red.400"
          value={value}
          _focus={{ borderColor: 'brand.500', borderWidth: '2px' }}
          onChange={(e) => onChange(e)}
        />
      </InputGroup>
    </Box>
  )
}

export default AppInput
