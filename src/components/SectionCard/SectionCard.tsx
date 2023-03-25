import CardProject from "../CardProject/CardProject";
import {
  ContaintCardStyled,
  IconsStyled,
  SectionCardStyled,
} from "./SectionCardStyled";
import { Element } from "react-scroll";

const SectionCard = (): JSX.Element => {
  const openInNewTab = (url: string): void => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <>
      <Element name="projects">
        <SectionCardStyled>
          <div>
            <h3>Projects</h3>

            <div className="row">
              <ContaintCardStyled>
                <CardProject
                  image="../../.././images/photomate.svg"
                  textImage={"Social Network"}
                  textApp={"Social Network"}
                  titleApp={"Photomate"}
                />
                <IconsStyled>
                  <img
                    src="../../.././images/link.png"
                    alt=""
                    onClick={() =>
                      openInNewTab("https://photomate-cristina.netlify.app/")
                    }
                    width="40rem"
                    height="40rem"
                  />
                  <img
                    onClick={() =>
                      openInNewTab(
                        "https://github.com/CristinaFores/photomate-fronted"
                      )
                    }
                    alt="dd"
                    src="../../.././images/githubsquare.svg"
                    width="40rem"
                    height="40rem"
                  />
                </IconsStyled>
              </ContaintCardStyled>
              <ContaintCardStyled>
                <CardProject
                  image="../../.././images/notes.svg"
                  textImage={""}
                  textApp={"Things to do"}
                  titleApp={"Blackboard & Notes"}
                />
                <IconsStyled>
                  <img
                    src="../../.././images/link.png"
                    alt=""
                    onClick={() =>
                      openInNewTab("https://blackboards-notes.netlify.app/")
                    }
                    width="40rem"
                    height="40rem"
                  />
                  <img
                    onClick={() =>
                      openInNewTab(
                        "https://github.com/CristinaFores/notes-app-frontend"
                      )
                    }
                    alt="dd"
                    src="../../.././images/githubsquare.svg"
                    width="40rem"
                    height="40rem"
                  />
                </IconsStyled>
              </ContaintCardStyled>
              <ContaintCardStyled>
                <CardProject
                  image="../../.././images/search-movies.svg"
                  textImage={""}
                  textApp={"Search for movies"}
                  titleApp={"Movies"}
                />
                <IconsStyled>
                  <img
                    src="../../.././images/link.png"
                    alt=""
                    onClick={() =>
                      openInNewTab("https://search-movies-cris.netlify.app/")
                    }
                    width="40rem"
                    height="40rem"
                  />
                  <img
                    onClick={() =>
                      openInNewTab(
                        "https://github.com/CristinaFores/search-movies"
                      )
                    }
                    alt="dd"
                    src="../../.././images/githubsquare.svg"
                    width="40rem"
                    height="40rem"
                  />
                </IconsStyled>
              </ContaintCardStyled>
            </div>
          </div>
        </SectionCardStyled>
      </Element>
    </>
  );
};

export default SectionCard;
