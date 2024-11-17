"use server";

export async function fetchMeasurements(limit = 100) {
  const response = await fetch(
    `http://localhost:8000/api/v1/measurement?skip=0&limit=${limit}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  const result = await response.json();
  return result;
}

export async function fetchFillLevel() {
  const response = await fetch(
    `http://localhost:8000/api/v1/measurement?skip=0&limit=1`,
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
