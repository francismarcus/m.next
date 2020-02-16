import styled from 'styled-components';
import HomeButton from 'components/HomeButton';
import TermsAndConditions from 'components/TermsAndConditions';

export default () => (
	<Flexbox>
		<Wrapper>
			<Emoji> 💪</Emoji>
			<StyledText> Welcome to Myprogram </StyledText>
			<HomeButton onClick={() => console.log('login')}> Login </HomeButton>
			<HomeButton onClick={() => console.log('acc')}> Create account </HomeButton>
		</Wrapper>
	</Flexbox>
);

const StyledText = styled.p`
	font-size: ${({ theme }) => theme.fz.t3};
	font-weight: 500;
	color: ${({ theme }) => theme.colors.bg};
	margin-bottom: ${({ theme }) => theme.spacing.xlarge};
`;
const Emoji = styled.p`
	font-size: ${({ theme }) => theme.fz.t1};
	margin-bottom: ${({ theme }) => theme.spacing.base};
	margin-right: auto;
`;

const Wrapper = styled.div`
	flex: 1;
	display: flex;
	margin-top: 10%;
	margin-left: ${({ theme }) => theme.spacing.small};
	margin-right: ${({ theme }) => theme.spacing.small};
	flex-direction: column;
`;

const Flexbox = styled.div`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.primary};
	height: 100vh;
	display: flex;
`;
