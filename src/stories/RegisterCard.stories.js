import React from "react";
import {storiesOf} from "@storybook/react"
import {BPProductRegisterCard} from "../index"

const Stories = storiesOf("BPProductRegisterCard",module)

Stories.add("BPProductRegisterCard",()=> {
    return(
        <BPProductRegisterCard />
    )
})