import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import StyledHero from '../components/StyledHero';

const Contact = ({data}) => {
  return (
    <Layout>
      <StyledHero img={data.contactBcg.childImageSharp.fluid}>

      </StyledHero>
    </Layout>
  )
}

export const query = graphql`
  query {
    contactBcg: file(relativePath: {eq: "connectBcg.jpeg"}){
      childImageSharp{
        fluid(maxWidth: 4160, quality: 90){
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }`;

export default Contact;