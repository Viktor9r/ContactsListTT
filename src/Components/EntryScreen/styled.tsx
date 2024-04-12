import { Button, Grid, styled } from "@mui/material";

export const StyledEntryScreen = styled('div')(() => ({
    minHeight: '100vh',
    maxHeight: '100vh',
    maxWidth: '1440px',
    padding: '0 30px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
}))

export const EntryScreenLeft = styled('div')(() => ({
    paddingRight: '10%',
    maxWidth: 'fit-content',
    height: '100vh',
    display: 'flex',
    alignItems: 'center'
}))

export const EntryScreenRight = styled('div')(() => ({
    background: 'transparent',
    position: 'absolute',
    height: '100vh',
    right: 0,
}))

export const EntryScreenLeftContent = styled('div')(() => ({
    fontSize: '52px',
    fontWeight: 'bold',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    lineHeight: '60px',
    alignItems: 'flex-start'
}))

export const EntryContactButton = styled(Button)(() => ({
    borderRadius: '40px',
    border: '2px solid #fff',
    background: 'transparent',
    minWidth: '100px',
    maxWidth: 'fit-content',
    marginTop: '24px',
    fontWeight: 600,
    color: '#fff',
    padding: '16px 24px'
}))