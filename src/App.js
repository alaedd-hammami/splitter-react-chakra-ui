import { Box, Center, Flex, Spacer } from '@chakra-ui/react'
import { useState } from 'react'
import Result from './components/Result'
import Logo from './components/Logo'
import Inputs from './components/Inputs'

function App() {
  const [bill, setBill] = useState('')
  const [people, setPeople] = useState('')
  const [tip, setTip] = useState('')
  const [selectedTip, setSelectedTip] = useState('')
  const [customTip, setCustomTip] = useState('')
  const [tipAmount, setTipAmount] = useState(0)
  const [total, setTotal] = useState(0)
  const [error, setError] = useState('')

  const handleCustomTip = (e) => {
    setCustomTip(e.target.value)
    setTip(e.target.value)
    setSelectedTip('')
  }

  const handleTipSelection = (e) => {
    setCustomTip('')
    setTip(e.target.value)
    setSelectedTip(e.target.value)
  }

  const calculate = () => {
    if (+people === 0) {
      return setError("Can't be zero")
    }

    setError('')
    const tipPerPerson = (+bill * (+tip / 100)) / +people
    setTipAmount(Number.parseFloat(tipPerPerson).toFixed(2))

    const totalPerPerson = +bill / +people
    setTotal(Number.parseFloat(totalPerPerson + tipPerPerson).toFixed(2))
  }

  const reset = () => {
    setBill('')
    setPeople('')
    setTip('')
    setCustomTip('')
    setSelectedTip('')
    setError('')
    setTipAmount(0)
    setTotal(0)
  }

  return (
    <>
      <Box h="100vh" bg="brand.200">
        <Logo />
        <Center>
          <Flex
            bg="white"
            direction={{ base: 'column', md: 'row' }}
            p={6}
            rounded={15}
            w={{ md: '750px' }}
            boxShadow="xl"
          >
            <Inputs
              billValue={bill}
              peopleValue={people}
              selectedTip={selectedTip}
              customTipValue={customTip}
              error={error}
              onBillChange={(e) => setBill(e.target.value)}
              onPeopleChange={(e) => setPeople(e.target.value)}
              onTipSelected={handleTipSelection}
              onCustomTipChange={handleCustomTip}
            />
            <Spacer />
            <Result
              amount={tipAmount}
              total={total}
              onCalculate={calculate}
              onReset={reset}
            />
          </Flex>
        </Center>
      </Box>
    </>
  )
}

export default App
