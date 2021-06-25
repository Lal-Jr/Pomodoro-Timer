import styled from "styled-components";

export const OptionsContainer = styled.div`
	height: 15%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	color: #fff;

	@media (max-width: 420px) {
		height: 20%;
	}
`;

export const Option = styled.div`
	margin-inline: 70px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (max-width: 600px) {
		margin-inline: 30px;
	}

	@media (max-width: 420px) {
		margin-inline: 15px;
	}
`;

export const OptionWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px 0;
`;

export const Value = styled.div`
	display: grid;
	place-items: center;
	background: #fff;
	color: #000;
	height: 50px;
	width: 50px;
	border-radius: 50%;
	margin-inline: 20px;
	font-size: 20px;
	font-weight: bold;
	user-select: none;
`;

export const Clicker = styled.span`
	font-size: 35px;
	font-weight: bold;
	cursor: pointer;
	color: #000;
	user-select: none;
`;
