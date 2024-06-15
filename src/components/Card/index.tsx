import React from "react";
import {
    Box,
    Typography,
    styled,
    useMediaQuery,
    Paper,
    Button
} from "@mui/material"
import { useTheme } from "@mui/material/styles"

interface BPBoxProp {
    isSmallScreen: boolean
}
const BPBox = styled(Box)<BPBoxProp>(({
    isSmallScreen
}) => ({
    width: isSmallScreen ? "160px" : "400px",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: "#25f7bc",
    ":hover": {
        background: "#dcf7f0",
        cursor: "pointer",
        opcacity: 0.4
    },
    padding: "8px"
}))

interface BPPaperProp {
    imgUrl: string,
    isSmallScreen: boolean
}
const BPPaper = styled(Paper)<BPPaperProp>(({
    imgUrl,
    isSmallScreen
}) => ({
    width: "100%",
    backgroundImage: `url(${imgUrl})`,
    height: isSmallScreen ? "250px" : "450px",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    ":hover": {
        opcacity: "0.5"
    }
}))

const ButtonWrapper = styled(Typography)(() => ({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    padding: "10px"
}))

interface BPCardProp {
    imgUrl: string,
    cardData: object,
    onCardView: (e: any) => void,
    onCardAdd: (e: any) => void,
    buttonTitle: {
        btn_1: string,
        btn_2: string
    }
}
export const BPCard: React.FC<BPCardProp> = (props) => {
    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))
    const {
        imgUrl,
        cardData,
        onCardAdd,
        onCardView
    } = props


    return (
        <BPBox
            isSmallScreen={isSmallScreen}
        >
            <BPPaper
                imgUrl={imgUrl ? imgUrl : "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"}
                isSmallScreen={isSmallScreen}
            >
            </BPPaper>
            <ButtonWrapper>
                <Button variant='outlined' onClick={() => {
                    onCardView && onCardView(cardData)
                }}>
                    {
                        props.buttonTitle && props.buttonTitle.btn_1 ? props.buttonTitle.btn_1 : "Click 1"
                    }
                </Button>
                <Button variant='outlined' onClick={() => {
                    onCardAdd && onCardAdd(cardData)
                }}>
                    {
                        props.buttonTitle && props.buttonTitle.btn_2 ? props.buttonTitle.btn_2 : "Click 2"
                    }
                </Button>
            </ButtonWrapper>
        </BPBox>
    )
}

