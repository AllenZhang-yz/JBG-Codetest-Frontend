import axios from "axios";

export const fetchTopTenList = () => {
  return axios.get("http://localhost:5000/api/earthquake/");
};

export const submitEditedDataToBackend = data => {
  return axios.put(`http://localhost:5000/api/earthquake/${data._id}`, data);
};

export const submitAddDataToBackend = data => {
  return axios.post("http://localhost:5000/api/earthquake/", data);
};

export const retrieveDetail = _id => {
  return axios.get(`http://localhost:5000/api/earthquake/${_id}`);
};

export const retrieveData = () => {
  return axios.get(
    "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"
  );
};
export const sendAllData = data => {
  return axios.post("http://localhost:5000/api/earthquake/all", data);
};
