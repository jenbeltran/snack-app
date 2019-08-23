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
						<p>
							Users can add snacks, buy snacks (via QR code), rate snacks, and even add snacks to the
							favourites page.
						</p>

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
						<CardImg src="https://lh3.googleusercontent.com/_q-iEEuoGlrBVHjT-yHonDHstkaz00pTkJawff29Hd9bq7avw8iKuCHP10b9Mt2fo-mHGF_r6L_VN3UbBX1HfNu0c0BmdtRyB3wy1hAX4c54y-6tGxGWzaE3IM0e723kFrA7__BzmNM93f7Jcf8fwfmbJYZS4k3bGSWEFmkc-daK2rsWA8Lj3tG3KrV3d7pf-r0p2gH6vFpF40vNGGGzoEs4cEmRCpk2skb2ShmfgO34v35nJZKlkdJus2m4GKY7yv-aNIKVQqeGvDulLDGqxTr325vm7kLyJvbBIu0JruqtnqXKu8aUM8_TaIGeUaRYbGS3fS4LGzLUAOeWeCemzLG1CeDZsmSTZqJPFRiDCSDRN1dTPTw-xcu6yVUCNB91Gw-Ih_19acjhOTqwaohOXg6aUUFedbwE68Cq1ln7RbbRCyzoiRj_1x4Cf3DE6-cMi_73P3jpEJgTLb5QS008BmLIE5-xx2znjS7WaTCSWTqEwJw5HTQtB6LyiPHH0oWtoARU5s9ytRCHtNLfvNEUszM9PSUA799tN5J84eujxL28fy54evDVr-n--eAvxJLQ7t_7vkIFYJ580uWTVpSOb36p1EzjmRs6BW3ucqkZv4Vj6SrPThZjhsLkRYLX5Dfd283FY6ykgtzjyr-GA_LsJFpv7ChJ9w-p8SjC8UcjYtfrSNHyHywYYHYx7ZvIplC5rl6Dk0moODWCztarjiHcQQ86=w1126-h1284-no" />
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
						<CardImg src="https://lh3.googleusercontent.com/yB83kpnsgx8niO1bu6tF7WgQv-Wy3rF5pAn1zYQyvRiO-8PkD2ySdBeDSE-oNUK5pjZdeYJ08E0k4nV576IDENruoUy-NvCZZM3BINLUYqf3Yyd-ZAG0t_r4qspGU5VmsAcUAxTfqSnhq965yW15WEj-KabvgFL-Cz0zsm16MAte1b3Bb0e4-2n-jmnyCHSW1f1I-wjsb3JUq9sdv2vagzSD6bMSKnNPg39dOFUY4aCR-Qeaok9xk6njhBnvJk0_APTlUOdPjQoRA_f6OiaJyZyzn9bewAF4lP0hBnMlnpaiu5rS-Dp71gNFpkBgzSRGn4mDNpLac21its-JK-Anrd4KKIQdceFmgglD1UCZjH8IghYdeRyD8sF3oL05BJN9AMj2JwrC3wug9bEetB_cg5s2h_-wE3_lrof4LG7tFMC4jkVHYu2tXcOGQ5mv-GMhDE8EtXWlr8IfKl9RTxlldAuSoNg30USxAtsjq0Lh26Om9CmKVHIq5dAr-7PBg0wztsZMn_KdErsdpbsCUUsUcHH3pOwQo-hu2X4Ry-IEJpRRkXDEq_MWbhuPrKRHhw4hLMN0YELuckTk4dP_yiTzLT7fX-HqZBGoMSWh4CPloQ7DMocOXxrn3mFV8HTEwwlUljC7wfiDQhy4CRGnv6kzZkvrywYMvFESrvzKPii-r3rxX-34UFQ3WB6RtGT1zRYuW-bBHWyfz4Kix66HMaWPvSVN=w539-h487-no" />
					</CardBody>
				</Col>
			</Row>
		</Container>
	</div>
);

export default About;
