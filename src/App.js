import React from "react";   

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
			<button onClick={this.openModal.bind(this)}>Открыть окно</button>,
			this.state.modal === 'block' && <ModalOpen closeModal={this.closeModal.bind(this)}/>
		] 
	}
}

class ModalBtnClose extends React.Component {
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
			<button onClick={this.closeModal.bind(this)}>Закрыть окно</button>,
			this.state.modal === 'none' && <ModalOpen openModal={this.openModal.bind(this)}/>
		] 
	}
} 

class Modals extends React.Component {  
	render() {
		return (<h2>Модалка на React Js</h2>)
	}
}

class ModalOpen extends React.Component {	
	render() {
		return (
			<div>
				<h2>Всплывающее окно</h2>
  	 		 	<ModalBtnClose /> 
			</div>
		)
	}
} 

class App extends React.Component {
  render() {
    return (
    	<div> 
      	  <Modals />
      	  <ModalBtnOpen /> 
 	 	</div>
    )
  }
}

export default App;