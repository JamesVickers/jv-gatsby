import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import JvCircle from '../images/jv_circle.png'

const H1Styles = styled.h1`
    font-family: "title-font";
    font-size: 3.5rem;
    color: ${props => props.theme.colorDark};
    margin: 0;
`

const ImmageStyles = styled.img`
  height: 20%;
  width: 20%;`

const Home = props => (
  <Layout location={props.location}>
    <SEO title="home" />
      <H1Styles>James Vickers,<br/> Full Stack Developer.</H1Styles>
        <ImmageStyles     
        src={JvCircle}
        alt="Treetops Tech logo; seven small hexagons arranged in a circle."
        aria-label="Treetops tech logo. Navigation link to homepage."/>
  </Layout>
)

export default Home
