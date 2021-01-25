import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { Helmet } from 'react-helmet'
import styled, { createGlobalStyle } from 'styled-components'
import { Flex, Box } from 'grid-styled'

import Footer from './footer'

const GlobalStyle = createGlobalStyle`
  @import "//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";

  html {
    max-width: 100vw;
    overflow-x: hidden;
  }
`

const Body = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  width: 100vw;

  img {
    margin-bottom: 0;
  }
`

const Content = styled.div`
  flex: 1;
`

const PageBase = ({ location, children }) => {
  return (
    <Body>
      <GlobalStyle />
      <Helmet
        title="Piyush Khanduri"
        meta={[
          { name: 'description', content: 'Piyush Khanduri is a Digital Marketer, with expertise in Social Media Strategy. For more than 5 years in the industry, he is helping companies in Branding and Marketing. He is also a student of psychology. He has been a host in various online programmes and events. He is also working with various NGOs around the globe which provide help to people around the globe. ' },
          { name: 'keywords', content: 'piyush, khanduri, Digital, Marketer, social, media, strategy, branding, marketing, psychology, host , anchor, NGOs ' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        ]}
      >
        <link rel="icon" type="image/png" href="favicon.png" />
        </Helmet>
      <Content>{children}</Content>
      {location && location.pathname != '/404' && <Footer />}
    </Body>
  )
}

export default PageBase
