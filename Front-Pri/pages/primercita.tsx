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
      <h1 className="title">Nuestra Primera cita</h1>
      <div className="content">
        <div className="story-container">
          <p className="story-text">
          Recuerdo tomarnos muchos videos cuando fuimos a la plaza de cerca del cole, era semi pandemia y aun asi nos juntabamos. me acuerdo que nos abrasabamos y no queriamos ir a taller por que significa separarnos un ratito. no podiamos vivir sin respirar el mismo aire... ✨🎀 </p>
        </div>
        <div className="image-container">
          <Image src="/recuerdo1.jpg" alt="Primera Cita" width={500} height={400} />
        </div>
      </div>

      <div className="return-link-container">
        <Link href="/recuerdos" className="return-link">
          <FaArrowLeft className="return-link-icon" /> Volver
        </Link>
      </div>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d818.4567917159679!2d-58.38713629871465!3d-34.860569849798615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1735260363869!5m2!1ses-419!2sar"
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
