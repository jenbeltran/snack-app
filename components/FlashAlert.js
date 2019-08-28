import React from 'react';
import FlashMessage from 'react-flash-message';
import { Alert } from 'reactstrap';

const FlashAlert = (props) => (
	<FlashMessage duration={3000}>
		<Alert color={props.color}>{props.message}</Alert>
	</FlashMessage>
);

export default FlashAlert;
