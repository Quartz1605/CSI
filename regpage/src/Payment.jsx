import React from "react";
import { motion } from "framer-motion";

function Payment({
  teamName,
  memberCount,
  onBack,
  onComplete,
  leaderName,
  teammates = [],
}) {
  const totalAmount = 200;

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
            <div className="ml-3 text-xs text-pink-300">Final Step</div>
          </div>

          {/* Responsive Banner Image */}
          <motion.div
            className="mb-6 sm:mb-8 flex items-center justify-center"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="https://i.ibb.co/6SKwHvH/SEHACKKKKK.png"
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
              Complete Payment
            </h2>
            <p className="text-gray-400 mt-2 text-sm sm:text-base">
              Team {teamName} - {memberCount}{" "}
              {memberCount === 1 ? "member" : "members"}
            </p>
          </motion.div>

          <div className="bg-gray-700/50 rounded-2xl p-6 mb-8">
            <h3 className="text-xl text-purple-300 font-medium mb-4 text-center">
              Payment Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-800/60 p-4 rounded-xl">
                  <div className="text-gray-400 text-sm">Team Name</div>
                  <div className="text-white font-medium">{teamName}</div>
                </div>

                <div className="bg-gray-800/60 p-4 rounded-xl">
                  <div className="text-gray-400 text-sm">Team Members</div>
                  <div className="text-white font-medium">
                    <div className="flex items-center mt-1">
                      {leaderName}
                      <span className="bg-purple-600 text-xs px-2 py-1 rounded mr-2">
                        Leader
                      </span>
                    </div>
                    {teammates.map((teammate, index) => (
                      <div key={index} className="mt-1">
                        {teammate.name}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-purple-900/40 p-4 rounded-xl border border-purple-500/30">
                  <div className="text-purple-300 text-sm">
                    Registration Fee
                  </div>
                  <div className="text-white font-bold text-xl">
                    ₹{totalAmount}
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center">
                <motion.div
                  className="bg-white p-4 rounded-xl mb-4"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(168,85,247,0.5)",
                  }}
                >
                  {/* Placeholder QR code image - updated to use the fixed amount */}
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=UPI://pay?pa=example@upi&pn=SE-HACK&am=400&cu=INR"
                    alt="Payment QR Code"
                    className="w-48 h-48 sm:w-56 sm:h-56"
                  />
                </motion.div>
                <p className="text-pink-300 text-sm font-medium mb-2">
                  Scan to pay via UPI
                </p>
                <p className="text-gray-400 text-xs text-center">
                  After payment, take a screenshot of the payment confirmation
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              Back to Team Details
            </motion.button>

            <motion.button
              type="button"
              onClick={onComplete}
              className="py-3 sm:py-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-xl 
              text-sm sm:text-base relative overflow-hidden group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-500 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center justify-center">
                I've Completed Payment
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

          <motion.div
            className="text-center mt-8 text-gray-400 text-xs sm:text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Having trouble with payment?
            <motion.a
              href="#"
              className="text-pink-500 hover:text-pink-400 ml-2 inline-block"
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 8px rgb(236 72 153 / 0.6)",
              }}
            >
              Contact support
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Payment;
