import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import ResultRow from './ResultRow'
import ResultButton from './ResultButton'

const Result = ({ amount = 0, total = 0, btnDisabled, onReset }) => {
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
      <ResultButton disabled={btnDisabled} onClick={onReset}>
        Reset
      </ResultButton>
    </Flex>
  )
}

export default Result
