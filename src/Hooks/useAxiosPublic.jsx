import axios from "axios";
const axoisPublic = axios.create({
  baseURL: "https://task-server-navy-ten.vercel.app",
}); 
const useAxiosPublic = () => {
  return axoisPublic;
};

export default useAxiosPublic;

// https://task-server-navy-ten.vercel.app