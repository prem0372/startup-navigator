function Register() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center px-6">

      <div className="w-full max-w-lg rounded-2xl border bg-white p-8 shadow-lg">

        <h1 className="mb-8 text-center text-4xl font-bold">
          Create Account
        </h1>

        <div className="space-y-5">

          <input
            placeholder="Full Name"
            className="w-full rounded-lg border p-4"
          />

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
            Register
          </button>

        </div>

      </div>

    </main>
  );
}

export default Register;