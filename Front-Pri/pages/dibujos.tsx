import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa'; // Importar ícono de React Icons
import './pages.css'; // Hoja de estilos compartida

export default function Primercita() {
  return (
    <div className="main-container">
      <Head>
        <title>Dibujos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="title">Dibujos Tuyos</h1>
      <div className="content">
        <div className="story-container">
          <p className="story-text">
          Recuerdo cómo en tus tiempos libres en el colegio siempre me regalabas dibujitos tuyos o de mí o de los dos ✍️💕. Eran muy tiernos y extraño mucho que me los regales 😔🖼️. Espero que esta página, que durará para siempre, sea una mera compensación por esos dibujos hermosos tuyos 🌟📖.</p>
        </div>
        <div className="image-container">
          <Image src="/recuerdo7.jpg" alt="Primera Cita" width={500} height={400} />
        </div>
      </div>

      <div className="return-link-container">
        <Link href="/recuerdos" className="return-link">
          <FaArrowLeft className="return-link-icon" /> Volver
        </Link>
      </div>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d868.352065590842!2d-58.38905349672847!3d-34.86151174218114!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd5212cf0418d%3A0xabb8837a187d99ae!2sE.E.S.T.N.1%20%22Mart%C3%ADn%20Miguel%20de%20G%C3%BCemes%22!5e1!3m2!1ses-419!2sar!4v1735577989277!5m2!1ses-419!2sar"
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
