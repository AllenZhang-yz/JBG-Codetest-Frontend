import axios from "axios";

const token = localStorage.getItem("jwt_token");

const authHeader = {
  headers: { Authorization: `Bearer ${token}` }
};

export const fetchTopTenList = () => {
  if (authHeader) {
    return axios.get("http://localhost:5000/api/earthquake/", authHeader);
  }
};

export const submitEditedDataToBackend = data => {
  if (authHeader) {
    return axios.put(
      `http://localhost:5000/api/earthquake/${data._id}`,
      data,
      authHeader
    );
  }
};

export const submitAddDataToBackend = data => {
  if (authHeader) {
    return axios.post(
      "http://localhost:5000/api/earthquake/",
      data,
      authHeader
    );
  }
};

export const retrieveDetail = _id => {
  if (authHeader) {
    return axios.get(`http://localhost:5000/api/earthquake/${_id}`, authHeader);
  }
};

export const retrieveData = () => {
  return axios.get(
    "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"
  );
};
export const sendAllData = data => {
  if (authHeader) {
    return axios.post(
      "http://localhost:5000/api/earthquake/all",
      data,
      authHeader
    );
  }
};

export const sendLoginInfo = data => {
  return axios.post("http://localhost:5000/api/auth", data);
};
