import axios from "axios";

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get(url);
    return response.data as T;
  } catch (error: unknown) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}
