import { useParams, Navigate } from "react-router-dom";
import DataLogement from "../../annexes/logements.json";
import Tag from "./Tag";
import Collapse from "../Collapse";
import Carrousel from "./Carrousel";
import Note from "./Note";
import Hote from "./Hote";

const FicheLogement = () => {
  
  const { id } = useParams();

  const ficheLogement = DataLogement.find((logement) => logement.id === id);
  
  const tagsLogement = ficheLogement?.tags.map((tags, i) => {
    return <Tag key={i} nom={tags} />;
  });

  const equipements = ficheLogement?.equipments.map((equipment, i) => {
    return (
      <ul key={i}>
        <li>{equipment}</li>
      </ul>
    );
  });

  return (
    <>
      {ficheLogement ? (
        <div className="fiche-container">
          <Carrousel slides={ficheLogement?.pictures} />
          <section className="fiche-logement">
            <div className="description-info">
              <div className="description-info__titletags">
                <div className="description-info__titletags__title">
                  <span className="titre-logement">{ficheLogement?.title}</span>
                  <span className="endroit-logement">
                    {ficheLogement?.location}
                  </span>
                </div>
                
                <div className="description-info__titletags__tags">
                  {tagsLogement}
                </div>
              </div>

              <div className="description-info__proprietaire">
               
                <div className="description-info__proprietaire__nom-prop">
                  <Hote
                    name={ficheLogement?.host.name}
                    picture={ficheLogement?.host.picture}
                  />
                </div>
                
                <div className="description-info__proprietaire__rate">
                  <Note score={ficheLogement.rating} />
                </div>
              </div>
            </div>
          </section>
          
          <div className="description-content">
            <div className="description-content__description">
              <Collapse
                title="Description"
                content={ficheLogement?.description}
              />
            </div>
            <div className="description-content__equipement">
              <Collapse title="Équipements" content={equipements} />
            </div>
          </div>
        </div>
      ) : (
        <Navigate replace to="/404" />
      )}
    </>
  );
};
export default FicheLogement;