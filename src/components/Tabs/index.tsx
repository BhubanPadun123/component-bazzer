import React, { ReactNode } from "react";
import {
    Tabs,
    Tab,
    Box,
    useMediaQuery,
    styled,
    Paper,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    Typography
} from "@mui/material"
import { useTheme } from "@mui/material/styles"
import {
    More
} from "@mui/icons-material"

interface BoxProp {
    screen: boolean,
    width: string
}

const BPBox = styled(Box)<BoxProp>(({ screen, width }) => ({
    width: width ? `${width}` : "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: screen ? "row" : "column",
    gap: screen ? "4px" : "0px"
}))
const BPCTabs = styled(Tabs)(() => ({
    //padding:"0px",
    margin: "0px",
    border: "2px solid #dae3f2",
}))

interface TabsContainProp {
    screen: boolean
}

const TabsContain = styled(Paper)<TabsContainProp>(({ }) => ({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
}))

interface BPCTabProp {
    screen: boolean
}
const BPCTab = styled(Tab)<BPCTabProp>(({
    screen
}) => ({
    // padding:"0px",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "12px",
    ":hover": {
        color: "red",
        background: "#78a4eb"
    },
    display: screen ? "none" : "flex",
    justifyContent: "center",
    alignItems: screen ? "start" : "center",
    textAlign: screen ? "left" : "center",
    borderRight: screen ? "" : "2px solid #b1c5e6",
    borderBottom: screen ? "2px solid #b1c5e6" : "none"
}))

interface BPDrawerProp {
    width: string
}
const BPDrawer = styled(Drawer)<BPDrawerProp>(({
    width
}) => ({
    width: width,
    zIndex: 10
}))
const BPList = styled(List)(() => ({
    position: "relative",
    width: "100%",
    zIndex: 10
}))

interface BPTabsProp{
    tabData:{
        tabList:object
    },
    onTabChange:(event:any,newValue:string)=> void,
    currentTabValue:string,
    renderTabValue:ReactNode
}

export const BPTabs:React.FC<BPTabsProp> = (props) => {

    const {
        tabData,
        onTabChange,
        currentTabValue,
        renderTabValue
    } = props

    const [state, setState] = React.useState({
        openDrawer: false,
        defaultTabValue:Array.isArray(tabData.tabList) && tabData.tabList[0]
    })


    const theme = useTheme()
    const isSmallScreen: boolean = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <BPBox
            screen={isSmallScreen}
            width={"100%"}
        >
            {
                !isSmallScreen && (
                    <BPCTabs
                        orientation={isSmallScreen ? "vertical" : "horizontal"}
                        value={currentTabValue ? currentTabValue : state.defaultTabValue}
                        onChange={(event,newValue)=> {
                            onTabChange && onTabChange(event,newValue)
                        }}
                    >
                        {
                            Array.isArray(tabData.tabList) && tabData.tabList.length > 0 && 
                            tabData.tabList.map((item,index)=> (
                                <BPCTab 
                                   key={index}
                                   screen={isSmallScreen}
                                   label={item}
                                   value={item}
                                />
                            ))
                        }
                    </BPCTabs>
                )
            }
            <TabsContain screen={isSmallScreen}>
                {
                    isSmallScreen && (
                        <Typography sx={{
                            width:"100%",
                            display:"flex",
                            justifyContent:"flex-end"
                        }}>
                            <IconButton onClick={() => {
                                setState((prevState) => {
                                    return {
                                        ...prevState,
                                        openDrawer: !state.openDrawer
                                    }
                                })
                            }}>
                                <More />
                            </IconButton>
                        </Typography>
                    )
                }
                {
                    renderTabValue && renderTabValue
                }
            </TabsContain>
            <BPDrawer
                open={state.openDrawer}
                onClose={() => {
                    setState((prevState) => {
                        return {
                            ...prevState,
                            openDrawer: !state.openDrawer
                        }
                    })
                }}
                width="50%"
                sx={{
                    '& .MuiPaper-root': {
                        position: "relative"
                    }
                }}
            >
                <BPList sx={{
                    position: "relative",
                    width: "100%"
                }}>
                    {
                        Array.isArray(tabData.tabList) && tabData.tabList.length > 0 &&
                        tabData.tabList.map((item, index) => (
                            <ListItem key={index} disablePadding sx={{ 
                                background: index % 2 === 0 ? "#e0aeab" : "#6de8c5",
                                backgroundColor: item === currentTabValue ? "#aebdb8" : ""
                            }}>
                                <ListItemButton onClick={()=> {
                                    setState((prevState)=> {
                                        return {
                                            ...prevState,
                                            openDrawer:!state.openDrawer
                                        }
                                    })
                                    onTabChange && onTabChange(index,item)
                                }}>
                                    <Typography sx={{
                                        width:"100%",
                                        height:"100%",
                                        textAlign:"center",
                                        fontFamily:"Lato",
                                        fontWeight:700,
                                        fontStyle:"normal"
                                    }}>
                                        {
                                            item
                                        }
                                    </Typography>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </BPList>
            </BPDrawer>
        </BPBox>
    )
}
