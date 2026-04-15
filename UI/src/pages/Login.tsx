import { useState } from "react";
import Input from "../components/Input"
import Button from "../components/Button"
import {loginUser} from "../features/authAPI"

const Login = () => {
  const [email, setEmail] = useState("");
  const [name, setname] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    try {
      const data = await loginUser({email, password,name});
      setMessage("Login Success ✅ Token: " + data.token);
    } catch (err: any) {
      setMessage("Error ❌: " + err);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login</h2>

      <Input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="name"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />

      <Input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />

      <Button title="Login" onClick={handleLogin} />

      <p>{message}</p>
    </div>
  );
};

export default Login;