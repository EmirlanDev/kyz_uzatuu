import Image from "next/image";
import Link from "next/link";
import profile from "../../../assets/profile.png";

export default function Footer() {
  return (
    <footer className="bg-black fixed z-50 bottom-0 w-[100%]">
      <div className="flex justify-between items-center px-[20px] py-[10px]">
        <Image className="w-[45px] rounded-full" src={profile} alt="profile" />

        <p className="text-[12px] font-bold text-white whitespace-nowrap">
          Ушундай сайттар
          <br />
          боюнча кайрылыңыз
        </p>

        <div className="flex gap-2 items-center">
          {/* Instagram */}
          <Link
            href="https://www.instagram.com/okeans_studio/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-9 h-9 rounded-lg flex items-center justify-center border border-white/50 text-gray-400 hover:-translate-y-1 hover:text-blue-400 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0,0,256,256"
            >
              <g transform="translate(29.44,29.44) scale(0.77,0.77)">
                <g
                  fill="#ffffff"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                >
                  <g transform="scale(8.53333,8.53333)">
                    <path d="M9.99805,3c-3.859,0 -6.99805,3.14195 -6.99805,7.00195v10c0,3.859 3.14195,6.99805 7.00195,6.99805h10c3.859,0 6.99805,-3.14195 6.99805,-7.00195v-10c0,-3.859 -3.14195,-6.99805 -7.00195,-6.99805zM22,7c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1zM15,9c3.309,0 6,2.691 6,6c0,3.309 -2.691,6 -6,6c-3.309,0 -6,-2.691 -6,-6c0,-3.309 2.691,-6 6,-6zM15,11c-2.20914,0 -4,1.79086 -4,4c0,2.20914 1.79086,4 4,4c2.20914,0 4,-1.79086 4,-4c0,-2.20914 -1.79086,-4 -4,-4z"></path>
                  </g>
                </g>
              </g>
            </svg>
          </Link>

          {/* WhatsApp */}
          <Link
            href="https://wa.me/996995102180 "
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="w-9 h-9 rounded-lg flex items-center justify-center border border-white/50 text-gray-400 hover:-translate-y-1 hover:text-blue-400 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0,0,256,256"
            >
              <g transform="translate(32,32) scale(0.75,0.75)">
                <g
                  fill="#ffffff"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                >
                  <g transform="scale(10.66667,10.66667)">
                    <path d="M19.077,4.928c-2.082,-2.083 -4.922,-3.134 -7.904,-2.894c-4.009,0.322 -7.523,3.11 -8.699,6.956c-0.84,2.748 -0.487,5.617 0.881,7.987l-1.296,4.303c-0.124,0.413 0.253,0.802 0.67,0.691l4.504,-1.207c1.459,0.796 3.101,1.215 4.773,1.216h0.004c4.195,0 8.071,-2.566 9.412,-6.541c1.306,-3.876 0.34,-7.823 -2.345,-10.511zM16.898,15.554c-0.208,0.583 -1.227,1.145 -1.685,1.186c-0.458,0.042 -0.887,0.207 -2.995,-0.624c-2.537,-1 -4.139,-3.601 -4.263,-3.767c-0.125,-0.167 -1.019,-1.353 -1.019,-2.581c0,-1.228 0.645,-1.832 0.874,-2.081c0.229,-0.25 0.499,-0.312 0.666,-0.312c0.166,0 0.333,0 0.478,0.006c0.178,0.007 0.375,0.016 0.562,0.431c0.222,0.494 0.707,1.728 0.769,1.853c0.062,0.125 0.104,0.271 0.021,0.437c-0.083,0.166 -0.125,0.27 -0.249,0.416c-0.125,0.146 -0.262,0.325 -0.374,0.437c-0.125,0.124 -0.255,0.26 -0.11,0.509c0.146,0.25 0.646,1.067 1.388,1.728c0.954,0.85 1.757,1.113 2.007,1.239c0.25,0.125 0.395,0.104 0.541,-0.063c0.146,-0.166 0.624,-0.728 0.79,-0.978c0.166,-0.25 0.333,-0.208 0.562,-0.125c0.229,0.083 1.456,0.687 1.705,0.812c0.25,0.125 0.416,0.187 0.478,0.291c0.062,0.103 0.062,0.603 -0.146,1.186z"></path>
                  </g>
                </g>
              </g>
            </svg>
          </Link>

          {/* Telegram */}
          {/* <Link
            href="https://t.me/Emirlan_FrontEndDev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="w-9 h-9 rounded-lg flex items-center justify-center border border-white/50 text-gray-400 hover:-translate-y-1 hover:text-blue-400 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0,0,256,256"
            >
              <g transform="translate(25.6,25.6) scale(0.8,0.8)">
                <g
                  fill="#ffffff"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                >
                  <g transform="scale(4,4)">
                    <path d="M32,10c12.15,0 22,9.85 22,22c0,12.15 -9.85,22 -22,22c-12.15,0 -22,-9.85 -22,-22c0,-12.15 9.85,-22 22,-22zM39.589,40.968c0.404,-1.241 2.301,-13.615 2.534,-16.054c0.071,-0.738 -0.163,-1.229 -0.619,-1.449c-0.553,-0.265 -1.371,-0.133 -2.322,0.21c-1.303,0.47 -17.958,7.541 -18.92,7.951c-0.912,0.388 -1.775,0.81 -1.775,1.423c0,0.431 0.256,0.673 0.96,0.924c0.732,0.261 2.577,0.82 3.668,1.121c1.05,0.29 2.243,0.038 2.913,-0.378c0.709,-0.441 8.901,-5.921 9.488,-6.402c0.587,-0.48 1.056,0.135 0.576,0.616c-0.48,0.48 -6.102,5.937 -6.844,6.693c-0.901,0.917 -0.262,1.868 0.343,2.249c0.689,0.435 5.649,3.761 6.396,4.295c0.747,0.534 1.504,0.776 2.198,0.776c0.694,-0.001 1.059,-0.915 1.404,-1.975z"></path>
                  </g>
                </g>
              </g>
            </svg>
          </Link> */}
        </div>
      </div>
    </footer>
  );
}
