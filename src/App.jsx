import {Text, Flex} from '@chakra-ui/react';
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
        mt="6rem"
        w="60%"
        justify="space-around"
        align="center"
        fontSize="x-large"
      >
        <Hour computeViableDieFace={computeViableDieFace} />
        :
        <Minute computeViableDieFace={computeViableDieFace} />
      </Flex>
    </Flex>
  );
};

export default App;
