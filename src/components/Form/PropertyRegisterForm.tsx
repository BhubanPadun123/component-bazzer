import React from "react";
import {
    Typography,
    styled,
    useMediaQuery,
    Button,
    Box
} from "@mui/material"
import { useTheme } from "@mui/material/styles"

interface FormWrapperProp {
    isSmallScreen: boolean
}
const FormWrapper = styled(Box)<FormWrapperProp>((props) => ({
    maxWidth: props.isSmallScreen ? "600px" : "800px",
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    gap: "15px",
    padding: "10px 0px",
    border:"1px solid #debfbd",
    ':hover':{
        background:"#f2bebb"
    }
}))
interface FormTextFieldProp {
    isMandatory: boolean
}
const FormTextField = styled('input')<FormTextFieldProp>((props) => ({
    border: props.isMandatory ? "1px solid red" : "1px solid",
    height: "28px",
    borderRadius: "4px",
    textAlign: 'center',
    padding: "4px",
    fontSize: "16px",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: 400,
    letterSpacing: 2.5
}))
interface MandatoryIndicatorProp {
    isMandatory: boolean
}
const MandatoryIndicator = styled('span')<MandatoryIndicatorProp>((props) => ({
    color: props.isMandatory ? "red" : "none",
    width: "100%",
    textAlign: 'left',
    paddingLeft: "10px"
}))
interface SelectFieldTypeProp {
    isMandatory: boolean
}
const SelectField = styled('select')<SelectFieldTypeProp>((props) => ({
    border: props.isMandatory ? "1px solid red" : "1px solid",
    height: "28px",
    borderRadius: "4px",
    textAlign: 'center',
    padding: "4px",
    fontSize: "16px",
    fontFamily: "Lato",
    fontStyle: "normal",
}))
const OptionField = styled('option')(() => ({
    fontFamily:"Lato",
    fontSize:"20px",
    fontStyle:"normal",
    fontWeight:600,
    letterSpacing:2.5
}))
type formData = {
    fieldType: "text" | "select",
    labelName: string,
    isMandatory: boolean,
    placeHolder: string,
    value:string,
    options:string[]
}
interface BPPropertyRegisterFormProp {
    formMessage: string,
    formData: formData[],
    onSubmit:(e:any)=> void,
    renderContentHeader:React.ReactNode
}
export const BPPropertyRegisterForm: React.FC<BPPropertyRegisterFormProp> = (props) => {
    const {
        formMessage,
        formData
    } = props
    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))

    const handleSubmit=(event:any):void=>{
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        let responseData:any = []
        formData.map((item):void=> {
            responseData.push({
                key:item.labelName,
                value:data.get(`${item.labelName}`)?data.get(`${item.labelName}`) : ""
            })            
        })
        props.onSubmit && props.onSubmit(formData)
    }

    return (
        <FormWrapper
            isSmallScreen={isSmallScreen}
            component={"form"}
            onSubmit={handleSubmit}
        >
            <Typography sx={{
                fontSize: "20px",
                fontFamily: "Lato",
                fontStyle: "normal",
                fontWeight: 700,
                display:"flex",
                flexDirection:"column",
                alignItems:"center"
            }}>
                {
                    props.renderContentHeader && props.renderContentHeader
                }
                {formMessage ? formMessage : "Fill all the mandatory fill."}
            </Typography>
            {
                formData && formData.length > 0 &&
                formData.map((item, index) => {
                    if (item.fieldType === "text") {
                        return (
                            <Typography key={index} sx={{
                                display: "flex",
                                flexDirection: 'column',
                                width: !item.isMandatory ? "80%" : "90%"
                            }}>
                                <MandatoryIndicator
                                    isMandatory={item.isMandatory}
                                >{item.labelName}</MandatoryIndicator>
                                <FormTextField
                                    isMandatory={true}
                                    placeholder={item.placeHolder}     
                                    id={item.labelName} 
                                    required={item.isMandatory}     
                                    name={item.labelName}                                                        
                                />
                            </Typography>
                        )
                    }
                    if (item.fieldType === "select") {
                        return (
                            <Typography sx={{
                                display: "flex",
                                flexDirection: 'column',
                                width: !isSmallScreen ? "80%" : "90%"
                            }}>
                                <MandatoryIndicator
                                    isMandatory={item.isMandatory}
                                >{item.labelName}</MandatoryIndicator>
                                <SelectField
                                    isMandatory={item.isMandatory}     
                                    id={item.labelName}  
                                    required={item.isMandatory}     
                                    name={item.labelName}                        
                                >
                                    <OptionField>{`-------->None<---------`}</OptionField>
                                    {
                                        item.options.map((item) => {
                                            return (
                                                <OptionField
                                                    value={item}
                                                >
                                                    {
                                                        item
                                                    }
                                                </OptionField>
                                            )
                                        })
                                    }
                                </SelectField>
                            </Typography>
                        )
                    }else{
                        return <></>
                    }
                })
            }
            <Button variant="contained" type="submit">
                Submit
            </Button>
        </FormWrapper>
    )
}