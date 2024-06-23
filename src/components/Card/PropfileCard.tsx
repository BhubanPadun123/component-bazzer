import React from "react";
import PropTypes from "prop-types"
import {
    Paper,
    Typography,
    styled,
    useMediaQuery
} from "@mui/material"
import {useTheme} from "@mui/material/styles"
import {
    LocationCity
} from "@mui/icons-material"

interface WrapperProp{
    size:string,
    img:string
}
const Wrapper = styled(Paper)<WrapperProp>((props)=> ({
    width:props.size === "small" ? "120px" : "300px",
    ":hover":{
        opacity:0.5,
        Index:10
    },
    backgroundImage:`url(${props.img})`,
    height:"200px",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    backgroundPosition:props.size === "small" ? "center" : "",
    cursor:"pointer",
    zIndex:20,
    display:"flex",
    flexDirection:"column",
    justifyContent:"flex-end",
    alignItems:"center",
    boxShadow:"0 4px 8px rgba(0, 0, 0, 0.3)"
}))


const ProfileCard:React.FC=(props:any)=> {
    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))

    return(
        <Wrapper onClick={()=> {
            props.onClick && props.onClick(props)
        }}
           size={isSmallScreen ? "small" : "large"}
           img={props.imgUrl ? props.imgUrl : "https://img.freepik.com/free-photo/fun-3d-cartoon-teenage-boy_183364-80095.jpg?w=740&t=st=1719157527~exp=1719158127~hmac=4ec8e3bdbd446244c82d31c13d283cfa4105732d76dbfb1c0cb1e7ca63f79211"}
        >
            <Typography variant={isSmallScreen ? "h6" : "h5"}
               sx={{
                fontSize:isSmallScreen ? "15px" : "20px",
                fontWeight:400,
                fontFamily:"Lato",
                fontStyle:"normal",
                backgroundColor:"GrayText",
                padding:"4px",
                opacity:0.8,
                color:"white"
               }}
            >
                {props.name ? props.name : "Bhuban Padun"}
            </Typography>
            <Typography sx={{
                display:"flex",
                alignItems:"center",
                flexDirection:"column",
                backgroundColor:"GrayText",
                width:"100%",
                opacity:0.8
            }}>
                <LocationCity sx={{color:"white"}}/>
                <span style={{
                    fontFamily:"Lato",
                    fontStyle:"normal",
                    fontWeight:400,
                    color:"white",
                    //overflow:"hidden",
                    textOverflow:"ellipsis"
                }}>{props.location ? props.location : "ion Jonai,Dhemaji,Assam"}</span>
            </Typography>
        </Wrapper>
    )
}


ProfileCard.propTypes = {
    imgUrl:PropTypes.string,
    name:PropTypes.string,
    location:PropTypes.string,
    onClick:PropTypes.func
}

export default ProfileCard