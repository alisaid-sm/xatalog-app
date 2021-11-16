import jwt from "jsonwebtoken";

export const LoginSuccess = (payload) => {
    return (dispatch) => {
        dispatch({type: "UPDATE_STATE_PERM", payload: jwt.decode(payload)});
    };
};