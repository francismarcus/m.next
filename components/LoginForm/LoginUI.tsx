import React from 'react';
import { Form } from 'formik';
import AuthInput from 'components/AuthInput';
import AuthButton from 'components/AuthButton'
import { ApolloError } from 'apollo-client';
import styled from 'styled-components'

const LoginForm: React.FC<Props> = ({ error, loading, ...props }) => (
	<Form>
		<StyledForm loading={loading}>
			<AuthInput name="email" label="Email" />
			<AuthInput name="password" label="Password" type="password" />

			{error && <p> {error.graphQLErrors[0].message} </p>}
			<AuthButton> 👉 </AuthButton>
		</StyledForm>
	</Form>
);

interface Props {
	error: ApolloError | undefined;
	loading: any
}

export default LoginForm;

const StyledForm = styled.div<StyledFormProps>`
	opacity: ${props => props.loading ? '25%' : '100'};
`

interface StyledFormProps {
	loading: boolean;
}