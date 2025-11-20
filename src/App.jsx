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
        <PortfolioSection />
        <RecruitmentTaskSection />
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
              Projekt stworzony w ramach eksperymentu AIDEAS — od obrazu do wideo i dźwięku. Narzędzia: Gemini 2.5 (Canvas), Hailuo AI, Stable Audio.
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
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-red-600 font-bold px-2 py-1 rounded hover:bg-red-100 transition"
            >
              Zamknij ✕
            </button>
            <div>{modalContent}</div>
          </div>
        </div>
      )}
    </section>
  );
}

/* PortfolioSection */
function PortfolioSection() {
  const [modalContent, setModalContent] = React.useState(null);

  const openModal = (type, src) => {
    let content;
    if (type === "image") {
      content = <img src={src} alt="Portfolio" className="max-w-full rounded" />;
    } else if (type === "video") {
      content = (
        <video controls className="max-w-full rounded">
          <source src={src} type="video/mp4" />
        </video>
      );
    }
    setModalContent(content);
  };

  const closeModal = () => setModalContent(null);

  const portfolioItems = [
    {
      title: "Streetwear",
      prompt: `Studio photo of a young male model in trendy streetwear — oversized hoodie, denim, sneakers. Plain white or light grey background, flat e-commerce lighting, front view. Outfit clearly visible, natural pose, realistic texture and color. High-resolution catalog photo, clean and modern.`,
      negativePrompt: `no graffiti, no street background, no blur, no text, no props, no neon colors unless on clothing.`,
      imgSrc: "/images/collage1.png"
    },
    {
      title: "Men’s Fashion",
      prompt: `A professional e-commerce fashion photo of a male model. Model standing naturally, wearing casual smart outfit — shirt, chinos, or minimalist jacket. White seamless background, uniform lighting, full-body or mid-length framing. Clean neutral color palette (grey, navy, beige). Sharp focus on clothing details, modern premium look.`,
      negativePrompt: `no logos, no text, no dramatic lighting, no background, no shadows on wall, no unrealistic body shapes.`,
      imgSrc: "/images/collage2.png"
    },
    {
      title: "Women’s Fashion",
      prompt: `A professional studio photo of a female model wearing elegant minimalist clothing. White seamless background, even soft lighting, full-body shot. Neutral color palette (beige, cream, taupe, black, white). Focus on garment fit, fabric texture, and natural posture. Clean, realistic proportions, subtle shadow under feet only. Premium e-commerce photo, editorial-level quality.`,
      negativePrompt: `no text, no props, no accessories, no hair wind, no background, no blur, no exaggerated expressions.`,
      imgSrc: "/images/collage3.png"
    },
    {
      title: "Soft Babywear Lookbook",
      prompt: `A professional horizontal photo for LPP babywear collection. Soft natural light, cozy neutral background (warm beige or off-white). Cute babies and toddlers wearing minimalist, comfortable clothes — cotton, linen, knitwear in soft pastel tones (cream, dusty pink, light grey, sage). Calm, tender atmosphere, natural poses, focus on fabric texture and gentle color harmony. Premium lookbook style, modern Scandinavian minimalism, editorial quality.`,
      negativePrompt: `no text, no logos, no cluttered background, no harsh shadows, no unrealistic proportions, no synthetic colors.`,
      imgSrc: "/images/collage4.png"
    },
    {
      title: "Creative Street Energy",
      prompt: `A horizontal youth fashion editorial photo. A group of young people in trendy streetwear: oversized hoodies, denim, sneakers, cargo pants. Urban background with graffiti, skatepark or city walls. Natural daylight, dynamic poses, candid energy, creative color grading. Modern Gen Z style, high-quality fashion photography, authentic street vibe.`,
      negativePrompt: `no logos, no text, no blur, no overexposure, no unrealistic faces.`,
      imgSrc: "/images/collage5.png",
    },
    {
      title: "Monochrome Identity",
      prompt: `Fashion photo in a monochrome beige palette. Models wear different shades of the same color, minimalist outfits with rich textures (wool, silk, linen). Soft lighting, neutral background, focus on fabric structure and silhouette. Elegant, luxurious, calm tone.`,
      negativePrompt: ``,
      imgSrc: "/images/collage6.png"
    },
    {
      title: "Studio Harmony",
      prompt: `A professional studio fashion shot. Three models styled in minimalist clothing, soft neutral colors (beige, cream, taupe). Simple clean studio background, soft diffused lighting, elegant composition. Calm, timeless, and harmonious look. Premium editorial mood, elegant minimalism aesthetic.`,
      negativePrompt: ``,
      imgSrc: "/images/collage7.png",
    }
  ];

  return (
    <section className="py-16 px-6 md:px-20 bg-[#F9F8F6]">
      <div className="max-w-6xl mx-auto">

        {/* Nagłówek */}
        <div className="mb-8 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-serif">Portfolio & Experiments</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto md:mx-0">
            Zestaw eksperymentów, zdjęć i testów promptów — proces twórczy i różne wariacje tworzone z AI.
          </p>
        </div>

        {/* Przyciski wideo nad galerią */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-10">
          <button
            onClick={() => openModal("video", "/videos/winter_video.mp4")}
            className="relative overflow-hidden px-6 py-3 rounded-full bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white text-sm font-medium shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            🎬 Zobacz Winter Video AI
          </button>
          <button
            onClick={() => openModal("video", "/videos/model_video.mp4")}
            className="relative overflow-hidden px-6 py-3 rounded-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white text-sm font-medium shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            💫 Zobacz Fashion Video AI
          </button>
        </div>

        {/* Galeria */}
        <div className="grid md:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <article key={index} className="bg-white rounded-2xl shadow overflow-hidden">
              <div className="w-full aspect-square overflow-hidden">
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold">{item.title}</h4>

                <details className="bg-gray-50 p-2 rounded mt-2">
                  <summary className="cursor-pointer font-medium text-sm">Prompty</summary>
                  <div className="mt-1 text-xs text-gray-700 whitespace-pre-line overflow-y-auto max-h-40">
                    <strong>Prompt:</strong> {item.prompt}{"\n\n"}
                    {item.negativePrompt && (
                      <>
                        <strong>Negative prompt:</strong> {item.negativePrompt}
                      </>
                    )}
                  </div>
                </details>

                {item.videoSrc && (
                  <button
                    onClick={() => openModal("video", item.videoSrc)}
                    className="mt-2 px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 text-sm transition"
                  >
                    Zobacz wideo
                  </button>
                )}
              </div>
            </article>
          ))}
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
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-red-600 font-bold px-2 py-1 rounded hover:bg-red-100 transition"
            >
              Zamknij ✕
            </button>
            <div>{modalContent}</div>
          </div>
        </div>
      )}
    </section>
  );
}

