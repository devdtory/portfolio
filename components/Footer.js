import Link from "next/link";
import React from "react";

function Footer() {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  return (
    <div className="bg-[#171A33] lg:h-[475px] lg:px-[100px] px-[20px] py-[50px] lg:py-[100px] font-mona-sans">
      <div className="lg:flex w-full">
        <div className="lg:w-1/2 text-white">
          <h1 className="text-5xl font-bold">Lets Talk.</h1>
          <p className="mt-5">hello@dtory.in</p>
          <p className="mt-2">
            <span className="font-semibold">Contact</span> +91
            9002666920/8642014038
          </p>
        </div>
        <div className="lg:w-1/2 lg:flex justify-end space-y-12 lg:space-y-0 mt-16 lg:mt-0 lg:space-x-20 text-white">
          <ul className="space-y-4">
            <li>
              <a
                className="block"
                rel="noopener noreferrer"
                target={"_blank"}
                href="https://dribbble.com/Dtory_official"
              >
                Dribbble
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/dtory_studios/"
                className="block"
                rel="noopener noreferrer"
                target={"_blank"}
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                className="block"
                rel="noopener noreferrer"
                target={"_blank"}
                href="https://www.linkedin.com/company/dtory/"
              >
                Linkedin
              </a>
            </li>
            {/* <li>
              <a href="https://www.instagram.com/dtory_studios/">Discord</a>
            </li> */}
            <li>
              <a
                className="block"
                rel="noopener noreferrer"
                target={"_blank"}
                href="https://www.facebook.com/profile.php?id=61550040305368"
              >
                Facebook
              </a>
            </li>
          </ul>
          <ul className="space-y-4">
            <li hidden>About Us</li>
            <li>
              <Link href={"/team"}>Team</Link>
            </li>
            <li hidden>Careers</li>
          </ul>
          <ul className="space-y-4 opacity-0">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Refund Policy</li>
            <li>Sitemap</li>
          </ul>
        </div>
      </div>
      <div className="mt-24 h-[1px] w-full bg-[#777777]"></div>
      <div className="lg:flex lg:items-center lg:justify-between mt-4 text-white space-y-4 lg:space-y-0">
        <p>© 2023 Dtory - All rights reserved</p>
        <p className="underline">Subscribe to newsletter</p>
      </div>
    </div>
  );
}

export default Footer;
