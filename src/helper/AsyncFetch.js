const AsyncFetch = async (url, data = {}, method = "GET") => {
  try {
    const response = await fetch(`${process.env.BACKEND_URI}/${url}`, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const responseConverted = await response.json();
    return [response.status, responseConverted.message];
  } catch (error) {
    console.error(error);
  }
};

export default AsyncFetch;
