const AsyncFetch = async (
  url,
  data = {},
  method = "GET",
  credentials = "same-origin"
) => {
  try {
    let responseConverted;
    let response;
    if (method == "GET") {
      console.log(url, data, method, credentials);
      response = await fetch(`${process.env.BACKEND_URI}/${url}`, {
        credentials: credentials,
      });
      responseConverted = await response.json();
      return [response.status, responseConverted.message];
    }
    response = await fetch(`${process.env.BACKEND_URI}/${url}`, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      credentials: credentials,
    });
    responseConverted = await response.json();
    console.log(response, responseConverted);
    return [response.status, responseConverted.message];
  } catch (error) {
    console.error(error);
  }
};

export default AsyncFetch;
