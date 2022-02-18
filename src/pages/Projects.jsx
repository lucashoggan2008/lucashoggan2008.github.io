import React from 'react';
import Navbar from '../components/Navbar'

const Projects = () => {
  return <div className="page">
      <Navbar curPage="projects" />
      <div className="page-body">
          <div className="container-holder">
              <div className="page-title-container" id="page-title-container">
                  <h1 className="lrg-text-box text-center">Projects Made by Lucas Hoggan</h1>
              </div>
              <div className="container">
                  <div className="container-title">Personal Portfolio Site</div>
                  <div className="container-divider"></div>
                  <div className="text-holder">
                      <div className="med-text-box text-center">The site is about showing what my abilities are, challenging myself, to diplay my projects, intrests and Just a overall site about myself and What i am capable of, The site is built off the React JavaScript framework and Hosted on github pages, it and uses scss to style it.</div>
                  </div>
                  </div>

                  <div className="container">
                      <div className="container-title">Product Inventory App</div>
                      <div className="container-divider"></div>
                      <div className="text-holder">
                          <div className="med-text-box text-center">This was a tkinter python project which also made use of JSON to store data. It would hold two type of categorys, product categorys and supply category. The category would hold their type of item and you could change the data by adding items, delete items, change items, add categorys, delete categorys, ect.</div>
                      </div>
                  </div>
              
          </div>
      </div>
  </div>;
};

export default Projects;
