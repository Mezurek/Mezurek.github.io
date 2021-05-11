import React from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Main from "../components/Main/Main";
import Separator from "../components/Separator/Separator";
import Footer from "../components/Footer/Footer";

const MainTemplate = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      <Main />
      {children}
      <Separator />
      <Footer />
    </>
  );
};

export default MainTemplate;
