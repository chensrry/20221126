import React from "react";

import Header from "./Header";
import Main from "./Main";

import Footer from "./Footer";

import style from "./layout.less";

export default ({ children }) => {
  return (
    <div className={style.container}>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};
