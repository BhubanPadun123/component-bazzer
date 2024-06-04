import React from "react";
import PropTypes from "prop-types"
import {
    Box,
    Typography,
    Avatar,
    IconButton,
    Tooltip,
    Popover,
    Divider
} from "@mui/material"
import MoreIcon from '@mui/icons-material/More';

export function BPMobileCard(props) {
    const [state, setState] = React.useState({
        anchorEl: null
    })

    const handleClick = (event) => {
        setState({ ...state, anchorEl: event.currentTarget })
    }
    const handleClose = () => {
        setState({ ...state, anchorEl: null })
    };
    return (
        <Box
            height={250}
            width={200}
            sx={{
                border: '2px solid grey',
                zIndex: 10,
                ':hover': {
                    backgroundColor: "#fcba03",
                    zIndex: 2,
                    cursor: "pointer",
                    opacity: 0.8
                },
                overflow: 'hidden',
            }}
        >
            <Typography sx={{
                width: "100%",
                backgroundColor: "#faf7ed",
                fontSize: "12px",
                fontFamily: "Lato",
                fontStyle: "normal",
                letterSpacing: 1.2,
                padding: "0px",
                display: "flex",
                flexDirection: 'row',
                justifyContent: "space-between"
            }}>
                <Avatar src="https://images.unsplash.com/photo-1582456891925-a53965520520?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <Tooltip title="More" arrow placement='bottom'>
                    <IconButton onClick={handleClick}>
                        <MoreIcon />
                    </IconButton>
                </Tooltip>
                <Popover
                    anchorEl={state.anchorEl}
                    id="popover-model"
                    open={state.anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <Box sx={{
                        width:"max-content",
                        padding:"4px",
                        display:"flex",
                        flexDirection:"column",
                        gap:"2px"
                    }}>
                        <Typography>jshdfkjsdf</Typography>
                        <Typography>sdfjhsdjf</Typography>
                    </Box>
                </Popover>
            </Typography>
            <Divider sx={{ border: "1px solid red" }} />
            <img
                src="https://images.unsplash.com/photo-1582456891925-a53965520520?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                style={{
                    width: "100%",
                    padding: "0px",
                    height: "100%",
                }}
            />
        </Box>
    )
}