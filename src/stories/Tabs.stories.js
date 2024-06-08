import React from "react";
import {BPTabs} from "../index"
import {storiesOf} from "@storybook/react"

const stories = storiesOf('BPTabs',module)

stories.add("BPTabs",()=> {
    const [state,setState] = React.useState({
        currentTabValue:""
    })
    const tabData = {
        tabList:["Tab-1","Tab-2","Tab-3","Tab-4","Tab-5","Tab-6","Tab-7","Tab-8","Tab-9","Tab-10"]
    }
    return(
        <BPTabs 
           tabData={tabData}
           onTabChange={(e,newValue)=> {
            setState((prevState)=> {
                return {
                    ...prevState,
                    currentTabValue:newValue
                }
            })
           }}
           currentTabValue={state.currentTabValue}
           renderTabValue={
            <div>
                {
                    state.currentTabValue
                }
            </div>
           }
        />
    )
})