import styled from 'styled-components';

import ArrowDown from 'app/pages/HomePage/SendForm/TraineeForm/assets/select-arrow-down 4.png';

const Select = styled.select`
	width: 100%;

	padding: 15px;

	outline: none;
	box-sizing: border-box;
	background-color: #ffffff;

	font-family: 'Open Sans', sans-serif;
	font-size: 16px;
	line-height: 21px;
	font-weight: 400;

	border: 1px solid #e3e3e3;
	border-radius: 5px;

	transition: ease-in-out 0.2s;

	padding-right: 25px;

	appearance: none;
	background-image: url(${ArrowDown});
	background-position: 95%;
	background-repeat: no-repeat;

	&:hover {
		border: 1px solid #4e4e4e;
		transition: 0.2s ease-in-out;
	}

	&:focus {
		border: 1px solid #4e4e4e;
	}
`;

export default Select;
