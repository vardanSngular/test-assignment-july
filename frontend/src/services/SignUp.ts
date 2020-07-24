import setUser from "../utils/setUser";

interface Params {
  username: string;
  password: string;
}

interface ReturnType {
  username: string;
  status: number;
}

const SignUp = async ({ password, username }: Params): Promise<ReturnType> => {
  try {
    const newUser = {
      username,
      password,
    };

    const res = await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    if (res.status === 201) {
      const { token } = await res.json();

      setUser({ username, token });

      return { username, status: res.status };
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

export default SignUp;
