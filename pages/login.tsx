import styled from 'styled-components';
import LoginForm from 'components/LoginForm';


export default () => {
	

	return (
		<FlexBox>
			<Wrapper>
				<StyledText>Login</StyledText>
				<LoginForm />
			</Wrapper>
		</FlexBox>
	);
};


const FlexBox = styled.div`
	display: flex;
	flex: 1;
	background-color: ${({ theme }) => theme.colors.primary};
	height: 100vh;
	width: 100%;
`;

const Wrapper = styled.div`
	margin-top: 20%;
	flex: 1;
	margin-left: ${({ theme }) => theme.spacing.small};
	margin-right: ${({ theme }) => theme.spacing.small};
`;

const StyledText = styled.p`
	font-size: ${({ theme }) => theme.fz.t3};
	color: ${({ theme }) => theme.colors.bg};
	margin-bottom: ${({ theme }) => theme.spacing.base};
`;
