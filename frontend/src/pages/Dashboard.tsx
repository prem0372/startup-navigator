function Dashboard() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">

      <h1 className="text-5xl font-bold">
        Dashboard
      </h1>

      <p className="mt-4 text-gray-600">
        Welcome back!
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-xl border p-6 shadow">
          <h2 className="text-lg font-semibold">Searches</h2>
          <p className="mt-4 text-4xl font-bold text-blue-600">25</p>
        </div>

        <div className="rounded-xl border p-6 shadow">
          <h2 className="text-lg font-semibold">Bookmarks</h2>
          <p className="mt-4 text-4xl font-bold text-green-600">12</p>
        </div>

        <div className="rounded-xl border p-6 shadow">
          <h2 className="text-lg font-semibold">Resources</h2>
          <p className="mt-4 text-4xl font-bold text-orange-500">18</p>
        </div>

        <div className="rounded-xl border p-6 shadow">
          <h2 className="text-lg font-semibold">AI Chats</h2>
          <p className="mt-4 text-4xl font-bold text-purple-600">40</p>
        </div>

      </div>

      <div className="mt-12 rounded-xl border p-8 shadow">

        <h2 className="mb-5 text-2xl font-bold">
          Recent Activity
        </h2>

        <ul className="space-y-4 text-gray-600">

          <li>✔ Asked about Company Registration</li>

          <li>✔ Viewed Funding Guide</li>

          <li>✔ Downloaded Startup Checklist</li>

          <li>✔ Asked AI about GST</li>

        </ul>

      </div>

    </main>
  );
}

export default Dashboard;