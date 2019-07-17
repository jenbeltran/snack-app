// import React, { Component } from 'react';
// import axios from 'axios';

// const Asia = ({ posts }) => {
// 	return (
// 		<div>
// 			<h1>Asia</h1>
// 			<ul>{posts.map((post) => <li>{post.name}</li>)}</ul>
// 		</div>
// 	);
// };

// Index.getInitialProps = async () => {
// 	const res = axios.get('http://localhost:3000/asia');
// 	const { data } = res;
// 	return { posts: data };
// };

// export default Asia;

export default class Asia extends Component {
	constructor(props) {
		super(props);

		this.state = {
			snacks : []
		};
	}

	test() {
		fetch('http://localhost:3000/asia').then((asianSnacks) => {
			console.log(asianSnacks);
			// this.setState({ snacks: snacks.name });
		});
	}

	render() {
		return <div>{this.state.snacks}</div>;
	}
}
