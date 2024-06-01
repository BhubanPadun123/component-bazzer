
import React from "react";
import ReactDOM from "react-dom"
import { BPButtom,BPIconButtom } from "../src/components/Button/index"

const App = () => {
  return (
    <div>
      <BPButtom 
         bg={"green"}
         btnText={"Click"}
         borderR={"20px"}
         style={{
          fontSize:"100px"
         }}
         onClick={(e)=> {
          console.log("skjdfjksdf")
         }}
      />
      <BPIconButtom 
         btnText={"IconButton"}
         iconType={"img"}
         btnStyle={{
          borderRadius:"10px"
         }}
         textStyle={{
          fontFamily:"Lato",
          fontSize:"30px"
         }}
         icon={"https://img.freepik.com/free-vector/beagle-dog-cartoon-white-background_1308-68249.jpg?w=826&t=st=1717222552~exp=1717223152~hmac=d180a67e3f8ddf0e7296c32c049e4beed0322938a710a649114767c96a16af44"}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));