/* eslint-disable no-multi-str */
const csp = (req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "Content-Security-Policy: script-src 'self' http://localhost:4000"
  );
  next();
};

export default csp;
