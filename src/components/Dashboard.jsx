import React from "react";

const Dashboard = () => {
  return (
    <div className="h-screen flex bg-gray-50">
      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r p-4 flex flex-col">
        {/* Logo */}
        <h1 className="text-xl font-bold mb-6">ONG</h1>

        {/* Profile */}
        <div className="flex items-center gap-3 mb-6">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-sm font-medium">Oliver Brown</p>
            <p className="text-xs text-gray-400">oliver.brown@domain.io</p>
          </div>
        </div>

        {/* Compose */}
        <button className="border border-green-500 text-green-600 rounded-full py-2 text-sm font-medium mb-6 hover:bg-green-50">
          Compose
        </button>

        {/* Menu */}
        <div className="text-xs text-gray-400 mb-2">CORE</div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between bg-green-50 text-green-700 px-3 py-2 rounded-lg text-sm">
            <span>Scheduled</span>
            <span className="text-xs bg-green-200 px-2 py-0.5 rounded-full">
              12
            </span>
          </div>

          <div className="flex items-center justify-between px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
            <span>Sent</span>
            <span className="text-xs">785</span>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6">
        {/* Top Bar */}
        <div className="flex items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Search"
            className="w-full max-w-xl px-4 py-2 rounded-full bg-gray-100 focus:outline-none"
          />
        </div>

        {/* Email List */}
        <div className="space-y-3">
          {/* Email Item */}
          <div className="bg-white rounded-lg px-4 py-3 flex items-center justify-between shadow-sm">
            <div>
              <p className="text-sm font-medium">
                To: John Smith
                <span className="ml-2 text-xs bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full">
                  Tue 9:15:12 AM
                </span>
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Meeting follow-up - Scheduled · Hi John, just wanted to follow up on our meeting...
              </p>
            </div>
            <span className="text-gray-300">☆</span>
          </div>

          {/* Email Item */}
          <div className="bg-white rounded-lg px-4 py-3 flex items-center justify-between shadow-sm">
            <div>
              <p className="text-sm font-medium">
                To: Olive
                <span className="ml-2 text-xs bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full">
                  Thu 8:15:12 PM
                </span>
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Ramit, great to meet you - you’ll love it · Hi Olive, just wanted to follow up on our meeting...
              </p>
            </div>
            <span className="text-gray-300">☆</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
