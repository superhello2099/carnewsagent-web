'use client';

import { motion } from 'framer-motion';
import { FileText, CheckCircle, DollarSign, Clock } from 'lucide-react';

interface StatsBoardProps {
  totalProcessed: number;
  totalPassed: number;
  cost: number;
  duration: number;
}

const statCards = [
  { icon: FileText, label: 'Processed', key: 'totalProcessed', suffix: 'Articles', color: 'from-blue-500 to-cyan-500' },
  { icon: CheckCircle, label: 'Passed', key: 'totalPassed', suffix: 'Quality', color: 'from-green-500 to-emerald-500' },
  { icon: DollarSign, label: 'Cost', key: 'cost', prefix: '$', suffix: '', color: 'from-yellow-500 to-orange-500' },
  { icon: Clock, label: 'Runtime', key: 'duration', suffix: 's', color: 'from-purple-500 to-pink-500' },
];

export function StatsBoard({ totalProcessed, totalPassed, cost, duration }: StatsBoardProps) {
  const stats: Record<string, number> = {
    totalProcessed,
    totalPassed,
    cost,
    duration: Math.round(duration),
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Today's Pipeline Stats
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          AI-powered content curation and quality assurance
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {statCards.map((card, index) => {
          const Icon = card.icon;
          const value = stats[card.key];

          return (
            <motion.div
              key={card.key}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 hover:shadow-2xl transition-all duration-300"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              {/* Icon */}
              <div className={`inline-flex rounded-xl bg-gradient-to-br ${card.color} p-3 shadow-lg`}>
                <Icon className="h-6 w-6 text-white" />
              </div>

              {/* Label */}
              <div className="mt-6 text-sm font-semibold text-gray-600 uppercase tracking-wide">
                {card.label}
              </div>

              {/* Value */}
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-gray-900">
                  {card.prefix}{value.toFixed(card.key === 'cost' ? 4 : 0)}
                </span>
                <span className="text-sm font-medium text-gray-500">
                  {card.suffix}
                </span>
              </div>

              {/* Progress Bar (for Passed) */}
              {card.key === 'totalPassed' && (
                <div className="mt-4">
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(totalPassed / totalProcessed) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className={`h-full bg-gradient-to-r ${card.color}`}
                    />
                  </div>
                  <div className="mt-1 text-xs text-gray-500">
                    {((totalPassed / totalProcessed) * 100).toFixed(0)}% Pass Rate
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
