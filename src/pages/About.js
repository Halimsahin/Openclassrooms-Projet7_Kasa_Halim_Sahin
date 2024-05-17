import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "../components/BannerAbout";
import imgBannerAbout from "../images/aboutBanner.png";
import Collapse from "../components/Collapse";
import Datas from "../annexes/description.json";

const About = () => {
  return (
    <div className="about">
      <Header />
      <main>
        <Banner image={imgBannerAbout} titre="" />

        <div className="collapse">
          <div className="collapse__width">
            {Datas.map((item) => {
              return (
                <div key={item.id}>
                  <Collapse content={item.content} title={item.title} />
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;