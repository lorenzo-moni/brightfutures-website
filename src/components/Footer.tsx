import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 bg-gradient-to-b from-black to-purple-950/50 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-3xl font-black heading-font">
              <span className="gradient-text-purple">Bright</span>
              <span className="gradient-text-yellow">Futures</span>
            </h3>
            <p className="text-gray-400 mt-2">Bridging Ambition and Industry Demand</p>
          </div>

          <div className="flex gap-6 items-center">
            <a
              href="mailto:contact@brightfutures.ch"
              className="flex items-center text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Mail size={20} className="mr-2" />
              contact@brightfutures.app
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} BrightFutures. Building the future of talent acquisition.</p>
        </div>
      </div>
    </footer>
  );
}
