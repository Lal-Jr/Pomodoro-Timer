import styled from "styled-components";

export const ControlsContainer = styled.div`
	height: 15%;
	width: 20%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #fff;
`;

export const Button = styled.div`
	display: grid;
	place-items: center;
	background: transparent;
	min-width: 100px;
	padding: 10px 20px;
	border: 3px solid #000;
	border-radius: 50px;
	font-size: 24px;
	cursor: pointer;
	user-select: none;
`;
