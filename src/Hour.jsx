import {Box, Flex, Button} from '@chakra-ui/react';
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
    <Flex w="30%" flexDir="column">
      <Flex
        bgColor="#363636"
        w="100%"
        h="8rem"
        justify="center"
        align="center"
        flexWrap="wrap"
      >
        <Box display={hour > 6 ? '' : 'none'}>
          <Dice size={40} ref={diceRef} cheatValue={hour - dieFace} />
        </Box>
        
        <Dice marginLeft="0.5rem" size={40} ref={ref2} cheatValue={dieFace} defaultValue={dieFace} />
      </Flex>

      <Button mt="4" colorScheme="purple" onClick={rollDice}>
        Roll Hour
      </Button>
    </Flex>
  );
}