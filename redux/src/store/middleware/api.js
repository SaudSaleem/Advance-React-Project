import axios from "axios";

const api = (store) => (next) => (action) => {
  if (action.type !== "apiCallBegan") return next(action);

  next(action);
  const { url, method, data, onSuccess, onError } = action.payload;
  axios
    .request({ baseUrl: "http://localhost:9000/api", url, method, data })
    .then((response) =>
      store.dispatch({ type: onSuccess, payload: Response.data })
    )
    .catch((error) =>
      store.dispatch({ type: onError, payload: Error.message })
    );
};
export default api;
