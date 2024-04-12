import { styled } from "@mui/material";

export const StyledSkillsSection = styled('div')(() => ({
    minHeight: '100vh',
    gap: '45px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    ['@media(max-width: 1200px)']: {
        gap: '24px'
    }
}))

export const SkillsTitle = styled('div')(() => ({
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

export const SkillsBlock = styled('div')(() => ({
    border: '4px solid rgba(255, 255, 255, 0.6)',
    width: '80%',
    display: 'flex',
    height: 'fit-content',
    fontFamily: 'Meragen, sans-serif',
    minHeight: 'calc(100vh - 115px - 40vh)',
    maxHeight: 'calc(100vh - 115px - 40vh)',
    overflow: 'hidden',
    ['@media(max-width: 1200px)']: {
        minHeight: 'calc(100vh - 54px - 40vh)',
        maxHeight: 'calc(100vh - 54px - 40vh)',
    }
}))

export const SkillsMiniBlock = styled('div')(() => ({
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    transition: '0.5s'
}))

export const SkillsMiniBlockHeader = styled('div')(() => ({
    display: 'flex',
    gap: '24px',
    alignItems: 'center',
    fontSize: '28px',
    height: '48px',
    fontWeight: 'bold',
    transition: '0.3s',
    ['svg']: {
        fill: '#fff',
        width: '50px'
    }
}))

export const SkillsMiniBlockContent = styled('div')(() => ({
    display: 'flex',
    marginTop: '12px',
    transition: '0.3s',
    minHeight: 'calc(100% - 36px - 24px)',
    maxHeight: 'calc(100% - 36px - 24px)',
    overflow: 'scroll'
}))

export const SkillsMiniBlockLeft = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-between',
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: '18px'
}))

export const SkillsMiniBlockRight = styled('div')(() => ({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    fontSize: '18px',
    gap: '2px'
}))

export const SkillsMiniBlockItem = styled('div')(() => ({
    display: 'flex',
    gap: '4px',
    alignItems: 'center',
    fontSize: '18px',
    ['svg']: {
        width: '18px',
        height: '18px',
        fill: '#fff'
    }
}))

export const SideNavigation = styled('div')(() => ({
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    right: 0,
    display: 'flex',
    gap: '18px',
    flexDirection: 'column',
    color: '#fff'
}))

export const SideNavItem = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    color: 'rgba(255, 255, 255, 0.6)',
    fill: 'rgba(255, 255, 255, 0.6)',
    transition: '0.3s',
    alignItems: 'center',
    ['svg']: {
        width: '64px',
        height: '64px',
    },
    ['&:hover']: {
        fill: 'rgba(255, 255, 255, 0.8)',
        color: 'rgba(255, 255, 255, 0.8)',
        cursor: 'pointer'
    },
}))

export const CubeSideContainer = styled('div')(() => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    height: 'fit-content',
    gap: '12px',
    width: '100%'
}))

export const SkillItem = styled('div')(() => ({
    display: 'flex',
    padding: '12px',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    fontFamily: 'Meragen, sans-serif',
    width: 'calc(100% / 5)',
    maxHeight: '100px',
    ['svg']: {
        width: '58px',
        height: '58px',
        fill: '#fff',
    },
}))