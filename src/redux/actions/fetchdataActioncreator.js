import React from "react";
import { API_DATA } from "./actionTypes";
import axios from "axios"

export const postFetchSuccess = (data) => {
    return {
        type: API_DATA,
         payload: data
    }
}

export const fetchdata=()=>{

    return function(dispatch){
                fetch("https://baconipsum.com/api/?type=meat-and-filler&paras=5&format=text")
                .then((response)=>{
                           return response.text();
                        })
                        .then((data)=>{
                            dispatch(postFetchSuccess(data));
                            console.log("success")})
                     .catch((error)=>{
                         console.log(error);
                     })
   }
}
