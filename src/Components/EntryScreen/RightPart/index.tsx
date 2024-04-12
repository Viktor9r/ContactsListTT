import { EntryScreenRight } from "../styled"
import { Suspense, useEffect, useState } from "react"
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from "@react-three/drei"
import Back from './Back'

interface IProps { }

export const EntryScreenRightPart: React.FC<IProps> = () => {
    const [rightPartWidth, setRightPartWidth] = useState<string>('50vw');

    useEffect(() => {
        function handleResize() {
            const rightPart = document.getElementById('right');
            if (rightPart) {
                setRightPartWidth('50vw');
            }
        }

        handleResize(); // Initial call to handleResize

        window.addEventListener('resize', handleResize); // Attach event listener

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    return (
        <>
            <EntryScreenRight
                sx={{
                    minWidth: rightPartWidth,
                    maxWidth: rightPartWidth
                }}
            >
                <Canvas>
                    <ambientLight />
                    <OrbitControls autoRotate autoRotateSpeed={0.35} enableRotate enableZoom={false} rotateSpeed={1} />
                    <Suspense fallback={null}>
                        <Back />
                    </Suspense>
                    <Environment preset="sunset" />
                </Canvas>
            </EntryScreenRight>
        </>
    )
}