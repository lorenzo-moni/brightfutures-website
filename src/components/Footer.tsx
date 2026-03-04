export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-2xl font-bold gradient-text">
              BrightFutures
            </span>
            <span className="text-white text-2xl font-bold">.</span>
            <p className="text-gray-500 text-sm mt-1">
              Bridging Ambition and Industry Demand.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>contact@brightfutures.ch</span>
            </div>
            <div className="flex items-center gap-4">
              <span>Lorenzo: +39 342 156 6460</span>
              <span>Sebastian: +41 76 768 2316</span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center text-gray-600 text-xs">
          &copy; {new Date().getFullYear()} BrightFutures. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
