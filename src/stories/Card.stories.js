import React from "react";
import {storiesOf} from "@storybook/react"
import {BPCard,BPCardSecondary} from "../index"


const stories = storiesOf("BPCard",module)

stories.add("BPCardPrimary",()=>{

    return (
        <BPCard />
    )
})

stories.add("BPCardSecondary",()=>{


    return(
        <BPCardSecondary />
    )
})