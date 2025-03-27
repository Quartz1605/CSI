import { useState, useEffect } from "react";
import Teammate from "./Teammate";
import Payment from "./Payment"; // Import the new Payment component
import "./App.css";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  // Update state to include "payment" as a possible page
  const [page, setPage] = useState("leader");
  const [formData, setFormData] = useState({
    leader: {
      name: "",
      teamName: "",
      uid: "",
      branch: "",
      foodPreference: "",
      tshirt: "",
      email: "", // Added email field
      phone: "", // Added phone field
    },
    teammates: [],
    // Add a new array for storing name and UID only
    teammateNamesUids: [],
  });
  const [loading, setLoading] = useState(true);

  // Page load animation
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

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
    console.log("Leader's Name:", formData.leader.name); // Log the leader's name
    setPage("teammate");
  };

  const leader_name = formData.leader.name;
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
      // Store just the name and UID in a separate array
      teammateNamesUids: [
        ...formData.teammateNamesUids,
        { name: teammateData.name, uid: teammateData.uid },
      ],
    });
    console.log("Full form data:", formData);
  };

  const handleFinalSubmit = () => {
    // Ensure there's at least one teammate before final submission
    if (formData.teammates.length < 1) {
      alert("You need at least one teammate to register a team");
      return;
    }

    // Navigate to payment page instead of showing alert and resetting
    setPage("payment");
  };

  // Add visual feedback on input focus
  const [focusedField, setFocusedField] = useState(null);

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  // Progress indicator
  const getProgress = () => {
    switch (page) {
      case "leader":
        return { width: "33%", text: "Step 1 of 3" };
      case "teammate":
        return { width: "66%", text: "Step 2 of 3" };
      case "payment":
        return { width: "100%", text: "Step 3 of 3" };
      default:
        return { width: "0%", text: "" };
    }
  };

  // Add condition to render Payment component
  if (page === "payment") {
    return (
      <Payment
        teamName={formData.leader.teamName}
        memberCount={formData.teammates.length + 1}
        leaderName={formData.leader.name}
        teammates={formData.teammates}
        onBack={() => setPage("teammate")}
        onComplete={() => {
          setFormData({
            leader: {
              name: "",
              teamName: "",
              uid: "",
              branch: "",
              foodPreference: "",
              tshirt: "",
              email: "",
              phone: "",
            },
            teammates: [],
            teammateNamesUids: [],
          });
          setPage("leader");
        }}
      />
    );
  }

  if (page === "teammate") {
    return (
      <Teammate
        onSubmit={handleTeammateSubmit}
        teamName={formData.leader.teamName}
        onBack={() => setPage("leader")}
        teammateCount={formData.teammates.length}
        maxTeamSize={MAX_TEAM_SIZE}
        onFinalSubmit={handleFinalSubmit}
        canSubmitFinal={formData.teammates.length >= 1}
        addedTeammates={formData.teammates}
        leaderName={leader_name}
      />
    );
  }

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="w-16 h-16 rounded-full border-t-4 border-b-4 border-purple-500"
          />
        </motion.div>
      ) : (
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
                    style={{ width: getProgress().width }}
                  ></div>
                </div>
                <div className="ml-3 text-xs text-pink-300">
                  {getProgress().text}
                </div>
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
                  Team Leader Registration
                </h2>
                <p className="text-gray-400 mt-2 text-sm sm:text-base">
                  Complete your hackathon registration details
                </p>
              </motion.div>

              <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                {/* Responsive Grid for Form Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
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
                      value={formData.leader.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus("name")}
                      onBlur={handleBlur}
                      required
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-700/90 border border-pink-700/40 rounded-xl text-pink-200 text-sm sm:text-base
                        focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={
                      focusedField === "teamName"
                        ? "ring-2 ring-purple-500/50 rounded-xl p-1"
                        : "p-1"
                    }
                  >
                    <label className="block text-pink-300 mb-2 text-xs sm:text-sm">
                      Team Name
                    </label>
                    <input
                      type="text"
                      name="teamName"
                      value={formData.leader.teamName}
                      onChange={handleChange}
                      onFocus={() => handleFocus("teamName")}
                      onBlur={handleBlur}
                      required
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-700/90 border border-pink-700/40 rounded-xl text-pink-200 text-sm sm:text-base
                        focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your team name"
                    />
                  </motion.div>
                </div>

                {/* Additional form fields with animations */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
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
                      value={formData.leader.uid}
                      onChange={handleChange}
                      onFocus={() => handleFocus("uid")}
                      onBlur={handleBlur}
                      required
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-700/90 border border-pink-700/40 rounded-xl text-pink-200 text-sm sm:text-base
                        focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your UID"
                    />
                  </motion.div>

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
                      value={formData.leader.branch}
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
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
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
                      value={formData.leader.foodPreference}
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
                      value={formData.leader.tshirt}
                      onChange={handleChange}
                      onFocus={() => handleFocus("tshirt")}
                      onBlur={handleBlur}
                      required
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-700/90 border border-pink-700/40 rounded-xl text-pink-200 text-sm sm:text-base
                        focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </motion.div>
                </div>

                {/* New row for email and phone fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={
                      focusedField === "email"
                        ? "ring-2 ring-purple-500/50 rounded-xl p-1"
                        : "p-1"
                    }
                  >
                    <label className="block text-pink-300 mb-2 text-xs sm:text-sm">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.leader.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus("email")}
                      onBlur={handleBlur}
                      required
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-700/90 border border-pink-700/40 rounded-xl text-pink-200 text-sm sm:text-base
                        focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email address"
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={
                      focusedField === "phone"
                        ? "ring-2 ring-purple-500/50 rounded-xl p-1"
                        : "p-1"
                    }
                  >
                    <label className="block text-pink-300 mb-2 text-xs sm:text-sm">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.leader.phone}
                      onChange={handleChange}
                      onFocus={() => handleFocus("phone")}
                      onBlur={handleBlur}
                      required
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-700/90 border border-pink-700/40 rounded-xl text-pink-200 text-sm sm:text-base
                        focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your phone number"
                    />
                  </motion.div>
                </div>

                <div className="mt-6 sm:mt-8 flex justify-end">
                  <motion.button
                    type="submit"
                    className="w-full py-3 sm:py-4 bg-gradient-to-r from-purple-700 to-pink-600 text-white rounded-xl 
                    text-sm sm:text-base shadow-xl relative overflow-hidden group"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      Next: Add Teammates
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
                          d="M13 7l5 5-5 5M5 12h13"
                        />
                      </svg>
                    </span>
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
