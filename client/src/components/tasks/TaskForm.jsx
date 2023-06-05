import { useMutation } from "@apollo/client";
import { CREATE_TASK } from "../../graphql/tasks";
import { GET_PROJECT } from "../../graphql/projects";
import { useParams } from "react-router-dom";

export const TaskForm = () => {
  const [createTask] = useMutation(CREATE_TASK, {
    refetchQueries: [
      {
        GET_PROJECT,
      },
      "GetProject",
    ],
  });
  const params = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTask({
      variables: {
        title: e.target.title.value,
        projectId: params.id,
      },
    });
    e.target.reset();
    e.target.title.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" />
      <button>Add</button>
    </form>
  );
};
