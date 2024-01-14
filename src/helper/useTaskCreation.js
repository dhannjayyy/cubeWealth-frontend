const useTaskCreation = (data, accessToken) => {
  const taskHandler = async () => {
    try {
      let responseConverted;
      let response;
      response = await fetch(`${process.env.BACKEND_URI}/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: accessToken,
        },
        body: JSON.stringify(data),
      });
      responseConverted = await response.json();
      console.log(responseConverted, response);
      return [response.status, responseConverted.message];
    } catch (error) {
      console.error(error);
    }
  };
  return taskHandler();
};

export default useTaskCreation;
