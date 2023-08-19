import React from "react";
import { API_DATA } from "./actionTypes";

export const fetchdata=()=>{

    return(async function(dispatch) {
        try {
            let response =await fetch("https://baconipsum.com/api/?type=meat-and-filler&paras=5&format=text");
            let data=await response.json();
           
            dispatch({type:API_DATA,
                payload:data,}) 
             }
             catch(error) {
                 console.log(error);
             }
    })
    

}
