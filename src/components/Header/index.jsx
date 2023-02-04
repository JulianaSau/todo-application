import {
  Box,
  Button,
  CloseButton,
  Flex,
  IconButton,
  chakra,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  VStack,
  Text,
} from "@chakra-ui/react";
import { useScroll } from "framer-motion";
import React from "react";
import { BsTrash } from "react-icons/bs";
import { FaMoon, FaSun } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

const Header = ({clearTodos}) => {
  const mobileNav = useDisclosure();
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const bg = useColorModeValue("white", "gray.800");
  const ref = React.useRef(null);
  const [y, setY] = React.useState(0);
  const height = ref.current ? ref.current.getBoundingClientRect() : 0;
  const { scrollY } = useScroll();
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);
  const ClearTodosButton = (
    <Button
      display={{
        base: "none",
        md: "flex",
      }}
      alignItems="center"
      aria-label="Sponsor Choc UI on Open Collective"
      bg="gray.50"
      borderWidth="1px"
      borderColor="gray.200"
      px="1em"
      minH="36px"
      rounded="md"
      fontSize="sm"
      color="gray.800"
      transition="all 0.3s"
      _hover={{
        bg: "gray.100",
        borderColor: "gray.300",
      }}
      _active={{
        borderColor: "gray.200",
      }}
      _focus={{
        boxShadow: "outline",
      }}
      ml={5}
      onClick={()=>clearTodos()}
    >
      <Box as="strong" lineHeight="inherit" fontWeight="semibold">
        Clear Todos
      </Box>
    </Button>
  );
  const MobileNavContent = (
    <VStack
      pos="absolute"
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? "flex" : "none"}
      flexDirection="column"
      p={2}
      pb={4}
      m={2}
      bg={bg}
      spacing={3}
      rounded="sm"
      shadow="sm"
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
      />
      <Button w="full" variant="ghost" leftIcon={<BsTrash />}>
        Clear Todos
      </Button>
    </VStack>
  );
  return (
    <Box pos="relative">
      <chakra.header
        ref={ref}
        shadow={y > height ? "sm" : undefined}
        transition="box-shadow 0.2s"
        bg={bg}
        borderBottom="1px"
        borderBottomColor={useColorModeValue("gray.100", "gray.800")}
        w="full"
        overflowY="hidden"
      >
        <chakra.div h="4.5rem" mx="10">
          <Flex w="full" h="full" px="6" align="center" justify="space-between">
            <Flex align="center">
              <Text>Todo App</Text>
            </Flex>

            <Flex
              justify="flex-end"
              w="full"
              maxW="824px"
              align="center"
              color="gray.400"
            >
              <IconButton
                size="md"
                fontSize="lg"
                aria-label={`Switch to ${text} mode`}
                variant="ghost"
                color="current"
                ml={{
                  base: "0",
                  md: "3",
                }}
                onClick={toggleMode}
                icon={<SwitchIcon />}
              />
              {ClearTodosButton}
              <IconButton
                display={{
                  base: "flex",
                  md: "none",
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: "inherit",
                }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
            </Flex>
          </Flex>
          {MobileNavContent}
        </chakra.div>
      </chakra.header>
    </Box>
  );
};

export default Header;
