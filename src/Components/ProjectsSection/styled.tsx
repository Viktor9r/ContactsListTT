import { Button, styled } from "@mui/material";

export const StyledProjectsSection = styled('div')(() => ({
    minHeight: '100vh',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    gap: '44px'
}))

export const ProjectsTitle = styled('div')(() => ({
    fontFamily: 'Neuropol, sans-serif',
    fontSize: '110px',
    fontWeight: 'bold',
    lineHeight: '38px',
    letterSpacing: '4px',
    top: 120,
    left: 0,
    zIndex: 10,
    position: 'absolute',
    ['@media(max-width: 1200px)']: {
        fontSize: '70px',
    }
}))

export const ProjectsLeft = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    width: 'calc(40% - 44px)',
    fontFamily: 'Meragen, sans-serif',
    paddingTop: '70px'
}))

export const ProjectTitle = styled('div')(() => ({
    fontSize: '44px',
    fontWeight: 'bold',
    marginBottom: "24px",
}))

export const ProjectAbout = styled('div')(() => ({
    fontSize: '18px',
    marginBottom: '24px'
}))

export const ArrowButtons = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: '24px'
}))

export const ProjectSkillsDivider = styled('div')(() => ({
    width: '100%',
    height: '2px',
    background: '#4d1caf',
    borderRadius: '50%'
}))

export const ProjectSkills = styled('div')(() => ({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '18px 0',
    ['& div']: {
        borderRight: '2px solid #4d1caf'
    },
    ["& div:last-child"]: {
        borderRight: 'none !important'
    }
}))

export const ProjectSkillsItem = styled('div')(() => ({
    fontSize: '18px',
    lineHeight: 1.5,
    textAlign: 'center',
    padding: '0 18px',
    display: 'flex',
    alignItems: 'center'
}))

export const ProjectLinkBlock = styled('a')(() => ({
    fontSize: '18px',
    marginBottom: '24px',
    width: '100%',
    color: '#fff',
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'flex-end',
    // textDecoration: 'underline 2px #4d1caf',
    // textUnderlineOffset: '6px',
}))

export const ProjectLink = styled('a')(() => ({
    fontSize: '18px',
    color: '#fff',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    width: 'fit-content',
    borderBottom: '2px solid #4d1caf',
    transition: '0.3s',
    ['svg']: {
        fill: '#fff',
        width: '14px'
    },
    // textDecoration: 'underline 2px #4d1caf',
    // textUnderlineOffset: '6px',
}))

export const ArrowButton = styled(Button)(() => ({
    fontFamily: 'Neuropol, sans-serif',
    width: '50%',
    background: 'transparent',
    border: '2px solid #fff',
    color: '#fff',
    padding: '0 30px 0 35px',
    height: '50px',
    fontWeight: 'bold',
    fontSize: '14px',
    transition: '0.3s',
    ['& span']: {
        transform: 'none',
    },
    ['& svg']: {
        fill: '#fff',
        marginRight: '6px',
        width: '30px'
    },
    ['& span:nth-of-type(2)']: {
        display: 'none'
    },
    ['&:hover']: {
        background: "#fff",
        color: '#000'
    },
    ['&:hover svg']: {
        fill: '#000',
    }
}))

export const ProjectsRight = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: 'calc(60%)',
    ['a']: {
        width: '90%'
    }
}))

export const ProjectImage = styled('img')(() => ({
    width: '100%',
}))