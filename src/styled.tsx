import { styled } from "@mui/material";
import { BACKGROUND_COLOR } from "./resources/colors";

export const AppOuterContainer = styled('div')(() => ({
    color: "#fff",
    fontFamily: 'Neuropol, sans-serif !important'
}))

export const AppInnerContainer = styled('div')(() => ({
    maxWidth: '1440px',
    padding: '0 30px',
    margin: '0 auto',
    height: '100%'
}))