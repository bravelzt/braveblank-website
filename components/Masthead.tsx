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
      <Image
        src="/assets/masthead-bg.jpg"
        alt="image background"
        width={1920}
        height={1080}
        className={styles.image}
      />
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
        <Link
          target="_blank"
          href="https://bravestd.t.me"
          className={styles.button}
        >
          Связаться
        </Link>
      </div>
    </div>
  );
};

export default Masthead;
