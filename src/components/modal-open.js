import React from "react";
import ModalBtnClose from "./btn-close";
 
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

export default ModalOpen;