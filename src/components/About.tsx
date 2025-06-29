
import { User, Award, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About <span className="text-purple-400">Sivasankar S</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate game developer with a vision to create experiences that inspire, challenge, and entertain players worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105">
              <User className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
              <p className="text-gray-300 leading-relaxed">
                From indie experiments to polished productions, I've been crafting interactive experiences 
                that push the boundaries of what's possible in gaming. Every project is a new adventure 
                in storytelling and technology.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 transform hover:scale-105">
              <Target className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">My Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To create games that not only entertain but also inspire creativity and bring people together. 
                I believe in the power of interactive media to tell meaningful stories and create lasting memories.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 transform hover:scale-105">
              <Award className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Expertise</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Game Design & Development</li>
                <li>• Unity & Unreal Engine</li>
                <li>• C#, C++, JavaScript</li>
                <li>• WebGL & Browser Games</li>
                <li>• 3D Modeling & Animation</li>
                <li>• UI/UX for Games</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300 transform hover:scale-105">
              <Heart className="h-12 w-12 text-pink-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Passion</h3>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new game mechanics, studying player psychology, 
                or experimenting with emerging technologies like VR and AR to shape the future of gaming.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
