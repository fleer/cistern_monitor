"use server";
export async function fetchDailyMeasurements() {
  console.info("Fetch Measurements");
  console.info(process.env.SERVICE_URL);
  try {
    const response = await fetch(
      `${process.env.SERVICE_URL}/api/v1/measurement/days/4?skip=0&limit=400`,
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

export async function fetchCurrentFillLevel() {
  console.info("Fetch Measurements");
  try {
    const response = await fetch(
      `${process.env.SERVICE_URL}/api/v1/measurement?skip=0&limit=1`,
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
    const result = await response.json();
    console.debug(result);
    if (result.length > 0 && result[0].liters) {
      return result[0].liters;
    }
    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
}
