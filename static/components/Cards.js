import React from 'react';
import Link from 'next/link';
import { Card, Container, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const CardTemplate = (props) => {
	return (
		<div data-testid={`card-${props.index}`}>
			<Card>
				<Container>
					<img width="200" height="100" src={props.photo} alt={`${props.name} photo`} />
					<CardBody>
						<CardTitle>
							<Link href={`/snack_details/${props.id}`}>
								<h5>
									<a>{props.name}</a>
								</h5>
							</Link>
						</CardTitle>
						<CardSubtitle>{props.country}</CardSubtitle>
						<CardText>{props.continent}</CardText>
						<Button color="dark" size="sm" href={`/snack_details/${props.id}`}>
							See Details
						</Button>
					</CardBody>
				</Container>
			</Card>
		</div>
	);
};

export default CardTemplate;
