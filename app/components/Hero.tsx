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
    <div className="relative overflow-hidden bg-black text-white min-h-[80vh] flex items-center">
      {/* Unsplash Background Image - Premium Electric Car */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=2400&q=80"
          alt="Premium Electric Vehicle"
          className="h-full w-full object-cover object-center"
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        {/* Vignette effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </div>

      {/* Subtle animated gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 w-full">
        {/* Premium Logo Replacement - Minimalist Line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 flex justify-center"
        >
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-white to-transparent" />
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <h1 className="text-6xl font-black tracking-tighter sm:text-8xl lg:text-9xl bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-white drop-shadow-2xl">
            达式车评
          </h1>
          <p className="mt-8 text-xl leading-relaxed text-gray-200 sm:text-2xl font-light tracking-wide max-w-3xl mx-auto">
            AI-Powered Automotive Journalism
          </p>
          <p className="mt-2 text-sm text-gray-400 uppercase tracking-widest font-medium">
            DADA STYLE
          </p>
        </motion.div>

        {/* Date Badge */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full bg-white/5 px-8 py-4 text-sm font-light backdrop-blur-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
            <Calendar className="h-5 w-5 text-white/60" />
            <span className="text-white/90 tracking-wide">{new Date(date).toLocaleDateString('zh-CN', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</span>
          </div>
        </motion.div>

        {/* Quick Stats - Minimalist Glass Morphism */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-4xl mx-auto"
        >
          {/* Stat 1 - Passed Articles */}
          <motion.div
            whileHover={{ y: -4, scale: 1.02 }}
            className="group rounded-3xl bg-gradient-to-br from-white/10 to-white/5 px-8 py-6 backdrop-blur-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-3">
              <TrendingUp className="h-6 w-6 text-blue-400/80 group-hover:text-blue-400 transition-colors" />
              <div className="text-xs text-gray-400 uppercase tracking-widest font-medium">Passed</div>
            </div>
            <div className="text-4xl font-bold text-white">{totalPassed}<span className="text-2xl text-gray-400 font-light">/{totalProcessed}</span></div>
          </motion.div>

          {/* Stat 2 - Pass Rate */}
          <motion.div
            whileHover={{ y: -4, scale: 1.02 }}
            className="group rounded-3xl bg-gradient-to-br from-white/10 to-white/5 px-8 py-6 backdrop-blur-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-3">
              <Zap className="h-6 w-6 text-yellow-400/80 group-hover:text-yellow-400 transition-colors" />
              <div className="text-xs text-gray-400 uppercase tracking-widest font-medium">Rate</div>
            </div>
            <div className="text-4xl font-bold text-white">{passRate}<span className="text-2xl text-gray-400 font-light">%</span></div>
          </motion.div>

          {/* Stat 3 - Average Score */}
          <motion.div
            whileHover={{ y: -4, scale: 1.02 }}
            className="group rounded-3xl bg-gradient-to-br from-white/10 to-white/5 px-8 py-6 backdrop-blur-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="h-6 w-6 flex items-center justify-center text-purple-400/80 group-hover:text-purple-400 font-bold text-xl transition-colors">A</div>
              <div className="text-xs text-gray-400 uppercase tracking-widest font-medium">Score</div>
            </div>
            <div className="text-4xl font-bold text-white">{avgScore}<span className="text-2xl text-gray-400 font-light">/100</span></div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - Elegant Mouse */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-white/60"
              />
            </div>
            <span className="text-xs text-white/40 uppercase tracking-widest font-light">Scroll</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
