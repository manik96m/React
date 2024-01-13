import Image1 from "./01n.svg?react";
import Image2 from "./02d.svg?react";
import Image3 from "./02n.svg?react";
import Image4 from "./03d.svg?react";
import Image5 from "./03n.svg?react";
import Image6 from "./04d.svg?react";
import Image7 from "./04n.svg?react";
import Image8 from "./09d.svg?react";
import Image9 from "./10d.svg?react";
import Image10 from "./10n.svg?react";
import Image11 from "./11d.svg?react";
import Image12 from "./13d.svg?react";
import Image13 from "./13n.svg?react";
import Image14 from "./50d.svg?react";
import Image15 from "./50n.svg?react";
import Image16 from "./01d.svg?react";

interface ComponentMap {
  [index: string]: any;
}

const ImageToComponentMap: ComponentMap = {
  "01n": Image1,
  "02d": Image2,
  "02n": Image3,
  "03d": Image4,
  "03n": Image5,
  "04d": Image6,
  "04n": Image7,
  "09d": Image8,
  "10d": Image9,
  "10n": Image10,
  "11d": Image11,
  "13d": Image12,
  "13n": Image13,
  "50d": Image14,
  "50n": Image15,
  "01d": Image16,
};

export default ImageToComponentMap;
