import React from "react";

import style from "./image_component.module.scss";

import Image from "next/image";

function ImageComponent({ image, objectFit, imageSize, alt }) {
  return (
    <div className={`${style.image_wrapper} ${style[imageSize]}`}>
      <Image
        src={image}
        alt={alt}
        fill
        style={{ objectFit: objectFit }}
        className={style.bg}
      />
    </div>
  );
}

export default ImageComponent;
