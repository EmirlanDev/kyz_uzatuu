"use client";
import { useState } from "react";
import Image from "next/image";
import spinImg from "../../../assets/spinImg.png";

export default function Form() {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/sendForm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, attendance }),
    });

    setLoading(false);
    if (res.ok) {
      setSent(true);
      setName("");
      setAttendance("");
    }
  }

  return (
    <section className="text-[#5d4334] relative ">
      <div className="container">
        <div
          data-aos="zoom-in"
          className="flex items-center justify-center w-full my-6"
        >
          <h2 className={`px-2 text-[28px] tracking-wide `}>
            Конокторго анкета
          </h2>
        </div>
        <form
          data-aos="flip-left"
          onSubmit={handleSubmit}
          className="w-full max-w-md space-y-6 rounded-xl bg-[#ffffff7d] p-6 shadow-lg mx-auto"
        >
          <h1 className="text-center text-[18px] font-medium">
            Анкетаны <span className="font-semibold">10.10.25</span> нa чейин
            толтуруп берүүнүздөрдү суранабыз
          </h1>

          <div>
            <label htmlFor="name" className="mb-2 block font-medium">
              Сиздин аты-жөнүңүз:
            </label>
            <input
              id="name"
              type="text"
              placeholder="Асан, Аида"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
              required
            />
          </div>

          <fieldset className="space-y-2">
            <legend className="mb-2 font-medium">
              Бешик тоюбузга катышасыздарбы?
            </legend>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="attendance"
                value="yes"
                checked={attendance === "yes"}
                onChange={() => setAttendance("yes")}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                required
              />
              Ооба, чоң кубаныч менен!
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="attendance"
                value="no"
                checked={attendance === "no"}
                onChange={() => setAttendance("no")}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500"
              />
              Тилекке каршы, бара албайм
            </label>
          </fieldset>

          {sent ? (
            <p className="text-center text-green-600 font-medium">
              ✅ Заявка ийгиликтүү жөнөтүлдү!
            </p>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded bg-[#5d4334] py-3 text-white hover:bg-gray-800 disabled:opacity-50"
          >
            {loading ? "Жөнөтүлүүдө..." : "Жөнөтүү!"}
          </button>
        </form>
        <h2 className="text-center text-[28px] pt-[70px] pb-[250px]">
          Кубанычыбыздын <br /> күбөсү болуңуздар!
        </h2>
      </div>
      <div className="flex justify-between absolute w-[100%] bottom-10 z-[-2]">
        <Image
          className="spin translate-x-[-50%]"
          src={spinImg}
          alt="spin Img"
        />
        <Image
          className="spin translate-x-[50%]"
          src={spinImg}
          alt="spin Img"
        />
      </div>
    </section>
  );
}
