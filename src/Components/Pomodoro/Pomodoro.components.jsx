import React, { useEffect, useState } from "react";
import Options from "../Options/Options.components";
import Time from "../Time/Time.components";
import Controls from "../Controls/Controls.components";
import { PomodoroContainer, Title } from "./Pomodoro.styles";

const Pomodoro = () => {
	// const url = "https://goo.gl/65cBl1";
	// const audioBeep = new Audio(url);

	const [breakLength, setBreakLength] = useState(5);
	const [sessionLength, setSessionLength] = useState(25);
	const [second, setSecond] = useState("00");
	const [minute, setMinute] = useState(25);
	const [isActive, setIsActive] = useState(false);
	const [counter, setCounter] = useState(sessionLength * 60);
	const [timeLabel, setTimeLabel] = useState("Session");

	const handleBreakIncrement = () => {
		if (breakLength < 30 && !isActive) {
			setBreakLength((prevBreakLength) => prevBreakLength + 1);
		}
	};

	const handleSessionIncrement = () => {
		if (sessionLength < 60 && !isActive) {
			setSessionLength((prevSessionLength) => prevSessionLength + 1);
			setMinute((prevMinute) => prevMinute + 1);
			setCounter((prevCounter) => prevCounter + 60);
			console.log(minute);
		}
	};

	const handleBreakDecrement = () => {
		if (breakLength > 1 && !isActive) {
			setBreakLength((prevBreakLength) => prevBreakLength - 1);
		}
	};

	const handleSessionDecrement = () => {
		if (sessionLength > 1 && !isActive) {
			setSessionLength((prevSessionLength) => prevSessionLength - 1);
			setMinute((prevMinute) => prevMinute - 1);
			setCounter((prevCounter) => prevCounter - 60);
		}
	};

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

				counter > -1 && setCounter((counter) => counter - 1);

				if (counter === 0) {
					// audioBeep.play();
					console.log("Audio Will Play Here");
				} else if (counter === -1) {
					if (timeLabel === "Session") {
						setTimeLabel("Break");
						setCounter(breakLength * 60);
						setSecond("00");
						setMinute(`0${breakLength}`);
					} else if (timeLabel === "Break") {
						setTimeLabel("Session");
						setCounter(sessionLength * 60);
						setSecond("00");
						setMinute(`0${sessionLength}`);
					}
				}
			}, 1000);
		}

		return () => clearInterval(intervalId);
	}, [isActive, counter, timeLabel, breakLength, sessionLength]);

	return (
		<>
			<PomodoroContainer>
				<Title>Pomodoro Timer</Title>
				<Options
					handleBreakDecrement={handleBreakDecrement}
					handleBreakIncrement={handleBreakIncrement}
					breakLength={breakLength}
					handleSessionDecrement={handleSessionDecrement}
					handleSessionIncrement={handleSessionIncrement}
					sessionLength={sessionLength}
				/>
				<Time second={second} minute={minute} timeLabel={timeLabel} />
				<Controls
					setIsActive={setIsActive}
					setCounter={setCounter}
					setSecond={setSecond}
					setMinute={setMinute}
					isActive={isActive}
					setSessionLength={setSessionLength}
					setTimeLabel={setTimeLabel}
				/>
			</PomodoroContainer>
		</>
	);
};

export default Pomodoro;
