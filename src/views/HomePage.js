import React from "react";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <div className="main2">
      <Helmet>
        <title>Welcome! - Budget Bytes</title>
      </Helmet>
      <div className="home">
        <h1 className="archivetitle">Welcome!</h1>
        <p>
          Frontend application for class created and written in JavaScript and
          React.
        </p>
        <p>
          Project is just an imitation of Beth's blog - 
          <a href="https://www.budgetbytes.com/">Budget Bytes</a>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
