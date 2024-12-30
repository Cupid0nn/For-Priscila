import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa'; // Importar ícono de React Icons
import './pages.css'; // Hoja de estilos compartida

export default function Primercita() {
  return (
    <div className="main-container">
      <Head>
        <title>Primer Cita</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="title">Celebrando Nuestro Aniversario</h1>
      <div className="content">
        <div className="story-container">
          <p className="story-text">
          celebrar todos los 15 como si nos hubieramos casado es algo que ya no hacemos tanto por falta de tiempo y dinero, pero que amaba con todo el alma, ver los dibujitos que me hacias.   y todos esos caramelos que comiamos me hacian muy feliz. espero que consideres este regalo de fin de año como 10 de estos por que lo que me esta costando es mucho🎀💕 </p>
        </div>
        <div className="image-container">
          <Image src="/recuerdo3.jpg" alt="Recuerdo 3" width={500} height={400} />
        </div>
      </div>

      <div className="return-link-container">
        <Link href="/recuerdos" className="return-link">
          <FaArrowLeft className="return-link-icon" /> Volver
        </Link>
      </div>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d258.187848560002!2d-58.37419070466529!3d-34.8534712317616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses-419!2sar!4v1735575566728!5m2!1ses-419!2sar"
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
