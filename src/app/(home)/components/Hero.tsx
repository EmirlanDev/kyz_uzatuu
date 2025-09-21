import Image from "next/image";
import heroImg from "../../../assets/heroImg.png";

export default function Hero() {
  return (
    <section>
      <div className="container2">
        <div className="relative">
          <Image
            className="w-[100%] max-h-[1000px] object-cover"
            src={heroImg}
            alt="heroImg"
          />
          <div className="gradient flex flex-col justify-end text-white">
            <h2
              data-aos="zoom-in-up"
              className="hero-text text-[70px] text-start pl-[35px] leading-8"
            >
              Айзат
            </h2>
            <h2
              data-aos="zoom-in-up"
              className="hero-text text-[60px] text-end pr-[35px] pb-[20px]"
            >
              Кыз узатуу
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
