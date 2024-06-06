import {Text, Flex, Button, Spacer} from '@chakra-ui/react';
import {FaDice} from 'react-icons/fa6';
import Hour from './Hour';
import Minute from './Minute';

const App = () => {
  const computeViableDieFace = total => {
    if (total <= 6) return 0;
    if (total === 12) return 6;

    let min = total - 6;
    let max = 6;
    const face = Math.floor (Math.random () * (max - min + 1)) + min;
    return face;
  };

  const rollall = () => {
    const b1 = document.getElementById("hr")
    const b2 = document.getElementById("min")

    b1.click()
    b2.click()

    setTimeout(() => {
      window.location.reload()
    }, 45000)
  }

  return (
    <Flex
      bgColor="#242424"
      color="rgba(255, 0, 255, 0.87)"
      w="100vw"
      h="100vh"
      align="center"
      flexDir="column"
      pt="4rem"
    >
      <Flex>
        <Text fontSize="xxx-large" fontWeight={700}>Dice O'Clock</Text>
        <FaDice size={40} />
      </Flex>

      <Flex
        mt="2rem"
        mb="2rem"
        w="40%"
        fontSize="x-large"
      >
        <Spacer />
        <Hour computeViableDieFace={computeViableDieFace} />

        <Minute computeViableDieFace={computeViableDieFace} />
        <Spacer />
      </Flex>

      <Button mt="2rem" h="3rem" w="9rem" colorScheme='purple' onClick={rollall}> 
       Time Check 
      </Button>
    </Flex>
  );
};

export default App;
