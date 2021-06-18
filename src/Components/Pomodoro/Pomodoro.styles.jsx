import styled from "styled-components";

export const PomodoroContainer = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: linear-gradient(
		90deg,
		rgba(48, 16, 255, 1) 0%,
		rgba(100, 115, 255, 1) 100%
	);
`;

export const Title = styled.h1`
	display: grid;
	place-items: center;
	height: 15%;
	color: #fff;
`;
