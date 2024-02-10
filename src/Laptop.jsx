import { Html, PresentationControls, useGLTF } from "@react-three/drei";
import { Environment } from '@react-three/drei'; // Import Environment component

export default function Laptop() {
    const laptop = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')

    return (
        <>
            <Environment preset="warehouse" />

            <PresentationControls global polar={[-0.4,0.2]} >
            <primitive object={laptop.scene} position-y={-1.2}/>  

                <Html wrapperClass="laptop" 
                
                position={[0,0.35,-1.4]} 
                transform 
                distanceFactor={1.2}
                rotation-x={-0.25}
                
                >
                    <iframe src="https://azhilus.github.io"/>
                </Html>


            </PresentationControls>
        </>
    )
}
