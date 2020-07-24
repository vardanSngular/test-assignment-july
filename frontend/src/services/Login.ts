import setUser from "../utils/setUser";

interface Params {
  username: string;
  password: string;
}

interface ReturnType {
  username: string;
  status: number;
}

const Login = async ({ password, username }: Params): Promise<ReturnType> => {
  try {
    const user = {
      username,
      password,
    };

    const res = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (res.status === 200) {
      const { token } = await res.json();

      setUser({ username, token });

      return { username, status: res.status };
    } else if (res.status === 400) {
      throw { status: res.status, message: "User not found!" };
    } else if (res.status === 401) {
      throw { status: res.status, message: "Wrong password!" };
    } else throw { status: res.status };
  } catch (err) {
    const errorMessage =
      err.message || "Something went wrong! Please try again.";

    alert(errorMessage);

    // * Register telemetries

    // * We still expect this method to return an Object
    return { username, status: err.status };
  }
};

export default Login;
