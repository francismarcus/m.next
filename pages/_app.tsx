import React from 'react';
import App from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import withApollo from 'graphql/apollo';
import { createGlobalStyle } from 'styled-components';
import ThemeProvider from 'components/ThemeProvider';

const GlobalStyles = createGlobalStyle`
  body {
	font-family: 'Montserrat', sans-serif;
	height: 100%;
	width: 100%;
  }
`;

interface Props {
	apollo: any;
}

class MyApp extends App<Props> {
	render() {
		const { Component, pageProps, apollo } = this.props;
		return (
			<ApolloProvider client={apollo}>
				<ThemeProvider>
					<GlobalStyles />
					<Component {...pageProps} />
				</ThemeProvider>
			</ApolloProvider>
		);
	}
}

export default withApollo(MyApp);
