import React from 'react';
import styled from 'styled-components';

export default () => (
	<TermsAndConditions>
		<StyledTermsText>
			By tapping Create account or Login, {"I agree to Myprogram's "}
			<A>Terms of Service</A>. 
            As this is our pre-beta version our
			are subject to change, you can follow our roadmap
		</StyledTermsText>
	</TermsAndConditions>
);

const TermsAndConditions = styled.div`
	flex-wrap: wrap;
	align-items: flex-start;
	flex-direction: row;
	margin-top: ${({ theme }) => theme.spacing.base};
`;

const StyledTermsText = styled.p`
	color: ${({ theme }) => theme.colors.bg};
    font-size: ${({ theme }) => theme.fz.small};
`;

const A = styled.a`
	border-bottom-width: 1px;
	border-bottom-color: ${({ theme }) => theme.colors.bg};
`;
