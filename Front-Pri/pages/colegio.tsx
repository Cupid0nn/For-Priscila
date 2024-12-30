import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa'; // Importar ícono de React Icons
import './pages.css'; // Hoja de estilos compartida

export default function Primercita() {
  return (
    <div className="main-container">
      <Head>
        <title>Despues del Colegio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="title">Despues del Colegio</h1>
      <div className="content">
        <div className="story-container">
          <p className="story-text">
          💞💘Me acuerdo que despues del colegio soliamos quedarnos un rato antes en la plaza solo para estar mas tiempo juntos, hablabamos boludeces y no nos soltabamos por que sabiamos que no ibamos a pasar la noche juntos❣💟.  Realmente extraño esa priscila melosa y pegote💗</p>
        </div>
        <div className="image-container">
          <Image src="/recuerdo4.jpg" alt="despues del colegio" width={500} height={400} />
        </div>
      </div>

      <div className="return-link-container">
        <Link href="/recuerdos" className="return-link">
          <FaArrowLeft className="return-link-icon" /> Volver
        </Link>
      </div>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d409.80771409834244!2d-58.38922644122973!3d-34.861489186756096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses-419!2sar!4v1735575882993!5m2!1ses-419!2sar"
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
