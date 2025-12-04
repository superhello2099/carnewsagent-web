'use client';

import { motion } from 'framer-motion';
import { Calendar, TrendingUp, Zap } from 'lucide-react';

interface HeroProps {
  date: string;
  totalProcessed: number;
  totalPassed: number;
  avgScore: number;
}

export function Hero({ date, totalProcessed, totalPassed, avgScore }: HeroProps) {
  const passRate = ((totalPassed / totalProcessed) * 100).toFixed(0);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <div className="text-7xl sm:text-8xl">🚗</div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-200">
            达式车评
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300 sm:text-xl">
            AI-Powered Automotive Journalism in DADA Style
          </p>
        </motion.div>

        {/* Date Badge */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-medium backdrop-blur-xl border border-white/20">
            <Calendar className="h-4 w-4" />
            <span>{new Date(date).toLocaleDateString('zh-CN', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</span>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 max-w-3xl mx-auto"
        >
          {/* Stat 1 */}
          <div className="flex items-center justify-center gap-3 rounded-2xl bg-white/5 px-6 py-4 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-colors">
            <TrendingUp className="h-5 w-5 text-blue-400" />
            <div>
              <div className="text-2xl font-bold">{totalPassed}/{totalProcessed}</div>
              <div className="text-xs text-gray-400">Passed</div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center justify-center gap-3 rounded-2xl bg-white/5 px-6 py-4 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-colors">
            <Zap className="h-5 w-5 text-yellow-400" />
            <div>
              <div className="text-2xl font-bold">{passRate}%</div>
              <div className="text-xs text-gray-400">Pass Rate</div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center justify-center gap-3 rounded-2xl bg-white/5 px-6 py-4 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-colors">
            <div className="h-5 w-5 flex items-center justify-center text-purple-400 font-bold">A</div>
            <div>
              <div className="text-2xl font-bold">{avgScore}</div>
              <div className="text-xs text-gray-400">Avg Score</div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-gray-500"
          >
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
