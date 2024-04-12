import { Download, Save } from "@mui/icons-material";
import { AboutImage, AboutLeftPart, AboutRightPart, AboutTopText, DownloadButton, StyledAboutSection } from "./styled"
import me from '../../resources/images/MePr.jpg'
import { Grid } from "@mui/material";

interface IProps {}

export const AboutSection: React.FC<IProps> = () => {
    const onSaveButtonClick = () => {
        const pdfUrl = "/documents/CV.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Viktor_Riabokon_CV.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <StyledAboutSection>
                <AboutTopText>
                    About
                </AboutTopText>
                <AboutLeftPart>
                    <div>
                        <b style={{
                            fontSize: '24px'
                        }}>
                            Experienced Web Developer with 2 and a half years of experience in Frontend and 1 year in Backend development.
                        </b>
                        <br /><br />
                        Skilled in creating software solutions using JavaScript, TypeScript, React, Next.js. Committed to code quality, best practices, and staying updated with industry trends. A problem-solving enthusiast dedicated to delivering high-performance solutions.
                    </div>

                    <DownloadButton
                        onClick={onSaveButtonClick}
                        startIcon={<Download />}
                    >
                        Download My CV
                    </DownloadButton>
                </AboutLeftPart>

                <AboutRightPart>
                    <AboutImage src={me} />
                </AboutRightPart>
            </StyledAboutSection>
        </>
    )
}