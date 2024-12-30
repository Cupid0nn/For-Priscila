import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa'; // Importar ícono de React Icons
import './pages.css'; // Hoja de estilos compartida

export default function MiEnanitaHermosa() {
  return (
    <div className="main-container">
      <Head>
        <title>Mi enanita hermosa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="title">El Amor de Mi vida</h1>
      <div className="content">
        <div className="story-container">
          <p className="story-text">
          🧡💕Siempre me dio gracia que te enojes por ser muy chiquita, pero te digo una cosa es de lo que más me gusta de vos, ver tanta energía y determinación en un envase tan chiquito es tierno y adorable. Me gusta cuando nos abrazamos porque quedas super pequeña al lado mío. Amo tu pelo, tus ojos, tus labios y bueno, creo que esas dos cosas que tienes te las remarco todo el tiempo que las amo...  Me enamoré de esa enanita con pelo azul💙 y una marquita en su carita con un culo como para dos casas💕💌</p>
        </div>
        <div className="image-container">
          <Image src="/recuerdo5.jpg" alt="Mi enanita" width={500} height={400} />
        </div>
      </div>

      <div className="return-link-container">
        <Link href="/recuerdos" className="return-link">
          <FaArrowLeft className="return-link-icon" /> Volver
        </Link>
      </div>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d614.0776374413973!2d-58.37469817321625!3d-34.853473320262474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses-419!2sar!4v1735576467272!5m2!1ses-419!2sar"
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
