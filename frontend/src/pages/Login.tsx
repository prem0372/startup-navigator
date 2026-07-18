function Login() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center px-6">

      <div className="w-full max-w-md rounded-2xl border bg-white p-8 shadow-lg">

        <h1 className="mb-8 text-center text-4xl font-bold">
          Login
        </h1>

        <div className="space-y-5">

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border p-4"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border p-4"
          />

          <button className="w-full rounded-lg bg-blue-600 py-3 text-white">
            Login
          </button>

        </div>

      </div>

    </main>
  );
}

export default Login;