import React from "react";
import { TimeContainer, Detail, Minutes } from "./Time.styles";

function Time() {
	return (
		<TimeContainer>
			<Detail>Session</Detail>
			<Minutes>25:00</Minutes>
		</TimeContainer>
	);
}

export default Time;
