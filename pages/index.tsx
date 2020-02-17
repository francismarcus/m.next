import React, { useEffect } from 'react';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import { getMyToken } from 'apollo';
import { useApolloClient } from '@apollo/react-hooks';
import Loading from 'components/lotties/Loading';

const Welcome = dynamic(() => import('components/Welcome'), { ssr: false });

const Page = () => {
	const token = useToken();

	useEffect(() => {
		if (token) return;
		//else Router.replace('/', '/welcome', { shallow: true });
	}, [token]);


	if (!token) return <Welcome />
	if (token) console.log(token)


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
		const tryLocalStorage = async () => {
			const myLocalToken = await localStorage.getItem('token');

			if (!myLocalToken) return;
			if (myLocalToken) {
				await client.writeData({
					data: {
						myToken: myLocalToken
					}
				});
				setToken(myLocalToken);
				return;
			}
		};

		const store: any = await client.cache.readQuery({
			query: getMyToken
		});
		const { myToken } = store;
		if (!myToken) return tryLocalStorage();
		if (myToken) return setToken(myToken);
	};

	return token;
};
