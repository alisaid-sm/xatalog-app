import './Popup.css';

const Popup = props => {
	return(
		<div>
			<div style={{padding:'0 1em'}}>
				<div id="popup" style={props.style}>
					<h2 className='close' onClick={props.close}>X</h2>
					{props.children}
				</div>
			</div>
			<div id="bg" onClick={props.close}></div>
		</div>
	)
}

export default Popup;