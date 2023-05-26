/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { useNavigate } from "react-router-dom";
export const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/projects/${project._id}`)}>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
    </div>
  );
};
