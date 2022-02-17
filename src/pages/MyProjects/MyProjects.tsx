import { ProjectSection } from "../../components/ProjectSection/ProjectSection";
import { ProjectsData } from "../../data/ProjectsData";
import { Container } from "./MyProjectsStyled";
export const MyProjects = () => {
  return (
    <>
      <Container>
        {ProjectsData.map((project) => {
          return <ProjectSection {...project} />;
        })}
      </Container>
    </>
  );
};
