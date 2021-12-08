import React from "react";
import PropTypes from "prop-types";
import Headers from "./Header";
import { GlobalStyled } from "./styles/GlobalStyles";
import styled from "styled-components";

const InnerPage = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`;

function Page({ children }) {
  return (
    <>
      <GlobalStyled />
      <Headers />
      <InnerPage>{children}</InnerPage>
    </>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};

export default Page;
