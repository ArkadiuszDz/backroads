import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import StyledHero from '../components/StyledHero';

const Blog = ({data}) => {
  return (
    <Layout>
      <StyledHero img={data.blogBcg.childImageSharp.fluid}>

      </StyledHero>
    </Layout>
  )
}

export const query = graphql`
  query {
    blogBcg: file(relativePath: {eq: "blogBcg.jpeg"}){
      childImageSharp{
        fluid(maxWidth: 4160, quality: 90){
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }`;

export default Blog;
