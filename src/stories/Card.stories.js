import React from "react";
import {storiesOf} from "@storybook/react"
import {BPMobileCard} from "../components/Card/mobileCard"


const stories = storiesOf("BPMCard",module)

stories.add("BPMCard",()=> {
    return(
        <BPMobileCard />
    )
})