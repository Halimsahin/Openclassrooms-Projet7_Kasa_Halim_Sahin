import React from "react";
import FicheLogement from "../components/Logements/FicheLogement";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Logements = () => {
  return (
    <div className="logement">
      <Header />
      <main>
        <FicheLogement />
      </main>

      <Footer />
    </div>
  );
};

export default Logements;
