import CardProject from "../CardProject/CardProject";
import { SectionCardStyled } from "./SectionCardStyled";
import { Element } from "react-scroll";
const SectionCard = (): JSX.Element => {
  return (
    <>
      <Element name="projects">
        <SectionCardStyled>
          <div>
            <h3>Projects</h3>

            <div className="row">
              <CardProject
                image="../../.././images/image.jpg"
                textImage={""}
                textApp={"text"}
                titleApp={"Project"}
              />
              <CardProject
                image="../../.././images/image.jpg"
                textImage={""}
                textApp={"text"}
                titleApp={"Project"}
              />
              <CardProject
                image="../../.././images/image.jpg"
                textImage={""}
                textApp={"text"}
                titleApp={"Project"}
              />
            </div>
          </div>
        </SectionCardStyled>
      </Element>
    </>
  );
};

export default SectionCard;
