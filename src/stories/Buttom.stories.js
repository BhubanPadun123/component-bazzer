import React from "react";
import {storiesOf} from "@storybook/react"
import {
    BPButtom,
    BPIconButtom
} from "../components/Button/index"

const stories = storiesOf("BPButton",module)
stories.add("BPButton",()=>{
    return(
        <BPButtom
           btnText={"Click button"}
        />
    )
})
stories.add("BPIconButtom",()=>{
    return(
        <BPIconButtom 
          btnText={"Button with icon"}
          iconStyle={"img"}
          icon={"https://img.freepik.com/free-vector/sticker-template-with-single-house-isolated_1308-64529.jpg?w=996&t=st=1717308632~exp=1717309232~hmac=50fb46f667e4fe35168bbf9f85ece428bdc12d2463a20df585c97294f1ac79e0"}
          textStyle={{
            color:"red",
            fontStyle:"nomal"
          }}
          iconType={{
            width:"100%"
          }}
        />
    )
})