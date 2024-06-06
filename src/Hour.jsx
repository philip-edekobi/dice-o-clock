import {Box, Flex, Button, Spacer} from '@chakra-ui/react';
import {useState, useRef, useEffect} from 'react';
import Dice from  "react-dice-roll"

export default function Hour({computeViableDieFace}) {
  const [hour, setHour] = useState (null);
  const [dieFace, setDieFace] = useState (null);

  useEffect(() => {
    let thisHour = new Date().getHours()
    thisHour = thisHour % 12
    if (thisHour === 0) thisHour = 12
    setHour(thisHour)
    setDieFace(thisHour - computeViableDieFace(thisHour))
  }, [])

  const diceRef = useRef (null);
  const ref2 = useRef (null);

  // const rollDone = (totalValue, values) => {};

  const rollDice = () => {
    const currHour = new Date().getHours();

    if (currHour === 0 || currHour === 12) {
      setHour (12);
    } else {
      setHour (currHour % 12);
    }

    const viableFace = computeViableDieFace (hour);
    setDieFace (hour-viableFace);

    diceRef.current.rollDice ();
    ref2.current.rollDice ();
  };

  return (
    <Flex  mx="8" w="30%" flexDir="column">
      <Flex></Flex>
      <Spacer />
      <Flex
        // bgColor="#363636"
        w="100%"
        h="12rem"
        justify="center"
        align="center"
        flexWrap="wrap"
      >
        <Box display={hour > 6 ? '' : 'none'}>
          <Dice size={80} ref={diceRef} cheatValue={hour - dieFace} />
        </Box>
        
        <Dice marginLeft="0.5rem" size={40} backgroundColor="#242424" ref={ref2} cheatValue={dieFace} defaultValue={dieFace} />
      </Flex>

      <Button id="hr" display="none" mt="4" colorScheme="purple" onClick={rollDice}>
        Roll Hour
      </Button>
    </Flex>
  );
}
