import './Alert.css';

const Alert = props => {
	return(
		<div>
			<div style={{padding:'0 1em'}}>
				<div id="alert" className="text-center" style={props.style}>
					<p style={{margin:'1em 0'}}>Are you sure ?</p>
					<button className="btn btn-danger btn-block" onClick={props.onConfirm}>Yes</button>
				</div>
			</div>
			<div id="bg" onClick={props.close}></div>
		</div>
	)
}

export default Alert;