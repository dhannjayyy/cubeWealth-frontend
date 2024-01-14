import { addTasks } from "./tasksSlice";

const useFetchTasks = (accessToken) => {
  const fetchTasks = async () => {
    try {
      const response = await fetch(`${process.env.BACKEND_URI}/tasks`, {
        method: "GET",
        headers: {
          authorization: accessToken,
        },
      });
      const jsonResponse = await response.json();
      return [response.status, jsonResponse];
    } catch (error) {
      console.log(error);
    }
  };

  return fetchTasks();
};

export default useFetchTasks;
