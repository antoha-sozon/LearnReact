import React from "react";
import ModalOpen from "./modal-open";
 
class ModalBtnOpen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: 'none'
		};
	}
	openModal() {
		this.setState({modal: 'block'})
	}
	closeModal() {
		this.setState({modal: 'none'})
	}

	render() {
		return [
			<button onClick={ this.openModal.bind(this) }>Открыть окно</button>,
			this.state.modal === 'block' && <ModalOpen closeModal={this.closeModal.bind(this)}/>
		] 
	}
}

export default ModalBtnOpen;

