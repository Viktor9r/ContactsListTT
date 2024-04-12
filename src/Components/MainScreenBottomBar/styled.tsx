import { styled } from "@mui/material";
import { Link } from "react-router-dom";

export const BottomBarOuterContainer = styled('div')(() => ({
    position: 'fixed',
    bottom: 0,
    right: 0,
    left: 0,
    margin: "0 auto",
    height: "70px",
    width: "100%",
    transition: '0.3s'
}))

export const BottomBarInnerContainer = styled('div')(() => ({
    maxWidth: '1440px',
    padding: '0 0 0 30px',
    margin: '0 auto',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '40px',
    transition: '0.3s'
}))

export const BottomBarRightPart = styled('div')(() => ({
    display: 'flex',
    width: '25%',
    justifyContent: 'space-evenly',
    height: '70px',
    alignItems: 'center',
    transition: '0.3s'
}))
export const BottomBarLeftPart = styled('div')(() => ({
    display: 'flex',
    transition: '0.3s'
}))

export const BottomBarEmailLink = styled(Link)(() => ({
    display: 'flex',
    gap: '6px',
    alignItems: 'flex-end',
    color: 'rgba(255, 255, 255, 0.6)',
    textDecoration: 'none'
}))

export const BottomBarIcon = styled('div')(() => ({
    width: '22px',
    height: '22px',
    color: 'rgba(255, 255, 255, 0.6)',
    marginRight: '12px'
}))

export const BottomBlackLine = styled('div')(() => ({
    height: '70px',
    background: '#000',
    position: 'absolute',
    right: '0',
    zIndex: -1,
    transition: 'transform 0.5s ease-in-out'
}))