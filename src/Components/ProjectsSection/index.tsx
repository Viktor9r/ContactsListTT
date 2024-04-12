import { useEffect, useRef, useState } from "react"
import { ArrowButton, ArrowButtons, ProjectAbout, ProjectImage, ProjectLink, ProjectLinkBlock, ProjectSkills, ProjectSkillsDivider, ProjectSkillsItem, ProjectTitle, ProjectsLeft, ProjectsRight, ProjectsTitle, StyledProjectsSection } from "./styled"
import { Button } from "@mui/material";
import { ReactComponent as LinkIcon } from '../../resources/icons/link.svg'
import { ReactComponent as NextIcon } from '../../resources/icons/nextarrow.svg'
import { ReactComponent as BackIcon } from '../../resources/icons/backarrow.svg'
import LaptopCoswick from "./Laptop_coswick";
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from "@react-three/drei"
import fitofan_image from '../../resources/images/fitofan.png'
import fitofan from '../../resources/images/macfitofan.png'
import colo from '../../resources/images/maccolo.png'
import coswick from '../../resources/images/maccoswick.png'
import nova from '../../resources/images/macnova.png'


interface IProps { }

const projects = [
    {
        id: 1,
        title: "Fitofan",
        about: "Fitofan is a platform designed specifically for sports and athletics. A social platform with the primary goal of connecting and uniting athletes throughout the world.",
        link: "https://fitofan.com/",
        skills: ["JavaScript", "TypeScript", "React", "Zustand", "WebSocket", "Node.js", "Express", "SQL", "MySQL", "Prisma", "HTML", "Material UI"],
        image: fitofan
    },
    {
        id: 2,
        title: "Coswick Canada Inc.",
        about: "Coswick Canada Inc is an official representative of Coswick on territory of Canada.",
        link: "https://www.coswickcanada.ca/",
        skills: ["JavaScript", "TypeScript", "React", "Redux", "REST API", "Node.js", "SQL", "MySQL", "HTML", "Styled components"],
        image: coswick
    },
    {
        id: 3,
        title: "IBC Colo",
        about: "COLO Business Club. Exclusive networking, workshops & growth opportunities",
        link: "https://ibccolo.com/",
        skills: ["JavaScript", "TypeScript", "React", "Zustand", "WebSocket", "Node.js", "Express", "SQL", "MySQL", "Prisma", "HTML", "Material UI"],
        image: colo
    },
    {
        id: 4,
        title: "Nova Group",
        about: "Official distributor of European hardwood flooring products across Canada and the United States.",
        link: "https://novagp.ca/",
        skills: ["JavaScript", "TypeScript", "React", "Redux", "REST API", "PHP", "Three.js", "SQL", "PostgreSQL", "HTML", "SCSS"],
        image: nova
    },
]

export const ProjectsSection: React.FC<IProps> = () => {
    const [visibleProjects, setVisibleProjects] = useState<any>([]);
    const [visibleProjectId, setVisibleProjectId] = useState(1);
    useEffect(() => {
        setVisibleProjects(projects)
    }, [setVisibleProjects])

    useEffect(() => { }, [visibleProjectId, setVisibleProjectId])
    const cameraRef = useRef<THREE.PerspectiveCamera>(null!);

    return (
        <>
            <StyledProjectsSection>
                <ProjectsTitle>Projects</ProjectsTitle>

                {visibleProjects.filter((item: any) => item.id == visibleProjectId).map((item: any) => (
                    <ProjectsLeft key={item.title}>
                        <ProjectTitle>
                            {item.title}
                        </ProjectTitle>

                        <ProjectAbout>
                            {item.about}
                        </ProjectAbout>

                        <ProjectLinkBlock>
                            <ProjectLink target="_blank" href={item.link}>
                                Visit website
                                <LinkIcon />
                            </ProjectLink>
                        </ProjectLinkBlock>

                        <ProjectSkillsDivider sx={{ marginBottom: '24px' }} />

                        <ProjectSkills>
                            {item.skills.map((skill: string, index: number) => (
                                <ProjectSkillsItem
                                    key={index}
                                >
                                    {skill}
                                </ProjectSkillsItem>
                            ))}
                        </ProjectSkills>

                        <ProjectSkillsDivider sx={{ marginTop: '24px' }} />

                        <ArrowButtons>
                            <ArrowButton
                                sx={{
                                    borderBottomLeftRadius: '65px',
                                }}
                                startIcon={<BackIcon />}
                                onClick={() => {
                                    if (visibleProjectId != 1) {
                                        setVisibleProjectId(item.id - 1)
                                    } else (
                                        setVisibleProjectId(visibleProjects.length)
                                    )
                                }}
                            >
                                Previous
                            </ArrowButton>

                            <ArrowButton
                                sx={{
                                    borderBottomRightRadius: '65px',
                                }}
                                endIcon={<NextIcon />}
                                onClick={() => {
                                    if (visibleProjectId != visibleProjects.length) {
                                        setVisibleProjectId(item.id + 1)
                                    } else (
                                        setVisibleProjectId(1)
                                    )
                                }}
                            >
                                Next
                            </ArrowButton>
                        </ArrowButtons>
                    </ProjectsLeft>
                ))}

                <ProjectsRight>
                    {/* <Canvas style={{
                        display: 'flex',
                        width: '100%',
                        alignItems: 'center'
                    }}>
                        <ambientLight />
                        <LaptopCoswick />

                        <Environment preset="sunset" />
                    </Canvas> */}
                    <a target="_blank" href={projects.find(item => item.id == visibleProjectId)?.link}>
                        <ProjectImage src={
                            projects.find(item => item.id == visibleProjectId)?.image
                        } />
                    </a>

                </ProjectsRight>

            </StyledProjectsSection>
        </>
    )
}