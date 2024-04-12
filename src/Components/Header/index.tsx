import { useEffect, useState } from "react";
import { HeaderInnerContainer, HeaderLangValue, HeaderLeftPart, HeaderLogo, HeaderOuterContainer, HeaderRightPart, TopBlackLine } from "./styled"
import MenuIcon from '@mui/icons-material/Menu';
import { Tab, Tabs, useMediaQuery } from "@mui/material";
import { useTabNavigation } from "../../storage/useTabNavigation";
import { useNavigate } from 'react-router-dom';

export const AppHeader: React.FC = () => {
    const [lang, setLang] = useState(() => window.localStorage.getItem('lang') || 'EN');
    const navigate = useNavigate();

    const handleChangeLang = () => {
        const newLang = lang === "EN" ? "FR" : "EN";
        window.localStorage.setItem('lang', newLang);
        setLang(newLang); // Update the state to trigger a re-render
    }

    useEffect(() => {
        const handleStorageChange = () => {
            const newLang = window.localStorage.getItem('lang');
            if (newLang !== lang) {
                setLang(newLang || 'EN');
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [lang]);

    const mobile = useMediaQuery('(max-width: 1000px');

    // const [value, setValue] = useState(0);

    const { value, setValue } = useTabNavigation()

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        if (newValue == 0) {
            navigate('/')
        }
        if (newValue == 1) {
            navigate('/about')
        }
        if (newValue == 2) {
            navigate('/skills')
        }
        if (newValue == 3) {
            navigate('/projects')
        }
        if (newValue == 4) {
            navigate('/contact')
        }
        setValue(newValue);
    };
    
    const [topScrollValue, setTopScrollValue] = useState(0);

    useEffect(() => {
        function getBodyScrollTop() {
            return document.documentElement && document.documentElement.scrollTop || (document.body && document.body.scrollTop);
        }

        getBodyScrollTop(); // Initial call to handleResize

        window.addEventListener("scroll", event => {
            let value = getBodyScrollTop();
            setTopScrollValue(value);
        })

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', getBodyScrollTop);
        };
    }, []);



    return (
        <HeaderOuterContainer sx={{
        }}>
            <TopBlackLine
                sx={{
                    visibility: topScrollValue == 0 ? "hidden" : "visible",
                    width: topScrollValue > window.innerHeight - 1 ? '100%' : '50%',
                }}
            ></TopBlackLine>
            <HeaderInnerContainer>
                <HeaderLeftPart>
                    <HeaderLogo sx={{ marginRight: 0 }}>V</HeaderLogo>
                    <HeaderLogo>
                        R
                    </HeaderLogo>
                    {mobile && (
                        <>
                            <MenuIcon />
                        </>
                    )}
                </HeaderLeftPart>

                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="primary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                    sx={{
                        height: '70px',
                        minWidth: '50%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: 'rgba(0, 0, 0, 1)',
                        ['& button']: {
                            color: 'rgba(255, 255, 255, 0.6)',
                            fontSize: '16px',
                            fontFamily: 'Neuropol, sans-serif !important',
                        },
                        ['& .MuiTabs-indicator']: {
                            display: 'none'
                        },
                        ['& .Mui-selected']: {
                            color: '#fff !important'
                        },
                        ['& .MuiTabs-scroller']: {
                            display: 'flex',
                            justifyContent: 'center'
                        }
                    }}
                >
                    <Tab value={0} label="Home" />
                    <Tab value={1} label="About" />
                    <Tab value={2} label="Skills" />
                    <Tab value={3} label="Projects" />
                    <Tab value={4} label="Contact" />
                </Tabs>

                <HeaderRightPart>
                    <HeaderLangValue
                        onClick={() => handleChangeLang()}
                        sx={{
                            color: topScrollValue > 0 ? '#fff' : '#090909'
                        }}
                    >
                        {lang}
                    </HeaderLangValue>
                    {/* <HeaderLangSwitch
                        open={open}
                        onClose={handleCloseLang}
                        onOpen={handleOpenLang}
                        value={lang}
                        onChange={handleChangeLang}
                    >
                        <MenuItem value={'EN'}>EN</MenuItem>
                        <MenuItem value={'FR'}>FR</MenuItem>
                    </HeaderLangSwitch> */}
                </HeaderRightPart>
            </HeaderInnerContainer>
        </HeaderOuterContainer>
    )
}