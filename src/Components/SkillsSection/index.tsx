import { SideNavItem, SideNavigation, SkillsBlock, SkillsMiniBlock, SkillsMiniBlockContent, SkillsMiniBlockHeader, SkillsMiniBlockItem, SkillsMiniBlockLeft, SkillsMiniBlockRight, SkillsTitle, StyledSkillsSection } from "./styled"
import { Canvas } from "@react-three/fiber";

import { ReactComponent as FrontendIcon } from '../../resources/icons/frontend.svg'
import { ReactComponent as BackendIcon } from '../../resources/icons/backend.svg'
import { ReactComponent as SoftSkillsIcon } from '../../resources/icons/softskills.svg'
import { ReactComponent as ProgrammingIcon } from '../../resources/icons/programming.svg'

import { ReactComponent as JavaScriptIcon } from '../../resources/icons/javascript.svg'
import { ReactComponent as OopIcon } from '../../resources/icons/oop.svg'
import { ReactComponent as TypeScriptIcon } from '../../resources/icons/typescript.svg'
import { ReactComponent as SQLIcon } from '../../resources/icons/sql.svg'
import { ReactComponent as FlutterIcon } from '../../resources/icons/flutter.svg'
import { ReactComponent as PHPIcon } from '../../resources/icons/php.svg'
import { ReactComponent as HTMLIcon } from '../../resources/icons/html.svg'
import { ReactComponent as CSSIcon } from '../../resources/icons/css.svg'
import { ReactComponent as SCSSIcon } from '../../resources/icons/scss.svg'
import { ReactComponent as AngularIcon } from '../../resources/icons/angular.svg'
import { ReactComponent as ReduxIcon } from '../../resources/icons/redux.svg'
import { ReactComponent as BootstrapIcon } from '../../resources/icons/bootstrap.svg'
import { ReactComponent as ThreeIcon } from '../../resources/icons/threejs.svg'
import { ReactComponent as MUIIcon } from '../../resources/icons/mui.svg'
import { ReactComponent as AccessIcon } from '../../resources/icons/accessebility.svg'
import { ReactComponent as DebugIcon } from '../../resources/icons/debug.svg'
import { ReactComponent as MVVMIcon } from '../../resources/icons/mvvm.svg'
import { ReactComponent as NodeIcon } from '../../resources/icons/node.svg'
import { ReactComponent as WebSocketIcon } from '../../resources/icons/websocket.svg'
import { ReactComponent as AWSIcon } from '../../resources/icons/aws.svg'
import { ReactComponent as APIIcon } from '../../resources/icons/api.svg'
import { ReactComponent as MySQLIcon } from '../../resources/icons/mysql.svg'
import { ReactComponent as PostgreSQLIcon } from '../../resources/icons/postgresql.svg'
import { ReactComponent as PrismaIcon } from '../../resources/icons/prisma.svg'
import { ReactComponent as CriticalThinkingIcon } from '../../resources/icons/critical-thinking.svg'
import { ReactComponent as OrganizedIcon } from '../../resources/icons/organized.svg'
import { ReactComponent as StraightIcon } from '../../resources/icons/straight.svg'
import { ReactComponent as AnalyticsIcon } from '../../resources/icons/analytics.svg'
import { ReactComponent as DetailIcon } from '../../resources/icons/detail.svg'
import { ReactComponent as TeamIcon } from '../../resources/icons/teamwork.svg'
import { ReactComponent as AdaptabilityIcon } from '../../resources/icons/adaptability.svg'
import { ReactComponent as CooperationIcon } from '../../resources/icons/cooperation.svg'
import { ReactComponent as DedicationIcon } from '../../resources/icons/dedication.svg'
import { ReactComponent as PlanningIcon } from '../../resources/icons/planning.svg'

import { ReactComponent as ReactIcon } from '../../resources/icons/react.svg'
import { ReactComponent as NextIcon } from '../../resources/icons/next-js.svg'
import { useState } from "react"
import { SkillsCube } from "./SkillsCube";

