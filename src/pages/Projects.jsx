import React from 'react';
import PageBody from "../components/PageBody";
import {FullContainer, ContainerDivider, ContainerTwoColumn, HalfContainer} from '../components/Containers'
import {TitleText, ContentText} from '../components/Text'
import {Link} from 'react-router-dom'

const Projects = () => {
  return <PageBody>
      <FullContainer>
        <TitleText>Projects</TitleText>
      </FullContainer>

      <ContainerDivider />

      <ContainerTwoColumn>

        <HalfContainer>

            <TitleText>Personal Portfolio Site</TitleText>

            <ContainerDivider /> 

            <ContentText>The site is about showing what my abilities are, challenging myself, to display my projects, intrests and Just a overall site about myself and What i am capable of. The site is built off the React JavaScript framework and Hosted on github pages, it uses both .scss and .css files to style it </ContentText>

        </HalfContainer>

        <HalfContainer>
            <TitleText>Product Inventory App</TitleText>
            <ContainerDivider></ContainerDivider>
            <ContentText>This was an app built off the in-built python libary called tkinter. It used multible json files to represent both products and materials data. It had a minimal design. It worked by having categorys which was basicily a list with all the items in it. The items were just a python dicionsry with attributes like; price, amount, name, ect.There were two types of categorys; product categorys and supply categorys. All the product categorys were stored in a file called "products.json" and The supplies in the so called "supplies.json"</ContentText>
        </HalfContainer>

        <HalfContainer></HalfContainer>

      </ContainerTwoColumn>
  </PageBody>;
};

export default Projects;
