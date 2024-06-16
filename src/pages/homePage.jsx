import React, { useEffect, useState } from "react";
import "./homePage.css";
import Layout from "../components/layout/layout";
import MainTitle from "../components/homeComponent/TitleComponent/mainTitle";
import SubTitle from "../components/homeComponent/subTitleComponent/subTitle";
import SideBarProducts from "../components/homeComponent/sideBarProductComponents/sideBarProducts";

function HomePage() {
  const [showSideBar, setShowSideBar] = useState(false);
  const handleSideBar = () => {
    setShowSideBar(!showSideBar);
  };

 

  return (
    <div>
      <Layout>
        <MainTitle />
        <SubTitle showSideBar={showSideBar} handleSideBar={handleSideBar} />
        <SideBarProducts showSideBar={showSideBar} />
      </Layout>
    </div>
  );
}

export default HomePage;
