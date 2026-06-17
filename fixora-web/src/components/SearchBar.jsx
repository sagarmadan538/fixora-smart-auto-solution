import { useState } from "react";

function SearchBar() {
  const [search, setSearch] = useState("");

  return (
    <section className="bg-black py-10 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">

          <h2 className="text-white text-2xl font-bold mb-4 text-center">
            Find Your Service
          </h2>

          <div className="flex flex-col md:flex-row gap-4">

            <input
              type="text"
              placeholder="Search Oil Change, Battery, Tyre Service..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 bg-slate-800 text-white px-5 py-4 rounded-xl outline-none border border-slate-700 focus:border-red-500"
            />

            <button
              className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl text-white font-semibold transition"
            >
              Search
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default SearchBar;