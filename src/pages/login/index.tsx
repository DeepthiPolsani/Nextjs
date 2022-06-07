import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getUserDetails } from "../../store/login/slice";

function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const dispatch = useAppDispatch();
  const router = useRouter();
  const userData = useAppSelector((root) => root.login);

  const handleInputChange = (event: any) => {
    event.preventDefault();
    const { name, value } = event.target;
    switch (name) {
      case "username":
        setFormData({ ...formData, username: value });
        break;
      case "password":
        setFormData({ ...formData, password: value });
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await dispatch(getUserDetails({ ...formData }));
    console.log(result);
    if (result.type === "login/user/fulfilled") {
      setError("");
      localStorage.setItem("accessToken", result.payload.accessToken);
      router.push("/");
    } else {
      setError("invalid credentials");
    }
  };

  useEffect(() => {
    if (userData.data) {
      router.push("/");
    }
  }, []);

  return (
    <>
      {error.length > 0 && error}
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          name="username"
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleInputChange}
        />
        <button type="submit">login</button>
      </form>
    </>
  );
}

export default Login;
