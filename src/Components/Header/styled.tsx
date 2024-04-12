import { styled } from "@mui/material";

export const HeaderOuterContainer = styled('div')(() => ({
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    margin: "0 auto",
    height: "70px",
    width: "100%",
    zIndex: 999,
    transition: '0.3s'
}))

export const HeaderInnerContainer = styled('div')(() => ({
    maxWidth: '1440px',
    padding: '0 30px',
    margin: '0 auto',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '40px'
}))

export const HeaderRightPart = styled('div')(() => ({
    display: 'flex'
}))
export const HeaderLeftPart = styled('div')(() => ({
    display: 'flex'
}))

export const HeaderLogo = styled('div')(() => ({
    fontSize: '20px',
    letterSpacing: -3,
    marginRight: '24px',
    fontFamily: 'Neuropol, sans-serif !important'
}))

export const HeaderLangValue = styled('div')(() => ({
    fontSize: '16px',
    textTransform: 'uppercase',
    color: '#fff',
}))

export const TopBlackLine = styled('div')(() => ({
    height: '70px',
    background: '#000',
    position: 'absolute',
    left: '0',
    zIndex: -1,
    transition: 'transform 0.3s ease-in-out'
}))

// export const HeaderLangSwitch = styled(Select)(() => ({
//     fontSize: '16px',
//     textTransform: 'uppercase',
//     color: '#fff',
//     paddingRight: 0,
//     ['& ul']: {
//         background: '#000 !important'
//     },
//     ['& svg']: {
//         display: 'none'
//     },
//     ['&:focus-visible']: {
//         outline: 'none'
//     }
// }))