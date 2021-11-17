import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Test = () => {
    const dispatch = useDispatch();

    useEffect(() => {
		dispatch({ type: "TOGGLE_NAV" })
		return () => {
			dispatch({ type: "TOGGLE_NAV" })
		}
		// eslint-disable-next-line 
	}, [])
    return (
        <div>
        Hello World
        </div>
    )
}

export default Test;