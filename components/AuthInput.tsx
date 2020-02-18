import React from 'react';
import styled, { css, ThemeConsumer, ThemeContext } from 'styled-components';
import { useField } from 'formik';

export default ({ label, ...props }: any) => {
	const [field, meta] = useField(props);
	const errorMsg = meta.touched && meta.error;

	return (
		<StyledView>
			<StyledText>{label}</StyledText>
			<StyledInput {...props} {...field} />
			{errorMsg && <StyledErrorMessage> {errorMsg} </StyledErrorMessage>}
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
	font-size: ${({ theme }) => theme.fz.small};
	&:focus { outline: none; };
	
	&:-webkit-autofill,
	&:-webkit-autofill:hover,
	&:-webkit-autofill:focus,
	&:-webkit-autofill:active {
	  -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
	  -webkit-transition-delay: 9999s;
	}
`;

const StyledErrorMessage = styled.div`
font-size: ${({ theme }) => theme.fz.small};
  color: var(--red-600);
  width: 400px;
  margin-top: 0.25rem;
  &:before {
    content: "❌ ";
    font-size: font-size: ${({ theme }) => theme.fz.micro};
  };
`