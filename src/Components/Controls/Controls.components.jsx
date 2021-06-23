import React from "react";
import { ControlsContainer, Button } from "./Controls.styles";

const Controls = ({
	isActive,
	setIsActive,
	setCounter,
	setSecond,
	setMinute,
}) => {
	const stopTimer = () => {
		setIsActive(false);
		setCounter(1500);
		setSecond("00");
		setMinute("25");
	};

	return (
		<ControlsContainer>
			<Button onClick={() => setIsActive(!isActive)}>
				{isActive ? "Stop" : "Start"}
			</Button>
			<Button onClick={() => stopTimer()}>Reset</Button>
		</ControlsContainer>
	);
};

export default Controls;
