import { useState } from "react";

function Teammate({
  onSubmit,
  teamName,
  onBack,
  teammateCount,
  maxTeamSize,
  onFinalSubmit,
}) {
  const [teammateData, setTeammateData] = useState({
    name: "",
    uid: "",
    branch: "",
    foodPreference: "",
    tshirt: "Yes",
  });

  // Calculate remaining slots
  const remainingSlots = maxTeamSize - teammateCount - 1; // -1 for the leader

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeammateData({
      ...teammateData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(teammateData);
    // Reset form after submission
    setTeammateData({
      name: "",
      uid: "",
      branch: "",
      foodPreference: "",
      tshirt: "Yes",
    });
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8" 
      style={{
        backgroundImage: "url('https://i.pinimg.com/736x/6f/00/14/6f0014fc32a8a639363a5117c846322e.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="w-full max-w-4xl bg-gray-800/60 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border-2 border-transparent transition duration-300 hover:border-purple-500 hover:shadow-[0_0_20px_6px_rgba(128,90,213,0.5)]">
        <div className="px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10">
          {/* Responsive Banner Image */}
          <div className="mb-6 sm:mb-8 flex items-center justify-center">
            <img
              src="https://i.ibb.co/6SKwHvH/SEHACKKKKK.png"
              alt="Hackathon Banner"
              className="w-full max-w-[1000px] rounded-2xl shadow-lg transform hover:scale-[1.01] transition-transform duration-300"
            />
          </div>

          {/* Responsive Title and Team Info */}
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-transparent bg-clip-text font-bold text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-pink-500 to-purple-600">
              Add Teammate
            </h2>
            <p className="text-gray-400 mt-2 text-sm sm:text-base">
              Team: {teamName} - Add your teammate details
            </p>
            <p className="text-pink-400 mt-1 text-xs sm:text-sm">
              {teammateCount > 0
                ? `Current team: ${
                    teammateCount + 1
                  } members (${remainingSlots} slots remaining)`
                : `Current team: 1 member (leader only) - Add up to ${remainingSlots} teammates`}
            </p>
          </div>

          {/* Conditional Rendering for Teammate Form */}
          {remainingSlots > 0 ? (
            <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-pink-300 mb-2 text-xs sm:text-sm">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={teammateData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-700 border border-pink-700/30 rounded-xl text-pink-200 text-sm sm:text-base
                    focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                  placeholder="Enter teammate's full name"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-pink-300 mb-2 text-xs sm:text-sm">
                    UID
                  </label>
                  <input
                    type="text"
                    name="uid"
                    value={teammateData.uid}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-700 border border-pink-700/30 rounded-xl text-pink-200 text-sm sm:text-base
                      focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                    placeholder="Enter teammate's UID"
                  />
                </div>
                <div>
                  <label className="block text-pink-300 mb-2 text-xs sm:text-sm">
                    Branch
                  </label>
                  <select
                    name="branch"
                    value={teammateData.branch}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-700 border border-pink-700/30 rounded-xl text-pink-200 text-sm sm:text-base
                      focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                  >
                    <option value="">Select Branch</option>
                    <option value="CSE">CSE</option>
                    <option value="CE">CE</option>
                    <option value="EXTC">EXTC</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-pink-300 mb-2 text-xs sm:text-sm">
                    Food Preference
                  </label>
                  <select
                    name="foodPreference"
                    value={teammateData.foodPreference}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-700 border border-pink-700/30 rounded-xl text-pink-200 text-sm sm:text-base
                      focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                  >
                    <option value="">Select Food Preference</option>
                    <option value="Veg">Veg</option>
                    <option value="Jain">Jain</option>
                  </select>
                </div>
                <div>
                  <label className="block text-pink-300 mb-2 text-xs sm:text-sm">
                    Hackathon T-Shirt
                  </label>
                  <select
                    name="tshirt"
                    value={teammateData.tshirt}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-700 border border-pink-700/30 rounded-xl text-pink-200 text-sm sm:text-base
                      focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-between gap-4">
                <button
                  type="button"
                  onClick={onBack}
                  className="w-full py-3 sm:py-4 bg-gradient-to-r from-gray-700 to-gray-600 text-white rounded-xl 
                  text-sm sm:text-base
                  hover:from-gray-800 hover:to-gray-700 transition duration-300 ease-in-out 
                  transform hover:scale-[1.02] active:scale-[0.98] shadow-xl hover:shadow-2xl"
                >
                  Back to Leader Form
                </button>
                <button
                  type="submit"
                  className="w-full py-3 sm:py-4 bg-gradient-to-r from-purple-700 to-pink-600 text-white rounded-xl 
                  text-sm sm:text-base
                  hover:from-purple-800 hover:to-pink-700 transition duration-300 ease-in-out 
                  transform hover:scale-[1.02] active:scale-[0.98] shadow-xl hover:shadow-2xl"
                >
                  Add Teammate
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center p-4 sm:p-6 bg-purple-900/30 rounded-xl border border-purple-500/30">
              <h3 className="text-lg sm:text-xl text-pink-300 font-medium">
                Maximum Team Size Reached
              </h3>
              <p className="text-gray-300 mt-2 text-sm sm:text-base">
                You've reached the maximum team size of {maxTeamSize} members.
              </p>
            </div>
          )}

          <div className="text-center mt-4 sm:mt-6">
            {teammateCount > 0 && (
              <>
                <h3 className="text-base sm:text-lg text-pink-300 font-medium">
                  Team Members: {teammateCount}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm mt-2 mb-4">
                  {teammateCount === maxTeamSize - 1
                    ? "Your team is complete!"
                    : `You can add ${remainingSlots} more teammate${
                        remainingSlots !== 1 ? "s" : ""
                      }`}
                </p>
              </>
            )}

            <button
              type="button"
              onClick={onFinalSubmit}
              className={`${
                teammateCount > 0
                  ? "bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-700 hover:to-blue-700 hover:cursor-pointer"
                  : "bg-gray-600 hover:bg-gray-700 cursor-not-allowed"
              } px-4 sm:px-6 py-2 text-white rounded-xl transition duration-300 ease-in-out 
              transform hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base`}
              disabled={teammateCount === 0}
            >
              {teammateCount === 0
                ? "Add at least one teammate to continue"
                : "Finish Payment and Complete Registration"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teammate;
