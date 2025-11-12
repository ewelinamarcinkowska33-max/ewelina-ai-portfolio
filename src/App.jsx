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
            Cześć! Mam na imię Ewelina.
          </h2>

          <p className="text-lg leading-relaxed mb-4">
            Jestem wysoko zmotywowaną specjalistką z 5-letnim doświadczeniem w tworzeniu cyfrowych treści multimedialnych. Z zaciekawieniem eksploruję możliwości generatywnej sztucznej inteligencji – od grafiki i wideo po dźwięk.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Posiadam praktyczne doświadczenie w narzędziach AI, takich jak <strong>Gemini Imagen</strong>, <strong>DALL-E</strong> i <strong>ElevenLabs</strong> oraz biegłość w zaawansowanym Prompt Engineeringu. Jako Magister Psychologii, wnoszę unikalne połączenie zmysłu estetycznego, kreatywności i głębokiego zrozumienia ludzkiej percepcji.
          </p>
          <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-700 mb-6">
            Każdy nowy projekt zaczynam od ciekawości – to ona prowadzi mnie do najlepszych pomysłów.
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
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-serif text-center mb-12"
        >
          CV / Experience
        </motion.h2>
        <div className="space-y-12 text-[#2E2E2E]">

          {/* Doświadczenie */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">🏢</div>
              <h3 className="text-2xl font-semibold">Doświadczenie</h3>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold">E-learning Content Editor | Learnetic SA</h4>
                <p className="text-sm text-gray-600">Gdańsk | 07.2020 – obecnie</p>
                <ul className="list-disc list-inside mt-3 text-sm text-gray-700 space-y-1">
                  <li>Tworzenie technologii i rozwiązań wspierających edukację, w tym platform, narzędzi do tworzenia zasobów i interaktywnych materiałów.</li>
                  <li>Integracja narzędzi AI do generowania multimedialnych zasobów.</li>
                  <li>Opracowywanie autorskich, interaktywnych koncepcji ekranów, gier i kart pracy dla dzieci i młodzieży.</li>
                  <li>Współpraca z redaktorami, autorami i zespołem grafików w celu realizacji spójnej i wysokiej jakości wizji projektu.</li>
                  <li>Samodzielna edycja i modyfikacja grafik (Affinity Designer, GIMP) oraz obróbka plików dźwiękowych (Audacity) na potrzeby projektów, gwarantując wysoki standard wizualny i estetyczny materiałów</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold">Manager Kawiarni | Lavenda Cafe & Galeria</h4>
                <p className="text-sm text-gray-600">Gdynia | 04.2017 – 03.2020</p>
                <ul className="list-disc list-inside mt-3 text-sm text-gray-700 space-y-1">
                  <li>Zarządzanie zespołem, rekrutacja i wdrażanie pracowników.</li>
                  <li>Kontrola zamówień, nadzór nad przebiegiem transakcji i okresową inwentaryzacją.</li>
                  <li>Wprowadzanie działań zwiększających sprzedaż,w tym tworzenie nowych zestawów produktowych oraz zarządzanie cenami w odpowiedzi na bieżące trendy rynkowe.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Umiejętności */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">✨</div>
              <h3 className="text-2xl font-semibold">Umiejętności</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <ul className="list-disc list-inside space-y-1">
                  <li>Generatywna AI (Grafika): Gemini Imagen, DALL-E, Prompt Engineering</li>
                  <li>Generatywna AI (Audio/Wideo): ElevenLabs, Stable Audio, Hailuo AI</li>
                </ul>
              </div>
              <div>
                <ul className="list-disc list-inside space-y-1">
                  <li>Affinity Designer, GIMP</li>
                  <li>Audacity</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Wykształcenie */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">🎓</div>
              <h3 className="text-2xl font-semibold">Wykształcenie</h3>
            </div>
            <p className="text-sm text-gray-700">
              Uniwersytet Gdański (2013–2019) — Psychologia Organizacji, Zarządzania i Marketingu (Mgr); Psychologia Kliniczna (Mgr)
            </p>
          </div>

          {/* Języki */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">🌐</div>
              <h3 className="text-2xl font-semibold">Języki</h3>
            </div>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>Angielski – B1 (średniozaawansowany)</li>
              <li>Niemiecki – A2 (podstawowy)</li>
            </ul>
          </div>

          {/* Certyfikaty */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">🏅</div>
              <h3 className="text-2xl font-semibold">Certyfikaty</h3>
            </div>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>AIDEAS — szkolenie z wykorzystania zaawansowanych narzędzi AI</li>
              <li>Umiejętności Jutra 2.0 — Google &amp; SGH - rozwinięcie kompetencji w obszarze nowoczesnych technologii i transformacji cyfrowej.</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

/* AideasCaseStudy */
function AideasCaseStudy() {
  const [modalContent, setModalContent] = React.useState(null);

  const openModal = (type) => {
    let content;
    if (type === "image") {
      content = (
        <img
          src="/images/pirat.jpg"
          alt="AI Image"
          className="max-w-full rounded"
        />
      );
    } else if (type === "video") {
      content = (
        <video controls className="max-w-full rounded">
          <source src="/videos/pirat_video.mp4" type="video/mp4" />
        </video>
      );
    } else if (type === "audio") {
      content = (
        <audio controls className="w-full">
          <source src="/audios/audio_stable.mp3" type="audio/mpeg" />
        </audio>
      );
    }
    setModalContent(content);
  };

  const closeModal = () => setModalContent(null);

  const posterImage = '/images/pirat.jpg';

  return (
    <section id="portfolio" className="py-16 px-6 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif mb-6">AI Case Study #1 — Sailing with AI</h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <p className="text-gray-700 mb-4">
              Projekt stworzony w ramach eksperymentu AI — od obrazu do wideo i dźwięku. Narzędzia: Gemini 2.5 (Canvas), Hailuo AI, Stable Audio.
            </p>

            {/* Prompty w detalach */}
            <details className="bg-gray-50 p-4 rounded mb-3">
              <summary className="cursor-pointer font-medium">Image prompt (EN)</summary>
              <div className="mt-2 text-sm text-gray-700 whitespace-pre-line overflow-y-auto max-h-40">
Create a realistic photograph depicting three friends sailing on a Masurian lake on a sunny day.
Subject: The main element of the photo is a white Antila 33 sailboat, leaning on the waves. The white sails are taut in the wind, conveying a clear sense of motion and dynamics.
Characters: At the stern of the Antila 33, at the helm, sits the skipper – a man around 35 years old, wearing a captain’s outfit: white shirt, black trousers, captain’s hat. He is smiling and confidently holding the wheel. The helm is located at the stern, at the back of the boat.
Next to him on the stern sits a woman (25–30 years old), smiling, dressed in an outfit inspired by Pirates of the Caribbean.
At the bow of the sailboat stands a man around 30 years old, dressed as Jack Sparrow: wearing a hat, hair ornaments, and pirate attire. He waves his hat, laughing, and looking toward the horizon, holding onto the mast with one hand.
Faces are clear, natural, and free of shadows.
Environment: In the background, the blue water of the Masurian lake is visible, along with green, forested shores and a bright sky with light clouds. Sunlight reflections can be seen on the water surface.
Mood: Adventure, togetherness, freedom, adrenaline. Realistic lighting, rich colors, high quality (print-ready).
Style: Photorealistic, wide-angle shot, highly detailed, horizontal orientation.
Equipment: Shot with a 35mm lens. 
              </div>
            </details>

            <details className="bg-gray-50 p-4 rounded mb-3">
              <summary className="cursor-pointer font-medium">Video prompt (EN)</summary>
              <div className="mt-2 text-sm text-gray-700 whitespace-pre-line overflow-y-auto max-h-40">
A cinematic 6-second video of a white Antila 33 sailboat on a sunny Masurian lake. The sails slowly unfold, billowing dynamically in the wind, revealing a glowing inscription “AIDEAS” across their surface. The camera performs a smooth orbit shot, circling half around the sailboat, showing the sunlight reflecting off the water and the motion of the sails. On the bow, the Jack Sparrow character laughs, waves his hat playfully toward the horizon, and jumps into the water. The scene ends with the camera pulling slightly back and upward, revealing the sparkling lake surface and the full sailboat with the AIDEAS logo visible. Realistic 4K cinematic lighting, bright colors, strong wind effects, atmosphere of adventure and creative freedom. Horizontal format, wide-angle lens.              </div>
            </details>

            <details className="bg-gray-50 p-4 rounded mb-6">
              <summary className="cursor-pointer font-medium">Audio prompt (EN)</summary>
              <div className="mt-2 text-sm text-gray-700 whitespace-pre-line overflow-y-auto max-h-40">
Comical Epic Orchestral Miniature, Majestic and Exaggeratedly Lighthearted, evoking an absurd inland sailing adventure. The core features a spirited, playful main melody carried by a bright acoustic accordion and a prominent folk tin whistle, supported by a small-scale, deliberately over-the-top cinematic orchestra (featuring soaring strings, gentle brass accents). The rhythm is a consistent, simplified shanty-like marching beat. Crucially, subtle yet cheerful male 'ho ho ho' vocalizations are layered in the background, adding to the jovial atmosphere. The overall mood is sunny, ironic, grandly simple, and filled with good-natured cheer. The final two seconds smoothly transition into a gentle, slightly muffled 'plop' sound effect, like an anchor being dropped into calm lake.              </div>
            </details>

            {/* Przyciski do mediów */}
            <div className="flex flex-col sm:flex-row gap-3 items-center">
              <button
                onClick={() => openModal("image")}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                <img
                  src="/images/pirat.jpg"
                  alt="miniatura"
                  className="w-8 h-8 object-cover rounded"
                />
                Zobacz obraz
              </button>

              <button
                onClick={() => openModal("video")}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-6.518-3.757A1 1 0 007 8.243v7.514a1 1 0 001.234.97l6.518-1.879a1 1 0 00.75-.97v-3.7a1 1 0 00-.75-.97z" />
                </svg>
                Zobacz wideo
              </button>

              <button
                onClick={() => openModal("audio")}
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-2v15H9z" />
                </svg>
                Odtwórz audio
              </button>
            </div>
          </div>

          {/* Poster image */}
          <div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <img src={posterImage} alt="AI poster" className="w-full h-72 object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
     {modalContent && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center p-6"
    onClick={closeModal}
  >
    <div className="absolute inset-0 bg-black/60" />
    <div
      className="relative bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl p-4"
      onClick={(e) => e.stopPropagation()}
    >
      {/* przycisk absolutnie */}
      <button
        onClick={closeModal}
        className="absolute top-3 right-3 z-50 text-red-600 font-bold px-2 py-1 rounded hover:bg-red-100 transition"
      >
        Zamknij ✕
      </button>

      {/* zawartość modala */}
      <div className="relative z-0">
        {modalContent}
      </div>
    </div>
  </div>
)}

import React from "react";
function WinterGlowCase() {
  const [open, setOpen] = React.useState(false);

  const projects = [
    { 
      title: 'Gold Elegance', 
      image: '/images/winterglow-1.png', 
      description: 'Złoto i ciepło w najczystszej formie.' 
    },
    { 
      title: 'Velvet Night Look', 
      image: '/images/winterglow-2.png', 
      description: 'Zimowy wieczór w aksamicie i blasku.' 
    },
    { 
      title: 'Matching Moments', 
      image: '/images/winterglow-3.png', 
      description: 'Ciepło zaczyna się od drobnych gestów.' 
    },
  ];

  return (
    <section className="py-16 px-6 md:px-20 bg-gradient-to-b from-white via-gray-50 to-rose-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <span className="text-amber-500 font-semibold">✦</span>
          Winter Glow — AI Holiday Fashion Campaign
        </h2>

        <p className="text-gray-600 max-w-3xl mb-8">
          Mini kampania inspirowana świątecznym ciepłem i estetyką LPP. 
          Fotorealistyczne stylizacje, zmysłowe detale i emocje uchwycone w języku AI.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="bg-white rounded-2xl shadow hover:scale-105 transition overflow-hidden">
              <img src={p.image} alt={p.title} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm text-gray-600 italic mt-2">{p.description}</p>
              </div>
            </div>
          ))}

          {/* Kafelek z video */}
          <div 
            onClick={() => setOpen(true)}
            className="relative cursor-pointer bg-black rounded-2xl shadow overflow-hidden hover:scale-105 transition group"
          >
            <img 
              src="/images/winterglow-video-poster.jpg" 
              alt="Winter Glow Video" 
              className="w-full h-64 object-cover opacity-80 group-hover:opacity-60 transition" 
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-5.197-3.03A1 1 0 008 9.03v5.94a1 1 0 001.555.832l5.197-3.03a1 1 0 000-1.664z" />
              </svg>
              <span className="text-sm font-semibold tracking-wide">Zobacz video</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal video */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <div className="relative bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl">
            <div className="p-3 border-b flex items-center justify-between bg-white sticky top-0 z-10">
              <div className="font-medium">Winter Glow — Video</div>
              <button 
                onClick={() => setOpen(false)} 
                className="text-sm text-gray-500 hover:text-gray-700 absolute top-3 right-4 z-20"
              >
                Zamknij ✕
              </button>
            </div>
            <div className="bg-black">
              <video controls autoPlay className="w-full h-auto rounded-b-2xl">
                <source src="/videos/winter_glow_video.mp4" type="video/mp4" />
                Twoja przeglądarka nie obsługuje odtwarzania wideo.
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
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
