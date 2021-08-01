import { Box, Image, SimpleGrid, VStack } from '@chakra-ui/react'
import React from 'react'
import AppButton from './AppButton'
import AppInput from './AppInput'
import Label from './Label'
import dollar from '../assets/icon-dollar.svg'
import person from '../assets/icon-person.svg'

const Inputs = ({
  billValue,
  peopleValue,
  selectedTip,
  customTipValue,
  error,
  onBillChange,
  onTipSelected,
  onCustomTipChange,
  onPeopleChange,
}) => {
  return (
    <VStack spacing={8} maxW={{ md: '350px' }}>
      <AppInput
        label="Bill"
        leftElement={<Image src={dollar} />}
        value={billValue}
        onChange={(e) => onBillChange(e)}
      />
      <Box>
        <Label>Select Tip %</Label>
        <SimpleGrid w="100%" columns={{ base: 2, sm: 3 }} spacing={4}>
          <AppButton
            isActive={selectedTip === '5'}
            value={5}
            onClick={(e) => onTipSelected(e)}
          />
          <AppButton
            isActive={selectedTip === '10'}
            value={10}
            onClick={(e) => onTipSelected(e)}
          />
          <AppButton
            isActive={selectedTip === '15'}
            value={15}
            onClick={(e) => onTipSelected(e)}
          />
          <AppButton
            isActive={selectedTip === '25'}
            value={25}
            onClick={(e) => onTipSelected(e)}
          />
          <AppButton
            isActive={selectedTip === '50'}
            value={50}
            onClick={(e) => onTipSelected(e)}
          />
          <AppInput
            placeholder="Custom"
            value={customTipValue}
            onChange={(e) => onCustomTipChange(e)}
          />
        </SimpleGrid>
      </Box>
      <AppInput
        label="Number of People"
        leftElement={<Image src={person} />}
        value={peopleValue}
        error={error}
        isInvalid={error}
        onChange={(e) => onPeopleChange(e)}
      />
    </VStack>
  )
}

export default Inputs