const skillsArray = [
    {
        id: 1,
        type: 'Programming',
        icon: <ProgrammingIcon />,
        skills: [
            {
                title: 'JavaScript',
                icon: <JavaScriptIcon />
            },
            {
                title: 'TypeScript',
                icon: <TypeScriptIcon />
            },
            // {
            //     title: 'OOP',
            //     icon: <OopIcon />
            // },
            {
                title: 'SQL',
                icon: <SQLIcon />
            },
            {
                title: 'Flutter',
                icon: <FlutterIcon />
            },
            {
                title: 'PHP',
                icon: <PHPIcon />
            },
        ]
    },
    {
        id: 2,
        type: 'Frontend',
        icon: <FrontendIcon />,
        skills: [
            {
                title: 'React',
                icon: <ReactIcon />
            },
            {
                title: 'HTML',
                icon: <HTMLIcon />
            },
            {
                title: 'CSS',
                icon: <CSSIcon />
            },
            {
                title: 'SCSS',
                icon: <SCSSIcon />
            },
            {
                title: 'Next.js',
                icon: <NextIcon />
            },
            {
                title: 'Angular',
                icon: <AngularIcon />
            },
            {
                title: 'Redux',
                icon: <ReduxIcon />
            },
            // {
            //     title: 'Zustand'
            // },
            {
                title: 'Bootstrap',
                icon: <BootstrapIcon />
            },
            {
                title: 'Three.js',
                icon: <ThreeIcon />
            },
            // {
            //     title: 'Jest'
            // },
            // {
            //     title: 'Styled Components'
            // },
            {
                title: 'Material UI',
                icon: <MUIIcon />
            },
            {
                title: 'Accessibility',
                icon: <AccessIcon />
            },
            {
                title: 'Debugging',
                icon: <DebugIcon />
            },
            {
                title: 'MVVM',
                icon: <MVVMIcon />
            },
        ]
    },
    {
        id: 3,
        type: 'Backend',
        icon: <BackendIcon />,
        skills: [
            {
                title: 'Node.js',
                icon: <NodeIcon />
            },
            {
                title: 'WebSocket',
                icon: <WebSocketIcon />
            },
            {
                title: 'AWS',
                icon: <AWSIcon />
            },
            {
                title: 'REST API',
                icon: <APIIcon />
            },
            {
                title: 'MySQL',
                icon: <MySQLIcon />
            },
            {
                title: 'PostgreSQL',
                icon: <PostgreSQLIcon />
            },
            {
                title: 'Prisma',
                icon: <PrismaIcon />
            },
        ]
    },
    {
        id: 4,
        type: 'Soft Skills',
        icon: <SoftSkillsIcon />,
        skills: [
            {
                title: 'Critical thinking',
                icon: <CriticalThinkingIcon />
            },
            {
                title: 'Organized',
                icon: <OrganizedIcon />
            },
            // {
            //     title: 'Straightforward',
            //     icon: <StraightIcon />
            // },
            {
                title: 'Analytics',
                icon: <AnalyticsIcon />
            },
            {
                title: 'Detail oriented',
                icon: <DetailIcon />
            },
            {
                title: 'Team player',
                icon: <TeamIcon />
            },
            {
                title: 'Adaptability',
                icon: <AdaptabilityIcon />
            },
            {
                title: 'Cooperation',
                icon: <CooperationIcon />
            },
            {
                title: 'Dedication',
                icon: <DedicationIcon />
            },
            {
                title: 'Planning',
                icon: <PlanningIcon />
            },
        ]
    },
]

interface IProps { }

export const SkillsSection: React.FC<IProps> = () => {
    const [hoveredId, setHoveredId] = useState(0);
    const [selectedId, setSelectedId] = useState(0)

    return (
        <StyledSkillsSection>
            <SkillsTitle>Skills</SkillsTitle>

            <SkillsCube
                selectedId={selectedId}
                setSelectedId={setSelectedId}
                skills={skillsArray}
            />

            <SideNavigation>
                {skillsArray.map((item) => (
                    <SideNavItem
                        onMouseOver={() => setHoveredId(0)}
                        onMouseOut={() => setHoveredId(item.id)}
                        key={item.id}
                        sx={{
                            fill: selectedId == item.id ? '#fff' : 'rgba(255, 255, 255, 0.6)',
                            color: selectedId == item.id ? '#fff' : 'rgba(255, 255, 255, 0.6)'
                        }}
                        onClick={() => {
                            setSelectedId(item.id)
                        }}
                    >
                        {item.icon}
                        <div>{item.type}</div>
                    </SideNavItem>
                ))}
            </SideNavigation>
            {/* <Canvas style={{width: '100%', height: 'calc(100vh - 140px)'}}>
                <SkillsCube />
            </Canvas> */}

            {/* <SkillsBlock>
                {skillsArray.map((item) => (
                    <SkillsMiniBlock
                        onMouseOver={() => setHoveredId(item.id)}
                        sx={{
                            borderRight: item.id !== 4 ? '4px solid rgba(255, 255, 255, 0.6)' : 'none',
                            flex: hoveredId == item.id ? 1 : 0
                        }}
                    >
                        <SkillsMiniBlockHeader>
                            {item.icon}
                            <div
                                style={{
                                    transition: '0.5s',
                                    display: hoveredId == item.id ? 'block' : 'none'
                                }}
                            >
                                {item.type}
                            </div>
                        </SkillsMiniBlockHeader>

                        <SkillsMiniBlockContent
                            sx={{
                                display: hoveredId !== item.id ? 'none' : 'flex'
                            }}
                        >
                            <SkillsMiniBlockRight>

                                {item.skills.map((skill: any) => (
                                    <SkillsMiniBlockItem key={skill.title}>
                                        {'<li>'} {skill.title} {'</li>'}
                                    </SkillsMiniBlockItem>
                                ))}

                            </SkillsMiniBlockRight>
                        </SkillsMiniBlockContent>
                    </SkillsMiniBlock>
                ))}
            </SkillsBlock> */}
        </StyledSkillsSection>
    )
}