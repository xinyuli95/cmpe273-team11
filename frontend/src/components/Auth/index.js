import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./index.css";
import axios from "axios";

function Index() {
  const history = useHistory();
  const [register, setRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function validateEmail(email) {
    const reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(email) === false) {
      return false;
    } else return true;
  }

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError();
    setLoading(true);

    if (email === "" || password === "") {
      setError("Required field is missing");
      setLoading(false);

    } else if (!validateEmail(email)) {
      setError("Email is malformed");
      setLoading(false);

    } else {
      const bodyJSON = {
        username: username,
        password: password
      };
      await axios
        .post("/api/user/login", bodyJSON)
        .then((res) => {
          console.log(res.data);
          // alert("Successfully signed in");
          history.push("/");
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setError(error.message);
          setLoading(false);
        });
    }
  };

  const handleRegister = async (e) => {
    setError("");
    setLoading(false);

    if (email === "" || password === "" || username === "") {
      setError("Required field is missing.");
      setLoading(false);

    } else if (!validateEmail(email)) {
      setError("Email is malformed");
      setLoading(false);

    } else {
      const bodyJSON = {
        username: username,
        password: password,
        email: email
      };
      await axios
        .post("/api/user/signup", bodyJSON)
        .then((res) => {
          console.log(res);
          history.push("/");
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setError(error.message);
          setLoading(false);
        });
    }
    
  };

  return (
    <div className="auth">
      <div className="auth-container">
        <div className="auth-login">
          <div className="auth-login-container">
            {register ? (
              <>
                {" "}
                <div className="input-field">
                  <p>Username</p>
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                  />
                </div>
                <div className="input-field">
                  <p>Email</p>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                  />
                </div>
                <div className="input-field">
                  <p>Password</p>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                  />
                </div>
                <button
                  onClick={handleRegister}
                  disabled={loading}
                  style={{
                    marginTop: "10px",
                  }}
                >
                  {loading ? "Registering..." : "Register"}
                </button>
              </>
            ) : (
              <>
                <div className="input-field">
                  <p>Email</p>
                  <input 
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     type="text"
                  />
                </div>
                <div className="input-field">
                  <p>Password</p>
                  <input 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                  />
                </div>
                <button
                  onClick={handleSignIn}
                  disabled={loading}
                  style={{
                    marginTop: "10px",
                  }}
                >
                  {loading ? "Logging in..." : "Login"}
                </button>
              </>
            )}

            <p
              onClick={() => setRegister(!register)}
              style={{
                marginTop: "10px",
                textAlign: "center",
                color: "#0095ff",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              {register ? "Login" : "Register"} ?
            </p>
          </div>
        </div>

        {error !== "" && (
          <p
            style={{
              color: "red",
              fontSize: "14px",
            }}
          >
            {error}
          </p>
        )}
      </div>
    </div>
  );
}

export default Index;
