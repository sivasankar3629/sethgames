
import { Code, Gamepad2, Palette, Zap, Monitor, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Gamepad2,
      title: 'Game Engines',
      skills: ['Unity 3D', 'Unreal Engine', 'Godot', 'GameMaker Studio'],
      color: 'purple'
    },
    {
      icon: Code,
      title: 'Programming',
      skills: ['C#', 'C++', 'JavaScript', 'Python', 'HLSL/GLSL'],
      color: 'blue'
    },
    {
      icon: Monitor,
      title: 'Web Technologies',
      skills: ['WebGL', 'Three.js', 'React', 'TypeScript', 'HTML5 Canvas'],
      color: 'green'
    },
    {
      icon: Palette,
      title: 'Art & Design',
      skills: ['Blender', 'Maya', 'Photoshop', 'Substance Painter', 'UI/UX Design'],
      color: 'pink'
    },
    {
      icon: Zap,
      title: 'Specializations',
      skills: ['Game Physics', 'AI/ML', 'Procedural Generation', 'Optimization'],
      color: 'yellow'
    },
    {
      icon: Cpu,
      title: 'Platforms',
      skills: ['PC/Console', 'Mobile', 'WebGL', 'VR/AR', 'Cross-platform'],
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      purple: 'border-purple-500/20 hover:border-purple-400/40 text-purple-400',
      blue: 'border-blue-500/20 hover:border-blue-400/40 text-blue-400',
      green: 'border-green-500/20 hover:border-green-400/40 text-green-400',
      pink: 'border-pink-500/20 hover:border-pink-400/40 text-pink-400',
      yellow: 'border-yellow-500/20 hover:border-yellow-400/40 text-yellow-400',
      indigo: 'border-indigo-500/20 hover:border-indigo-400/40 text-indigo-400'
    };
    return colors[color as keyof typeof colors] || colors.purple;
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Technical <span className="text-purple-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit for creating exceptional gaming experiences across multiple platforms and technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${getColorClasses(category.color)}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-6">
                <category.icon className={`h-12 w-12 mr-4 ${getColorClasses(category.color).split(' ')[2]}`} />
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-slate-700/50 rounded-lg px-4 py-3 text-gray-300 hover:bg-slate-600/50 transition-colors duration-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-purple-500/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Always Learning</h3>
            <p className="text-gray-300 leading-relaxed">
              The gaming industry evolves rapidly, and I'm committed to staying at the forefront of new technologies, 
              frameworks, and design patterns. Currently exploring AI-driven procedural content generation, 
              advanced rendering techniques, and emerging platforms like WebXR.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
