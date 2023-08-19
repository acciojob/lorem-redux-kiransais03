
import React, { useEffect } from "react";
import './../styles/App.css';
import { useSelector } from "react-redux";
import {useDispatch} from "react-redux";
import {fetchdata} from "../redux/actions/fetchdataActioncreator"

const App = () => {

  const apidata = useSelector((state)=>state);

        const dispatch= useDispatch();

    useEffect(()=>{
      dispatch(fetchdata());
      console.log("done",apidata);
    },[])

  return (
    <div>
      <h1>Hello Lorem Ipusum</h1>
     {apidata}
    </div>
  )
}

export default App
