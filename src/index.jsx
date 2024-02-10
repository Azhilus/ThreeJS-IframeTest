import './style.css'
import { Canvas } from '@react-three/fiber'
import ReactDOM from 'react-dom'
import { Environment } from '@react-three/drei' // Import Environment component
import Laptop from "./Laptop.jsx"

const root = ReactDOM.createRoot(document.getElementById('root')) // Remove # from getElementById

root.render(
  <Canvas
    camera={{
      fov: 45,
      near: 0.1,
      far: 2000,
      position: [-3, 1.5, 4]
    }}
  >
    <Laptop />
  </Canvas>
)
