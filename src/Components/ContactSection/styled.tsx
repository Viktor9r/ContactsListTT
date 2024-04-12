import { Button, FormControl, TextField, styled } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledContactSection = styled('div')(() => ({
    minHeight: '100vh',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '56px',
}))

export const ContactsTitle = styled('div')(() => ({
    fontFamily: 'Neuropol, sans-serif',
    fontSize: '110px',
    fontWeight: 'bold',
    lineHeight: '38px',
    letterSpacing: '4px',
    top: 120,
    right: 0,
    left: 0,
    zIndex: 10,
    position: 'absolute',
    ['@media(max-width: 1200px)']: {
        fontSize: '70px',
    }
}))

export const ContactsLeft = styled('div')(() => ({
    width: '38%',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Meragen, sans-serif',
    fontSize: '20px'
}))

export const ContactsRight = styled('div')(() => ({
    width: '62%',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Meragen, sans-serif',
    fontSize: '20px',
    zIndex: 999
}))

export const ContanctMethodRow = styled(Link)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: "#fff",
    textDecoration: 'none',
    lineHeight: 1,
    marginBottom: '24px',
    ['& svg']: {
        width: '24px',
        height: '24px'
    }
}))

export const StyledForm = styled('form')(() => ({
    background: 'rgba(0, 0, 0, 0.5)',
    padding: '36px',
    border: '2px solid #4d1caf'
}))

export const StyledFormBlock = styled('div')(() => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '24px'
}))

export const StyledFormField = styled(TextField)(() => ({
    border: '2px solid #4d1caf',
    borderRadius: '4px',
    color: '#fff !important',
    ['& input']: {
        color: '#fff',
        fontFamily: 'Meragen, sans-serif',
    },
    ['& textarea']: {
        color: '#fff',
        fontFamily: 'Meragen, sans-serif',
    },
    // ['& input::-webkit-input-placeholder']: {
    //     color: '#fff !important'
    // },
}))

export const StyledFormButtons = styled('div')(() => ({
    width: '100%',
    gap: '24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '32px'
}))