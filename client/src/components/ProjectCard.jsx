/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export const ProjectCard = ({ project }) => {
  return (
    <div>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
    </div>
  );
};
