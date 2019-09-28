import React from 'react';
import App, { Container } from 'next/app';
import Layout from '../static/components/Layout';
import Navbar from '../static/components/Navbar';
import Footer from '../static/components/Footer';
import Head from 'next/head';
import ScrollUpButton from 'react-scroll-up-button';
import Headroom from 'react-headroom';

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return { pageProps };
	}

	render() {
		const { Component, pageProps } = this.props;

		return (
			<Container>
				<Head>
					<link rel="icon" href="/static/favicon.ico" />
					<link
						rel="stylesheet"
						href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
						integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
						crossorigin="anonymous"
					/>
					<link href="https://fonts.googleapis.com/css?family=Passion+One&display=swap" rel="stylesheet" />
				</Head>
				<Layout>
					<Headroom>
						<Navbar />
					</Headroom>
					<Component {...pageProps} />
					<ScrollUpButton />
					<Footer />
				</Layout>
			</Container>
		);
	}
}

export default MyApp;
