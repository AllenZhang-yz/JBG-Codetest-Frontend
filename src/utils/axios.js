import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMmQ2M2UxMzg1YjEwNzk2ZjFkZjEyYSIsImlhdCI6MTU4MDA5NDQxMCwiZXhwIjoxNTgwMDk4MDEwfQ.JTnEjW-o7mcd8_wufj9fFwKkRZnISuRtXT8WVhxj14o";

const authHeader = {
  headers: { Authorization: `Bearer ${token}` }
};

export const fetchTopTenList = () => {
  return axios.get("http://localhost:5000/api/earthquake/", authHeader);
};

export const submitEditedDataToBackend = data => {
  return axios.put(
    `http://localhost:5000/api/earthquake/${data._id}`,
    data,
    authHeader
  );
};

export const submitAddDataToBackend = data => {
  return axios.post("http://localhost:5000/api/earthquake/", data, authHeader);
};

export const retrieveDetail = _id => {
  return axios.get(`http://localhost:5000/api/earthquake/${_id}`, authHeader);
};

export const retrieveData = () => {
  return axios.get(
    "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"
  );
};
export const sendAllData = data => {
  return axios.post(
    "http://localhost:5000/api/earthquake/all",
    data,
    authHeader
  );
};
