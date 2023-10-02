import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end(); // Method Not Allowed
  }

  const q = req.query.q;
  if (!q) {
    return res.status(400).json({ error: 'Missing query parameter "q"' }); // Bad Request
  }

  const apiKey = process.env.GOOGLE_API_KEY;

  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${q}&fields=url&key=${apiKey}`
    );

    console.log("response", response.data);

    return res.status(200).json(response.data); // OK
  } catch (error) {
    console.error("Error searching for place", error);
    return res.status(500).json({ error: "Internal Server Error" }); // Internal Server Error
  }
}
