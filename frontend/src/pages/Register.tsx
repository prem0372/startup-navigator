import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { registerUser } from "../api/authService";

function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  async function handleRegister() {

    try {

      setLoading(true);

      setError("");

      await registerUser(
        name,
        email,
        password
      );

      alert("Registration Successful");

      navigate("/login");

    } catch (err: any) {

      if (err.response) {

        setError(err.response.data.detail);

      } else {

        setError("Server Error");

      }

    } finally {

      setLoading(false);

    }

  }

  return (

    <main className="flex min-h-screen items-center justify-center bg-slate-100">

      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">

        <h1 className="mb-8 text-center text-4xl font-bold">

          Create Account

        </h1>

        <div className="space-y-5">

          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border p-4"
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border p-4"
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border p-4"
          />

          {error && (

            <p className="text-red-600">

              {error}

            </p>

          )}

          <button
            onClick={handleRegister}
            disabled={loading}
            className="w-full rounded-lg bg-blue-600 py-3 text-white"
          >

            {loading
              ? "Creating Account..."
              : "Register"}

          </button>

        </div>

      </div>

    </main>

  );

}

export default Register;