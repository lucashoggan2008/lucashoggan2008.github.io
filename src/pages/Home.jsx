import Navbar from '../components/Navbar'
import {useRef, useState} from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const MovingBox = (props) => {
  const mesh = useRef()
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame(() => {
      mesh.current.rotation.x += 0.01
      mesh.current.rotation.y += 0.01
  })

  return (
      <mesh
      {...props}
      ref={mesh}
      onPointerOver={event => setHover(true)}
      onPointerOut={event => setHover(false)}
      >
          <boxGeometry args={[1, 2, 3]} />
          <meshStandardMaterial color="#B3F2DD" />
      </mesh>

  )
}

const Home = () => {
  return (
    <div className="page">

      
        <Navbar curPage={"home"} />

        
        
    <div className="page-body">

    <div className="cube-container">
          <Canvas>
            <ambientLight />
            <MovingBox scale={[2.5, 1.5, 1]} />
          </Canvas>
      </div>
      
        <div className="container-holder">
        
        <div className="page-title-container">
          <h1 className="lrg-text-box text-center">The Home of Lucas Hoggan</h1>
        </div>
            <div className="container">
              <h1 className="container-title">What Is This Site?</h1>
              <div className="container-divider"></div>
              <div className="text-holder">
                <div className="med-text-box text-center">Welcome to the home page of the website for Lucas Hoggan. This is a personal portfolio website to show off my work, achivements, projects and skills. This website is not my first project neither will it be my last.</div>
              </div>
            </div>
            <div className="container">
              <div className="container-title">Who Am I?</div>
              <div className="container-divider"></div>
              <div className="text-holder">
                <div className="med-text-box text-center">I am a Scotish Teen self-taught programmer who plans to become a developer in the future. I have programmed for a few years to learn more about my programming background and me, Visit the About Me page of this website.</div>
              </div>
            </div>
        </div>
    </div>
  </div>)
};

export default Home;
