import { Hero } from './components/Hero';
import { StatsBoard } from './components/StatsBoard';
import { ArticleCard } from './components/ArticleCard';
import type { DailyDigest } from '@/lib/types';
import sampleData from '@/public/data/sample.json';

// This would come from your Python script's JSON output
async function getDailyDigest(): Promise<DailyDigest> {
  // In production, this would read from /public/data/YYYY-MM-DD.json
  // For now, we'll use the sample data imported directly
  return sampleData as DailyDigest;
}

export default async function Home() {
  const data = await getDailyDigest();
  const { summary, passing_articles } = data;

  // Calculate average score
  const avgScore = passing_articles.length > 0
    ? Math.round(passing_articles.reduce((sum, a) => sum + a.eval.score, 0) / passing_articles.length)
    : 0;

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <Hero
        date={data.date}
        totalProcessed={summary.total_processed}
        totalPassed={summary.total_passed}
        avgScore={avgScore}
      />

      {/* Stats Dashboard */}
      <StatsBoard
        totalProcessed={summary.total_processed}
        totalPassed={summary.total_passed}
        cost={summary.cost}
        duration={summary.duration}
      />

      {/* Articles Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            🎯 Today's Top Stories
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {summary.total_passed} articles scored ≥85 and earned DADA approval
          </p>
        </div>

        <div className="space-y-8">
          {passing_articles.map((article, index) => (
            <ArticleCard key={index} article={article} index={index} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-2">
              🚗 达式车评
            </div>
            <p className="text-sm text-gray-600 mb-4">
              AI-powered automotive journalism that doesn't compromise on style
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              <span className="inline-flex items-center rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-700">
                DeepSeek R1
              </span>
              <span className="inline-flex items-center rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-700">
                DADA Eval
              </span>
              <span className="inline-flex items-center rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-700">
                Next.js 15
              </span>
            </div>
            <p className="mt-6 text-xs text-gray-500">
              © 2025 达式车评. Powered by AI. Built with ❤️
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
