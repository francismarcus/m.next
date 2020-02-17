import React from 'react';
import { Form } from 'formik';
import AuthInput from 'components/AuthInput';
import AuthButton from 'components/AuthButton'
import { ApolloError } from 'apollo-client';

const LoginForm: React.FC<Props> = ({ error, ...props }) => (
	<Form>
		<AuthInput name="email" placeholder="Email" label="Email" />
		<AuthInput name="password" placeholder="Password" label="Password" type="password" />

		{error && <p> {error.graphQLErrors[0].message} </p>}
		<AuthButton> 👉 </AuthButton>
	</Form>
);

interface Props {
	error: ApolloError | undefined;
}

export default LoginForm;
