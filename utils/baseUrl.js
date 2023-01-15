const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://einfonets.com"
    : "http://localhost:3000";

export default baseUrl;
