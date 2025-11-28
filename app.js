const { useState, useEffect } = React;

function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'projects', 'achievements', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    if (window.lucide) {
      window.lucide.createIcons();
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const projects = [
    {
      title: "Expense Tracker Backend",
      tech: ["Spring Boot", "JWT", "MySQL", "REST API"],
      description: "Production-ready REST API for personal finance management with JWT authentication, real-time analytics, and comprehensive CRUD operations.",
      github: "https://github.com/seshathri044/expense-tracker-backend",
      highlights: ["JWT Authentication", "Real-time Analytics", "Spring Data JPA"]
    },
    {
      title: "Course Registration System",
      tech: ["Spring Boot", "MySQL", "React", "Docker"],
      description: "Full-stack system with course management and student enrollment. Backend deployed on Render, frontend on Netlify.",
      github: "https://github.com/seshathri044/course-backend",
      live: "https://github.com/seshathri044/course-frontend",
      highlights: ["Full-Stack Architecture", "Production Deployment", "CORS Resolution"]
    },
    {
      title: "Student Management System",
      tech: ["Flutter", "Hive DB", "Clean Architecture"],
      description: "Cross-platform application with class-wise separation, complete CRUD operations, and CI/CD pipeline using GitHub Actions.",
      github: "https://github.com/seshathri044/student-management-system-flutter-hive",
      highlights: ["Clean Architecture", "Riverpod State Management", "CI/CD Pipeline"]
    },
    {
      title: "Age & Gender Detection",
      tech: ["Python", "OpenCV", "NumPy", "Deep Learning"],
      description: "Real-time computer vision system using pre-trained Caffe models. Won 1st Prize at Project Expo 2025.",
      github: "https://github.com/seshathri044/age-and-gender-detection",
      highlights: ["Computer Vision", "Real-time Processing", "Award-Winning"]
    },
    {
      title: "E-commerce Flutter App",
      tech: ["Flutter", "Dart", "Clean Architecture"],
      description: "ShopEase Premium - Fast, responsive e-commerce app with Clean Architecture and web deployment.",
      github: "https://github.com/seshathri044/E-commerce-Flutter-App",
      highlights: ["Clean Architecture", "Responsive Design", "Web Deployment"]
    }
  ];

  const skills = {
    languages: ["Java", "Python", "Dart", "JavaScript"],
    backend: ["Spring Boot", "JPA/Hibernate", "REST APIs", "JWT"],
    frontend: ["Flutter", "HTML", "CSS", "React"],
    database: ["MySQL", "Hive DB"],
    tools: ["Git", "GitHub", "Docker", "Postman", "CI/CD"]
  };

  const achievements = [
    { icon: "🏆", text: "1st Prize - Project Expo 2025 (Age & Gender Detection System)" },
    { icon: "🎯", text: "Participated in iTech Hackfest 2025 (National Hackathon)" },
    { icon: "🌟", text: "420+ GitHub Contributions in 2025" },
    { icon: "💡", text: "Contributed to Apache, Spring Projects, Fnplus" },
    { icon: "📜", text: "AWS ML Foundations + Core Java Certifications" },
    { icon: "⭐", text: "HackerRank Silver Level 3 Star in Java" }
  ];

  return React.createElement('div', { className: "min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white" },
    // Navigation
    React.createElement('nav', { 
      className: `fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}` 
    },
      React.createElement('div', { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
        React.createElement('div', { className: "flex justify-between items-center h-16" },
          React.createElement('div', { 
            className: "text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" 
          }, "Seshathri M"),
          
          // Desktop Menu
          React.createElement('div', { className: "hidden md:flex space-x-8" },
            ['Home', 'About', 'Skills', 'Projects', 'Achievements', 'Contact'].map((item) =>
              React.createElement('button', {
                key: item,
                onClick: () => scrollToSection(item.toLowerCase()),
                className: `transition-colors duration-300 ${
                  activeSection === item.toLowerCase() ? 'text-cyan-400' : 'text-gray-300 hover:text-cyan-400'
                }`
              }, item)
            )
          ),
          
          // Mobile Menu Button
          React.createElement('button', { 
            className: "md:hidden text-white",
            onClick: () => setIsMenuOpen(!isMenuOpen)
          }, isMenuOpen ? '✕' : '☰')
        )
      ),
      
      // Mobile Menu
      isMenuOpen && React.createElement('div', { className: "md:hidden bg-slate-900/95 backdrop-blur-md" },
        React.createElement('div', { className: "px-2 pt-2 pb-3 space-y-1" },
          ['Home', 'About', 'Skills', 'Projects', 'Achievements', 'Contact'].map((item) =>
            React.createElement('button', {
              key: item,
              onClick: () => scrollToSection(item.toLowerCase()),
              className: "block w-full text-left px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors"
            }, item)
          )
        )
      )
    ),

    // Hero Section
    React.createElement('section', { 
      id: "home", 
      className: "min-h-screen flex items-center justify-center px-4 pt-16" 
    },
      React.createElement('div', { className: "max-w-7xl mx-auto text-center" },
        React.createElement('div', { className: "mb-8 inline-block" },
          React.createElement('div', { 
            className: "w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-1" 
          },
            React.createElement('div', { 
              className: "w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-6xl font-bold" 
            }, "SM")
          )
        ),
        
        React.createElement('h1', { 
          className: "text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent" 
        }, "SESHATHRI M"),
        
        React.createElement('p', { className: "text-2xl md:text-3xl text-cyan-400 mb-4" }, 
          "Aspiring Software Developer"
        ),
        
        React.createElement('p', { className: "text-xl md:text-2xl text-gray-300 mb-8" }, 
          "Java | Spring Boot | Backend Development"
        ),
        
        React.createElement('p', { className: "text-lg text-gray-400 mb-8 max-w-2xl mx-auto" }, 
          "Actively learning Java coding and DSA, building production-ready applications with modern technologies"
        ),

        React.createElement('div', { className: "flex flex-wrap justify-center gap-4 mb-8" },
          React.createElement('a', { 
            href: "https://github.com/seshathri044", 
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg hover:from-slate-600 hover:to-slate-500 transition-all transform hover:scale-105" 
          }, "🔗 GitHub"),
          
          React.createElement('a', { 
            href: "https://www.linkedin.com/in/seshathri-m/", 
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg hover:from-blue-500 hover:to-blue-400 transition-all transform hover:scale-105" 
          }, "💼 LinkedIn"),
          
          React.createElement('a', { 
            href: "mailto:seshathri686@gmail.com",
            className: "flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-cyan-500 rounded-lg hover:from-cyan-500 hover:to-cyan-400 transition-all transform hover:scale-105" 
          }, "📧 Email"),
          
          React.createElement('a', { 
            href: "SESHATHRI_M.pdf",
            download: "SESHATHRI_M.pdf",
            className: "flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all transform hover:scale-105" 
          }, "📄 Download Resume")
        ),

        React.createElement('button', { 
          onClick: () => scrollToSection('about'),
          className: "animate-bounce mt-8 text-cyan-400 text-4xl"
        }, "↓")
      )
    ),

    // About Section
    React.createElement('section', { id: "about", className: "py-20 px-4" },
      React.createElement('div', { className: "max-w-7xl mx-auto" },
        React.createElement('h2', { 
          className: "text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" 
        }, "About Me"),
        
        React.createElement('div', { className: "grid md:grid-cols-2 gap-12 items-center" },
          React.createElement('div', { className: "space-y-6" },
            React.createElement('div', { 
              className: "bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20" 
            },
              React.createElement('h3', { className: "text-2xl font-bold text-cyan-400 mb-4" }, "🎓 Education"),
              React.createElement('p', { className: "text-gray-300 text-lg" },
                "B.E. Computer Science Engineering",
                React.createElement('br'),
                "Anna University",
                React.createElement('br'),
                "Mangayarkarasi College of Engineering, Paravai",
                React.createElement('br'),
                React.createElement('span', { className: "text-cyan-400" }, "CGPA: 7.97/10"),
                " | 2022-2026"
              )
            ),
            
            React.createElement('div', { 
              className: "bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20" 
            },
              React.createElement('h3', { className: "text-2xl font-bold text-blue-400 mb-4" }, "💼 Experience"),
              React.createElement('p', { className: "text-gray-300 text-lg" },
                "Mobile Application Development Intern",
                React.createElement('br'),
                "Kartick IT Solutions | Jun 2025 - Aug 2025",
                React.createElement('br'),
                React.createElement('span', { className: "text-sm text-gray-400 mt-2 block" }, 
                  "Built production-grade mobile apps using Flutter, Dart, and Hive DB with Clean Architecture & CI/CD automation"
                )
              )
            )
          ),

          React.createElement('div', { 
            className: "bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20" 
          },
            React.createElement('h3', { className: "text-2xl font-bold text-cyan-400 mb-6" }, "🚀 What I Do"),
            React.createElement('ul', { className: "space-y-4 text-gray-300 text-lg" },
              [
                "Build production-ready backend systems with Spring Boot and REST APIs",
                "Develop cross-platform mobile apps using Flutter with clean architecture",
                "Implement secure authentication systems with JWT and Spring Security",
                "Deploy and manage applications using Docker, CI/CD, and cloud platforms",
                "Solve data structures & algorithms problems to strengthen problem-solving skills"
              ].map((item, i) =>
                React.createElement('li', { key: i, className: "flex items-start gap-3" },
                  React.createElement('span', { className: "text-cyan-400 mt-1" }, "▹"),
                  item
                )
              )
            )
          )
        )
      )
    ),

    // Skills Section
    React.createElement('section', { id: "skills", className: "py-20 px-4 bg-slate-900/50" },
      React.createElement('div', { className: "max-w-7xl mx-auto" },
        React.createElement('h2', { 
          className: "text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" 
        }, "Technical Skills"),
        
        React.createElement('div', { className: "grid md:grid-cols-3 gap-8" },
          [
            { title: "Languages", skills: skills.languages, color: "cyan", icon: "💻" },
            { title: "Backend & Database", skills: [...skills.backend, ...skills.database], color: "blue", icon: "🗄️" },
            { title: "Tools & Frontend", skills: [...skills.tools, ...skills.frontend], color: "purple", icon: "🛠️" }
          ].map((category, i) =>
            React.createElement('div', { 
              key: i,
              className: "bg-gradient-to-br from-slate-800/80 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 transform hover:scale-105 transition-transform" 
            },
              React.createElement('div', { className: "text-4xl mb-4" }, category.icon),
              React.createElement('h3', { className: `text-2xl font-bold text-${category.color}-400 mb-4` }, category.title),
              React.createElement('div', { className: "flex flex-wrap gap-2" },
                category.skills.map((skill) =>
                  React.createElement('span', { 
                    key: skill,
                    className: "px-4 py-2 bg-blue-500/20 rounded-full text-blue-300 border border-blue-500/30" 
                  }, skill)
                )
              )
            )
          )
        )
      )
    ),

    // Projects Section
    React.createElement('section', { id: "projects", className: "py-20 px-4" },
      React.createElement('div', { className: "max-w-7xl mx-auto" },
        React.createElement('h2', { 
          className: "text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" 
        }, "Featured Projects"),
        
        React.createElement('div', { className: "grid md:grid-cols-2 gap-8" },
          projects.map((project, index) =>
            React.createElement('div', { 
              key: index,
              className: "bg-gradient-to-br from-slate-800/80 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/50 transition-all transform hover:scale-105" 
            },
              React.createElement('h3', { className: "text-2xl font-bold text-cyan-400 mb-4" }, project.title),
              
              React.createElement('div', { className: "flex flex-wrap gap-2 mb-4" },
                project.tech.map((tech) =>
                  React.createElement('span', { 
                    key: tech,
                    className: "px-3 py-1 bg-blue-500/20 rounded-full text-blue-300 text-sm border border-blue-500/30" 
                  }, tech)
                )
              ),
              
              React.createElement('p', { className: "text-gray-300 mb-6" }, project.description),
              
              React.createElement('div', { className: "space-y-2 mb-6" },
                project.highlights.map((highlight, i) =>
                  React.createElement('div', { 
                    key: i,
                    className: "flex items-start gap-2 text-gray-400 text-sm" 
                  },
                    React.createElement('span', { className: "text-cyan-400 mt-1" }, "✓"),
                    highlight
                  )
                )
              ),
              
              React.createElement('div', { className: "flex gap-4" },
                React.createElement('a', { 
                  href: project.github,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "flex items-center gap-2 px-4 py-2 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors" 
                }, "💻 Code"),
                
                project.live && React.createElement('a', { 
                  href: project.live,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "flex items-center gap-2 px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-500 transition-colors" 
                }, "🔗 Demo")
              )
            )
          )
        )
      )
    ),

    // Achievements Section
    React.createElement('section', { id: "achievements", className: "py-20 px-4 bg-slate-900/50" },
      React.createElement('div', { className: "max-w-7xl mx-auto" },
        React.createElement('h2', { 
          className: "text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" 
        }, "Achievements & Highlights"),
        
        React.createElement('div', { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6" },
          achievements.map((achievement, index) =>
            React.createElement('div', { 
              key: index,
              className: "bg-gradient-to-br from-slate-800/80 to-slate-700/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/50 transition-all transform hover:scale-105" 
            },
              React.createElement('div', { className: "text-4xl mb-4" }, achievement.icon),
              React.createElement('p', { className: "text-gray-300 text-lg" }, achievement.text)
            )
          )
        )
      )
    ),

    // Contact Section
    React.createElement('section', { id: "contact", className: "py-20 px-4" },
      React.createElement('div', { className: "max-w-4xl mx-auto text-center" },
        React.createElement('h2', { 
          className: "text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" 
        }, "Let's Connect"),
        
        React.createElement('p', { className: "text-xl text-gray-300 mb-12" }, 
          "I'm always open to discussing new projects, opportunities, or collaborations"
        ),
        
        React.createElement('div', { className: "grid md:grid-cols-3 gap-6" },
          [
            { href: "mailto:seshathri686@gmail.com", icon: "📧", label: "Email", value: "seshathri686@gmail.com" },
            { href: "tel:+919445174530", icon: "📞", label: "Phone", value: "+91 9445174530" },
            { href: "https://github.com/seshathri044", icon: "💻", label: "GitHub", value: "@seshathri044", target: "_blank" }
          ].map((contact, i) =>
            React.createElement('a', { 
              key: i,
              href: contact.href,
              target: contact.target,
              rel: contact.target ? "noopener noreferrer" : undefined,
              className: "flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-slate-800/80 to-slate-700/50 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all transform hover:scale-105" 
            },
              React.createElement('div', { className: "text-4xl" }, contact.icon),
              React.createElement('div', null,
                React.createElement('p', { className: "text-gray-400 text-sm mb-1" }, contact.label),
                React.createElement('p', { className: "text-white" }, contact.value)
              )
            )
          )
        )
      )
    ),

    // Footer
    React.createElement('footer', { className: "py-8 px-4 border-t border-slate-800" },
      React.createElement('div', { className: "max-w-7xl mx-auto text-center text-gray-400" },
        React.createElement('p', null, "© 2025 Seshathri M. Built with React & Tailwind CSS"),
        React.createElement('p', { className: "mt-2 text-sm" }, "Deployed on Netlify | All rights reserved")
      )
    )
  );
}

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(Portfolio));
