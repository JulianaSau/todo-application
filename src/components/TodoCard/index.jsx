import {
	Flex,
	chakra,
	Avatar,
	Box,
	Icon,
	useColorModeValue,
    Checkbox,
} from "@chakra-ui/react";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";


const TodoCard = ({todo}) => {
	const borderColor = useColorModeValue("gray.400", "gray.300");
	const color = useColorModeValue("gray.800", "gray.400");
	return (
		<Flex
			// onClick={() => props.setCurrent(props.idx)}
			// borderWidth={props.selected ? "2px" : "0px"}
			// borderColor={props.selected ? "primary.500" : "transparent"}
			cursor={"pointer"}
			minW={{ base: "90vw", md: "420px" }}
			w={{ base: "90vw", md: "420px" }}
			mx="auto"
			bg="white"
			_dark={{
				bg: "gray.700",
			}}
			shadow="md"
			rounded="lg"
			overflow="hidden"
			position={"relative"}
		>
			{/* <Flex
				w={2}
				minW={2}
				bg={props.selected ? "primary.500" : "gray.600"}
				_dark={{
					bg: `${props.selected} ? "primary.500" : "gray.500"`,
				}}
			/> */}

			<Flex alignItems="top" px={2} py={5}>
				<Checkbox/>
				<Box mx={3} textAlign="left">
					<chakra.span
						// color={props.selected ? "primary.500" : color}
						// _dark={{
						// 	color: `${props.selected} ? "primary.500" : "gray.200"`,
						// }}
						fontWeight="bold"
					>
						{/* {props.user.name} */}
					</chakra.span>
					<chakra.p
						w="100%"
						noOfLines={3}
						color="gray.500"
						_dark={{
							color: "gray.200",
						}}
					>
						{todo.text}
					</chakra.p>
				</Box>
			</Flex>
			{props.selected ? (
				<Icon
					as={FaCheckCircle}
					color="primary.500"
					position={"absolute"}
					top={4}
					right={4}
				/>
			) : (
				<Flex
					justify={"center"}
					align="center"
					h="15px"
					w="15px"
					bg="white"
					borderRadius="15px"
					borderWidth={"1px"}
					borderColor={borderColor}
					position={"absolute"}
					top={4}
					right={4}
				/>
			)}
		</Flex>
	);
};

export default TodoCard;