import { useEffect, useState } from "react";
import { getDashboardStats } from "../api/dashboardService";
import { getHistory } from "../api/historyService";

function Dashboard() {
  const [stats, setStats] = useState<any>(null);
  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => {

  async function loadDashboard() {

    const statsData = await getDashboardStats();

    setStats(statsData);

    const historyData = await getHistory();

    setHistory(historyData);

  }

  loadDashboard();

}, []);
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">

      <h1 className="text-5xl font-bold">
        Dashboard
      </h1>

      <p className="mt-4 text-gray-600">
        Welcome back, {stats?.user} 👋
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-xl border p-6 shadow">
          <h2 className="text-lg font-semibold">Searches</h2>
          <p className="mt-4 text-4xl font-bold text-blue-600">{stats?.history}</p>
        </div>

        <div className="rounded-xl border p-6 shadow">
          <h2 className="text-lg font-semibold">Bookmarks</h2>
          <p className="mt-4 text-4xl font-bold text-green-600">0</p>
        </div>

        <div className="rounded-xl border p-6 shadow">
          <h2 className="text-lg font-semibold">Resources</h2>
          <p className="mt-4 text-4xl font-bold text-orange-500">{stats?.resources}</p>
        </div>

        <div className="rounded-xl border p-6 shadow">
          <h2 className="text-lg font-semibold">AI Chats</h2>
          <p className="mt-4 text-4xl font-bold text-purple-600">{stats?.topics}</p>
        </div>

      </div>

      <div className="mt-12 rounded-xl border p-8 shadow">

        <h2 className="mb-5 text-2xl font-bold">
          Recent Activity
        </h2>

        <ul className="space-y-4 text-gray-600">

  {

    history.map((item) => (

      <li key={item.id}>

        ✔ {item.prompt}

      </li>

    ))

  }

</ul>

      </div>

    </main>
  );
}

export default Dashboard;