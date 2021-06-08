import classes from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/nextjs.png"
          alt="nextjs"
          width={300}
          height={300}
        />
      </div>
      <h1>A blog about javascript stuff.</h1>
    </section>
  );
};

export default Hero;
