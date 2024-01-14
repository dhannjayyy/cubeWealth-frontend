const useDeleteTask = (data, accessToken) => {
  const deleteTaskHandler = async () => {
    try {
      let responseConverted;
      let response;
      response = await fetch(`${process.env.BACKEND_URI}/tasks`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: accessToken,
        },
        body: JSON.stringify(data),
      });
      responseConverted = await response.json();
      return [response.status, responseConverted.message];
    } catch (error) {
      console.error(error);
    }
  };
  return deleteTaskHandler();
};

export default useDeleteTask;
