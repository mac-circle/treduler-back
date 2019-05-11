import axios from "axios";
import { BASE_URL, INSPIRE } from "../../constants/theySaidSo";

const theySaidSo = axios.create({
  baseURL: BASE_URL
});

export const getInspireQuotes = async (req, res, next) => {
  try {
    const response = await theySaidSo.get(BASE_URL + INSPIRE);
    const data = response.data;
    // const quote = data.contents.quotes[0];
    const quote = {
      text: data.contents.quotes[0].quote,
      author: data.contents.quotes[0].author
    };
    res.json({
      ok: true,
      quote,
      error: null,
      status: 200
    });
  } catch (err) {
    console.log(err);
    res.json({
      ok: false,
      quote: null,
      error: "Fail to load quotes",
      status: 500
    });
  }
};
