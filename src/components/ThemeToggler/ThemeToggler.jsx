import React from 'react';
import { useColorMode, Box, IconButton } from '@chakra-ui/react';
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const ThemeToggler = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box textAlign="right" py={4} mr={12}>
      <IconButton
        icon={colorMode === 'light' ? <BsMoonStarsFill /> : <BsFillSunFill/>}
        onClick={toggleColorMode}
        variant="ghost"
      />
    </Box>
  );
}

export default ThemeToggler