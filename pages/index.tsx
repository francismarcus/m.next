import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import { getMyToken } from 'apollo';
import { useApolloClient } from '@apollo/react-hooks';
import Loading from 'components/lotties/Loading';
import { meQuery } from 'graphql/Query';
import { withApolloContext } from 'interfaces';

const Welcome = dynamic(() => import('components/Welcome'), { ssr: false });

const Page = ({ token }: { token: boolean }) => {
	const client = useApolloClient();
	const [redirect, setRedirect] = useState(false);

	useEffect(() => {
		if (token) return;
		else if (!token) {
			const myLocalToken = localStorage.getItem('token');

			if (myLocalToken) {
				client.writeData({
					data: {
						myToken: myLocalToken
					}
				});
				preFetchAndRoute();
			}
			if (!myLocalToken) {
				Router.replace('/', '/welcome', { shallow: true });
				setRedirect(true);
			}
		}
	}, [token]);

	if (token) {
		preFetchAndRoute();
	}

	if (redirect) return <Welcome />;

	async function preFetchAndRoute() {
		const response = await client.query({
			query: meQuery
		});

		// if (response.data)
	}

	return <Loading />;
};

Page.getInitialProps = async ({ apolloClient }: withApolloContext) => {
	const store: any = await apolloClient.cache.readQuery({
		query: getMyToken
	});
	const { myToken } = store;
	if (!myToken) return { token: false };
	if (myToken) return { token: true };
};

export default Page;

const useToken = () => {
	const client = useApolloClient();
	const [token, setToken] = React.useState();

	useEffect(() => {
		getToken();
	}, []);

	const getToken = async () => {
		const store: any = await client.cache.readQuery({
			query: getMyToken
		});
		const { myToken } = store;
		if (myToken) return setToken(myToken);
		if (!myToken) return tryLocalStorage();
	};

	const tryLocalStorage = async () => {
		const myLocalToken = await localStorage.getItem('token');
		if (myLocalToken) {
			await client.writeData({
				data: {
					myToken: myLocalToken
				}
			});
			setToken(myLocalToken);
			return;
		}
		if (!myLocalToken) return;
	};

	return token;
};

const useLocalToken = () => {
	const client = useApolloClient();
	const [token, setToken] = React.useState();

	useEffect(() => {
		getToken();
	}, []);

	const getToken = async () => {
		const myLocalToken = await localStorage.getItem('token');
		if (myLocalToken) {
			await client.writeData({
				data: {
					myToken: myLocalToken
				}
			});
			setToken(myLocalToken);
			return;
		}
		if (!myLocalToken) return;
	};

	return token;
};
