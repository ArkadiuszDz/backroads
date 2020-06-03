import React, { Component } from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import StyledHero from '../components/StyledHero';

export default class Tours extends Component {
  render () {
    return (
      <Layout>
        <StyledHero img={this.props.data.defaultBcg.childImageSharp.fluid} home="false">

        </StyledHero>
      </Layout>
    )
  }
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