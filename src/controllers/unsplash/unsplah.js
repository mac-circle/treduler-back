import axios from "axios";
import {
  UNSPLASH_SCHEMA,
  UNSPLASH_RANDOM_IMAGE,
  UNSPLASH_CLIENT_ID
} from "../../constants/unsplash";

const unsplash = axios.create({
  baseURL: UNSPLASH_SCHEMA
});

export const getRandomImageFromUnsplash = async (req, res, next) => {
  try {
    const response = await unsplash.get(
      UNSPLASH_RANDOM_IMAGE + UNSPLASH_CLIENT_ID
    );
    const data = response.data;
    const rawImageUrl = data.urls.raw + "&w=1980&dpi=2";
    res.json({
      ok: true,
      rawImageUrl,
      error: null,
      status: 200
    });
  } catch (err) {
    console.log(err);
    res.json({
      ok: false,
      rawImageUrl: null,
      error: "Fail to load image from unsplash",
      status: 500
    });
  }
};
