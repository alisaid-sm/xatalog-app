import { useEffect } from 'react';

const ChangeTitle = ({title}) => {
	useEffect(()=>{
		document.title = title
		return ()=>{
			document.title = 'Dawetinyong'
		}
	})
}
export default ChangeTitle;

export const ChangeTitleEslint = ({title}) => {
	useEffect(()=>{
		document.title = title
		return ()=>{
			document.title = 'Dawetinyong'
		}
		//eslint-disable-next-line
	}, [])
}