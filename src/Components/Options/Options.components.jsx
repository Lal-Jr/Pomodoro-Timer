import React from "react";
import {
	OptionsContainer,
	Option,
	OptionWrapper,
	Value,
	Clicker,
} from "./Options.styles";

const Options = ({
	handleBreakDecrement,
	handleBreakIncrement,
	breakLength,
	handleSessionDecrement,
	handleSessionIncrement,
	sessionLength,
}) => {
	return (
		<>
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
		</>
	);
};

export default Options;
