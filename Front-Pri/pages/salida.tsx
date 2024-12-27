import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa'; // Importar ícono de React Icons
import './pages.css'; // Hoja de estilos compartida

export default function Salida() {
  return (
    <div className="main-container">
      <Head>
        <title>Una Salida Juntos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="title">Una Salida Juntos</h1>
      <div className="content">
        <div className="story-container">
          <p className="story-text">
          Nos sacamos esta foto cuando fuimos a la casa de Ludmila. Me acuerdo que tomamos mucho y nos fuimos a la cama juntos. Te toqué el pelo y nos besamos. Realmente sentí una conexión única contigo. Tus labios mojados por el alcohol, tu pelo suave y teñido. No estabas muy de humor, pero tu cara brillaba como de costumbre. 💖✨
          </p>
        </div>
        <div className="image-container">
          <Image src="/recuerdo2.jpg" alt="Recuerdo de una salida juntos" width={500} height={400} />
        </div>
      </div>

      <div className="return-link-container">
        <Link href="/recuerdos" className="return-link">
          <FaArrowLeft className="return-link-icon" /> Volver
        </Link>
      </div>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.0244584948105!2d-58.38019791905191!3d-34.93092354254716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bd2ad7277212cb%3A0x4c41dc67b3dedeee!2sParque%20Las%20Naciones!5e0!3m2!1ses-419!2sar!4v1735259199322!5m2!1ses-419!2sar"
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
