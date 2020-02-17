import React from 'react';
import styled, { css } from 'styled-components';
import { useField } from 'formik';

export default ({ label, ...props }: any) => {
	const [field, meta] = useField(props);
	const errorMsg = meta.touched && meta.error;

	return (
		<StyledView>
			<StyledText>{label}</StyledText>
			<StyledInput />
		</StyledView>
	);
};

const StyledView = styled.div`
	display: flex;
	margin-top: ${({ theme }) => theme.spacing.base};
	flex-direction: column;
`;

const StyledText = styled.p`
	color: ${({ theme }) => theme.colors.bg};
	font-size: ${({ theme }) => theme.fz.regular};
`;

const StyledInput = styled.input`
    background-color: ${({ theme }) => theme.colors.primary};
	padding: ${({ theme }) => theme.spacing.small} 0;
	border-top-width: 0px;
	border-left-width: 0px;
	border-right-width: 0px;
    border-bottom-color: ${({ theme }) => theme.colors.bg};
	border-bottom-width: 1px;
	color: ${({ theme }) => theme.colors.bg};
	font-family: 'Montserrat', sans-serif;

	&:focus { outline: none; }
`;
