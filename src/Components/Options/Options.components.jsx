import React, { useState } from "react";
import {
	OptionsContainer,
	Option,
	OptionWrapper,
	Value,
	Clicker,
} from "./Options.styles";

const Options = () => {
	const [breakLength, setBreakLength] = useState(10);
	const [sessionLength, setSessionLength] = useState(25);

	const handleBreakIncrement = () => {
		setBreakLength((prevBreakLength) => prevBreakLength + 1);
	};

	const handleSessionIncrement = () => {
		setSessionLength((prevSessionLength) => prevSessionLength + 1);
	};

	const handleBreakDecrement = () => {
		setBreakLength((prevBreakLength) => prevBreakLength - 1);
	};

	const handleSessionDecrement = () => {
		setSessionLength((prevSessionLength) => prevSessionLength - 1);
	};

	return (
		<OptionsContainer>
			<Option>
				<OptionWrapper>
					<h2>Break Length</h2>
				</OptionWrapper>
				<OptionWrapper>
					<Clicker onClick={handleBreakDecrement}>-</Clicker>
					<Value>{breakLength}</Value>
					<Clicker onClick={handleBreakIncrement}>+</Clicker>
				</OptionWrapper>
			</Option>
			<Option>
				<OptionWrapper>
					<h2>Session Length</h2>
				</OptionWrapper>
				<OptionWrapper>
					<Clicker onClick={handleSessionDecrement}>-</Clicker>
					<Value>{sessionLength}</Value>
					<Clicker onClick={handleSessionIncrement}>+</Clicker>
				</OptionWrapper>
			</Option>
		</OptionsContainer>
	);
};

export default Options;
