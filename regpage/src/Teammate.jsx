import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Teammate({
  onSubmit,
  teamName,
  leaderName, // Add leaderName prop
  onBack,
  teammateCount,
  maxTeamSize,
  onFinalSubmit,
  canSubmitFinal,
}) {
  const [teammateData, setTeammateData] = useState({
    name: "",
    uid: "",
    phoneNumber: "", // Add phone number field
    branch: "",
    foodPreference: "",
    tshirt: "",
  });
  const [focusedField, setFocusedField] = useState(null);
  const [teammates, setTeammates] = useState([]); // Store all teammates

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeammateData({
      ...teammateData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTeammates([...teammates, teammateData]); // Add current teammate to the list
    onSubmit(teammateData);
    // Reset form after submission
    setTeammateData({
      name: "",
      uid: "",
      phoneNumber: "", // Reset phone number field
      branch: "",
      foodPreference: "",
      tshirt: "",
    });
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/ab/b8/90/abb8903ab4daab208e95a3fd4807d0ef.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-900/30 animate-gradient-slow"></div>

      <motion.div
        className="w-full max-w-4xl bg-gray-800/70 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border-2 border-transparent relative z-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{
          boxShadow: "0 0 25px 8px rgba(168,85,247,0.4)",
          borderColor: "rgba(168,85,247,0.6)",
        }}
      >
        <div className="px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10">
          {/* Progress indicator */}
          <div className="mb-8 flex justify-center">
            <div className="w-1/2 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-600 to-pink-500 rounded-full"
                style={{ width: "100%" }}
              ></div>
            </div>
            <div className="ml-3 text-xs text-pink-300">Step 2 of 2</div>
          </div>

          {/* Responsive Banner Image */}
          <motion.div
            className="mb-6 sm:mb-8 flex items-center justify-center"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="https://i.ibb.co/4n3msVrc/SEHACKKKKK-2.png"
              alt="Hackathon Banner"
              className="w-full max-w-[1000px] rounded-2xl shadow-lg"
            />
          </motion.div>

          {/* Responsive Title */}
          <motion.div
            className="text-center mb-6 sm:mb-8 md:mb-10"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h2 className="text-transparent bg-clip-text font-bold text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-pink-500 to-purple-600 animate-text-shimmer">
              Team {teamName} - Add Teammates
            </h2>
            <p className="text-gray-400 mt-2 text-sm sm:text-base">
              Total Teammates: {teammateCount + 1} of {maxTeamSize} (max)
            </p>
          </motion.div>

          <div className="mb-6 text-center">
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-800 to-purple-900 rounded-full"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span className="text-purple-300 text-sm font-medium">
                {teammateCount} {teammateCount === 1 ? "teammate" : "teammates"}{" "}
                added so far
              </span>
            </motion.div>
          </div>

          <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
            {/* Responsive Grid for Form Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={
                  focusedField === "name"
                    ? "ring-2 ring-purple-500/50 rounded-xl p-1"
                    : "p-1"
                }
              >
                <label className="block text-pink-300 mb-2 text-xs sm:text-sm">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={teammateData.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus("name")}
                  onBlur={handleBlur}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-700/90 border border-pink-700/40 rounded-xl text-pink-200 text-sm sm:text-base
                    focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter teammate's full name"
                />
              </motion.div>

              <motion.div
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={
                  focusedField === "uid"
                    ? "ring-2 ring-purple-500/50 rounded-xl p-1"
                    : "p-1"
                }
              >
                <label className="block text-pink-300 mb-2 text-xs sm:text-sm">
                  UID
                </label>
                <input
                  type="text"
                  name="uid"
                  value={teammateData.uid}
                  onChange={handleChange}
                  onFocus={() => handleFocus("uid")}
                  onBlur={handleBlur}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-700/90 border border-pink-700/40 rounded-xl text-pink-200 text-sm sm:text-base
                    focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter teammate's UID"
                />
              </motion.div>

              {/* Add Phone Number Field */}
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={
                  focusedField === "phoneNumber"
                    ? "ring-2 ring-purple-500/50 rounded-xl p-1"
                    : "p-1"
                }
              >
                <label className="block text-pink-300 mb-2 text-xs sm:text-sm">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={teammateData.phoneNumber}
                  onChange={handleChange}
                  onFocus={() => handleFocus("phoneNumber")}
                  onBlur={handleBlur}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-700/90 border border-pink-700/40 rounded-xl text-pink-200 text-sm sm:text-base
                    focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter teammate's phone number"
                  pattern="[0-9]{10}"
                  title="Please enter a valid 10-digit phone number"
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={
                  focusedField === "branch"
                    ? "ring-2 ring-purple-500/50 rounded-xl p-1"
                    : "p-1"
                }
              >
                <label className="block text-pink-300 mb-2 text-xs sm:text-sm">
                  Branch
                </label>
                <select
                  name="branch"
                  value={teammateData.branch}
                  onChange={handleChange}
                  onFocus={() => handleFocus("branch")}
                  onBlur={handleBlur}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-700/90 border border-pink-700/40 rounded-xl text-pink-200 text-sm sm:text-base
                    focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select Branch</option>
                  <option value="CSE">CSE</option>
                  <option value="COMPS AB">COMPS AB</option>
                  <option value="COMPS CD">COMPS CD</option>
                  <option value="EXTC">EXTC</option>
                </select>
              </motion.div>

              <motion.div
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={
                  focusedField === "foodPreference"
                    ? "ring-2 ring-purple-500/50 rounded-xl p-1"
                    : "p-1"
                }
              >
                <label className="block text-pink-300 mb-2 text-xs sm:text-sm">
                  Food Preference
                </label>
                <select
                  name="foodPreference"
                  value={teammateData.foodPreference}
                  onChange={handleChange}
                  onFocus={() => handleFocus("foodPreference")}
                  onBlur={handleBlur}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-700/90 border border-pink-700/40 rounded-xl text-pink-200 text-sm sm:text-base
                    focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select Food Preference</option>
                  <option value="Veg">Veg</option>
                  <option value="Jain">Jain</option>
                </select>
              </motion.div>

              <motion.div
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={
                  focusedField === "tshirt"
                    ? "ring-2 ring-purple-500/50 rounded-xl p-1"
                    : "p-1"
                }
              >
                <label className="block text-pink-300 mb-2 text-xs sm:text-sm">
                  Hackathon T-Shirt
                </label>
                <select
                  name="tshirt"
                  value={teammateData.tshirt}
                  onChange={handleChange}
                  onFocus={() => handleFocus("tshirt")}
                  onBlur={handleBlur}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-700/90 border border-pink-700/40 rounded-xl text-pink-200 text-sm sm:text-base
                    focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select Option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </motion.div>
            </div>

            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <motion.button
                type="button"
                onClick={onBack}
                className="py-3 sm:py-4 bg-gray-700 text-white rounded-xl text-sm sm:text-base
                hover:bg-gray-600 transition duration-300 ease-in-out flex items-center justify-center"
                whileHover={{ scale: 1.02, backgroundColor: "rgb(75, 85, 99)" }}
                whileTap={{ scale: 0.98 }}
              >
                <svg
                  className="mr-2 w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to Leader Info
              </motion.button>

              <motion.button
                type="submit"
                className="py-3 sm:py-4 bg-gradient-to-r from-purple-700 to-pink-600 text-white rounded-xl 
                text-sm sm:text-base relative overflow-hidden group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                disabled={teammateCount >= maxTeamSize - 1}
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center justify-center">
                  Add Teammate
                  <svg
                    className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </span>
              </motion.button>

              <motion.button
                type="button"
                onClick={onFinalSubmit}
                disabled={!canSubmitFinal}
                className={`py-3 sm:py-4 text-white rounded-xl text-sm sm:text-base relative overflow-hidden group
                  ${
                    canSubmitFinal
                      ? "bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600"
                      : "bg-gray-500 cursor-not-allowed"
                  }`}
                whileHover={canSubmitFinal ? { scale: 1.03 } : {}}
                whileTap={canSubmitFinal ? { scale: 0.97 } : {}}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {canSubmitFinal && (
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-500 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                )}
                <span className="relative flex items-center justify-center">
                  Complete Registration
                  <svg
                    className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
              </motion.button>
            </div>
          </form>

          {teammateCount > 0 && (
            <motion.div
              className="mt-8 border-t border-gray-700 pt-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-lg text-purple-300 font-medium mb-4 flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Current Team ({teammateCount + 1} members)
              </h3>
              <div className="bg-gray-800/60 rounded-xl p-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <motion.div
                    className="bg-purple-900/40 p-3 rounded-lg border border-purple-700/30"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 5px 15px rgba(168, 85, 247, 0.2)",
                    }}
                  >
                    <div className="text-purple-300 font-medium">Leader</div>
                    <div className="text-white">{leaderName}</div>{" "}
                  </motion.div>

                  <AnimatePresence>
                    {teammates.map((teammate, i) => (
                      <motion.div
                        key={i}
                        className="bg-pink-900/40 p-3 rounded-lg border border-pink-700/30"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        whileHover={{
                          scale: 1.02,
                          boxShadow: "0 5px 15px rgba(236, 72, 153, 0.2)",
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="text-pink-300 font-medium">
                          Teammate {i + 1}
                        </div>
                        <div className="text-white">{teammate.name}</div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}

          <motion.div
            className="text-center mt-8 text-gray-400 text-xs sm:text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Need to start over?
            <motion.button
              onClick={onBack}
              className="text-pink-500 hover:text-pink-400 ml-2 inline-block"
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 8px rgb(236 72 153 / 0.6)",
              }}
            >
              Return to leader form
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Teammate;
