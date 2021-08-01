import { Box, Button, Flex } from '@chakra-ui/react'
import React from 'react'
import ResultRow from './ResultRow'

const Result = ({ amount = 0, total = 0, onCalculate, onReset }) => {
  return (
    <Flex
      direction="column"
      justify="space-between"
      rounded={15}
      p={6}
      w="100%"
      bg="brand.600"
      color="white"
      mt={{ base: 8, md: 0 }}
      maxW={{ md: '320px' }}
    >
      <Box w="100%">
        <ResultRow label="Tip Amount" value={amount} />
        <ResultRow label="Total" value={total} />
      </Box>
      {amount === 0 && total === 0 ? (
        <Button
          w="100%"
          bg="brand.500"
          color="brand.600"
          fontWeight="bold"
          fontSize="xl"
          _active={{ bg: 'brand.500' }}
          _hover={{ bg: '#9fe8df' }}
          onClick={() => onCalculate()}
        >
          CALCULATE
        </Button>
      ) : (
        <Button
          w="100%"
          bg="brand.500"
          color="brand.600"
          fontWeight="bold"
          fontSize="xl"
          _active={{ bg: 'brand.500' }}
          _hover={{ bg: '#9fe8df' }}
          onClick={() => onReset()}
        >
          RESET
        </Button>
      )}
    </Flex>
  )
}

export default Result
