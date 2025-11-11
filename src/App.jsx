/* App.jsx - pełna, gotowa wersja Ewelina AI Portfolio */
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Mail, Linkedin, Github } from 'lucide-react'
import './index.css'

export default function App() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#2E2E2E] antialiased">
      <Navbar />
      <main className="pt-24">
        {/* Hero usunięty */}
        <AboutSection />
        <CvSection />
        <AideasCaseStudy />
        <WinterGlowCase />
        <PortfolioSection />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

/* Navbar */
function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed w-full z-50 bg-white/60 backdrop-blur-sm border-b border-white/30">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="font-serif font-bold text-lg">Ewelina Marcinkowska</div>
          <nav className="hidden md:flex gap-6 text-sm text-gray-700">
            <a href="#about" className="hover:underline">O mnie</a>
            <a href="#cv" className="hover:underline">CV</a>
            <a href="#portfolio" className="hover:underline">Portfolio</a>
            <a href="#contact" className="hover:underline">Kontakt</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <a href="#contact" className="hidden md:inline-block px-4 py-2 bg-[#D4AF37] text-white rounded-md text-sm">Skontaktuj się</a>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white/80 backdrop-blur p-4 border-t">
          <a href="#about" className="block py-2">O mnie</a>
          <a href="#cv" className="block py-2">CV</a>
          <a href="#portfolio" className="block py-2">Portfolio</a>
          <a href="#contact" className="block py-2">Kontakt</a>
        </div>
      )}
    </header>
  )
}

