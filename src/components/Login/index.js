import React from "react";
import PropTypes from "prop-types"
import {
    Container,
    TextField,
    Avatar,
    CssBaseline,
    FormControlLabel,
    Checkbox,
    Link,
    Grid,
    Typography,
    Box,
    Button
} from "@mui/material"

import {
    LockClockOutlined
} from "@mui/icons-material"
import {
    createTheme,
    ThemeProvider
} from "@mui/material/styles"
import {
    validateEmail,
    validatePassword
} from "../helper/validator"

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link sx={{ cursor: 'pointer' }} color="inherit" href={props.webLink}>
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const defaultTheme = createTheme();

export function BPLogin(props) {
    const [state,setState] = React.useState({
        validate:{
            email:false,
            password:false
        },
        checkedRemember:false
    })

    const {
        onSubmit,
        onClickRemember,
        onClickSignup,
        webLink,
        onClickForgot
    } = props

    const handleSubmit=(event)=> {
        event.preventDefault()

        const data = new FormData(event.currentTarget)
        if(validateEmail(data.get("email"))){
            if(validatePassword(data.get('password'))){
                const formData = {
                    email: data.get('email'),
                    password:data.get('password')
                }
                onSubmit(formData)
            }else{
                setState({...state,validate:{...state.validate,password:true}})
                setTimeout(()=>{
                setState({...state,validate:{...state.validate,password:false}})
                },3000)
            }
        }else{
            setState({...state,validate:{...state.validate,email:true}})
            setTimeout(()=>{
                setState({...state,validate:{...state.validate,email:false}})
            },3000)
        }
    }
    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs" sx={{
                border: "1px solid",
                borderRadius: "10px",
                ':hover': {
                    backgroundColor: "#b9edc7"
                }
            }}>
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockClockOutlined />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            error={state.validate.email}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            error={state.validate.password}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={state.checkedRemember} value="remember" color="primary" onChange={()=> {
                                setState({...state,checkedRemember:!state.checkedRemember})
                                onClickRemember(state.checkedRemember)
                            }}  />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Login
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2" onClick={()=> onClickForgot()}>
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2" onClick={()=> onClickSignup()}>
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} webLink={webLink} />
            </Container>
        </ThemeProvider>
    )
}

BPLogin.propTypes = {
    onSubmit:PropTypes.func,
    onClickRemember:PropTypes.func,
    onClickSignup:PropTypes.func,
    webLink:PropTypes.string,
    onClickForgot:PropTypes.func
}