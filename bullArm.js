const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const localURL = "http://localhost:3000/api/bullboard";
const productionURL = "https://mailer-vert-delta.vercel.app/api/bullboard";

async function fetchQueueData() {
  let baseURL = localURL; // Default to local URL
  try {
    // Attempt to fetch from the local endpoint
    const response = await axios.get(baseURL, { timeout: 5000 }); // Short timeout for local
    console.log("Queue data fetched successfully from local:", response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch queue data from local:", error.message);
    console.log("Attempting to fetch queue data from production...");

    // Fall back to production URL if local fails
    /* baseURL = productionURL;
    try {
      const prodResponse = await axios.get(baseURL, { timeout: 10000 }); // Longer timeout for production
      console.log(
        "Queue data fetched successfully from production:",
        prodResponse.data
      );
      return prodResponse.data;
    } catch (prodError) {
      console.error(
        "Failed to fetch queue data from production:",
        prodError.message
      );
      throw prodError; // Rethrow the last error if both endpoints fail
    }*/
  }
}

module.exports = fetchQueueData;
