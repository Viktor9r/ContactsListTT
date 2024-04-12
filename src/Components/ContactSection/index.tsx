import { useState } from "react"
import { ContactsLeft, ContactsRight, ContactsTitle, ContanctMethodRow, StyledContactSection, StyledForm, StyledFormBlock, StyledFormButtons, StyledFormField } from "./styled"
import { ArrowButton, ProjectSkillsDivider } from "../ProjectsSection/styled"
import EmailIcon from '@mui/icons-material/Email';
import { ArrowRight, ArrowRightAlt, Clear, Phone, Send } from "@mui/icons-material";
import { Typography } from "@mui/material";

interface IProps { }

export const ContactSection: React.FC<IProps> = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [error, setError] = useState('')
    const [isSucces, setIsSuccess] = useState(false)

    function onSubmit(e: any) {
        e.preventDefault();
        e.stopPropagation();

        fetch("https://formcarry.com/s/P2EIggoyDQd", {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, message })
        })
            .then(response => response.json())
            .then(response => {
                if (response.code === 200) {
                    alert("We received your submission, thank you!");
                    clearForm()
                }
                else if (response.code === 422) {
                    // Field validation failed
                    setError(response.message)
                }
                else {
                    // other error from formcarry
                    setError(response.message)
                }
            })
            .catch(error => {
                // request related error.
                setError(error.message ? error.message : error);
            });
    }

    const clearForm = () => {
        setName('')
        setEmail('')
        setMessage('')
    }

    return (
        <StyledContactSection>
            {/* <ContactsTitle>Contact me</ContactsTitle> */}

            <ContactsLeft>
                <div style={{ marginBottom: '24px' }}>
                    You can reach me right now through:
                </div>

                <ProjectSkillsDivider sx={{ marginBottom: '24px' }} />

                <ContanctMethodRow
                    to='javascript:void(0)'
                    onClick={() => window.location.href = 'mailto:viktor.riabokon.job@gmail.com'}
                >
                    <EmailIcon />
                    <div>
                        viktor.riabokon.job@gmail.com
                    </div>
                </ContanctMethodRow>

                <ProjectSkillsDivider sx={{ marginBottom: '24px' }} />

                <ContanctMethodRow
                    to='tel:6476414631'
                >
                    <Phone />
                    <div>
                        + 1 (647) 641 - 4631
                    </div>
                </ContanctMethodRow>

                <ProjectSkillsDivider sx={{ marginBottom: '24px' }} />

                <div>Or you can send a message direct to my email using the form <ArrowRightAlt sx={{
                    transform: 'scaleX(2.5) translateY(7px) translateX(8px)',
                }} /></div>

            </ContactsLeft>

            <ContactsRight>

                <StyledForm onSubmit={(e) => onSubmit(e)}>
                    <StyledFormBlock>
                        {/* <label htmlFor="name">Full Name</label> */}
                        <StyledFormField
                            type="text"
                            value={name}
                            required
                            onChange={(e) => setName(e.target.value)}
                            id="name"
                            variant="outlined"
                            color="secondary"
                            placeholder="Name"
                            inputProps={
                                {
                                    sx: {
                                        '&::placeholder': {
                                            color: 'rgba(255, 255, 255, 0.8)',
                                            fontFamily: 'Meragen, sans-serif',
                                            opacity: 1, // otherwise firefox shows a lighter color
                                        },
                                    },
                                }
                            }
                        />
                    </StyledFormBlock>

                    <StyledFormBlock>
                        {/* <label htmlFor="email">Email</label> */}
                        <StyledFormField
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="email"
                            variant="outlined"
                            color="secondary"
                            placeholder="Email"
                            inputProps={
                                {
                                    sx: {
                                        '&::placeholder': {
                                            color: 'rgba(255, 255, 255, 0.8)',
                                            fontFamily: 'Meragen, sans-serif',
                                            opacity: 1, // otherwise firefox shows a lighter color
                                        },
                                    },
                                }
                            }
                        />
                    </StyledFormBlock>

                    <StyledFormBlock>
                        {/* <label htmlFor="message">Message</label> */}
                        <StyledFormField
                            type="email"
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            id="message"
                            variant="outlined"
                            color="secondary"
                            placeholder="Type your message..."
                            multiline
                            minRows={5}
                            inputProps={
                                {
                                    sx: {
                                        '&::placeholder': {
                                            color: 'rgba(255, 255, 255, 0.8)',
                                            fontFamily: 'Meragen, sans-serif',
                                            opacity: 1, // otherwise firefox shows a lighter color
                                        },
                                    },
                                }
                            }
                        />
                    </StyledFormBlock>

                    <StyledFormButtons>
                        <ArrowButton
                            sx={{
                                borderBottomLeftRadius: '65px',
                                width: 'fit-content',
                                ['svg']: {
                                    transform: 'translateY(-1px)'
                                }
                            }}
                            startIcon={<Clear />}
                            onClick={() => {
                                clearForm()
                            }}
                        >
                            Clear
                        </ArrowButton>
                        <ArrowButton
                            type="submit"
                            endIcon={<Send />}
                            sx={{
                                borderBottomRightRadius: '65px',
                                width: 'fit-content',
                                padding: '0 35px 0 30px',
                                ['svg']: {
                                    transform: 'translateY(-1px)'
                                }
                            }}
                        >
                            Send
                        </ArrowButton>
                    </StyledFormButtons>
                </StyledForm>
            </ContactsRight>
        </StyledContactSection>
    )
}