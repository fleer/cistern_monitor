export async function fetchMeasurements(limit = 100) {
  console.info("Fetch Measurements");
  console.info(process.env.SERVICE_URL);
  try {
    const response = await fetch(
      `${process.env.SERVICE_URL}/api/v1/measurement?skip=0&limit=${limit}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function fetchFillLevel() {
  console.info("Fetch Measurements");
  const response = await fetch(
    `${process.env.SERVICE_URL}/api/v1/measurement?skip=0&limit=1`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  const result = await response.json();
  console.debug(result);
  return result[0].liters;
}
