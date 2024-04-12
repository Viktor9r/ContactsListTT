import { Button, Grid, styled } from "@mui/material";

export const StyledAboutSection = styled('div')(() => ({
    minHeight: '100vh',
    maxHeight: '100vh',
    display: 'flex',
    gap: '45px',
    position: 'relative',
    alignItems: 'flex-end'
}))

export const AboutLeftPart = styled('div')(() => ({
    height: 'calc(100vh - 70px)',
    display: 'flex',
    flexDirection: "column",
    alignItems: 'flex-start',
    justifyContent: 'center',
    fontSize: '18px',
    lineHeight: '24px',
    fontFamily: 'Meragen',
    maxWidth: '35%',
    minWidth: '35%'
}))

export const AboutTopText = styled('div')(() => ({
    position: 'absolute',
    fontFamily: 'Neuropol, sans-serif',
    right: 0,
    top: 120,
    fontSize: '110px',
    fontWeight: 'bold',
    lineHeight: '38px',
    letterSpacing: '4px',
    zIndex: 10
}))

export const DownloadButton = styled(Button)(() => ({
    marginTop: '24px',
    fontFamily: 'Neuropol, sans-serif',
    width: 'fit-content',
    background: 'transparent',
    border: '2px solid #fff',
    color: '#fff',
    padding: '0 40px 0 35px',
    height: '50px',
    fontWeight: 'bold',
    borderBottomRightRadius: '65px',
    transition: '0.3s',
    ['& span']: {
        transform: 'none',
    },
    ['& svg']: {
        marginRight: '6px',
        transform: 'scale(1.1)'
    },
    ['& span:nth-of-type(2)']: {
        display: 'none'
    },
    ['&:hover']: {
        background: "#fff",
        color: '#000'
    }
}))

export const AboutRightPart = styled('div')(() => ({
    overflow: 'hidden',
    height: 'calc(100vh - 70px)',
}))

export const AboutImage = styled('img')(() => ({
    width: '100%',
    height: '100%',
}))