interface BPCardSecondaryProp {
    imgUrl: string,
    addressDetails: string,
    propertyDetails: string,
    rentDetails: string,
    rentStatus: string,
    ownerDatails: string,
    amountDetail: string,
    metaData: object,
    buttonTitle: {
        btn_1: string,
        btn_2: string
    },
    onButtonClick: {
        onClickBtn_1: (e: object) => void,
        onClickBtn_2: (e: object) => void
    }
}
export const BPCardSecondary: React.FC<BPCardSecondaryProp> = (props) => {
    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))
    const {
        imgUrl,
        addressDetails,
        propertyDetails,
        rentDetails,
        rentStatus,
        ownerDatails,
        amountDetail,
        metaData,
        buttonTitle,
        onButtonClick
    } = props
    return (
        <Paper sx={{
            width: isSmallScreen ? "100%" : "80%",
            border: "2px solid #d995ed",
            ":hover": {
                background: "#a1e3d0",
                opacity: 0.8
            },
            display: "flex",
            gap: "4px",
            flexDirection: isSmallScreen ? "column" : "row",
            padding: isSmallScreen ? "2px" : "10px",
            background: "#bdb4bf",
            overflow: "hidden"
        }}>
            <Paper sx={{
                width: isSmallScreen ? "100%" : "40%",
                border: "1px solid green",
                height: isSmallScreen ? "200px" : "300px",
                backgroundImage: imgUrl ? `url(${imgUrl})` : `url(${"https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
            </Paper>
            <Paper sx={{
                width: isSmallScreen ? "98%" : "60%",
                border: "1px solid green",
                background: "#a35897",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                padding: isSmallScreen ? "4px" : "10px",
                minHeight: isSmallScreen ? "100px" : "auto",
                maxHeight: isSmallScreen ? "auto" : "auto",
                gap: "10px"
            }}>
                <Box sx={{
                    width: "100%",
                    //background: "#c4b7c2",
                    display: "flex",
                    flexDirection: 'row',
                    justifyContent: "space-around",
                    //borderRadius: "12px",
                    height: "auto",
                    gap: "2px"
                }}>

                    <Typography sx={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: 700,
                        textAlign: 'center',
                        padding: "4px",
                        width: "50%",
                        wordBreak: 'break-word',
                        display: "flex",
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        background: "#c4b7c2",
                        borderRadius: "12px"
                    }}>
                        <Typography variant="h6" sx={{ fontFamily: "monospace", fontWeight: 800, width: "100%", borderBottom: "1px solid #8a7371" }}>Aminities</Typography>
                        {propertyDetails ? propertyDetails : `Propperty details`}
                    </Typography>
                    <Typography sx={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: 700,
                        textAlign: 'center',
                        padding: "4px",
                        width: "50%",
                        wordBreak: 'break-word',
                        display: "flex",
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        background: "#c4b7c2",
                        borderRadius: "12px"
                    }}>
                        <Typography variant="h6" sx={{ fontFamily: "monospace", fontWeight: 800, width: "100%", borderBottom: "1px solid #8a7371" }}>Address</Typography>
                        {addressDetails ? addressDetails : `Address Details`}
                    </Typography>
                </Box>
                <Box sx={{
                    width: "100%",
                    //background: "#c4b7c2",
                    display: "flex",
                    flexDirection: 'row',
                    justifyContent: "space-around",
                    //borderRadius: "12px",
                    gap: "2px",
                }}>
                    <Typography sx={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: 700,
                        textAlign: 'center',
                        padding: "4px",
                        width: "50%",
                        wordBreak: 'break-word',
                        display: "flex",
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        background: "#c4b7c2",
                        borderRadius: "12px"
                    }}>
                        <Typography variant="h6" sx={{ fontFamily: "monospace", fontWeight: 800, width: "100%", borderBottom: "1px solid #8a7371" }}>About Room</Typography>
                        {rentDetails ? rentDetails : 'Rent Details'}
                    </Typography>
                    <Typography sx={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: 700,
                        textAlign: 'center',
                        padding: "4px",
                        width: "50%",
                        wordBreak: 'break-word',
                        display: "flex",
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        background: "#c4b7c2",
                        borderRadius: "12px"
                    }}>
                        <Typography variant="h6" sx={{ fontFamily: "monospace", fontWeight: 800, width: "100%", borderBottom: "1px solid #8a7371" }}>Status</Typography>
                        {rentStatus ? rentStatus : "Room Status"}
                    </Typography>
                </Box>
                <Box sx={{
                    width: "100%",
                    // background: "#c4b7c2",
                    display: "flex",
                    flexDirection: 'row',
                    justifyContent: "space-around",
                    // borderRadius: "12px",
                    height: "auto",
                    gap: "2px"
                }}>
                    <Typography sx={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: 700,
                        textAlign: 'center',
                        padding: "4px",
                        width: "50%",
                        wordBreak: 'break-word',
                        display: "flex",
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        background: "#c4b7c2",
                        borderRadius: "12px"
                    }}>
                        <Typography variant="h6" sx={{ fontFamily: "monospace", fontWeight: 800, width: "100%", borderBottom: "1px solid #8a7371" }}>Owner</Typography>
                        {ownerDatails ? ownerDatails : 'Property owner Details'}
                    </Typography>
                    <Typography sx={{
                        fontFamily: "Lato",
                        fontStyle: "normal",
                        fontWeight: 700,
                        textAlign: 'center',
                        padding: "4px",
                        width: "50%",
                        wordBreak: "break-word",
                        display: "flex",
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        background: "#c4b7c2",
                        borderRadius: "12px"
                    }}>
                        <Typography variant="h6" sx={{ fontFamily: "monospace", fontWeight: 800, width: "100%", borderBottom: "1px solid #8a7371" }}>Amount</Typography>
                        {amountDetail ? amountDetail : "Rent amount detailsfsdfsd dwfsdf dsfsd fdf"}
                    </Typography>
                </Box>
                <Box sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: 'row',
                    justifyContent: 'center',
                    gap:"8px"
                }}>
                    <Typography >
                        <Button variant="contained"
                            onClick={() => {
                                onButtonClick && onButtonClick.onClickBtn_1(metaData)
                            }}
                        >
                            {buttonTitle && buttonTitle.btn_1 ? buttonTitle.btn_1 : "View Card"}
                        </Button>
                    </Typography>
                    <Typography >
                        <Button variant="contained"
                            onClick={() => {
                                onButtonClick && onButtonClick.onClickBtn_2(metaData)
                            }}
                        >
                            {buttonTitle && buttonTitle.btn_2 ? buttonTitle.btn_2 : "Add Card"}
                        </Button>
                    </Typography>
                </Box>
            </Paper>
        </Paper>
    )
}