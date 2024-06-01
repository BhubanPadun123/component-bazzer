import React from "react";
import PropTypes from "prop-types"

export const BPButtom=(props)=>{

    const {
        style,
        btnText,
        bg,
        width,
        borderR
    } = props
    const styles={
        ...style,
        width:width ? width : "auto",
        padding:"4px",
        color:"red",
        backgroundColor: bg ? bg : "",
        zIndex:2,
        borderRadius:borderR ? borderR : "",
        fontFamily:"Lato",
        position:'relative',
        letterSpacing:"1.5px"
    }

    return(
        <button onClick={()=> props.onClick()}  style={styles}>{btnText}</button>
    )
}
BPButtom.propTypes = {
    style: PropTypes.object,
    btnText:PropTypes.string,
    bg:PropTypes.string,
    width:PropTypes.string,
    borderR:PropTypes.string,
    onClick:PropTypes.func
}
export const BPIconButtom=(props)=> {
    const [state,setState] = React.useState({
        iconOpacity:false
    })
    const {
        iconType,
        btnText,
        icon,
        textStyle,
        iconStyle,
        btnStyle
    } = props

    const styles = {
        ...btnStyle,
        maxWidth:"200px",
        display:"flex",
        flexDirection:"row",
        gap:"2px",
        justifyContent:"center",
        alignItems:"center",
        zIndex:10,
        opacity:state.iconOpacity ? 0.5 : 1
    }
    const iconStyles = {
        ...iconStyle,
        maxWidth:"40px",
        opacity:state.iconOpacity ? 0.5 : 1
    }
    const textStyles={
        ...textStyle
    }

    return(
        <button style={styles} onMouseEnter={()=> setState({...state,iconOpacity:true})} onMouseLeave={()=> setState({...state,iconOpacity:false})}>
            <span style={textStyles}>
                {
                    btnText
                }
            </span>
            {
                iconType === "img" ? (
                    <img style={iconStyles} src={icon}  />
                ) : (
                    <icon />
                )
            }
        </button>
    )

}

BPIconButtom.propTypes={
    iconType:PropTypes.oneOf(["img","tag"]),
    btnText:PropTypes.string,
    icon:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    textStyle:PropTypes.object,
    iconStyle:PropTypes.object,
    btnStyle:PropTypes.object,
    onClick:PropTypes.func
}

