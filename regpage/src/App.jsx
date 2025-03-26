import { useState } from "react";
import Teammate from "./Teammate";
import "./App.css";

function App() {
  const [page, setPage] = useState("leader");
  const [formData, setFormData] = useState({
    leader: {
      name: "",
      teamName: "",
      uid: "",
      branch: "",
      foodPreference: "",
      tshirt: "",
    },
    teammates: [],
  });

  // Max team size (including leader)
  const MAX_TEAM_SIZE = 4;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      leader: {
        ...formData.leader,
        [name]: value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage("teammate");
  };

  const handleTeammateSubmit = (teammateData) => {
    // Check if adding another teammate would exceed the limit
    if (formData.teammates.length >= MAX_TEAM_SIZE - 1) {
      alert(
        `Team size cannot exceed ${MAX_TEAM_SIZE} members (including leader)`
      );
      return;
    }

    setFormData({
      ...formData,
      teammates: [...formData.teammates, teammateData],
    });
    console.log("Full form data:", formData);
  };

  const handleFinalSubmit = () => {
    // Ensure there's at least one teammate before final submission
    if (formData.teammates.length < 1) {
      alert("You need at least one teammate to register a team");
      return;
    }

    // Here you would typically submit the complete form data to your backend
    alert(
      `Team "${formData.leader.teamName}" with ${
        formData.teammates.length + 1
      } members successfully registered!`
    );
    // Reset form or redirect to a confirmation page
    setFormData({
      leader: {
        name: "",
        teamName: "",
        uid: "",
        branch: "",
        foodPreference: "",
        tshirt: "",
      },
      teammates: [],
    });
    setPage("leader");
  };

  if (page === "teammate") {
    return (
      <Teammate
        onSubmit={handleTeammateSubmit}
        teamName={formData.leader.teamName}
        onBack={() => setPage("leader")}
        teammateCount={formData.teammates.length}
        maxTeamSize={MAX_TEAM_SIZE}
        onFinalSubmit={handleFinalSubmit}
        canSubmitFinal={formData.teammates.length >= 1} // Enable final submit when at least one teammate is added
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-gray-800/60 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border-2 border-transparent transition duration-300 hover:border-purple-500 hover:shadow-[0_0_20px_6px_rgba(128,90,213,0.5)]">
        <div className="px-8 py-10">
          <div className="mb-8 flex items-center justify-center">
            <img
              src="https://i.ibb.co/6SKwHvH/SEHACKKKKK.png"
              alt="Hackathon Banner"
              className="w-full max-w-[1000px] rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300"
            />
          </div>

          <div className="text-center mb-10">
            <h2 className="text-transparent bg-clip-text font-bold text-4xl bg-gradient-to-r from-pink-500 to-purple-600">
              Team Leader Registration
            </h2>
            <p className="text-gray-400 mt-2">
              Complete your hackathon registration details
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-pink-300 mb-2 text-sm">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.leader.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-pink-700/30 rounded-xl text-pink-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-pink-300 mb-2 text-sm">
                  Team Name
                </label>
                <input
                  type="text"
                  name="teamName"
                  value={formData.leader.teamName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-pink-700/30 rounded-xl text-pink-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                  placeholder="Enter your team name"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-pink-300 mb-2 text-sm">UID</label>
                <input
                  type="text"
                  name="uid"
                  value={formData.leader.uid}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-pink-700/30 rounded-xl text-pink-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                  placeholder="Enter your UID"
                />
              </div>
              <div>
                <label className="block text-pink-300 mb-2 text-sm">
                  Branch
                </label>
                <select
                  name="branch"
                  value={formData.leader.branch}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-pink-700/30 rounded-xl text-pink-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                >
                  <option value="">Select Branch</option>
                  <option value="CSE">CSE</option>
                  <option value="CE">CE</option>
                  <option value="EXTC">EXTC</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-pink-300 mb-2 text-sm">
                  Food Preference
                </label>
                <select
                  name="foodPreference"
                  value={formData.leader.foodPreference}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-pink-700/30 rounded-xl text-pink-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                >
                  <option value="">Select Food Preference</option>
                  <option value="Veg">Veg</option>
                  <option value="Jain">Jain</option>
                </select>
              </div>
              <div>
                <label className="block text-pink-300 mb-2 text-sm">
                  Hackathon T-Shirt{" "}
                </label>
                <select
                  name="tshirt"
                  value={formData.leader.tshirt}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-pink-700/30 rounded-xl text-pink-200 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-purple-700 to-pink-600 text-white rounded-xl 
                hover:from-purple-800 hover:to-pink-700 transition duration-300 ease-in-out 
                transform hover:scale-[1.02] active:scale-[0.98] shadow-xl hover:shadow-2xl"
              >
                Next: Add Teammates
              </button>
            </div>
          </form>

          <div className="text-center mt-6 text-gray-400 text-sm">
            Already registered?
            <a
              href="#"
              className="text-pink-500 hover:text-pink-400 ml-2 transition duration-300"
            >
              Login here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
