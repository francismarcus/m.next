import React from 'react';
import { Form } from 'formik';
import AuthInput from 'components/AuthInput';
import AuthButton from 'components/AuthButton';
import { ApolloError } from 'apollo-client';
import styled from 'styled-components';
import FadeIn from 'components/FadeIn';

const LoginForm: React.FC<Props> = ({ error, isLoading, ...props }) => (
	<Form>
		<StyledForm isLoading={isLoading}>
			<FadeIn delay={50}>
				<AuthInput name="email" label="Email" />
				<AuthInput name="password" label="Password" type="password" />

				{error && <p> {error.graphQLErrors[0].message} </p>}
				<AuthButton> 👉 </AuthButton>
			</FadeIn>
		</StyledForm>
	</Form>
);

interface Props {
	error: ApolloError | undefined;
	isLoading: boolean;
}

export default LoginForm;

const StyledForm = styled.div<StyledFormProps>`
	opacity: ${props => (props.isLoading ? '25%' : '100')};
`;

interface StyledFormProps {
	isLoading: boolean;
}
