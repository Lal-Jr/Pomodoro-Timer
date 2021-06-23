import React from "react";
import Options from "../Options/Options.components";
import Time from "../Time/Time.components";
import { PomodoroContainer, Title } from "./Pomodoro.styles";

const Pomodoro = () => {
	const audioBeep = React.createRef();

	return (
		<>
			<PomodoroContainer>
				<Title>Pomodoro Timer</Title>
				<Options />
				<Time />
				<audio
					id="beep"
					preload="auto"
					src="https://goo.gl/65cBl1"
					ref={audioBeep}
				/>
			</PomodoroContainer>
		</>
	);
};

export default Pomodoro;
