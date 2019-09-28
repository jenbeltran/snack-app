import { Container, Row, Col, CardTitle, CardBody, CardImg } from 'reactstrap';

const About = () => (
	<div>
		<Container>
			<h1>About This Application</h1>
			<Row>
				<Col sm="8">
					<CardBody>
						<CardTitle>
							<h3>Welcome to my capstone course project!</h3>
						</CardTitle>
						<p>Pick My Snack is a web application that connects snacks enthusiasts together.</p>
						<p>Users can add snacks, buy snacks (via QR code), and select favourites.</p>

						<p>Development stack used: React, Express, Node, NextJS, MySQL</p>
					</CardBody>
					<CardBody>
						<CardTitle>
							<h3>Please Note</h3>
						</CardTitle>
						<p>The deployment of this app is simply for project showcasing purposes, not for public use.</p>
						<p>I don't own rights or ownership to any uploaded photos.</p>
						<div id="copyright">
							Icons made by{' '}
							<a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">
								Roundicons
							</a>{' '}
							from{' '}
							<a href="https://www.flaticon.com/" title="Flaticon">
								www.flaticon.com
							</a>{' '}
							is licensed by{' '}
							<a
								href="http://creativecommons.org/licenses/by/3.0/"
								title="Creative Commons BY 3.0"
								target="_blank"
							>
								CC 3.0 BY.
							</a>
						</div>
					</CardBody>
				</Col>
				<Col sm="4">
					<CardBody>
						<CardImg src="static/popsicle.png" />
					</CardBody>
				</Col>
			</Row>
			<h1>About Me</h1>
			<Row>
				<Col sm="7">
					<CardBody>
						<p>
							I'm Jen Beltran and I'm a Full Stack Web Development Student at York University (expected
							graduation November 2019).
						</p>
						<p>I built this app to showcase my knowledge from design to deployment.</p>

						<p>I'm a big foodie and I love snacks. I'm always on the hunt for new cool snacks to try.</p>
					</CardBody>
				</Col>
				<Col sm="4">
					<CardBody>
						<CardImg src="static/headshot.jpg" />
					</CardBody>
				</Col>
			</Row>
		</Container>
	</div>
);

export default About;
