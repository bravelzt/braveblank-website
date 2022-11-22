import React, { useState, useCallback } from "react";
import Image from "next/image";

import styles from "../styles/masthead.module.css";
import Link from "next/link";

const Masthead: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoaded = useCallback(() => {
    setImageLoaded(true);
  }, []);

  return (
    <div className={styles.masthead}>
      <video autoPlay loop muted playsInline className={styles.video}>
        <source src="/assets/masthead-bg.mp4" type="video/mp4" />
        <source src="/assets/masthead-bg.webm" type="video/webm; codecs=vp9" />
      </video>
      <div className={styles.logo} style={{ opacity: imageLoaded ? 100 : 0 }}>
        <Image
          src="/assets/logo.svg"
          width={(128 / 3) * 1.25}
          height={(114 / 3) * 1.25}
          alt="logo"
          onLoad={handleImageLoaded}
        />
      </div>
      <div className={styles.inner}>
        <h1 className={styles.title}>BraveStudio</h1>
        <h2 className={styles.maincont}>
          <span>Разработка, </span> <span>сделанная правильно.</span>
        </h2>
        <Link href="https://bravestd.t.me" className={styles.button}>
          Связаться
        </Link>
      </div>
    </div>
  );
};

export default Masthead;
