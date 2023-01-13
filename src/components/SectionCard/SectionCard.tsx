import CardProject from "../CardProject/CardProject";
import { SectionCardStyled } from "./SectionCardStyled";
import { Element } from "react-scroll";
const SectionCard = (): JSX.Element => {
  return (
    <>
      <SectionCardStyled>
        <Element name="projects">
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
        </Element>
      </SectionCardStyled>
    </>
  );
};

export default SectionCard;
