import React from "react";
import styled from "styled-components";
import { graphql, PageProps } from "gatsby";

const MainStyles = styled.div`
  border: solid var(--yellow) 5px;
  padding: 100px;
`;

export default function IndexPage(props: PageProps): React.ReactElement {
  console.log("prop====>", props);
  return (
    <>
      <MainStyles>
        <p>erock.dev</p>
      </MainStyles>
    </>
  );
}

export const query = graphql`
  query HomePageQuery {
    contentfulPageHome {
      id
      title
      hero {
        headline
        subcopy
      }
      metaData {
        title
        description
        url
      }
    }
  }
`;
