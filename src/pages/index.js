import React from "react";
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import Banner from '../components/Banner';
import About from '../components/Home/About';
import Services from '../components/Home/Services';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export default ({data}) => {
  return (
    <Layout>
     <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
      <Banner title="Continue Exploring" info="Some stupid text to put here.">
        <AniLink fade to="/tours" className="btn-white">Explore Tours</AniLink>
      </Banner>
     </StyledHero>
     <About />
     <Services />
    </Layout>
  )
}

export const query = graphql`
  query {
    defaultBcg: file(relativePath: {eq: "defaultBcg.jpeg"}){
      childImageSharp{
        fluid(maxWidth: 4160, quality: 90){
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }`;
