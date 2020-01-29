import React, { PureComponent } from "react";

import Img from "gatsby-image";
// import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

// import Bio from '../components/Bio';
// import Seo from '../components/Seo';
// import Layout from "../components/Layout";
import Name from "../components/name";
import { rhythm, scale } from "../utils/typography";

/* eslint-disable react/no-danger */
class BlogPostTemplate extends PureComponent {
  render() {
    const { data, pageContext, location } = this.props;
    const { markdownRemark: post, site } = data;
    const siteTitle = site.siteMetadata.title;
    const { previous, next } = pageContext;
    const featuredImageFluid =
      post.frontmatter.featuredImage.childImageSharp.fluid;
    const { description, title, date, imageDescription } = post.frontmatter;

    const meta = `${date} · ${post.timeToRead} min read`;

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
        }}
      >
        <Name dark />
        {/* <Seo
          title={post.frontmatter.title}
          description={description || post.excerpt}
        /> */}
        <h1
          style={{
            marginTop: rhythm(1),
            marginBottom: 0,
            borderBottom: 0
          }}
        >
          {title}
        </h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1)
          }}
        >
          {meta}
        </p>
        <Img fluid={featuredImageFluid} />
        <div
          style={{
            textAlign: "center",
            color: "#a2a2a2",
            fontSize: "1rem"
          }}
        >
          {imageDescription}
        </div>
        <br />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1)
          }}
        />
        {/* <Bio /> */}

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ←&nbsp;
                {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title.length > 30
                  ? `${next.frontmatter.title.substring(0, 29)}...`
                  : next.frontmatter.title}
                &nbsp;→
              </Link>
            )}
          </li>
        </ul>
      </div>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      timeToRead
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

// import React from 'react'
// import { graphql } from 'gatsby'
// import styled from 'styled-components'
// import TimeAgo from 'react-timeago'
// import { Flex, Box } from 'grid-styled'

// import Breadcrumb from '../components/breadcrumb'
// import Bar from '../components/bar'

// const Header = styled.div`
//   height: fit-contents;
//   padding: 0;
//   background: #292929;
//   position: relative;
//   overflow: hidden;

//   & > div {
//     padding-top: 120px;
//     margin: auto;
//     max-width: 600px;
//   }
// `

// const Tags = styled.ol`
//   float: right;
//   list-style: none;
//   margin: 0;
//   & li a,
//   & li {
//     font-weight: 600;
//     text-transform: uppercase;
//     text-decoration: none;
//     display: inline-block;
//     color: #222;
//   }
//   & > li + li:before {
//     padding: 0 8px;
//     font-weight: 400;
//     color: #444;
//     content: '|';
//   }
// `

// const Content = styled.div`
//   margin: 0 auto;
//   max-width: 960px;
//   padding: 0px 1.0875rem 1.45rem;
//   padding-top: 5vh;
//   hr {
//     margin: 0 0 40px;
//   }
// `

// const Title = styled.h1`
//   margin-top: 0;
//   text-transform: capitalize;
//   color: #fff;
// `

// const Timestamp = styled.i`
//   float: right;
// `

// const TimeToRead = styled.h5`
//   text-transform: uppercase;
//   margin-top: 0.5em;
//   display: inline-block;
// `

// export default ({ data, location }) => {
//   const post = data.markdownRemark
//   const crumbs = [
//     { name: 'home', link: '/' },
//     { name: 'portfolio', link: '/#portfolio' },
//     { name: post.frontmatter.title, link: location.pathname },
//   ]
//   const tags = post.frontmatter.tags.map(function(tag) {
//     return <li key={tag}>{tag}</li>
//   })
//   return (
//     <div>
//       <Header>
//         <Flex flexWrap="wrap">
//           <Box px={2} width={[1, 2 / 3, 1 / 3]}>
//             <Title>{post.frontmatter.title}</Title>
//           </Box>
//           <Box px={2} width={[1, 2 / 3]}>
//             <Breadcrumb crumbs={crumbs} />
//           </Box>
//           <Box px={2} width={[1]}>
//             <Bar />
//           </Box>
//         </Flex>
//       </Header>
//       <Content>
//         <TimeToRead>{post.timeToRead} min read</TimeToRead>
//         <Tags>{tags}</Tags>
//         <Bar />
//         <div dangerouslySetInnerHTML={{ __html: post.html }} />
//         <Timestamp>
//           Posted: <TimeAgo date={post.frontmatter.date} />
//         </Timestamp>
//       </Content>
//     </div>
//   )
// }

// export const query = graphql`
//   query BlogPostQuery($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       timeToRead
//       frontmatter {
//         title
//         date
//         tags
//       }
//     }
//   }
// `
