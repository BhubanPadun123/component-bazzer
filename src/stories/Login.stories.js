import React from "react";
import {storiesOf} from "@storybook/react"
import {BPLogin} from "../components/Login/index"


const stories = storiesOf('BPLogin',module)

stories.add('BPLogin',()=> {
    return(
        <BPLogin />
    )
})