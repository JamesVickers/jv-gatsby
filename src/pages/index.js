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
  font-size: 2.5rem;
  margin: 0;
  padding: 0 2%;
`
const H3Styles = styled.h2`
  font-family: "title-font";
  font-size: 1.2rem;
  margin: 0;
  padding: 0 0 2% 2%;
`
const HomeDivStyles = styled.div`
  min-height: 90vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr;
  margin-bottom: 5%;
`
const StickyDivStyles = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: calc(5% + 20px);
  background: rgba(239, 239, 239, 0.7);
  padding: 5px;
  border-radius: 10px;
`
const TitleDivStyles = styled.div`
  grid-column: 1/3;
  grid-row: 1/2;
  border-left: solid 5px ${props => props.theme.colorDark};
  align-self: start;
`
const ScrollDivStyles = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  align-self: end;
`
const ImageStyles = styled.img`
  grid-column: 3/4;
  grid-row: 2/3;
  justify-self: end;
  align-self: end;
  height: 200px;
  width: 200px;
`

const Home = props => (
  <Layout location={props.location}>
    <SEO title="home" />

    <HomeDivStyles>
      <StickyDivStyles>
          <FontAwesomeIcon icon={faLinkedin} style={{ height: "50px", width: "50px", color: "#6FC9E3" }} />
          <FontAwesomeIcon icon={faGithub} style={{ height: "50px", width: "50px", color: "#6FC9E3" }} />
          {/* <FontAwesomeIcon icon={faGithubSquare} style={{ height: "50px", width: "50px", color: "#6FC9E3" }} /> */}
          <FontAwesomeIcon icon={faEnvelopeSquare} style={{ height: "50px", width: "50px", color: "#6FC9E3" }} />
      </StickyDivStyles>

      <TitleDivStyles>
        <H1Styles>James Vickers<br/>Full Stack Developer</H1Styles>
        <H3Styles>Passionate about all things JavaScript</H3Styles>
      </TitleDivStyles>

      <ScrollDivStyles>
        <H3Styles>Scroll to see what I do..</H3Styles>
        <FontAwesomeIcon icon={faAngleDoubleDown} style={{ height: "50px", width: "50px", color: "#6FC9E3" }} />
      </ScrollDivStyles>
  
      <ImageStyles src={jvCircle} alt="Profile picture of James Vickers" aria-label="Profile picture of James Vickers"/>
    </HomeDivStyles>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer efficitur diam non odio ornare, tincidunt congue diam accumsan. Vestibulum odio dolor, iaculis a dolor eget, ultricies consequat erat. Quisque at semper mi. Suspendisse tincidunt nisl id ex eleifend, sed tempus magna faucibus. Curabitur ac eros magna. Aliquam nec interdum erat. Mauris efficitur maximus ligula vel molestie. Nunc egestas, diam nec varius euismod, dolor dolor pulvinar tellus, id dapibus dui tellus id nibh. Sed egestas consectetur interdum. Nullam faucibus arcu sed ligula commodo finibus. Maecenas mattis lectus nec sapien posuere semper. Vestibulum maximus semper metus.

Nam dictum commodo justo ut commodo. Pellentesque feugiat nisl et dolor tempus, nec aliquet mauris sagittis. In a purus sit amet massa efficitur finibus vel non libero. Ut posuere justo vel eros finibus, quis semper orci tempor. Pellentesque scelerisque dapibus ex eu dictum. Aenean faucibus lorem ac ante venenatis, vel bibendum nisi ultricies. Nam eu sapien sollicitudin, vehicula nunc consectetur, condimentum est. Praesent a tincidunt tellus, eu egestas nisi. Praesent rutrum consectetur efficitur. Sed in enim a massa auctor condimentum.

Ut nec rhoncus mi. Maecenas pharetra mauris mi, eu ornare dolor rutrum non. In hac habitasse platea dictumst. Suspendisse finibus, sem quis semper tincidunt, quam sem volutpat est, quis aliquet massa diam ut augue. Maecenas condimentum blandit vehicula. Proin in mollis lectus. Donec venenatis dui vitae hendrerit egestas. Nullam tincidunt est eros, quis suscipit purus bibendum id.

Aliquam nunc velit, commodo vitae arcu sit amet, pretium sagittis odio. Quisque sit amet nisl vestibulum, aliquam neque et, rutrum diam. Nullam sed sapien arcu. Nulla facilisi. In hac habitasse platea dictumst. Nam fermentum ipsum risus, ut posuere elit ultricies sed. Nunc dignissim ex et sagittis suscipit. Proin magna nibh, ornare ac enim quis, tempus varius sem. Phasellus commodo suscipit est ut ornare. Phasellus laoreet porta feugiat. Donec turpis lectus, dignissim in semper a, convallis nec augue.

Nunc pretium metus sit amet elit bibendum pellentesque. Vestibulum ac odio ac magna scelerisque viverra a nec tellus. Donec a cursus augue. Etiam neque lorem, ornare nec commodo eget, bibendum eu metus. Sed nulla sapien, tempor cursus dui et, iaculis suscipit nulla. Aliquam erat volutpat. In semper nec augue sit amet faucibus. Donec tempor molestie sem sollicitudin tincidunt. Vestibulum placerat porttitor mauris vel ultricies. Sed sagittis cursus suscipit. Sed porttitor felis eu nisi auctor malesuada. Integer venenatis sit amet sapien a finibus. Donec at leo in nisl venenatis viverra. Aenean facilisis neque eu odio auctor iaculis. Nullam vel metus pharetra, venenatis sem id, tristique justo.</p>

        
  </Layout>
)

export default Home
