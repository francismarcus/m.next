import React, { useEffect } from 'react';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import { getMyToken } from 'apollo';
import { useApolloClient } from '@apollo/react-hooks';
import Loading from 'components/lotties/Loading';
import { meQuery } from 'graphql/Query';

const Welcome = dynamic(() => import('components/Welcome'), { ssr: false });

const Page = () => {
	const token = useToken();
	const client = useApolloClient();

	useEffect(() => {
		if (token) return;
		// Router.replace('/', '/welcome', { shallow: true });
	}, [token]);

	if (!token) return <Welcome />;
	if (token) {
		preFetchAndRoute();
	}

	async function preFetchAndRoute() {
		const response = await client.query({
			query: meQuery
		});
		console.log(response);
	}

	return <Loading />;
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
