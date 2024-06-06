import {Box, Flex, Button} from '@chakra-ui/react';
import {useState, useRef, useEffect} from 'react';
import Dice from  "react-dice-roll"
import { GoDash } from "react-icons/go";

export default function Minute ({computeViableDieFace}) {
  const [min, setMin] = useState(null)
  const [dieFace, setDieface] = useState(null)

  useEffect(() => {
    const thisMin = new Date().getMinutes()
    setMin(thisMin)

    const rightDigit = thisMin % 10
    setDieface(rightDigit - computeViableDieFace(rightDigit))
  }, [])

  const diceRef = useRef (null);
  const ref2 = useRef (null);
  const ref3 = useRef(null);

  const rollDice = () => {
    let currMin = new Date().getMinutes()
    setMin(currMin)

    const viableFace = computeViableDieFace(currMin % 10)
    setDieface((min % 10) - viableFace)

    diceRef.current.rollDice()
    ref2.current.rollDice()
    ref3.current.rollDice()
  }

  return (
    <Flex w="35%" flexDir="column" >
      <Flex
        // bgColor="#363636"
        w="100%"
        h="12rem"
        justify="center"
        align="center"
      >
        <Flex mt="3rem" w="40%" justify="center" align="center" h="100%">
          <Box display={Math.floor(min / 10) > 0 ? '' : 'none'}>
            <Dice size={40} ref={diceRef} cheatValue={Math.floor(min/10)} /> 
          </Box>

          <GoDash style={{
            display: Math.floor(min/10) === 0 ? "" : "none"
          }} />
        </Flex>


        <Flex mt="3.5rem" w="60%" flexDir="column-reverse" justify="center" flexWrap="wrap" align="center" h="100%">
          <Box display={min % 10 > 6 ? '' : 'none'} mb="2">
            <Dice size={40} ref={ref2} cheatValue={(min % 10) - dieFace} /> 
          </Box>

          <Box display={min % 10 !== 0  ? '' : 'none'}>
            <Dice size={40} ref={ref3} cheatValue={dieFace} />
          </Box>

          <GoDash style={{
            display: min % 10 === 0 ? "" : "none"
          }} />
        </Flex>
      </Flex>

      <Button id="min" display="none" mt="4" colorScheme="purple" onClick={rollDice}>
        Roll Minutes
      </Button>
    </Flex>
  );
}
