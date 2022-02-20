import Navbar from "../components/Navbar";
import DragDiv from "../components/DragDiv";

const Home = () => {
  return (
    <div className="page">
      <Navbar curPage={"home"} />
      
      <div className="page-body">
        <div className="container-holder">
          <DragDiv className="page-title-container">
              <h1 className="lrg-text-box text-center">
                The Home of Lucas Hoggan
              </h1>
          </DragDiv>
          <DragDiv className="container">
            <h1 className="container-title">What Is This Site?</h1>
            <div className="container-divider"></div>
            <div className="text-holder">
              <div className="med-text-box text-center">
                Welcome to the home page of the website for Lucas Hoggan. This
                is a personal portfolio website to show off my work,
                achivements, projects and skills. This website is not my first
                project neither will it be my last.
              </div>
            </div>
          </DragDiv>
          <DragDiv className="container">
            <div className="container-title">Who Am I?</div>
            <div className="container-divider"></div>
            <div className="text-holder">
              <div className="med-text-box text-center">
                I am a Scotish Teen self-taught programmer who plans to become a
                developer in the future. I have programmed for a few years to
                learn more about my programming background and me, Visit the
                About Me page of this website.
              </div>
            </div>
          </DragDiv>
        </div>
      </div>
    </div>
  );
};

export default Home;
