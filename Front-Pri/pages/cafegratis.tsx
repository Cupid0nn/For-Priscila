import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa'; // Importar ícono de React Icons
import './pages.css'; // Hoja de estilos compartida

export default function Primercita() {
  return (
    <div className="main-container">
      <Head>
        <title>Café Gratis</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="title">Cafe Gratis</h1>
      <div className="content">
        <div className="story-container">
          <p className="story-text">
          Recuerdo que nos escapamos para tomar un cafe gratis con la App de McDonald's ☕📱 y que te enojaste porque el mío era un venti (más grande) y el tuyo era más chiquito 😠😂. Siempre fuiste muy berrinchuda, mi bebé hermosa, pero es por eso que te amo 💕. Mi nenita pequeña. Te adoro para toda la eternidad, mi enanita peli azul 💙. Nunca cambies.</p>
        </div>
        <div className="image-container">
          <Image src="/recuerdo8.jpg" alt="Primera Cita" width={500} height={400} />
        </div>
      </div>

      <div className="return-link-container">
        <Link href="/recuerdos" className="return-link">
          <FaArrowLeft className="return-link-icon" /> Volver
        </Link>
      </div>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d502.0241139443279!2d-58.388782338700324!3d-34.79625428044821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd379f4fc81ab%3A0xe0c61609c413571c!2sMcDonald&#39;s!5e1!3m2!1ses-419!2sar!4v1735578361895!5m2!1ses-419!2sar"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
