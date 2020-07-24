export default (user: object) => {
  const userJson = JSON.stringify(user);
  localStorage.setItem("user", userJson);
};
