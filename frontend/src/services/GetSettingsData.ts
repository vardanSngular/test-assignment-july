interface Params {
  token: string;
}

interface ReturnType {
  data: string;
  status: number;
}

const GetSettingsData = async ({ token }: Params): Promise<ReturnType> => {
  try {
    console.log("GET settings");

    const res = await fetch("http://localhost:4000/settings", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (res.status === 200) {
      const { data } = await res.json();

      return { status: res.status, data };
    } else throw { status: res.status };
  } catch (err) {
    // * Register telemetries

    // * We still expect this method to return an Object
    return { status: err.status, data: "" };
  }
};

export default GetSettingsData;
