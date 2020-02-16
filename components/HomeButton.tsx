import React from 'react';
import styled from 'styled-components';

export default ({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) => (
	<StyledButton onClick={onClick}>
		<StyledText>{children}</StyledText>
	</StyledButton>
);

const StyledButton = styled.button`
	border-radius: 50px;
	border-width: 1px;
	border-color: ${({ theme }) => theme.colors.watermelon};
	background-color: ${({ theme }) => theme.colors.bg};
	margin-bottom: ${({ theme }) => theme.spacing.base};
`;

const StyledText = styled.p`
	color: ${({ theme }) => theme.colors.primary};
	font-size: ${({ theme }) => theme.fz.regular};
	text-align: center;
	font-family: 'Montserrat', sans-serif;
`;
