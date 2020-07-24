export default () => {
  const userJson = localStorage.getItem("user");

  if (userJson) return JSON.parse(userJson);

  return {};
};
