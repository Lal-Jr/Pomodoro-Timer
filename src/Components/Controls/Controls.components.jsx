import React from "react";
import { ControlsContainer, Button } from "./Controls.styles";

const Controls = ({
	setIsActive,
	setCounter,
	setSecond,
	setMinute,
	isActive,
	setSessionLength,
}) => {
	const resetTimer = () => {
		setIsActive(false);
		setCounter(1500);
		setSecond("00");
		setMinute(25);
		setSessionLength(25);
	};

	return (
		<ControlsContainer>
			<Button onClick={() => setIsActive(!isActive)}>
				{isActive ? "Stop" : "Start"}
			</Button>
			<Button onClick={() => resetTimer()}>Reset</Button>
		</ControlsContainer>
	);
};

export default Controls;
