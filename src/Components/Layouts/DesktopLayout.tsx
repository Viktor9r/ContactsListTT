import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Canvas, extend, useFrame, useLoader, useThree } from '@react-three/fiber';
import circleIcon from '../../resources/icons/whiteCircle.webp'
import { Html } from '@react-three/drei';
import { useRef, useCallback, useMemo, Suspense, useState, useEffect } from 'react';
import { AppInnerContainer } from '../../styled';
import { EntryScreen } from '../EntryScreen';
import { AppHeader } from '../Header';
import { MainScreenBottomBar } from '../MainScreenBottomBar';
import { AboutSection } from '../AboutSection';
import { SkillsSection } from '../SkillsSection';
import { ProjectsSection } from '../ProjectsSection';
import { ContactSection } from '../ContactSection';
import { useTabNavigation } from '../../storage/useTabNavigation';
import { useLocation, useNavigate } from 'react-router-dom';

extend({ OrbitControls })

function CameraControls() {
    const {
        camera,
        gl: { domElement }
    } = useThree();

    camera.position.set(0, 900, 100); // Adjust the Z-coordinate according to your scene
    camera.lookAt(0, 0, 0);

    return (
        null
    );
}

function Points() {
    const imgTex = useLoader(THREE.TextureLoader, circleIcon);
    const bufferRef = useRef<any>();

    let t = 3;
    let f = 0.02;
    let a = 6;
    const graph = useCallback((x: number, z: number) => {
        return Math.sin(f * (x ** 2 + z ** 2 + t)) * a;
    }, [t, f, a])

    const count = 250
    const sep = 15
    let positions = useMemo(() => {
        let positions = []

        for (let xi = 0; xi < count; xi++) {
            for (let zi = 0; zi < count; zi++) {
                let x = sep * (xi - count / Math.floor(Math.random() * 4 + 5));
                let z = sep * (zi - count / 2);
                let y = graph(x, z);
                positions.push(x, y, z);
            }
        }

        return new Float32Array(positions);
    }, [count, sep, graph])

    let frameCounter = 0;

    useFrame(() => {
        frameCounter++;

        if (frameCounter % 5 === 0) {
            t += 1

            const positions = bufferRef.current.array;

            let i = 0;
            for (let xi = 0; xi < count; xi++) {
                for (let zi = 0; zi < count; zi++) {
                    let x = sep * (xi - count / 2);
                    let z = sep * (zi - count / 2);

                    positions[i + 1] = graph(x, z);
                    i += 3;
                }
            }
            bufferRef.current.needsUpdate = true;

        }

    })
    return (
        <points>
            <bufferGeometry attach="geometry">
                <bufferAttribute
                    ref={bufferRef}
                    attach='attributes-position'
                    array={positions}
                    count={positions.length / 3}
                    itemSize={3}
                />
            </bufferGeometry>

            <pointsMaterial
                attach="material"
                map={imgTex}
                color={0xFF4D1CAF}
                size={0.75}
                transparent={false}
                alphaTest={0.5}
                opacity={1.0}
            />
        </points>
    )
}

function AnimationCanvas() {
    const { value, setValue } = useTabNavigation()
    const [scrollPosition, setScrollPosition] = useState(0);
    const targetRef = useRef(null);
    const navigate = useNavigate();
    let location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    useEffect(() => {
        if (scrollPosition >= 0 && scrollPosition < window.innerHeight && location.pathname !== '/') {
            navigate('/')
        }
        if (!location.pathname.includes('about') && scrollPosition >= window.innerHeight && scrollPosition < window.innerHeight * 2) {
            navigate('/about')
        }
        if (!location.pathname.includes('skills') && scrollPosition >= window.innerHeight * 2 && scrollPosition < window.innerHeight * 3) {
            navigate('/skills')
        }
        if (!location.pathname.includes('projects') && scrollPosition >= window.innerHeight * 3 && scrollPosition < window.innerHeight * 4) {
            navigate('/projects')
        }
        if (!location.pathname.includes('contact') && scrollPosition >= window.innerHeight * 4 && scrollPosition < window.innerHeight * 5) {
            navigate('/contact')
        }
    }, [scrollPosition, setScrollPosition])

    const homeRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Scroll to the component when it's rendered
        if (homeRef.current && location.pathname == '/') {
            homeRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        if (aboutRef.current && location.pathname.includes('/about')) {
            aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        if (skillsRef.current && location.pathname.includes('/skills')) {
            skillsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        if (projectsRef.current && location.pathname.includes('/projects')) {
            projectsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        if (contactRef.current && location.pathname.includes('/contact')) {
            contactRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <div style={{
            position: 'relative',
        }}>
            <AppHeader />
            <Canvas
                style={{ height: '100%', position: 'absolute', zIndex: -1 }}
                camera={{ position: [100, 190, 0], fov: 75 }}
            >
                <Suspense fallback={null}>
                    <Points />
                </Suspense>
                <CameraControls />
            </Canvas>
            <div ref={homeRef}>
                <EntryScreen />
            </div>

            <AppInnerContainer>
                <div ref={aboutRef}>
                    <AboutSection />
                </div>
                <div ref={skillsRef}>
                    <SkillsSection />
                </div>
                <div ref={projectsRef}>
                    <ProjectsSection />
                </div>
                <div ref={contactRef}>
                    <ContactSection />
                </div>
            </AppInnerContainer>
            <MainScreenBottomBar />
        </div>
    );
}

export const DesktopLayout: React.FC = () => {
    return (
        <>
            <AnimationCanvas />
        </>
    )
}