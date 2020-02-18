import React from 'react';
import styled from 'styled-components';

export default ({ children }: { children: React.ReactNode }) => (
	<StyledTouchableHighlight type="submit"
	>
		<StyledText> {children} </StyledText>
	</StyledTouchableHighlight>
);

const StyledTouchableHighlight = styled.button`
	width: 65px;
	height: 65px;
	border-radius: 40px;
	border-width: 1px;
	border-color: ${({ theme }) => theme.colors.watermelon};
	background-color: ${({ theme }) => theme.colors.bg};
    margin-bottom: ${({ theme }) => theme.spacing.base};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
	margin-top: ${({ theme }) => theme.spacing.base};
`;

const StyledText = styled.span`
    font-size: ${({ theme }) => theme.fz.t2};
`;
