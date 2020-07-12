import axios from "axios";
const KEY = "AIzaSyAddSmp8tMcSjhQkVuJxAjah65VQNyhBpo";

export const baseParams = {
  part: "snippet",
  maxResults: 10,
  key: KEY
};

export const baseStatistics = {
  part: "statistics",
  id: "",
  key: KEY
};

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});