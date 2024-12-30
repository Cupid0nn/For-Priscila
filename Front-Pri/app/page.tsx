'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const [daysTogether, setDaysTogether] = useState(0);

  useEffect(() => {
    const startDate = new Date('2021-04-15');
    const today = new Date();
    const difference = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    setDaysTogether(difference);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Head>
        <title>Página de Mi Novia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-pink-300 via-red-400 to-red-500">
        <div className="text-center p-8 bg-white bg-opacity-90 rounded-lg shadow-lg" style={{ zIndex: 10 }}>
          <h1 className="text-6xl font-extrabold text-pink-800 drop-shadow-md animate-fade-in1">¡Te amo mucho mi meimei!</h1>
          <p className="mt-4 text-3xl text-pink-700 drop-shadow-md animate-fade-in2">❤️ Eres la persona más especial para mí Priscila ❤️</p>
          <p className="mt-4 text-2xl text-pink-800 animate-fade-in3">Estamos Juntos hace <span>{daysTogether}</span> días</p>

          <Link href="/recuerdos" legacyBehavior>
  <a className="mt-4 text-2xl text-pink-800 animate-fade-in3 block hover-style" style={{ zIndex: 20 }}>Ver Recuerdos</a>
</Link>

        </div>
      </main>

      <div className="absolute inset-0 opacity-40">
        <div className="relative w-full h-full">
          <Image src="/mybeloved.jpg" alt="Collage de imágenes" layout="fill" objectFit="cover" className="absolute top-0 left-0" style={{ zIndex: 1 }} />
          <Image src="/mybeloved2.jpg" alt="Imagen adicional2" width={300} height={300} className="absolute top-20 left-20" style={{ zIndex: 1 }} />
          <Image src="/mybeloved3.jpg" alt="Imagen adicional3" width={300} height={300} className="absolute top-40 right-20" style={{ zIndex: 1 }} />
          <Image src="/mybeloved4.jpg" alt="Imagen adicional4" width={300} height={300} className="absolute bottom-20 left-40" style={{ zIndex: 1 }} />
        </div>
      </div>
    </div>
  );
}
