import React from "react";

function Footer() {
  return (
    <div className="bg-[#171A33] lg:h-[475px] lg:px-[100px] px-[20px] py-[50px] lg:py-[100px]">
      <div className="lg:flex w-full">
        <div className="lg:w-1/2 text-white">
          <h1 className="text-5xl font-bold">Lets Talk.</h1>
          <p className="mt-5">hello@dtory.in</p>
          <p className="mt-2">
            <span className="font-semibold">Contact</span>: +91
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
                className="block"
                rel="noopener noreferrer"
                target={"_blank"}
                href="https://www.linkedin.com/company/dtory/"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                className="block"
                rel="noopener noreferrer"
                target={"_blank"}
                href="https://www.instagram.com/dtory_studios/"
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
            <li>About Us</li>
            <li>Team</li>
            <li>Careers</li>
          </ul>
          <ul className="space-y-4">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Refund Policy</li>
            <li>Sitemap</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
