import React, { Component } from "react";

import Image from "gatsby-image";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import styled, { css } from "styled-components";

import Name from "../components/name";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

// import "./blog.scss";

const Container = styled.div`
  padding-left: 4em;
  padding-top: 1em;
  padding-right: 4em;
`;

const NavContainer = styled.div`
  @media (min-width: 768px) {
    display: flex !important;
    flex-direction: row !important;
    justify-content: space-between;
  }
`;

const Title = styled.h1`
  font-family: "Raleway";
  text-transform: uppercase;
  letter-spacing: 6px;
  margin-bottom: 40px;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  border: none;
  color: #292929;

  ${props =>
    props.small &&
    css`
      font-size: 20px;
      letter-spacing: 2px;
      font-weight: 700;
      line-height: 24px;
    `}
`;

const BlogHead = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: bold;

  @media (min-width: 768px) {
    font-family: "Pacifico", cursive;
    font-size: 20pt;
  }

  @media (max-width: 767px) {
    font-size: 15pt;
    margin-top: 50px;
  }
`;

const BlogListContainer = styled.div`
  margin-top: 50px;

  @media (max-width: 767px) {
    margin-top: 10px;
  }
`;

const EmptyBlogSection = styled.div`
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  h4 {
    text-align: center;
    max-width: 50%;
  }
`;

const BlogItemContainer = styled.div`
  @media (min-width: 768px) {
    display: flex !important;
    flex-direction: row !important;
  }

  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 5px;
  z-index: 1;
  transition: transform 0.33s var(--ease-out-quart);
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  margin-bottom: 60px;

  &[data-a11y="true"]:focus::after {
    content: "";
    position: absolute;
    left: -1.5%;
    top: -2%;
    width: 103%;
    height: 104%;
    border: 3px solid;
    background: rgba(255, 255, 255, 0.01);
    border-radius: 5px;
  }

  &:hover .blog-item-image,
  &:focus .blog-item-image {
    transform: translateY(-1px);
    box-shadow: 0 50px 80px -20px rgba(0, 0, 0, 0.27),
      0 30px 50px -30px rgba(0, 0, 0, 0.3);
  }

  &:hover h2 {
    color: blue;
  }

  .blog-item-image {
    height: 220px;
    box-shadow: 0 30px 60px -10px rgba(0, 0, 0, 0.3),
      0 18px 36px -18px rgba(0, 0, 0, 0.33);
    margin-bottom: 30px;
    transition: transform 0.3s var(--ease-out-quad),
      box-shadow 0.3s var(--ease-out-quad);
  }

  h2 {
    text-overflow: ellipsis;
    overflow-wrap: normal;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    white-space: normal;
    overflow: hidden;
    border-bottom: none;

    font-size: 21px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    text-overflow: ellipsis;
    overflow-wrap: normal;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    white-space: normal;
    overflow: hidden;

    font-size: 16px;
    margin-bottom: 10px;
    color: #73737d;
    max-width: 515px;
  }

  .blog-item-meta {
    font-weight: 600;
    font-size: 16px;
    color: #73737d;
    opacity: 0.33;
  }
`;

const BlogItemImageContainer = styled.div`
  @media (min-width: 768px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
`;

const BlogItemBetweenSpacing = styled.div`
  @media (min-width: 768px) {
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
  }
`;

const BlogItemContentContainer = styled.div`
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;

  @media (min-width: 768px) {
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
  }
`;

class Blog extends Component {
  render() {
    return (
      <Container>
        <Name dark />
        <Title small>Recent Writings</Title>
        <BlogListContainer>{this.renderBlogList()}</BlogListContainer>
        {/* <Footer /> */}
      </Container>
    );
  }

  renderBlogList = () => {
    const { data } = this.props;
    const posts = data.allMarkdownRemark.edges;

    if (posts.length === 0) {
      return this.renderEmptyBlog();
    }

    return <>{posts.map(this.renderBlogItem)}</>;
  };

  renderEmptyBlog = () => {
    return (
      <EmptyBlogSection>
        <h4>Oops! There&apos;s nothing here! Something cool is coming here!</h4>
      </EmptyBlogSection>
    );
  };

  renderBlogItem = ({ node }) => {
    const { fields, excerpt, frontmatter, timeToRead } = node;
    const { date, featuredImage, title, description } = frontmatter;
    const blogMeta = `${date} · ${timeToRead} min read`;
    return (
      <Link
        style={{ boxShadow: `none`, textDecoration: "none", color: "black" }}
        to={node.fields.slug}
      >
        <BlogItemContainer>
          <BlogItemImageContainer>
            <Image
              className="blog-item-image"
              fluid={featuredImage.childImageSharp.fluid}
            />
          </BlogItemImageContainer>
          <BlogItemBetweenSpacing />
          <BlogItemContentContainer>
            <h2>{title || fields.slug}</h2>
            <p>{description || excerpt}</p>
            <div className="blog-item-meta">{blogMeta}</div>
          </BlogItemContentContainer>
        </BlogItemContainer>
      </Link>
    );
  };
}

Blog.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  }).isRequired
};

export default Blog;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          excerpt
          timeToRead
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            type
            featuredImage {
              publicURL
              childImageSharp {
                fluid(maxWidth: 1240) {
                  src
                  aspectRatio
                  srcSet
                  sizes
                }
              }
            }
          }
        }
      }
    }
  }
`;
