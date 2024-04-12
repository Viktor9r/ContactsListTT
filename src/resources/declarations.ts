import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { ThreeEvent } from '@react-three/fiber';
import { extend } from '@react-three/fiber';
import { HTMLAttributes } from 'react';
import { Camera } from 'three';

extend({ OrbitControls });

declare global {
    namespace JSX {
        interface IntrinsicElements {
            orbitControls: React.DetailedHTMLProps<
                OrbitControlsProps & HTMLAttributes<HTMLDivElement>,
                HTMLDivElement
            >;
        }
    }
}

interface OrbitControlsProps {
    enableZoom?: boolean;
    ref?: React.MutableRefObject<OrbitControls>;
    args?: [camera: Camera, domElement: HTMLElement];
    autoRotate?: boolean;
    autoRotateSpeed?: number;
    onPointerDown?: (event: ThreeEvent<MouseEvent>) => void;
    onPointerUp?: (event: ThreeEvent<MouseEvent>) => void;
    onPointerMove?: (event: ThreeEvent<MouseEvent>) => void;
    onWheel?: (event: ThreeEvent<WheelEvent>) => void;
}
