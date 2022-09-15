import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/role/";

export const getAllRoles = () => {
  return axios.get(API_URL + "list", { headers: authHeader() });
};

export const addRole = (roleId) => {
  return axios.put(API_URL + "add", { headers: authHeader(), data:roleId });
};



