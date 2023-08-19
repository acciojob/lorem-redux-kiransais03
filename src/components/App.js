
import React, { useEffect } from "react";
import './../styles/App.css';
import { useSelector } from "react-redux";
import {useDispatch} from "react-redux";
import {fetchdata} from "../redux/actions/fetchdataActioncreator"

const App = () => {

  const apidata = useSelector((state)=>state);

        const dispatch= useDispatch();

    useEffect(()=>{
      dispatch(fetchdata);
      console.log("done",apidata)
    },[])

  return (
    <div>
        {/* Do not remove the main div */}
        {/* https://baconipsum.com/api/?type=meat-and-filler&paras=5&format=text */}
  <h1>Hello Lorem Ipusum</h1>
     {apidata}
    
    </div>
  )
}

export default App
