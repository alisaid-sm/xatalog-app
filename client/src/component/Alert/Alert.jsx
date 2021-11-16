import './Alert.css';

const Alert = props => {
	return(
		<div>
			<div style={{padding:'0 1em'}}>
				<div id="alert" className="text-center" style={props.style}>
					<img src="/img/Check.svg" alt="Check.svg" />
					<p style={{margin:'1em 0'}}>{props.text}</p>
					<button className="btn btn-success" onClick={props.close}>OK</button>
				</div>
			</div>
			<div id="bg" onClick={props.close}></div>
		</div>
	)
}

export default Alert;