export default function Map() {
  return (
    <section className="map text-[#5d4334] h-[425px] my-[98px] max-w-[425px] mx-auto">
      <div className="container flex justify-center">
        <div className="w-[300px] h-[430px] bg-[#ffffffe6] rounded-4xl">
          <h2 className="text-center text-[28px] mt-[35px] mb-[10px]">
            Өткөрүлүүчү жай
          </h2>
          <h2 className="text-center text-[22px]">Ресторан «Altyn Palace»</h2>
          <h3 className="text-center mb-[28px]">
            адрес: 115 ул. Горького, Бишкек
          </h3>

          <iframe
            className="rounded-b-4xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16401.947267991767!2d74.5822540903403!3d42.86045329080963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb62ae4f98a25%3A0xf6a875712ceb8408!2sAltyn%20Palace!5e0!3m2!1sru!2skg!4v1757685043254!5m2!1sru!2skg"
            width="100%"
            height="65%"
            frameBorder={0}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
