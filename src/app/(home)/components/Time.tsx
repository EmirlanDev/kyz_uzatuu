import CountDown from "@/components/CountDown";

export default function Time() {
  return (
    <section className="time relative">
      <div className="absolute w-[100%] h-[100%] bg-[#00000062]"></div>
      <div className="container">
        <div>
          <CountDown />
        </div>
      </div>
    </section>
  );
}
