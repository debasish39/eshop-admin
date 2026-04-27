import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent px-4">
      
      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className=" border border-white/20 rounded-2xl p-10 text-center max-w-md w-full"
      >
        
        {/* Floating 404 */}
        <motion.h1
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="text-8xl font-black tracking-tight bg-gradient-to-r from-indigo-600 via-blue-500 to-indigo-700 bg-clip-text text-transparent"
        >
          404
        </motion.h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg text-gray-700 font-semibold">
          Page Not Found
        </p>

        {/* Tagline */}
        <p className="mt-2 text-sm text-gray-500">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Divider */}
        <div className="w-16 h-[2px] bg-gray-300 mx-auto mt-6 rounded"></div>

        {/* Button */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold shadow-md hover:bg-indigo-700 transition duration-300"
          >
            <Home size={18} />
            Back to Home
          </Link>
        </motion.div>

      </motion.div>
    </div>
  );
}