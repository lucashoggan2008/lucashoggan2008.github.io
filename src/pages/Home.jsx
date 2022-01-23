import React from 'react';
import '../css/home.css'
import {FullContainer, HalfContainer, ContainerDivider, ContainerTwoColumn, ThirdContainer, ContainerThreeRow} from '../components/Containers'
import {TitleText, ContentText, ContentCenterText, ContentRightText} from '../components/Text'
import PageBody from '../components/PageBody'

const Home = () => {
  return (
  <PageBody>

    <FullContainer>
      <TitleText>Welcome!</TitleText>
      
    </FullContainer>
    <ContainerDivider />
    <ContainerTwoColumn>

      <HalfContainer>
        <TitleText>What Is This Site?</TitleText>
        <ContainerDivider />
        <ContentCenterText>
        Welcome to the home page of the website for Lucas Hoggan. This is a personal portfolio website to show off my work, achivements, projects and skills. This website is not my first project neither will it be my last.
        </ContentCenterText>
        <ContainerDivider />
      </HalfContainer>

      <HalfContainer>
        <TitleText>Who Am I?</TitleText>
        <ContainerDivider />
        <ContentText>
          I am a Scotish Teen self-taught programmer who plans to become a developer in the future. I have programmed for a few years to learn more about my programming background and me, Visit the "About Me" page of this website.
        </ContentText>
        <ContainerDivider />
      </HalfContainer>
    </ContainerTwoColumn>

    
  </PageBody>);
};

export default Home;
