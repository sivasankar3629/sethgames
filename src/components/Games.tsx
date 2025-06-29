
import { useState } from 'react';
import { Play, ExternalLink, Code, Maximize2, X } from 'lucide-react';

interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  webglUrl?: string;
  demoUrl?: string;
  sourceUrl?: string;
  tags: string[];
}

const Games = () => {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [isGameModalOpen, setIsGameModalOpen] = useState(false);

  // Sample games data - you can replace with your actual games
  const games: Game[] = [
    {
      id: '1',
      title: 'Epic Adventure Quest',
      description: 'A thrilling 3D adventure game featuring puzzle-solving and exploration in a mystical world.',
      image: '/placeholder.svg',
      webglUrl: 'https://your-game-url.com/game1', // Replace with your actual WebGL build URL
      demoUrl: 'https://demo-link.com',
      sourceUrl: 'https://github.com/your-repo',
      tags: ['3D', 'Adventure', 'Unity', 'WebGL']
    },
    {
      id: '2',
      title: 'Pixel Runner',
      description: 'Fast-paced 2D platformer with retro aesthetics and challenging gameplay mechanics.',
      image: '/placeholder.svg',
      webglUrl: 'https://your-game-url.com/game2',
      tags: ['2D', 'Platformer', 'Pixel Art', 'Arcade']
    },
    {
      id: '3',
      title: 'Space Commander',
      description: 'Strategic space combat simulator with real-time battles and fleet management.',
      image: '/placeholder.svg',
      webglUrl: 'https://your-game-url.com/game3',
      tags: ['Strategy', '3D', 'Space', 'Simulation']
    }
  ];

  const openGameModal = (game: Game) => {
    setSelectedGame(game);
    setIsGameModalOpen(true);
  };

  const closeGameModal = () => {
    setIsGameModalOpen(false);
    setSelectedGame(null);
  };

  return (
    <section id="games" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            My <span className="text-purple-400">Games</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore my collection of interactive experiences, from indie experiments to full-featured games.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <div
              key={game.id}
              className="group bg-slate-800/50 backdrop-blur-md rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => openGameModal(game)}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    <Play className="h-5 w-5" />
                    <span>Play Now</span>
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{game.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{game.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {game.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple-600/30 text-purple-300 rounded-full text-sm border border-purple-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={() => openGameModal(game)}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300"
                  >
                    <Play className="h-4 w-4" />
                    <span>Play</span>
                  </button>
                  
                  {game.demoUrl && (
                    <a
                      href={game.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                  
                  {game.sourceUrl && (
                    <a
                      href={game.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                    >
                      <Code className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Game Modal */}
        {isGameModalOpen && selectedGame && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-slate-900 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden border border-purple-500/30">
              <div className="flex justify-between items-center p-6 border-b border-slate-700">
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedGame.title}</h3>
                  <p className="text-gray-400">{selectedGame.description}</p>
                </div>
                <button
                  onClick={closeGameModal}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="p-6">
                {selectedGame.webglUrl ? (
                  <div className="aspect-video bg-slate-800 rounded-lg overflow-hidden">
                    <iframe
                      src={selectedGame.webglUrl}
                      className="w-full h-full"
                      title={selectedGame.title}
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-slate-800 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <Maximize2 className="h-16 w-16 mx-auto mb-4" />
                      <p className="text-lg">Game build will be embedded here</p>
                      <p className="text-sm">Upload your WebGL build and update the webglUrl</p>
                    </div>
                  </div>
                )}
                
                <div className="flex justify-center mt-6 space-x-4">
                  <button
                    onClick={closeGameModal}
                    className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg transition-colors duration-300"
                  >
                    Close
                  </button>
                  {selectedGame.demoUrl && (
                    <a
                      href={selectedGame.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg transition-all duration-300 flex items-center space-x-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Open in New Tab</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Games;
