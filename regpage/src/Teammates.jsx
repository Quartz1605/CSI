import React from "react";

function Teammates() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Teammates registered successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-gray-800/60 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border-2 border-transparent transition duration-300 hover:border-purple-500 hover:shadow-[0_0_20px_6px_rgba(128,90,213,0.5)]">
        <div className="px-8 py-10">
          <div className="text-center mb-10">
            <h2 className="text-transparent bg-clip-text font-bold text-4xl bg-gradient-to-r from-pink-500 to-purple-600">
              Teammates Registration
            </h2>
            <p className="text-gray-400 mt-2">
              Enter details for teammates 2, 3, and 4
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {[2, 3, 4].map((teammate) => (
              <div key={teammate} className="space-y-4">
                <h3 className="text-pink-300 font-bold text-lg">
                  Teammate {teammate}
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-pink-300 mb-2 text-sm">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name={`teammate${teammate}Name`}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-pink-700/30 rounded-xl text-pink-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                      placeholder={`Enter full name of teammate ${teammate}`}
                    />
                  </div>
                  <div>
                    <label className="block text-pink-300 mb-2 text-sm">
                      UID
                    </label>
                    <input
                      type="text"
                      name={`teammate${teammate}UID`}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-pink-700/30 rounded-xl text-pink-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                      placeholder={`Enter UID of teammate ${teammate}`}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-pink-300 mb-2 text-sm">
                      Branch
                    </label>
                    <select
                      name={`teammate${teammate}Branch`}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-pink-700/30 rounded-xl text-pink-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                    >
                      <option value="">Select Branch</option>
                      <option value="CSI">CSI</option>
                      <option value="CE">CE</option>
                      <option value="EXTC">EXTC</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-pink-300 mb-2 text-sm">
                      Food Preference
                    </label>
                    <select
                      name={`teammate${teammate}FoodPreference`}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-pink-700/30 rounded-xl text-pink-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                    >
                      <option value="">Select Food Preference</option>
                      <option value="Veg">Veg</option>
                      <option value="Jain">Jain</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-pink-300 mb-2 text-sm">
                    Hackathon T-Shirt
                  </label>
                  <select
                    name={`teammate${teammate}TShirt`}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-pink-700/30 rounded-xl text-pink-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>
            ))}

            <div className="mt-8">
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-pink-600 to-purple-700 text-white rounded-xl 
                hover:from-pink-700 hover:to-purple-800 transition duration-300 ease-in-out 
                transform hover:scale-[1.02] active:scale-[0.98] shadow-xl hover:shadow-2xl"
              >
                Submit Teammates Details
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Teammates;
