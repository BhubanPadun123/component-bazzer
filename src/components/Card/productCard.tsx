import React,{ReactNode} from "react";
import {
    Paper,
    Typography,
    useMediaQuery,
    Checkbox,
    Button,
    Tab,
    Tabs
} from "@mui/material"
import { useTheme } from "@mui/material/styles"
import { AccountBalanceWallet, ContactMailOutlined, WhatsApp } from "@mui/icons-material";

interface Town {
    name: string;
    lavel: string;
}

interface TabData {
    tabLabel: string;
    tabSubValue: Record<string, any>; // or use a more specific type if you know the structure of tabSubValue
}

interface KeyPoint {
    icon: ReactNode;
    title: string;
}

interface ContentData {
    headerTitle: string;
    keyPoint: KeyPoint[];
}


interface BPProductRegisterCardProp {
    townList: Town;
    tabData: TabData;
    contentData: ContentData;
    onSubmit: () => void;
}
export const BPProductRegisterCard: React.FC<BPProductRegisterCardProp> = (props) => {
    const {} = props
    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))

    const [state, setState] = React.useState({
        currentTabValue: "",
        subTabValue:"",
        selectedTown:"",
        name:"",
        email:"",
        mobileNumber:"",
        isCheckWhatsapp:false
    })
    const tabData = [
        {
            tabLabel: "Residential",
            tabSubValue: ["Rent", "Resale", "PG/Hostel", "Flatmates"],
        },
        {
            tabLabel: "Commercial",
            tabSubValue: ["Rent", "Sale"]
        },
        {
            tabLabel: "Land/Plot",
            tabSubValue: ["Rent", "Rent for condition", "Sale"]
        }
    ]
    const townList= [
        {
            name:"Jonai",
            lavel:"Jonai"
        },
        {
            name:"Silapother",
            lavel:"Silapother"
        },
        {
            name:"Pasighat",
            lavel:"Pasighat"
        },
        {
            name:"Simen chapori",
            lavel:"Simen chapori"
        },
        {
            name:"Dhemaji",
            lavel:"Dhemaji"
        },
        {
            name:"Dibrughar",
            lavel:"Dibrughar"
        },
        {
            name:"Dhemaji",
            lavel:"Dhemaji"
        }
    ]
    return (
        <Paper sx={{
            display: "flex",
            //justifyContent: "center",
            // alignItems: "center",
            flexDirection: isSmallScreen ? "column" : "row",
            border: "1px solid #e2e2e2",
            maxWidth: "1090px"
        }}>
            <Paper sx={{
                width: isSmallScreen ? "100%" : "30%",
                backgroundColor: "#f5f5f5",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                justifyContent: 'center',
                alignItems: "center"
            }}>
                <Typography variant={isSmallScreen ? 'h4' : "h6"} sx={{
                    fontFamily: "Lato",
                    fontWeight: 600,
                    fontStyle: "normal",
                    width: "100%",
                    textAlign: "center"
                }}>
                    Why Post through us?
                </Typography>
                <Typography sx={{
                    display: "flex",
                    width: "60%",
                    justifyContent: "space-around",
                    // gap:"8px",
                    textAlign: 'center'
                }}>
                    <AccountBalanceWallet />
                    <span style={{
                        fontSize: isSmallScreen ? "20px" : "12px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontFamily: "Lato"
                    }}>Zero Brokerage</span>
                </Typography>
                <Typography sx={{
                    display: "flex",
                    width: "60%",
                    justifyContent: "space-around",
                    // gap:"8px",
                    textAlign: 'center'
                }}>
                    <ContactMailOutlined />
                    <span style={{
                        fontSize: isSmallScreen ? "20px" : "12px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontFamily: "Lato"
                    }}>Faster Tenants</span>
                </Typography>
                <Typography sx={{
                    display: "flex",
                    width: "60%",
                    justifyContent: "space-around",
                    // gap:"8px",
                    textAlign: 'center'
                }}>
                    <AccountBalanceWallet />
                    <span style={{
                        fontSize: isSmallScreen ? "20px" : "12px",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontFamily: "Lato",
                        wordBreak: 'break-word',
                        width: "50%"
                    }}>10 lac tenants/buyers connections</span>
                </Typography>
            </Paper>
            <Paper
                sx={{
                    width: isSmallScreen ? "100%" : "60%",
                    flex: "1 0 0",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <div style={{
                    flex: "1 0 0",
                    display: "flex",
                    flexDirection: isSmallScreen ? "column" : "row",
                    justifyContent: "space-around",
                    width: "100%",
                    padding: "10px",
                    gap: "4px",
                    alignItems: "center"
                }}>
                    <input
                        style={{
                            height: "20px",
                            width: isSmallScreen ? "80%" : "40%"
                        }}
                        placeholder="Name"
                        value={state.name}
                        onChange={(e)=> {
                            setState((prevState)=> {
                                return {
                                    ...prevState,
                                    name:e.target.value
                                }
                            })
                        }}
                    />
                    <input
                        style={{
                            height: "20px",
                            width: isSmallScreen ? "80%" : "40%"
                        }}
                        placeholder="Email"
                        value={state.email}
                        onChange={(e)=> {
                            setState((prevState)=> {
                                return {
                                    ...prevState,
                                    email:e.target.value
                                }
                            })
                        }}
                        type="email"
                    />
                </div>
                <div style={{
                    flex: "1 0 0",
                    display: "flex",
                    flexDirection: isSmallScreen ? "column" : "row",
                    justifyContent: "space-around",
                    width: "100%",
                    padding: "10px",
                    gap: "4px",
                    alignItems: "center"
                }}>
                    <input
                        style={{
                            height: "20px",
                            width: isSmallScreen ? "80%" : "40%"
                        }}
                        placeholder="Mobile Number"
                        value={state.mobileNumber}
                        onChange={(e)=> {
                            setState((prevState)=> {
                                return {
                                    ...prevState,
                                    mobileNumber:e.target.value
                                }
                            })
                        }}
                    />
                    <select
                        style={{
                            height: "20px",
                            width: isSmallScreen ? "80%" : "40%",
                        }}
                        value={state.selectedTown}
                        onChange={(e)=> {
                            setState((prevState)=> {
                                return {
                                    ...prevState,
                                    selectedTown:e.target.value
                                }
                            })
                        }}
                    >
                        <option value={"none"} label={"none"} style={{fontFamily:"Lato",fontStyle:"normal",fontWeight:400 }} />
                        {
                            townList.map((t,index)=> (
                                <option value={t.name} label={t.lavel} key={index} style={{background:index % 2 === 0 ? "#967f3e" : "#7ed6bc",fontFamily:"Lato",fontStyle:"normal",fontWeight:400 }} />
                            ))
                        }
                    </select>
                </div>
                <div style={{
                    width: "90%",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px"
                }}>
                    <span style={{
                        fontFamily: "Lato",
                        fontWeight: 600,
                        fontSize: isSmallScreen ? "20px" : "16px"
                    }}>
                        Get Notification on
                    </span>
                    <span>
                        WhatsApp
                    </span>
                    <WhatsApp sx={{ color: "green" }} />
                    <Checkbox onChange={()=> {
                        setState((prevState)=> {
                            return {
                                ...prevState,
                                isCheckWhatsapp:!state.isCheckWhatsapp
                            }
                        })
                    }} />
                </div>
                <div style={{
                    marginTop: "8px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    width: "100%"
                }}>
                    <Typography variant="h5" sx={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: 700,

                    }}>
                        Property type
                    </Typography>
                    <div style={{
                        marginTop: "10px"
                    }}>
                        <Tabs
                            value={state.currentTabValue ? state.currentTabValue : tabData[0].tabLabel}
                            onChange={(event:any, newValue) => {
                                console.log(event)
                                setState((prevState) => {
                                    return {
                                        ...prevState,
                                        currentTabValue: newValue
                                    }
                                })
                            }}
                        >
                            {
                                tabData.map((item, index) => (
                                    <Tab
                                        value={item.tabLabel}
                                        label={item.tabLabel}
                                        key={index}
                                        sx={{
                                            ":hover": {
                                                background: "green"
                                            },
                                            padding: "4px",
                                            border: "2px solid #e8c156",
                                            fontFamily: "Lato",
                                            fontWeight: 600,
                                            fontStyle: "normal",
                                            background:state.currentTabValue === item.tabLabel ? "green" : ""
                                        }}
                                    />
                                ))
                            }
                        </Tabs>
                    </div>
                    <Paper sx={{
                        width: "80%",
                        border: "2px solid #b5a579",
                        background: "#aba79b",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection:"column"
                    }}>
                        <Typography sx={{
                            fontFamily:"Lato",
                            fontStyle:"normal",
                            fontWeight:700
                        }}>
                            Select Property Ad Type
                        </Typography>
                        {
                            tabData.map((item) => {
                                if (item.tabLabel === state.currentTabValue) {
                                    return (
                                        <div>
                                            <Tabs
                                              value={state.subTabValue ? state.subTabValue : tabData[0].tabSubValue[0]}
                                              onChange={(event:any,newVal)=> {
                                                console.log(event)
                                                setState((prevState)=> {
                                                    return {
                                                        ...prevState,
                                                        subTabValue:newVal
                                                    }
                                                })
                                              }}
                                            >
                                                {
                                                    item.tabSubValue.map((subValue, index) => (
                                                    <Tab 
                                                      sx={{ 
                                                        border:"2px solid #f5d889",
                                                        ":hover":{background:"yellow"},
                                                        fontFamily:"Lato",
                                                        fontStyle:"normal",
                                                        color:"white",
                                                        background:state.subTabValue === subValue ? "yellow" : ""
                                                    }} 
                                                    label={subValue}
                                                     value={subValue} 
                                                     key={index} 
                                                    />
                                                ))
                                                }
                                            </Tabs>
                                        </div>
                                    )
                                } else {
                                    return null
                                }
                            })
                        }
                    </Paper>
                </div>
                <div style={{
                    padding: "10px",
                    marginTop: "10px"
                }}>
                    <Button variant="outlined" sx={{ background: "#e3324a linear-gradient(90deg, #fd3752, #fd3752)", color: "white" }}>
                        Start Posting Your Ad For Free
                    </Button>
                </div>
            </Paper>
        </Paper>
    )
}

// BPProductRegisterCard.propTypes = {
//     townList:PropTypes.shape({
//         name:PropTypes.string,
//         lavel:PropTypes.string
//     }),
//     tabData:PropTypes.shape({
//         tabLabel:PropTypes.string,
//         tabSubValue:PropTypes.object
//     }),
//     contentData:PropTypes.shape({
//         headerTitle:PropTypes.string,
//         keyPoint:PropTypes.arrayOf(PropTypes.shape({
//             icon:PropTypes.node,
//             title:PropTypes.string
//         }))
//     }),
//     onSubmit:PropTypes.func
// }