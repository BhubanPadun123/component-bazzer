import {BPPropertyRegisterForm} from "../index.js"
import {storiesOf} from "@storybook/react"
import React from "react"

const Stories = storiesOf("BPPropertyRegisterForm",module)

Stories.add("BPProppertyRegisterForm",()=>{
    const formData = [
        {
            fieldType:"text",
            labelName:"Your Name",
            isMandatory:false,
            placeHolder:"Enter Your Name",
            value:""
        },
        {
            fieldType:"text",
            labelName:"Mobile number",
            isMandatory:false,
            placeHolder:"Enter Your Mobile Number",
            value:""
        },
        {
            fieldType:"text",
            labelName:"Email",
            isMandatory:false,
            placeHolder:"Enter Your Email",
            value:""
        },
        {
            fieldType:"select",
            labelName:"Select Property",
            isMandatory:false,
            placeHolder:"Enter Your Name",
            value:"",
            options:["sakj", "djfjksdf", "dskjfksd", "skjdfhsdf", "dskjfhjks", "skjfjksdf"]
        }
    ]
    return(
        <BPPropertyRegisterForm
            formData={formData}
         />
    )
})