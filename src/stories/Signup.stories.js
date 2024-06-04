import React from "react";
import {storiesOf} from "@storybook/react"
import {BPSignUp} from "../components/Signup/index"

const stories = storiesOf("BPSignup",module)

stories.add('BPSignup',()=> {
    return(
        <BPSignUp />
    )
})