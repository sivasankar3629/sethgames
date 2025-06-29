
import { useEffect, useState } from 'react';
import { ChevronDown, Play, Code, Zap } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x / 10,
            top: mousePosition.y / 10,
          }}
        />
        <div className="absolute w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000 top-1/4 right-1/4" />
        <div className="absolute w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-500 bottom-1/4 left-1/4" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Seth Games
            </span>
          </h1>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 mb-8 font-light">
            Game Developer & Creative Technologist
          </h2>
          
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Hi, I'm <span className="text-purple-400 font-semibold">Sivasankar S</span>, 
            crafting immersive gaming experiences that blend creativity with cutting-edge technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button 
              onClick={() => document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Play className="h-5 w-5 group-hover:animate-pulse" />
              <span className="font-semibold">Play My Games</span>
            </button>
            
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center space-x-3 bg-slate-800/50 backdrop-blur-md hover:bg-slate-700/50 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 border border-purple-500/30 hover:border-purple-400/50"
            >
              <Code className="h-5 w-5" />
              <span className="font-semibold">View My Work</span>
            </button>
          </div>

          <div className="flex justify-center space-x-8 text-gray-400">
            <div className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-yellow-400" />
              <span>Unity & Unreal</span>
            </div>
            <div className="flex items-center space-x-2">
              <Code className="h-5 w-5 text-blue-400" />
              <span>C# & C++</span>
            </div>
            <div className="flex items-center space-x-2">
              <Play className="h-5 w-5 text-green-400" />
              <span>WebGL</span>
            </div>
          </div>
        </div>
      </div>

      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce hover:text-purple-400 transition-colors duration-300"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
