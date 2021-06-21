import React from "react";
import cn from "classnames";

import styles from "./photo.module.css"

function Photo({ src = "https://via.placeholder.com/150", alt, size = 47 }) {
  return (
    <div className={cn([styles.photo])} style={{ width: size, height: size }}>
      <img className={styles.img} src={src} alt={alt} />
    </div>
  )
}

export default Photo;
