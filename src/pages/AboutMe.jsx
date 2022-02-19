import Navbar from '../components/Navbar'

const AboutMe = () => {
  return <div className="page">
      <Navbar curPage={"about-me"} />
      <div className="page-body">
        <div className="container-holder">
            <div className="page-title-container">
                <h1 className="lrg-text-box text-center">About Lucas Hoggan</h1>
            </div>
            <div className="container">
              <div className="container-title">Where Am I Based?</div>
              <div className="container-divider"></div>
              <div className="text-holder">
                <div className="med-text-box text-center">I'm based in east scotland</div>
              </div>
            </div>
            <div className="container">
              <div className="container-title">When Did I Start Programming?</div>
              <div className="container-divider"></div>
              <div className="text-holder">
                <div className="med-text-box text-center">I started to learn Python in march 2020</div>
              </div>
            </div>
            <div className="container">
              <div className="container-title">What Languages Do I Know?</div>
              <div className="container-divider"></div>
              <div className="text-holder">
                <div className="med-text-box text-center">The programming languages i have learnt are, Python, JavaScript, HTML, CSS, Go, Java and C#</div>
              </div>
            </div>
            <div className="container">
              <div className="container-title">How Old Am I?</div>
              <div className="container-divider"></div>
              <div className="text-holder">
                <div className="med-text-box text-center">In 2022 I Will Turn 14 years old</div>
              </div>
            </div>
            <div className="container">
              <div className="container-title">What Are My Intrests?</div>
              <div className="container-divider"></div>
              <div className="text-holder">
                <h1 className="med-text-box text-center">My intrests are: running, programming, science, cars and math</h1> 
              </div>
            </div>
        </div>
      </div>
  </div>;
};

export default AboutMe;
