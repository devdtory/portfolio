import React from "react";
import { motion } from "framer-motion";

function Services() {
  const services = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23.7375 2.6347L19.286 8.57184C19.4203 8.67184 19.5489 8.78327 19.6689 8.90327L31.0975 20.3318C31.2175 20.4518 31.326 20.5804 31.4289 20.7147L37.366 16.2633C37.6934 16.0176 37.9643 15.7045 38.1601 15.3451C38.356 14.9857 38.4724 14.5884 38.5014 14.1802C38.5304 13.7719 38.4713 13.3621 38.3282 12.9787C38.185 12.5952 37.9612 12.247 37.6718 11.9576L28.0432 2.32898C27.7538 2.03956 27.4055 1.81571 27.022 1.67258C26.6386 1.52945 26.2288 1.47037 25.8206 1.49936C25.4123 1.52835 25.015 1.64472 24.6556 1.8406C24.2962 2.03648 23.9831 2.30729 23.7375 2.6347ZM3.94604 15.0118L0.474609 37.0004L8.90318 28.5718L8.02318 27.6918C7.85734 27.526 7.72579 27.3291 7.63603 27.1124C7.54628 26.8958 7.50009 26.6635 7.50009 26.429C7.50009 25.9553 7.68825 25.5011 8.02318 25.1661C8.35811 24.8312 8.81237 24.643 9.28604 24.643C9.7597 24.643 10.214 24.8312 10.5489 25.1661L14.8346 29.4518C15.1695 29.7868 15.3577 30.241 15.3577 30.7147C15.3577 31.1884 15.1695 31.6426 14.8346 31.9776C14.4997 32.3125 14.0454 32.5006 13.5718 32.5006C13.0981 32.5006 12.6438 32.3125 12.3089 31.9776L11.4289 31.0976L3.00032 39.5261L24.9889 36.0547C25.6074 35.9571 26.1767 35.659 26.6093 35.2063C27.0419 34.7536 27.3138 34.1713 27.3832 33.549L28.5718 22.8576L17.1432 11.429L6.45175 12.6176C5.82944 12.6869 5.24714 12.9588 4.79442 13.3914C4.3417 13.824 4.04362 14.3933 3.94604 15.0118Z"
            fill="url(#paint0_radial_7_6)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_7_6"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(28 1.5) rotate(124.574) scale(44.9361 44.9361)"
            >
              <stop stop-color="#574AE2" />
              <stop offset="1" stop-color="#978DFF" />
            </radialGradient>
          </defs>
        </svg>
      ),
      title: "UI/UX Design",
      description:
        "Looking for creating a website or improving the user experience of your already existing website? Here we have some best ui/ux designers to do that for!",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M23.332 35.4194H16.6654V37.9194H23.332V35.4194ZM4.58203 23.336V16.6694H2.08203V23.336H4.58203ZM35.4154 22.6077V23.336H37.9154V22.6077H35.4154ZM24.817 7.6877L31.4154 13.626L33.087 11.766L26.4904 5.8277L24.817 7.6877ZM37.9154 22.6077C37.9154 19.7927 37.9404 18.0094 37.232 16.416L34.947 17.4344C35.3904 18.431 35.4154 19.5727 35.4154 22.6077H37.9154ZM31.4154 13.626C33.6704 15.656 34.5037 16.4394 34.947 17.4344L37.232 16.416C36.522 14.821 35.1804 13.6494 33.087 11.766L31.4154 13.626ZM16.7154 4.58603C19.352 4.58603 20.347 4.60603 21.232 4.94603L22.1287 2.6127C20.7087 2.06603 19.162 2.08603 16.7154 2.08603V4.58603ZM26.4904 5.82936C24.6804 4.20103 23.5487 3.15603 22.1287 2.6127L21.2337 4.94603C22.1204 5.28603 22.867 5.9327 24.817 7.6877L26.4904 5.82936ZM16.6654 35.4194C13.487 35.4194 11.2304 35.416 9.51537 35.186C7.84037 34.961 6.8737 34.5377 6.1687 33.8327L4.40203 35.5994C5.6487 36.8494 7.23037 37.401 9.1837 37.6644C11.1004 37.9227 13.5587 37.9194 16.6654 37.9194V35.4194ZM2.08203 23.336C2.08203 26.4427 2.0787 28.8994 2.33703 30.8177C2.60037 32.771 3.1537 34.3527 4.40037 35.601L6.16703 33.8344C5.4637 33.1277 5.04037 32.161 4.81537 30.4844C4.58537 28.7727 4.58203 26.5144 4.58203 23.336H2.08203ZM23.332 37.9194C26.4387 37.9194 28.8954 37.9227 30.8137 37.6644C32.767 37.401 34.3487 36.8477 35.597 35.601L33.8304 33.8344C33.1237 34.5377 32.157 34.961 30.4804 35.186C28.7687 35.416 26.5104 35.4194 23.332 35.4194V37.9194ZM35.4154 23.336C35.4154 26.5144 35.412 28.7727 35.182 30.486C34.957 32.161 34.5337 33.1277 33.8287 33.8327L35.5954 35.5994C36.8454 34.3527 37.397 32.771 37.6604 30.8177C37.9187 28.901 37.9154 26.4427 37.9154 23.336H35.4154ZM4.58203 16.6694C4.58203 13.491 4.58537 11.2344 4.81537 9.51936C5.04037 7.84436 5.4637 6.8777 6.1687 6.1727L4.40203 4.40603C3.15203 5.6527 2.60037 7.23436 2.33703 9.1877C2.0787 11.1044 2.08203 13.5627 2.08203 16.6694H4.58203ZM16.7154 2.08603C13.5904 2.08603 11.122 2.0827 9.19703 2.34103C7.23537 2.60436 5.6487 3.1577 4.40037 4.40436L6.16703 6.17103C6.8737 5.4677 7.84203 5.04436 9.5287 4.81936C11.2504 4.58936 13.5204 4.58603 16.7154 4.58603V2.08603Z"
            fill="url(#paint0_radial_2286_2367)"
          />
          <path
            d="M21.666 4.16797V8.33464C21.666 12.263 21.666 14.228 22.886 15.448C24.106 16.668 26.071 16.668 29.9993 16.668H36.666"
            fill="url(#paint1_radial_2286_2367)"
          />
          <path
            d="M21.666 4.16797V8.33464C21.666 12.263 21.666 14.228 22.886 15.448C24.106 16.668 26.071 16.668 29.9993 16.668H36.666"
            stroke="url(#paint2_radial_2286_2367)"
            stroke-width="2.5"
          />
          <path
            d="M11.6647 23.3359L9.99805 25.0026L11.6647 26.6693M19.1647 26.6693L20.8314 28.3359L19.1647 30.0026M16.6647 23.3359L14.1647 30.0026L16.6647 23.3359Z"
            fill="url(#paint3_radial_2286_2367)"
          />
          <path
            d="M11.6647 23.3359L9.99805 25.0026L11.6647 26.6693M19.1647 26.6693L20.8314 28.3359L19.1647 30.0026M16.6647 23.3359L14.1647 30.0026"
            stroke="url(#paint4_radial_2286_2367)"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <defs>
            <radialGradient
              id="paint0_radial_2286_2367"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(5.5 3.5) rotate(48.1548) scale(44.9694 44.9694)"
            >
              <stop stop-color="#C7C1FF" />
              <stop offset="1" stop-color="#574AE2" />
            </radialGradient>
            <radialGradient
              id="paint1_radial_2286_2367"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(22.4689 5.1845) rotate(42.7528) scale(18.2425 18.2845)"
            >
              <stop stop-color="#574AE2" />
              <stop offset="1" stop-color="#978DFF" />
            </radialGradient>
            <radialGradient
              id="paint2_radial_2286_2367"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(22.4689 5.1845) rotate(42.7528) scale(18.2425 18.2845)"
            >
              <stop stop-color="#978DFF" />
              <stop offset="1" stop-color="#CBC7F6" />
            </radialGradient>
            <radialGradient
              id="paint3_radial_2286_2367"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(10.5779 23.8781) rotate(34.3211) scale(11.7139 10.9682)"
            >
              <stop stop-color="#978DFF" />
              <stop offset="1" stop-color="#574AE2" />
            </radialGradient>
            <radialGradient
              id="paint4_radial_2286_2367"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(10.5779 23.8781) rotate(34.3211) scale(11.7139 10.9682)"
            >
              <stop stop-color="#978DFF" />
              <stop offset="1" stop-color="#574AE2" />
            </radialGradient>
          </defs>
        </svg>
      ),
      title: "Development",
      description:
        "We make digital dreams come true by crafting your vision into our code. Give us the oppertunity to write blocks of your success story!",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <g clip-path="url(#clip0_2286_2372)">
            <path
              d="M20.002 1.42188V38.5647"
              stroke="black"
              stroke-width="2.85714"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.002 1.42188V38.5647"
              stroke="url(#paint0_linear_2286_2372)"
              stroke-width="2.85714"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6 32.193C8.09351 30.9185 9.82394 29.1267 11.0248 26.9902C12.2257 24.8536 12.8567 22.4439 12.8571 19.993C12.8567 17.542 12.2257 15.1324 11.0248 12.9958C9.82394 10.8592 8.09351 9.06748 6 7.79297"
              stroke="url(#paint1_radial_2286_2372)"
              stroke-width="2.85714"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M34.0037 7.79297C31.9108 9.06794 30.1811 10.8599 28.9811 12.9964C27.7808 15.133 27.1504 17.5424 27.1504 19.993C27.1504 22.4436 27.7808 24.8529 28.9811 26.9895C30.1811 29.1262 31.9108 30.9179 34.0037 32.193"
              stroke="url(#paint2_radial_2286_2372)"
              stroke-width="2.85714"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.0011 38.5647C30.258 38.5647 38.5725 30.2502 38.5725 19.9933C38.5725 9.73659 30.258 1.42188 20.0011 1.42188C9.7444 1.42188 1.42969 9.73659 1.42969 19.9933C1.42969 30.2502 9.7444 38.5647 20.0011 38.5647Z"
              stroke="url(#paint3_radial_2286_2372)"
              stroke-width="2.85714"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_2286_2372"
              x1="20.002"
              y1="1.33073"
              x2="17.8655"
              y2="1.53271"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#978DFF" />
              <stop offset="1" stop-color="#CBC7F6" />
            </linearGradient>
            <radialGradient
              id="paint1_radial_2286_2372"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(6.56051 27.9621) rotate(-70.0333) scale(17.7601 11.7778)"
            >
              <stop stop-color="#978DFF" />
              <stop offset="1" stop-color="#CBC7F6" />
            </radialGradient>
            <radialGradient
              id="paint2_radial_2286_2372"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(27.7106 27.9621) rotate(-70.0435) scale(17.759 11.772)"
            >
              <stop stop-color="#978DFF" />
              <stop offset="1" stop-color="#CBC7F6" />
            </radialGradient>
            <radialGradient
              id="paint3_radial_2286_2372"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(3.41774 4.44242) rotate(47.9682) scale(49.5403 49.5403)"
            >
              <stop stop-color="#574AE2" />
              <stop offset="1" stop-color="#978DFF" />
            </radialGradient>
            <clipPath id="clip0_2286_2372">
              <rect width="40" height="40" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "Branding",
      description:
        "Unlock your buisness's true potential: let us transform your identity into impact.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M4.21484 17.543H36.2677V34.994C36.2677 36.5401 35.0142 37.7939 33.4677 37.7939H7.01485C5.46846 37.7939 4.21484 36.5404 4.21484 34.994V17.543Z"
            stroke="url(#paint0_radial_2527_2468)"
            stroke-width="2.79998"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.20898 17.5492L35.1697 9.25338L33.8262 4.24004C33.4261 2.74635 31.8908 1.85993 30.397 2.26016L4.84554 9.10658C3.35182 9.50681 2.4654 11.0421 2.86563 12.5358L4.20898 17.5492Z"
            stroke="url(#paint1_radial_2527_2468)"
            stroke-width="2.79998"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.5605 30.6836H15.1424"
            stroke="url(#paint2_radial_2527_2468)"
            stroke-width="2.79998"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.7031 15.2714L14.4941 6.51953"
            stroke="url(#paint3_radial_2527_2468)"
            stroke-width="2.79998"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.8164 12.5605L24.6074 3.80859"
            stroke="url(#paint4_radial_2527_2468)"
            stroke-width="2.79998"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <defs>
            <radialGradient
              id="paint0_radial_2527_2468"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(5.93046 19.1898) rotate(35.0267) scale(34.9547 33.035)"
            >
              <stop stop-color="#574AE2" />
              <stop offset="1" stop-color="#978DFF" />
            </radialGradient>
            <radialGradient
              id="paint1_radial_2527_2468"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(5.41796 14.8814) rotate(-20.1685) scale(30.5273 20.4143)"
            >
              <stop stop-color="#978DFF" />
              <stop offset="1" stop-color="#CBC7F6" />
            </radialGradient>
            <radialGradient
              id="paint2_radial_2527_2468"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(11.7523 30.7649) rotate(17.209) scale(3.34855 1.90289)"
            >
              <stop stop-color="#574AE2" />
              <stop offset="1" stop-color="#978DFF" />
            </radialGradient>
            <radialGradient
              id="paint3_radial_2527_2468"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(12.8027 15.7478) rotate(-78.3105) scale(9.67386 4.94217)"
            >
              <stop stop-color="#978DFF" />
              <stop offset="1" stop-color="#CBC7F6" />
            </radialGradient>
            <radialGradient
              id="paint4_radial_2527_2468"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(22.6033 13.7871) rotate(-77.9051) scale(9.35421 4.77887)"
            >
              <stop stop-color="#978DFF" />
              <stop offset="1" stop-color="#CBC7F6" />
            </radialGradient>
          </defs>
        </svg>
      ),
      title: "Video Edting",
      description:
        "Transforming video footage into artistry and making video stories come to life is kinda our passion ;)",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M13.3188 23.3935C11.9154 22.3523 10.7755 20.9967 9.9906 19.4354C9.20566 17.8741 8.79749 16.1506 8.79883 14.4031C8.79883 8.21753 13.8132 3.20312 19.9988 3.20312C26.1844 3.20312 31.1988 8.21753 31.1988 14.4031C31.1988 18.0311 29.4732 21.2567 26.7988 23.3031"
            stroke="url(#paint0_radial_2527_2485)"
            stroke-width="3.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20 14.4023L36 36.0023H4L20 14.4023Z"
            stroke="url(#paint1_radial_2527_2485)"
            stroke-width="3.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <defs>
            <radialGradient
              id="paint0_radial_2527_2485"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(29.666 19.3359) rotate(-121.139) scale(18.6934 18.7942)"
            >
              <stop stop-color="#978DFF" />
              <stop offset="1" stop-color="#CBC7F6" />
            </radialGradient>
            <radialGradient
              id="paint1_radial_2527_2485"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(7.05231 15.2547) rotate(37.0072) scale(33.5486 32.4479)"
            >
              <stop stop-color="#C7C1FF" />
              <stop offset="1" stop-color="#574AE2" />
            </radialGradient>
          </defs>
        </svg>
      ),
      title: "Graphic Design",
      description:
        "Looking for someone who will create the Best designs for you? Congratulations, you are at the right place.",
    },
  ];

  const ServiceCard = ({ title, description, icon, index }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.2 }}
        className="bg-gradient-to-br from-[#978DFF] to-[#978DFF00] rounded-lg p-[1px]"
      >
        <div className="w-full h-full bg-[#171439] rounded-lg p-8">
          <div>{icon}</div>
          <h1 className="text-white font-semibold text-[24px] mt-6">{title}</h1>
          <p className="text-[#CCC] text-sm mt-2 leading-6">{description}</p>
        </div>
      </motion.div>
    );
  };

  return (
    <div id="services" className="font-mona-sans pt-[100px] lg:pt-[180px]">
      <h2 className="text-[#BFD200] text-center text-sm tracking-[1.6px]">
        WHAT&apos;S INCLUDED
      </h2>
      <h1 className="text-white font-bold text-center text-[40px]">Services</h1>
      <p className="text-sm text-[#CCC] text-center mt-2 leading-6">
        The great stuff we do at Dtory {";)"}
      </p>
      <div className="px-[20px] lg:px-[100px] grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16 font-mona-sans">
        {services.map((service, i) => (
          <ServiceCard
            key={i}
            title={service.title}
            description={service.description}
            icon={service.icon}
            index={i}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
