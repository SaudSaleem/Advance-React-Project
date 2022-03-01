import axios from "axios";
//axios interceptor is used to examine request(before reaching backend) and response(before returned to API handler) of every API call
axios.interceptors.response.use(null, (error) => {
  console.log("interceptor called");
  return Promise.reject(error);
});
function setJwt(token) {
  //localStorage.setItem('token',token)
}
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
  setJwt,
};
