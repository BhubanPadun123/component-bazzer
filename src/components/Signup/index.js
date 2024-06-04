import React from "react";
import PropType from "prop-types"
import {
    validateEmail,
    validatePassword
} from "../helper/validator"
import {
    Container,
    TextField,
    Avatar,
    Button,
    CssBaseline,
    FormControlLabel,
    Checkbox,
    Link,
    Grid,
    Box,
    Typography
} from "@mui/material"
import {
    LockClockOutlined
} from "@mui/icons-material"
import {
    createTheme,
    ThemeProvider
} from "@mui/material/styles"

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link sx={{cursor:'pointer'}} color="inherit" href={props.websideLink}>
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const defaultTheme = createTheme();

export function BPSignUp(props) {
    const [state, setState] = React.useState({
        validate: {
            email: false,
            password: false
        },
        isClickRemember: false
    })

    const {
        onSubmit,
        isRemember,
        onClickForgotPassword,
        createAccount,
        websideLink
    } = props

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        if (validateEmail(data.get('email'))) {
            if (data.get('password') === data.get('confirmPassword')) {
                if (validatePassword(data.get('password'))) {
                    const formData = {
                        password:data.get('password'),
                        email:data.get("email")
                    }
                    onSubmit(formData)
                } else {
                    setState({ ...state, validate: { ...state.validate, password: true } })
                    setTimeout(() => {
                        setState({ ...state, validate: { ...state.validate, password: false } })
                    }, 3000)
                }
            } else {
                setState({ ...state, validate: { ...state.validate, password: true } })
                setTimeout(() => {
                    setState({ ...state, validate: { ...state.validate, password: false } })
                }, 3000)
            }
        } else {
            setState({ ...state, validate: { ...state.validate, email: true } })
            setTimeout(() => {
                setState({ ...state, validate: { ...state.validate, email: false } })
            }, 3000)
        }
    };


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
                        Signup
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
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="confirmPassword"
                            label="confirmPassword"
                            type="password"
                            id="confirmPassword"
                            autoComplete="current-password"
                            error={state.validate.password}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={state.isClickRemember} value="remember" color="primary" onClick={()=> {
                                setState({...state,isClickRemember:!state.isClickRemember})
                                isRemember(state.isClickRemember)
                            }} />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2" onClick={()=> onClickForgotPassword()}>
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2" onClick={()=> createAccount()}>
                                    {"Already have account?"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} websideLink={websideLink} />
            </Container>
        </ThemeProvider>
    )
}
BPSignUp.propTypes = {
    onSubmit:PropType.func,
    isRemember:PropType.func,
    onClickForgotPassword:PropType.func,
    createAccount:PropType.func,
    websideLink:PropType.string
}