import React from "react";
import { TimeContainer, Label, Timer, Minutes, Seconds } from "./Time.styles";

const Time = ({ minute, second, timeLabel }) => {
	return (
		<>
			<TimeContainer>
				<Label>{timeLabel}</Label>
				<Timer>
					<Minutes>{minute}</Minutes>:<Seconds>{second}</Seconds>
				</Timer>
			</TimeContainer>
		</>
	);
};

export default Time;
