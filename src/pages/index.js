import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faLinkedin , } from '@fortawesome/free-brands-svg-icons';
import {  faGithub , } from '@fortawesome/free-brands-svg-icons';
// import { faGithubSquare } from "@fortawesome/free-solid-svg-icons"
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons"
import Layout from "../components/layout"
import SEO from "../components/seo"
import jvCircle from '../images/jv_circle.png'

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
const StickyDivStyles = styled.div`
 position: absolute;
 right: 40px;
 display: flex;
 flex-direction: column;
`
const HomeDivStyles = styled.div`
  ${'' /* min-height: calc(100vh -40px); */}
  min-height: 90vh;
  border: solid 1px red;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  ${'' /* grid-template-areas:
    "title . . "
    ". arrow portrait"; */}
`
const TitleDivStyles = styled.div`
  ${'' /* grid-area: title */}
`

const ScrollDivStyles = styled.div`
  ${'' /* grid-area: arrow; */}
`

const ImageStyles = styled.img`
  ${'' /* grid-area: portrait; */}
  height: 200px;
  width: 200px;
  ${'' /* height: 25%;
  width: 25%;
  min-height: 160px;
  min-width: 160px;
  max-height: 240px;
  max-width: 240px */}
  `

const Home = props => (
  <Layout location={props.location}>
    <SEO title="home" />

    <HomeDivStyles>
      <TitleDivStyles>
        <H1Styles>James Vickers<br/>Full Stack<br/>Developer</H1Styles>
        <H3Styles>Passionate about all things JavaScript</H3Styles>
      </TitleDivStyles>

      <StickyDivStyles>
        <FontAwesomeIcon icon={faLinkedin} style={{ height: "50px", width: "50px", color: "#6FC9E3" }} />
        <FontAwesomeIcon icon={faGithub} style={{ height: "50px", width: "50px", color: "#6FC9E3" }} />
        {/* <FontAwesomeIcon icon={faGithubSquare} style={{ height: "50px", width: "50px", color: "#6FC9E3" }} /> */}
        <FontAwesomeIcon icon={faEnvelopeSquare} style={{ height: "50px", width: "50px", color: "#6FC9E3" }} />
      </StickyDivStyles>

      <ScrollDivStyles>
        <H3Styles>Scroll to see what I do..</H3Styles>
        <FontAwesomeIcon icon={faAngleDoubleDown} style={{ height: "50px", width: "50px", color: "#6FC9E3" }} />
      </ScrollDivStyles>
  
      <ImageStyles     
      src={jvCircle}
      alt="Profile picture of James Vickers"
      aria-label="Profile picture of James Vickers"/>
    </HomeDivStyles>
        
  </Layout>
)

export default Home
