import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import dollar from '../assets/icon-dollar-green.svg'

const ResultRow = ({ label, value }) => {
  return (
    <Flex justify="space-between" align="flex-end" mb={6}>
      <Box>
        <Text fontSize="md">{label}</Text>
        <Text fontSize="xs" color="brand.300">
          / person
        </Text>
      </Box>
      <Flex justify="center" align="center">
        <Image w={5} h={6} mr="2px" src={dollar} alt="dollar icon" />
        <Text fontSize="4xl" fontWeight="bold" color="brand.500">
          {Number.parseFloat(value).toFixed(2)}
        </Text>
      </Flex>
    </Flex>
  )
}

export default ResultRow
