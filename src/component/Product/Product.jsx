import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import "./Product.css";

const cardData = [
  {
    id: "001",
    title: "THROUGHBIT",
    description: "Redefining Bitcoin and Ethereum Transactions in India with INRFalcon for Lightning-Fast Trading.",
    backgroundImage: "url('/public/images/product/throughbit2.png')",
  },
  {
    id: "002",
    title: "COINDAIRY",
    description: "Your Gateway to Staying informed, Engaged, and Leading the Way in the Crypto Space",
    backgroundImage: "url('/public/images/product/coindairybg.png')",
  },
  {
    id: "003",
    title: "SQUARENFT",
    description: "Dive into the Future of RealEstate and Own Your NFT Land from Any Corner of the Globe.",
    backgroundImage: "url('/public/images/product/squarenft.png')",
  },
  {
    id: "004",
    title: "BITCOINS",
    description: "Your Innovative Exchange Hub Connecting Cash and Cryptocurrency for Easy Bitcoin Transactions.",
    backgroundImage: "url('/public/images/product/bitcoin.png')",
  },
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const SwipeCarousel = ({ cards }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => (pv === cards.length - 1 ? 0 : pv + 1));
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [cards.length, dragX]);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < cards.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative overflow-hidden py-8">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        <Images cards={cards} imgIndex={imgIndex} />
      </motion.div>

      {/* <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} count={cards.length} /> */}
      <GradientEdges />
    </div>
  );
};

const Images = ({ cards, imgIndex }) => {
  return (
    <>
      {cards.map(({ id, title, description, backgroundImage }, idx) => (
        <motion.div
          key={id}
          style={{
            backgroundImage,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          animate={{
            scale: imgIndex === idx ? 0.95 : 0.85,
          }}
          transition={SPRING_OPTIONS}
          className="aspect-video w-screen shrink-0 rounded-xl object-cover flex flex-col justify-center items-center text-white"
        >
          <h1>{id}</h1>
          <h2>{title}</h2>
          <p>{description}</p>
        </motion.div>
      ))}
    </>
  );
};

0

const GradientEdges = () => {
  return (
    <>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
    </>
  );
};

const Product = () => {
  return (
    <section className="container">
      <div className="product-section">
        <SwipeCarousel cards={cardData} />
      </div>
    </section>
  );
};

export default Product;
