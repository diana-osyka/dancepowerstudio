import React from 'react';

export default function DancePowerLanding() {
  return (
    <div className="max-w-3xl mx-auto p-6 text-white bg-gradient-to-br from-pink-600 to-blue-700 rounded-2xl shadow-lg space-y-8">
      <h1 className="text-4xl font-bold text-center">DANCE POWER STUDIO – NOVÁ TANEČNÁ ENERGIA V KOŠICIACH 💜</h1>

      <section>
        <h2 className="text-2xl font-semibold">🔥 ČO U NÁS NÁJDEŠ?</h2>
        <p className="mt-2">
          👯‍♀️ Skupinové tanečné lekcie pre všetky úrovne – od začiatočníkov po pokročilých.
          <br />💃 Štýly, ktoré ťa rozhýbu:
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>Hip Hop</li>
          <li>Jazz Funk</li>
          <li>High Heels</li>
          <li>Contemporary</li>
          <li>K-POP</li>
          <li>Dancehall Female</li>
          <li>Freestyle</li>
          <li>Stretching & Relax</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">📅 ROZVRH TRÉNINGOV</h2>
        <ul className="mt-2 space-y-1">
          <li>Utorok 15:00 – Hip Hop (Masha)</li>
          <li>Utorok 16:00 – Jazz Funk (Anastasiia)</li>
          <li>Streda 15:00 – High Heels (Di Ossa)</li>
          <li>Štvrtok 15:00 – Contemporary (Nika)</li>
          <li>Štvrtok 16:00 – Stretching & Relax (Di Ossa)</li>
          <li>Piatok 15:00 – K-POP (Masha)</li>
          <li>Piatok 20:00 – Dancehall Female (Di Ossa)</li>
          <li>Nedeľa 20:00 – Freestyle (Di Ossa)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">💸 CENNÍK</h2>
        <p className="mt-2 font-semibold">Všetky tanečné skupiny:</p>
        <ul className="ml-6 mt-1 list-disc">
          <li>9 € – 1 lekcia</li>
          <li>28 € – 1 skupina (4 lekcie)</li>
          <li>45 € – 2 skupiny (8 lekcií)</li>
          <li>69 € – 3 skupiny (12 lekcií)</li>
        </ul>
        <p className="mt-4 font-semibold">Stretching & Relax:</p>
        <ul className="ml-6 mt-1 list-disc">
          <li>8 € – 1 lekcia</li>
          <li>20 € – 4 lekcie</li>
        </ul>
        <p className="mt-4 font-semibold">Špeciálna ponuka:</p>
        <ul className="ml-6 mt-1 list-disc">
          <li>30 € – Mix skupín podľa výberu (4 lekcie)</li>
          <li>130 € – Všetky skupiny (24 lekcií)</li>
        </ul>
        <p className="mt-4 text-pink-300 font-bold">💥 Zľava 50 % na prvé tréningy!</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">📩 PRIHLÁS SA TERAZ</h2>
        <p className="mt-2">
          Napíš nám správu na <strong>Instagram / Facebook</strong> alebo nás kontaktuj cez e-mail.
          <br />Miesta sú limitované – <strong>nečakaj, kým sa zaplnia!</strong>
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">🏠 KDE NÁS NÁJDEŠ?</h2>
        <p className="mt-2">Košice – presná adresa ti bude zaslaná po prihlásení.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">💜 SLEDUJ NÁS</h2>
        <p className="mt-2">
          📸 Instagram: <a href="https://www.instagram.com/dancepower.studio" className="underline text-pink-300">@dancepower.studio</a>
          <br />📘 Facebook: Dance Power Studio
        </p>
      </section>
    </div>
  );
}
