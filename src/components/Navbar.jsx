import {Link} from 'react-router-dom';
import {useRef, useState} from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const facebookIcon = <img className="nav-selc-icon" src={process.env.PUBLIC_URL+"icons/facebook-icon.png"} alt="Facebook logo" />
const twitterIcon = <img className="nav-selc-icon"  src={process.env.PUBLIC_URL+"icons/twitter-icon.png"} alt="Instagram logo" />
const aboutMeIcon = <img src={process.env.PUBLIC_URL+"icons/about-me-icon.svg"} alt="about me" className="nav-selc-icon" />
const projectIcon = <img src={process.env.PUBLIC_URL+"icons/projects-icon.svg"} alt="project" className="nav-selc-icon" />
const homePageIcon = <img src={process.env.PUBLIC_URL+"icons/home-page-icon.svg"} alt="hello" className="nav-selc-icon" />

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
            <meshStandardMaterial color="ice cold" />
        </mesh>

    )
}


const Navbar = (props) => {
    let classNames = {
        "home":"nav-selc-link",
        "projects":"nav-selc-link",
        "about-me":"nav-selc-link"
    }
    if (props.curPage in classNames) {
        classNames[props.curPage]+= " nav-selc-link-on"
    }
  return <nav className="nav">
      <div className="nav-cube-container">
          <Canvas>
            <ambientLight />
            <MovingBox scale={[2.5, 1.5, 1]} />
          </Canvas>
      </div>
      <Link to="/" className="text-link"><h2 className="title-text">Lucas <span className="text-s">Hoggan</span> </h2></Link>
        <div className="nav-selc">
            <Link to="/about-me" className={classNames["about-me"]}>{aboutMeIcon}</Link>
            <Link to="/projects" className={classNames["projects"]}>{projectIcon}</Link>
            <Link to="/" className={classNames["home"]}>{homePageIcon}</Link>
        </div>
        <div className="nav-selc">
            <a target = "_blank" className="nav-selc-link social-icon facebook-icon" href="https://www.facebook.com/profile.php?id=100076263414741">{facebookIcon}</a>
            <a target = "_blank" className="nav-selc-link social-icon twitter-icon" href="https://twitter.com/lucashoggan">{twitterIcon}</a>
        </div>
  </nav>;
};

export default Navbar;
