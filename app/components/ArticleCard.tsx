'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Clock, Award, MessageCircle } from 'lucide-react';
import type { Article } from '@/lib/types';

interface ArticleCardProps {
  article: Article;
  index: number;
}

const getScoreColor = (score: number) => {
  if (score >= 95) return { from: 'from-green-500', to: 'to-emerald-500', text: 'text-green-600', bg: 'bg-green-50' };
  if (score >= 90) return { from: 'from-blue-500', to: 'to-cyan-500', text: 'text-blue-600', bg: 'bg-blue-50' };
  if (score >= 85) return { from: 'from-purple-500', to: 'to-pink-500', text: 'text-purple-600', bg: 'bg-purple-50' };
  return { from: 'from-gray-500', to: 'to-slate-500', text: 'text-gray-600', bg: 'bg-gray-50' };
};

const getBrandColor = (brand: string) => {
  const colors: Record<string, string> = {
    'BMW': 'bg-blue-100 text-blue-700',
    'Tesla': 'bg-red-100 text-red-700',
    'BYD': 'bg-green-100 text-green-700',
    'Nio': 'bg-purple-100 text-purple-700',
    'Mercedes': 'bg-gray-100 text-gray-700',
  };
  return colors[brand] || 'bg-gray-100 text-gray-700';
};

export function ArticleCard({ article, index }: ArticleCardProps) {
  const { original_english, rewrite, sao, eval: evaluation } = article;
  const scoreColor = getScoreColor(evaluation.score);
  const readingTime = Math.max(1, Math.round(rewrite.content.split('').length / 400));

  return (
    <motion.article
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      {/* Card Container */}
      <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-200 hover:shadow-2xl transition-all duration-500">

        {/* Gradient Border Effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${scoreColor.from} ${scoreColor.to} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />

        {/* Top Border Accent */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${scoreColor.from} ${scoreColor.to} pointer-events-none`} />

        {/* Header */}
        <div className="relative flex items-start justify-between gap-4 mb-6">
          <div className="flex-1">
            {/* Article Number + Tags */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                Article {index + 1}
              </span>
              <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${getBrandColor(original_english.brand_name)}`}>
                {original_english.brand_name}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                <Clock className="h-3 w-3" />
                {readingTime} min read
              </span>
            </div>
          </div>

          {/* Score Badge */}
          <div className="relative flex-shrink-0">
            <div className={`flex flex-col items-center rounded-2xl ${scoreColor.bg} px-6 py-4 min-w-[100px]`}>
              <div className={`text-4xl font-bold ${scoreColor.text} leading-none`}>
                {evaluation.score}
              </div>
              <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide mt-1">
                Score
              </div>
              <div className={`mt-2 inline-flex items-center rounded-full bg-gradient-to-r ${scoreColor.from} ${scoreColor.to} px-3 py-1 text-xs font-bold text-white`}>
                <Award className="h-3 w-3 mr-1" />
                {evaluation.grade}
              </div>
            </div>

            {/* Progress Ring */}
            <svg className="absolute -inset-2 w-[calc(100%+16px)] h-[calc(100%+16px)]" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-gray-200"
              />
              <motion.circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 48}`}
                initial={{ strokeDashoffset: 2 * Math.PI * 48 }}
                whileInView={{ strokeDashoffset: 2 * Math.PI * 48 * (1 - evaluation.score / 100) }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                transform="rotate(-90 50 50)"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" className={scoreColor.from.replace('from-', 'text-')} stopColor="currentColor" />
                  <stop offset="100%" className={scoreColor.to.replace('to-', 'text-')} stopColor="currentColor" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* English Original */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">🇺🇸</span>
            <h3 className="text-sm font-bold uppercase tracking-wide text-gray-500">
              Original English
            </h3>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50/30 p-6 border border-gray-200">
            <h4 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
              {original_english.title}
            </h4>
            <p className="text-sm text-gray-600 mb-3 line-clamp-3">
              {original_english.summary}
            </p>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span><strong>Source:</strong> {original_english.source_name}</span>
              <span>{original_english.published}</span>
            </div>
            <a
              href={original_english.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 active:bg-blue-800 transition-all shadow-sm hover:shadow-md"
            >
              Read Full Article
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Chinese Rewrite */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">🇨🇳</span>
            <h3 className="text-sm font-bold uppercase tracking-wide text-gray-500">
              Chinese Rewrite (达式风格)
            </h3>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-yellow-50 to-orange-50/30 p-6 border-2 border-yellow-200">
            <h4 className="text-xl font-bold text-gray-900 mb-4">
              {rewrite.title}
            </h4>
            <div className="text-base leading-relaxed text-gray-700 whitespace-pre-line">
              {rewrite.content}
            </div>
          </div>
        </div>

        {/* Commentary */}
        <div className="rounded-2xl bg-gradient-to-br from-amber-50 to-yellow-100 p-6 border-l-4 border-amber-500">
          <div className="flex items-start gap-3">
            <MessageCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-bold text-amber-900 mb-2">
                💬 达式评语 (DADA Commentary)
              </div>
              <p className="text-sm text-amber-800 leading-relaxed">
                {sao}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
