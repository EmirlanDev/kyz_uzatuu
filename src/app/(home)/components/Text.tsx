import Image from "next/image";
import textImg from "../../../assets/textImg.png";

export default function Text() {
  return (
    <section className="relative text-[#5d4334]">
      <div className="container">
        <div>
          <h3
            data-aos="zoom-in-up"
            className="text-center text-[20px] max-[325px]:text-[16px]"
          >
            Барктап келген улуу салтты элибиз,
            <br /> Кыз узатуу аземине келиңиз. <br />
            Салтанаттуу ак дасторкон үстүндө, <br /> Бакыт каалап батаңызды
            бериңиз!
          </h3>
          <div data-aos="zoom-in-up" className="text-center my-[140px]">
            <h3 className="text-[24px] ">Сиздерди кызыбыз</h3>
            <h2 className="ns text-[60px] py-[47px] max-[325px]:text-[40px]">
              <b>Айзаттын</b>
            </h2>
            <h3 className="text-[20px] max-[325px]:text-[16px]">
              кыз узатуу тоюна арналган,
              <br /> ак дасторконубуздун кадырлуу <br /> коногу болууга
              чакырабыз
            </h3>
          </div>
        </div>
      </div>
      <div className="w-full absolute top-[200px] flex justify-between">
        <Image className="translate-x-[-67%]" src={textImg} alt="text image" />
        <Image
          className="rotate-[180deg] translate-x-[67%]"
          src={textImg}
          alt="text image"
        />
      </div>
    </section>
  );
}
