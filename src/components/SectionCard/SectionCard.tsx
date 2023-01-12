import CardProject from "../CardProject/CardProject";
import { SectionCardStyled } from "./SectionCardStyled";

const SectionCard = (): JSX.Element => {
  return (
    <>
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
    </>
  );
};

export default SectionCard;
