import { Formik } from 'formik';
import { schema } from './schema';
import LoginUI from './LoginUI';
import { useLoginMutation } from 'graphql/generated';
import Router from 'next/router';

export default () => {
	const [login, { error, client, loading }] = useLoginMutation();

	if (error) console.log(error)
	if (loading) console.log(loading)

	return (
		<Formik
			initialValues={{
				email: '',
				password: ''
			}}
			validationSchema={schema}
			onSubmit={async ({ email, password }: FieldProps) => {
				const response = await login({
					variables: { credentials: { email, password } }
				});

				const { token } = response.data!.login;
				if (token && client) {
					client.writeData({
						data: {
							myToken: token
						}
					});
					await localStorage.setItem('token', token);
					return Router.push('/');
				}
			}}
		>
			<LoginUI error={error} loading={loading} />
		</Formik>
	);
};

interface FieldProps {
	email: string;
	password: string;
}
