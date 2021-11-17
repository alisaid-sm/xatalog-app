import { useEffect } from 'react';

const ChangeTitle = ({title}) => {
	useEffect(()=>{
		document.title = title
		return ()=>{
			document.title = 'Xatalog'
		}
	})
}
export default ChangeTitle;

export const ChangeTitleEslint = ({title}) => {
	useEffect(()=>{
		document.title = title
		return ()=>{
			document.title = 'Xatalog'
		}
		//eslint-disable-next-line
	}, [])
}