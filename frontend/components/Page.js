import React from "react";
import PropTypes from "prop-types";
import Headers from "./Header";

function Page({ children }) {
  return (
    <>
      <Headers />
      <h2>Navbar</h2>
      {children}
    </>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};

export default Page;
