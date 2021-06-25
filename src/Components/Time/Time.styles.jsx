import styled from "styled-components";

export const TimeContainer = styled.div`
	height: 40%;
	min-width: 20%;
	border-radius: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #fff;
	border: 2px solid #fff;

	@media (max-width: 1200px) {
		height: 35%;
		min-width: 25%;
	}
	@media (max-width: 1000px) {
		height: 40%;
		min-width: 35%;
	}
	@media (max-width: 800px) {
		height: 30%;
		min-width: 35%;
	}

	@media (max-width: 600px) {
		height: 25%;
		min-width: 35%;
	}

	@media (max-width: 450px) {
		height: 27.5%;
		min-width: 50%;
	}
`;

export const Label = styled.h3`
	font-size: 36px;

	@media (max-width: 1200px) {
		font-size: 30px;
	}
	@media (max-width: 600px) {
		font-size: 20px;
	}
`;

export const Timer = styled.div`
	font-size: 56px;
	display: flex;
	align-items: center;

	@media (max-width: 1200px) {
		font-size: 48px;
	}
	@media (max-width: 800px) {
		font-size: 36px;
	}
	@media (max-width: 600px) {
		font-size: 28px;
	}
	@media (max-width: 400px) {
		font-size: 18px;
	}
`;

export const Minutes = styled.h1``;

export const Seconds = styled.h1``;
