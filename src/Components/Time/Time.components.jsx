import React, { useState, useEffect } from "react";
import Controls from "../Controls/Controls.components";
import { TimeContainer, Label, Timer, Minutes, Seconds } from "./Time.styles";

const Time = () => {
	const [second, setSecond] = useState("00");
	const [minute, setMinute] = useState("25");
	const [isActive, setIsActive] = useState(false);
	const [counter, setCounter] = useState(1500);

	useEffect(() => {
		let intervalId;

		if (isActive) {
			intervalId = setInterval(() => {
				const secondCounter = counter % 60;
				const minuteCounter = Math.floor(counter / 60);

				const computedSecond =
					String(secondCounter).length === 1
						? `0${secondCounter}`
						: secondCounter;
				const computedMinute =
					String(minuteCounter).length === 1
						? `0${minuteCounter}`
						: minuteCounter;

				setSecond(computedSecond);
				setMinute(computedMinute);

				counter > 0 && setCounter((counter) => counter - 1);
			}, 1000);
		}

		return () => clearInterval(intervalId);
	}, [isActive, counter]);

	return (
		<>
			<TimeContainer>
				<Label>Session</Label>
				<Timer>
					<Minutes>{minute}</Minutes>:<Seconds>{second}</Seconds>
				</Timer>
			</TimeContainer>
			<Controls
				isActive={isActive}
				setIsActive={setIsActive}
				setCounter={setCounter}
				setSecond={setSecond}
				setMinute={setMinute}
			/>
		</>
	);
};

export default Time;