/* AboutSection */
function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 md:px-20 bg-[#EFE9E1]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Zdjęcie po lewej */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/images/ewelina.jpg"
              alt="Ewelina"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Tekst po prawej */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Cześć — mam na imię Ewelina
          </h2>

          <p className="text-lg leading-relaxed mb-4">
            Jestem wysoko zmotywowaną specjalistką z 5-letnim doświadczeniem w tworzeniu cyfrowych treści multimedialnych. Z zaciekawieniem eksploruję możliwości generatywnej sztucznej inteligencji – od grafiki i wideo po dźwięk.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Posiadam praktyczne doświadczenie w narzędziach AI, takich jak <strong>Gemini Imagen</strong>, <strong>DALL-E</strong> i <strong>ElevenLabs</strong> oraz biegłość w zaawansowanym Prompt Engineeringu. Jako Magister Psychologii, wnoszę unikalne połączenie zmysłu estetycznego, kreatywności i głębokiego zrozumienia ludzkiej percepcji.
          </p>
          <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-700 mb-6">
            "Każdy nowy projekt zaczynam od ciekawości – to ona prowadzi mnie do najlepszych pomysłów."
          </blockquote>
          <p className="text-lg">
            <strong>Prywatnie:</strong> podróże na wyspy, skutery wodne, latte art oraz wymyślanie edukacyjnych kart pracy i interaktywnych gier dla dzieci.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

/* CvSection */
function CvSection() {
  return (
    <section id="cv" className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-serif text-center mb-12">CV / Experience</motion.h2>
        <div className="space-y-12 text-[#2E2E2E]">
          {/* Tutaj wstawiasz swoje doświadczenie, umiejętności, edukację i języki */}
          {/* Możesz skopiować całą zawartość ze swojego obecnego App.jsx */}
        </div>
      </div>
    </section>
  )
}

/* AideasCaseStudy */
function AideasCaseStudy() {
  const [open, setOpen] = useState(false)
  const posterImage = '/images/aideas-poster.jpg'
  const videoSrc = 'https://drive.google.com/file/d/1A1pgw7DGwZWpbtOoiJ4ab3dKcJarCXJk/view?usp=sharing'
  const audioSrc = 'https://drive.google.com/file/d/1240TDIQ_PpepWgXCS2sp52Ccy2eY-b0a/view?usp=sharing'

  return (
    <section id="portfolio" className="py-16 px-6 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif mb-6">AI Case Study #1 — Sailing with AI</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-700 mb-4">Projekt stworzony w ramach szkolenia AIDEAS — od obrazu do video i dźwięku. Narzędzia: Gemini 2.5 (Canvas), Hailuo AI, Stable Audio.</p>
            <details className="bg-gray-50 p-4 rounded">
              <summary className="font-medium">Prompty & proces</summary>
              <div className="mt-3 text-sm text-gray-700 space-y-2">
                <div><strong>Image prompt (EN):</strong> Create a realistic photograph showing three friends sailing on a Masurian lake on a sunny day...</div>
                <div><strong>Video prompt (EN):</strong> A cinematic 6-second video of a white Antila 33 sailboat on a sunny Masurian lake...</div>
                <div><strong>Audio prompt (EN):</strong> Comical Epic Orchestral Miniature, Majestic and Exaggeratedly Lighthearted...</div>
              </div>
            </details>
            <div className="mt-6 flex gap-3 items-center">
              <button onClick={() => setOpen(true)} className="px-4 py-2 bg-[#D4AF37] text-white rounded">Odtwórz video + audio</button>
              <a href="#" className="text-sm underline text-gray-600">Zobacz obraz (Drive)</a>
            </div>
          </div>
          <div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <img src={posterImage} alt="AIDEAS poster" className="w-full h-72 object-cover" />
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl">
            <div className="p-3 border-b flex items-center justify-between">
              <div className="font-medium">Sailing with AI — player</div>
              <button onClick={() => setOpen(false)} className="text-sm text-gray-500">Zamknij ✕</button>
            </div>
            <div className="bg-black">
              {videoSrc ? (
                <video controls autoPlay className="w-full h-auto">
                  <source src={videoSrc} type="video/mp4" />
                </video>
              ) : (
                <div className="w-full h-64 flex items-center justify-center text-white">Wklej publiczny URL video, żeby odtwarzać</div>
              )}
              {audioSrc ? (
                <div className="p-3">
                  <audio controls className="w-full">
                    <source src={audioSrc} type="audio/mpeg" />
                  </audio>
                </div>
              ) : null}
              <div className="p-3 text-xs text-gray-500">Tools: Gemini 2.5 • Hailuo AI • Stable Audio</div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}

/* WinterGlowCase */
function WinterGlowCase() {
  const projects = [
    { title: 'Golden Knit Elegance', image: '/images/winterglow-1.jpg', prompt: 'A realistic winter fashion photo...', description: 'Złoto i ciepło w najczystszej formie.', tools: ['Gemini Imagen', 'AI Canvas'] },
    { title: 'Velvet Night Look', image: '/images/winterglow-2.jpg', prompt: 'Fashion campaign photo...', description: 'Zimowy wieczór w aksamicie i blasku.', tools: ['Gemini Imagen', 'DALL·E 3'] },
    { title: 'Matching Moments', image: '/images/winterglow-4.jpg', prompt: 'A cozy Christmas morning scene...', description: 'Ciepło zaczyna się od drobnych gestów.', tools: ['Gemini Imagen', 'DALL·E 3'] },
    { title: 'Winter Editorial — Street Chic', image: '/images/winterglow-5.jpg', prompt: 'Fashion editorial photo of a young woman...', description: 'Zimowy chłód w kontraście do miejskiego ciepła.', tools: ['Gemini Imagen', 'Ideogram'] },
    { title: 'Textures of Winter', image: '/images/winterglow-6.jpg', prompt: 'Artistic flat-lay collage combining textures...', description: 'Miękkość tkanin, połysk metalu, dotyk światła.', tools: ['Gemini Canvas', 'Leonardo AI'] }
  ]
  return (
    <section className="py-16 px-6 md:px-20 bg-gradient-to-b from-white via-gray-50 to-rose-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="text-amber-500 font-semibold">✦</div>
          <h2 className="text-3xl font-bold">Winter Glow — AI Holiday Fashion Campaign</h2>
        </div>
        <p className="text-gray-600 max-w-3xl mb-8">Mini kampania inspirowana świątecznym ciepłem i estetyką LPP. Fotorealistyczne stylizacje, zmysłowe detale i emocje uchwycone w języku AI.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article key={i} whileHover={{ scale: 1.02 }} className="bg-white rounded-2xl shadow p-0 overflow-hidden">
              <img src={p.image} alt={p.title} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm text-gray-600 italic mt-2">{p.description}</p>
                <details className="mt-3 bg-gray-100 p-3 rounded text-sm">
                  <summary className="cursor-pointer font-medium">Prompt & tools</summary>
                  <div className="mt-2 font-mono text-xs text-gray-700">{p.prompt}</div>
                  <div className="mt-3 flex gap-2">
                    {p.tools.map((t) => (<span key={t} className="text-xs bg-rose-100 text-rose-700 px-2 py-1 rounded-full">#{t}</span>))}
                  </div>
                </details>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* PortfolioSection */
function PortfolioSection() {
  return (
    <section className="py-16 px-6 md:px-20 bg-[#F9F8F6]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif mb-8">Portfolio & Experiments</h2>
        <p className="text-gray-600 mb-6">Zestaw eksperymentów, kolaży i testów promptów — pokażemy tu proces twórczy i różne wariacje tworzone z AI.</p>
        <div className="grid md:grid-cols-3 gap-6">
          <article className="bg-white rounded-2xl shadow overflow-hidden">
            <img src="/images/collage1.png" alt="collage" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h4 className="font-semibold">Creative Collage</h4>
              <p className="text-sm text-gray-600 mt-2">Kompozycje tworzone w Affinity Designer z elementami generatywnymi.</p>
            </div>
          </article>
           <article className="bg-white rounded-2xl shadow overflow-hidden">
            <img src="/images/collage2.png" alt="collage" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h4 className="font-semibold">Creative Collage</h4>
              <p className="text-sm text-gray-600 mt-2">Kompozycje tworzone w Affinity Designer z elementami generatywnymi.</p>
            </div>
          </article>
           <article className="bg-white rounded-2xl shadow overflow-hidden">
            <img src="/images/collage3.png" alt="collage" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h4 className="font-semibold">Creative Collage</h4>
              <p className="text-sm text-gray-600 mt-2">Kompozycje tworzone w Affinity Designer z elementami generatywnymi.</p>
            </div>
          </article>
           <article className="bg-white rounded-2xl shadow overflow-hidden">
            <img src="/images/collage4.png" alt="collage" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h4 className="font-semibold">Creative Collage</h4>
              <p className="text-sm text-gray-600 mt-2">Kompozycje tworzone w Affinity Designer z elementami generatywnymi.</p>
            </div>
          </article>
           <article className="bg-white rounded-2xl shadow overflow-hidden">
            <img src="/images/collage5.png" alt="collage" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h4 className="font-semibold">Creative Collage</h4>
              <p className="text-sm text-gray-600 mt-2">Kompozycje tworzone w Affinity Designer z elementami generatywnymi.</p>
            </div>
          </article>
          <article className="bg-white rounded-2xl shadow overflow-hidden">
            <img src="/images/collage6.png" alt="collage2" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h4 className="font-semibold">Experimental Portraits</h4>
              <p className="text-sm text-gray-600 mt-2">Testy postaci i stylów — od fotorealizmu po artystyczne glitche.</p>
            </div>
          </article>
          <article className="bg-white rounded-2xl shadow overflow-hidden">
            <img src="/images/collage7.png" alt="collage3" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h4 className="font-semibold">Product Details</h4>
              <p className="text-sm text-gray-600 mt-2">Detale tkanin i akcesoriów — gotowe do sklepowych mockupów.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

/* Contact */
function Contact() {
  return (
    <section id="contact" className="py-16 px-6 md:px-20 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif mb-4">Kontakt</h2>
        <p className="text-gray-600 mb-6">Chcesz omówić projekt lub współpracę? Napisz wiadomość — odpowiem najszybciej jak to możliwe.</p>
        <form className="grid md:grid-cols-2 gap-4">
          <input className="p-3 border rounded" placeholder="Imię i nazwisko" />
          <input className="p-3 border rounded" placeholder="Email" />
          <textarea className="p-3 border rounded md:col-span-2" placeholder="Wiadomość" rows={6} />
          <div className="md:col-span-2 flex items-center gap-4">
            <button type="button" className="px-6 py-3 bg-[#2E2E2E] text-white rounded">Wyślij</button>
            <small className="text-gray-500">(Formularz działa lokalnie; dodaj backend lub Formspree do wysyłania wiadomości.)</small>
          </div>
        </form>
        <div className="mt-8 flex items-center gap-4 text-sm text-gray-600">
          <Mail className="w-5 h-5" /> <span>ewelina.marcinkowska@outlook.com</span>
          <a className="flex items-center gap-2 ml-6" href="#"><Linkedin className="w-4 h-4" />LinkedIn</a>
          <a className="flex items-center gap-2" href="#"><Github className="w-4 h-4" />Behance / Instagram</a>
        </div>
      </div>
    </section>
  )
}

/* Footer */
function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-gray-500">
      <div className="max-w-6xl mx-auto px-6">© {new Date().getFullYear()} Your Name — AI Creator</div>
    </footer>
  )
}
