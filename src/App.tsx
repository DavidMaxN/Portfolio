import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, User, Code, GraduationCap, Briefcase, Star, Database, Monitor, Wrench } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
              NAVARRO DAVID
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Estudiante de Ingeniería en Informática
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-emerald-400" />
                <span>11 2888 88275</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-emerald-400" />
                <span>davidnavarro28@outlook.es</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-emerald-400" />
                <span>Buenos Aires, Argentina</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-5 h-5 text-emerald-400" />
                <span>David Navarro</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <User className="w-8 h-8 text-emerald-400" />
            <h2 className="text-3xl font-bold text-emerald-400">SOBRE MÍ</h2>
          </div>
          <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-700">
            <p className="text-lg leading-relaxed text-gray-300">
              Soy estudiante de ingeniería en informática en la UNAJ. Me destaco por mis habilidades blandas 
              adquiridas por mis experiencias en el rubro de ventas. Busco expandir mis conocimientos para 
              ingresar al sector IT y contribuir con soluciones tecnológicas innovadoras.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <Star className="w-8 h-8 text-emerald-400" />
            <h2 className="text-3xl font-bold text-emerald-400">HABILIDADES</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <Code className="w-6 h-6 text-green-400" />
                <h3 className="text-xl font-semibold text-green-400">Habilidades Técnicas</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Monitor className="w-5 h-5 text-emerald-300" />
                  <span className="text-gray-300">Visual Studio Code</span>
                </div>
                <div className="flex items-center gap-3">
                  <Database className="w-5 h-5 text-emerald-300" />
                  <span className="text-gray-300">MySQL</span>
                </div>
                <div className="flex items-center gap-3">
                  <Code className="w-5 h-5 text-emerald-300" />
                  <span className="text-gray-300">Python</span>
                </div>
                <div className="flex items-center gap-3">
                  <Wrench className="w-5 h-5 text-emerald-300" />
                  <span className="text-gray-300">C#</span>
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <User className="w-6 h-6 text-green-400" />
                <h3 className="text-xl font-semibold text-green-400">Habilidades Blandas</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  'Resolución de problemas',
                  'Trato al cliente',
                  'Negociación',
                  'Liderazgo',
                  'Trabajo en equipo',
                  'Comunicación'
                ].map((skill, index) => (
                  <span key={index} className="bg-emerald-900/30 text-emerald-300 px-3 py-1 rounded-full text-sm border border-emerald-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <GraduationCap className="w-8 h-8 text-emerald-400" />
            <h2 className="text-3xl font-bold text-emerald-400">EDUCACIÓN</h2>
          </div>

          <div className="space-y-8">
            {/* Current Education */}
            <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-700 border-l-4 border-l-emerald-400">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-emerald-400">Ingeniería en Informática</h3>
                <span className="bg-emerald-900/30 text-emerald-300 px-3 py-1 rounded-full text-sm">2022 - Presente</span>
              </div>
              <p className="text-gray-400 mb-2">Universidad Nacional Arturo Jauretche</p>
              <p className="text-gray-300">Formación integral en desarrollo de software, base de datos y sistemas de información.</p>
            </div>

            {/* Web Design Course */}
            <div className="bg-gray-900/50 rounded-lg p-8 border border-gray-700">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-200">Curso de Diseño Web</h3>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">2021</span>
              </div>
              <p className="text-gray-400 mb-2">Junior Achievement Argentina</p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">Python</span>
                <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">SQL</span>
                <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">C#</span>
                <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">Frontend</span>
                <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">Visual Studio Code</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="w-8 h-8 text-emerald-400" />
            <h2 className="text-3xl font-bold text-emerald-400">EXPERIENCIA LABORAL</h2>
          </div>

          <div className="space-y-8">
            {/* Current Role */}
            <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700 border-l-4 border-l-emerald-400">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-emerald-400">Pasante en Análisis de Datos, SAP + IA</h3>
                  <p className="text-gray-400">Artech - Fundación Pescar</p>
                </div>
                <span className="bg-emerald-900/30 text-emerald-300 px-3 py-1 rounded-full text-sm">2025</span>
              </div>
              <p className="text-gray-300">
                Curso de 6 meses con enfoque técnico e interpersonal, desarrollando competencias en análisis de datos y tecnologías SAP con integración de inteligencia artificial.
              </p>
            </div>

            {/* Previous Roles */}
            <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-200">Pasante en Ventas de Sistemas de Calefacción</h3>
                  <p className="text-gray-400">Arquitecno</p>
                </div>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">2022</span>
              </div>
              <p className="text-gray-300 mb-2">
                Vendedor de sistemas de aire acondicionado y calefacción según la necesidad del hogar o local a climatizar.
              </p>
              <p className="text-gray-400 text-sm italic">
                Aprendí la verificación de instalaciones para la climatización
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-200">Ventas de Manera Independiente</h3>
                  <p className="text-gray-400">Emprendimiento Propio</p>
                </div>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">2019</span>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• Productos de limpieza por encargue en domicilios cercanos</li>
                <li>• Flores para fechas festivas en lugares estratégicos muy concurridos</li>
              </ul>
              <p className="text-gray-400 text-sm italic mt-3">
                Trabajé la persuasión al potencial cliente para lograr la venta
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 David Navarro. Desarrollado con React y Tailwind CSS.
            </p>
            <div className="flex justify-center gap-6 mt-4">
              <div className="flex items-center gap-2 text-gray-400">
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn: David Navarro</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;