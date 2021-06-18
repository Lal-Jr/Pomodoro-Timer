import React from "react";
import Options from "../Options/Options.components";
import Controls from "../Controls/Controls.components";
import Time from "../Time/Time.components";
import { PomodoroContainer } from "./Pomodoro.styles";

const Pomodoro = () => {
	return (
		<>
			<PomodoroContainer>
				<Options />
				<Time />
				<Controls />
			</PomodoroContainer>
		</>
	);
};

export default Pomodoro;