/* RecruitmentTaskSection */
function RecruitmentTaskSection() {
 const images = [
    {
      title: "Hero Shot — South Kensington",
      prompt: `Use the attached model photos as the only face and body reference. Keep her appearance fully consistent across all images. A realistic London street fashion editorial photo featuring the same female model from the reference images. Full-body shot in front of a classic South Kensington townhouse, soft natural overcast light, neutral colors, modern aspirational aesthetic, 50mm lens look, cinematic composition, background in sharp focus, no blur. Maintain her face, hairstyle, outfit, and overall styling fully consistent with the reference images. Ultra-detailed textures, natural skin, subtle movement, natural pose. Preserve outfit color, fit, and style exactly as in the reference photos.`,
      imgSrc: "/images/hero_shot.png"
    },
    {
      title: "Close-up — Covent Garden",
      prompt: `Use the attached model photo as the only face and body reference.
You must preserve her appearance 100% exactly: identical facial features, skin texture, proportions, hairstyle, hairline, makeup, expression, gaze direction, pose, posture, body proportions, outfit, and colors.
Do not modify her face or body in any way. Do not alter her pose. Do not rotate, tilt, or warp the face.
Generate a realistic fashion editorial photo featuring the same female model exactly as in the reference image, but with the background changed to a Covent Garden archways in London.
Soft overcast natural daylight, neutral tones, elegant London atmosphere, clean architectural details, cinematic realism, ultra-detailed textures.
Model remains completely unchanged; ONLY the background is replaced with a realistic South Kensington street scene.
No blur, no stylization, no lighting changes on the model.
Extra emphasis:
Do not change the model’s face, body, pose, or outfit. Change ONLY the background to a South Kensington townhouse street.`,
      imgSrc: "/images/close_up.png"
    },
    {
      title: "Walking shot — Notting Hill",
      prompt: `Use the attached model photo as the only face and body reference.
You must preserve her appearance 100% exactly: identical facial features, skin texture, hairstyle, proportions, expression, gaze direction, body shape, outfit, color, fabric, fit, and all details.
Do not modify her face, body, posture, or pose in any way.
Use the exact same pose, leg position, stride, arm position, hand placement, and body angle as in the reference image.
No rotation, tilt, or deformation is allowed.
Generate a realistic London street fashion editorial image featuring the same female model exactly as she appears in the reference photo, but walking along a Notting Hill sidewalk.
Soft natural daylight, neutral tones, cinematic 50mm look, ultra-detailed textures, realistic city depth.
Only the background and environment change — the model, her pose, and her outfit must remain identical to the reference.
No blur or stylization; keep natural skin and consistent lighting on the model.
Extra emphasis:
Do not change the model’s pose, stride, arm movement, or outfit. Reproduce her body and face with 100% accuracy. Change ONLY the background to a Notting Hill sidewalk.`,
      imgSrc: "/images/walking_shot.png"
    },
    {
      title: "Lifestyle moment — Café Window",
      prompt: `Use the attached model photos as the only face and body reference. Keep her appearance fully consistent across all images. A realistic London street fashion editorial photo featuring the same female model from the reference images. Model standing or leaning near a café window, casually drinking coffee, subtle reflection in the glass, natural pose, calm and elegant lifestyle moment. Soft daylight, neutral tones, 50mm lens look, cinematic composition, ultra-detailed textures, natural skin. Maintain her face, hairstyle, outfit, and overall styling fully consistent with the reference images. Preserve outfit color, fit, and style exactly as in the reference photos.`,
      imgSrc: "/images/lifestyle_moment.png"
    },
    {
      title: "Sitting shot — Stairs / Red Phone Booth",
      prompt: `Use the attached model photos as the only face and body reference. Keep her appearance fully consistent across all images. A realistic London street fashion editorial photo featuring the same female model from the reference images. Model sitting on stairs of a townhouse, near a red phone booth, calm luxury mood, very fashion-forward pose, relaxed yet elegant posture. Soft daylight, neutral tones, 50mm lens look, cinematic composition, ultra-detailed textures, natural skin. Maintain her face, hairstyle, outfit, and overall styling fully consistent with the reference images. Preserve outfit color, fit, and style exactly as in the reference photos.`,
      imgSrc: "/images/sitting_shot.png"
    },
    {
      title: "Final frame — Tower Bridge at night",
      prompt: `Use the attached model photos as the only face and body reference. Keep her appearance fully consistent across all images. The photo is taken from behind, showing part of the model's profile as she walks across Tower Bridge at night, with a cinematic perspective emphasizing the end of the day. Maintain her face, hairstyle, outfit, and overall styling fully consistent with the reference images. Neutral tones adapted to night lighting, 50mm lens look, ultra-detailed textures, natural skin, modern street-fashion editorial aesthetic. Preserve outfit color, fit, and style exactly as in the reference photos.`,
      imgSrc: "/images/final_frame.png"
    },
    {
      title: "Bonus Scene — Leadenhall Market",
      prompt: `Use the attached model photos as the only face and body reference. Keep her appearance fully consistent across all images. A realistic London street fashion editorial photo featuring the same female model from the reference images. She is standing in Leadenhall Market, wearing the same coat as in the reference photos, now accessorized with a lightweight scarf draped over her shoulders and a small, elegant handbag. Neutral tones, soft natural daylight, modern aspirational aesthetic, 50mm lens look, cinematic composition. Ultra-detailed textures, natural skin, subtle natural pose. Preserve outfit color, fit, and style exactly as in the reference photos. Model’s face, hairstyle, and expression remain fully consistent. Background shows iconic covered market architecture, colorful shop fronts, and subtle urban activity, but model remains the focus. Extra emphasis: Scarf and handbag integrated naturally, not overpowering the outfit. Maintain identical facial features, hairstyle, and posture as reference. Lighting, color palette, and cinematic composition consistent with previous scenes.`,
      imgSrc: "/images/bonus_scene.png"
    }
  ];

  return (
    <section id="recruitment-task" className="py-16 px-6 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif mb-6 text-center">Zadanie Rekrutacyjne — London Fashion Day</h2>
        <p className="text-gray-600 mb-10 text-center">
          Dokumentacja sesji zdjęciowej w Londynie — 7 scen z modelką, prompty i opis workflow.
        </p>

        {/* Galeria */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {images.map((item, index) => (
            <article key={index} className="bg-gray-50 rounded-2xl shadow overflow-hidden p-4">
              <div className="w-full aspect-[2/3] overflow-hidden rounded-2xl mb-4">
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-semibold mb-2">{item.title}</h4>
              <details className="bg-white p-2 rounded text-xs text-gray-700">
                <summary className="cursor-pointer font-medium">Prompt</summary>
                <div className="mt-1 whitespace-pre-line max-h-40 overflow-y-auto">
                  {item.prompt}
                </div>
              </details>
            </article>
          ))}
        </div>

        {/* Przyciski workflow */}
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="/docs/workflow_london.docx"
            download
            className="px-6 py-3 rounded-full bg-gray-600 text-white font-medium shadow hover:bg-gray-700 transition"
          >
            📄 Pobierz opis workflow
          </a>
        </div>
      </div>
    </section>
  );
}

/* Contact */
function Contact() {
  return (
    <section id="contact" className="py-16 px-6 md:px-20 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-8">Kontakt</h2>
        <p className="text-gray-600 mb-10">
          Chętnie odpowiem na wszelkie pytania dotyczące współpracy lub projektów.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {/* Email */}
          <a
            href="mailto:ewelina.marcinkowska@outlook.com"
            className="flex items-center gap-3 px-6 py-3 bg-gray-100 rounded-full hover:bg-gray-200 transition"
          >
            📧 <span className="font-medium text-gray-800">ewelina.marcinkowska@outlook.com</span>
          </a>

          {/* Telefon */}
          <a
            href="tel:+48512677769"
            className="flex items-center gap-3 px-6 py-3 bg-gray-100 rounded-full hover:bg-gray-200 transition"
          >
            📞 <span className="font-medium text-gray-800">+48 512 677 769</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ewelina-marcinkowska-7414a21ab/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-gray-100 rounded-full hover:bg-gray-200 transition"
          >
            🔗 <span className="font-medium text-gray-800">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  )
}

/* Footer */
function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-gray-500">
      <div className="max-w-6xl mx-auto px-6">© {new Date().getFullYear()} Ewelina — AI Creator</div>
    </footer>
  )
}
