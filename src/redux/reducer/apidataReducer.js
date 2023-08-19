import { API_DATA } from "../actions/actionTypes";

const initialState="no data";

const apidataReducer = (state=initialState,action)=>{
    console.log(action)
    switch(action.type) {
        case API_DATA:return (action.payload);
        default:return state;
    }
}

export default apidataReducer;