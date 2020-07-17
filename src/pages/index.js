import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import jvCircle from '../images/jv_circle.png'
// import concreteTexture from '../images/concrete-texture.png'

// const HomepageBackgroundImage = styled.img`
//   z-index: -100;
//   position: fixed;
//   object-fit: cover;
//   width: 100%;
//   height: 100%;
//   bottom: 20px;
//   left: 20px;
// `
const DivStyles = styled.div`
`

const H1Styles = styled.h1`
  font-family: "title-font";
  font-size: 3rem;
  margin: 0;
  padding: 0 2%;
  border-left: solid 5px ${props => props.theme.colorDark};
`
const H3Styles = styled.h2`
  font-family: "title-font";
  font-size: 1.2rem;
  margin: 0;
`

const ImageStyles = styled.img`
  height: 25%;
  width: 25%;
  min-height: 160px;
  min-width: 160px;
  max-height: 240px;
  max-width: 240px`

const Home = props => (
  <Layout location={props.location}>
    <SEO title="home" />

{/* 
      <HomepageBackgroundImage
        src={concreteTexture}
        alt="forest viewed from above covered with fog."
      /> */}

      <DivStyles>
        <H1Styles>James Vickers.<br/>Full Stack<br/>Developer.</H1Styles>
        <H3Styles>Passionate about all things JavaScript.</H3Styles>
        <H3Styles>About.</H3Styles>
        <H3Styles>Work.</H3Styles>
        <ImageStyles     
        src={jvCircle}
        alt="Profile picture of James Vickers"
        aria-label="Profile picture of James Vickers"/>
      </DivStyles>
  </Layout>
)

export default Home
