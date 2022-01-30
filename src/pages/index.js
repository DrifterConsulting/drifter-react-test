import * as React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../themes/theme.js";
import Testimonials from "../components/Testimonials";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: "#663399",
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
};

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
};

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
};

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
};

const TestimonialsSection = styled.div`
  padding: 0 calc(${(props) => props.theme.spaceUnit} * 30);
  @media (max-width: 1200px) {
    padding: calc(${(props) => props.theme.spaceUnit} * 20);
  }
  @media (max-width: 992px) {
    padding: calc(${(props) => props.theme.spaceUnit} * 10);
  }
  @media (max-width: 768px) {
    padding: calc(${(props) => props.theme.spaceUnit} * 0.5);
  }
`;

// data
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
];

const customers = [
  {
    comment: `Tanahair is the friendliest and most efficient company I have ever used. The whole thing takes time to introduce 
    the product and as a result puts forward only the best opportunities that really suit you. they help 
    from start to finish to create a great product identity for your company`,
    first_name: `Shalima`,
    last_name: `Hayden`,
    title: `Product Designer`,
  },
  {
    comment: `Here is my second comment Tanahair is the friendliest and most efficient company I have ever used. The whole thing takes time to introduce 
    the product and as a result puts forward only the best opportunities that really suit you. they help 
    from start to finish to create a great product identity for your company`,
    first_name: `Rama`,
    last_name: `Musali`,
    title: `Front-end Developer`,
    customer_profile: `https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png`,
  },
];

// markup
const IndexPage = () => {
  debugger;
  return (
    <ThemeProvider theme={theme}>
      <main style={pageStyles}>
        <title>Home Page</title>
        <h1 style={headingStyles}>
          Welcome!
          <br />
          <span style={headingAccentStyles}>
            — we hope to work with you a lot!{" "}
          </span>
          <span role="img" aria-label="Party popper emojis">
            🎉🎉🎉
          </span>
        </h1>
        <p style={paragraphStyles}>
          Edit <code style={codeStyles}>src/pages/index.js</code> to see this
          page update in real-time.{" "}
          <span role="img" aria-label="Sunglasses smiley emoji">
            😎
          </span>
        </p>
        <p style={paragraphStyles}>
          Make sure to check the README in the repo for more details and
          important links. You can link your components to this page.
        </p>
      </main>
      <TestimonialsSection>
        <Testimonials customers={customers} />
      </TestimonialsSection>
    </ThemeProvider>
  );
};

export default IndexPage;
