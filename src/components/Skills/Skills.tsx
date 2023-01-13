import { SkillsStyled } from "./SkillsStyled";

const Skills = (): JSX.Element => {
  return (
    <>
      <SkillsStyled>
        <h4>Stack</h4>
        <div>
          <img src="../../.././images/javascript.svg" alt="javascript" />
          <img src="../../.././images/typescript.svg" alt="typescript" />
          <img src="../../.././images/react.svg" alt="react" />
          <img src="../../.././images/redux.svg" alt="redux" />
          <img src="../../.././images/node.svg" alt="node" />
          <img src="../../.././images/mongo.svg" alt="mongo" />
          <img src="../../.././images/jest.svg" alt="jest" />
          <img src="../../.././images/cypress.svg" alt="cypress" />
          <img src="../../.././images/git.svg" alt="git" />
          <img src="../../.././images/sass.svg" alt="sass" />
          <img src="../../.././images/html5.svg" alt="html5" />
          <img src="../../.././images/css.svg" alt="css" />
        </div>
      </SkillsStyled>
    </>
  );
};

export default Skills;
