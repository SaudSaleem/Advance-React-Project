const logger = (params) => (store) => (next) => (action) => {
  console.log("logging middlware", params);
  next(action);
};

export default logger;
