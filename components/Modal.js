import React from 'react';
import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalTemplate = (props) => {
	const [ modal, setModal ] = useState(false);

	const handleToggle = () => {
		setModal(!modal);
	};

	return (
		<div>
			<Button color="primary" size="sm" onClick={handleToggle}>
				Add Snack
			</Button>
			<Modal isOpen={modal} toggle={handleToggle}>
				<ModalHeader toggle={handleToggle}>Confirm Details</ModalHeader>
				<ModalBody>
					<h6>Snack Name: {props.name} </h6>
					<h6>Country of Origin: {props.country}</h6>
					<h6>Continent: {props.continent}</h6>
					<h6>Photo: </h6>
					<img src={props.photo} alt="snack image" width="200" height="100" />
				</ModalBody>
				<ModalFooter>
					<Button color="primary" onClick={props.onClick}>
						Submit
					</Button>{' '}
					<Button color="secondary" onClick={handleToggle}>
						Cancel
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
};

export default ModalTemplate;
