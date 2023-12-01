import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";

function Footer() {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e) => {
    if (email === "") {
      alert("Please enter your email");
      return;
    }
    setLoading(true);
    await fetch(
      "https://script.google.com/macros/s/AKfycbyP_IlfbcJsKvCG8L38iveQnpzDTmKC28zFttFYbP9jamXGQy9kXeSZzC0wrUUMpSC8kg/exec",
      {
        method: "POST",
        body: JSON.stringify({
          email: email,
        }),
      }
    ).then((res) => {
      toast.success("Subscribed successfully");
      setLoading(false);
      setIsPopupOpen(false);
      setEmail("");
    });
  };

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
        <button
          onClick={() => setIsPopupOpen(true)}
          className="underline cursor-pointer"
        >
          Subscribe to newsletter
        </button>
      </div>
      {isPopupOpen && (
        <div className="fixed z-40 inset-0 bg-black/70 h-full w-full flex backdrop-blur-sm items-center justify-center font-mona-sans">
          <div className="bg-[#171A33] h-fit rounded-lg p-6 lg:p-10 w-[93%] lg:w-[500px]">
            <h className="text-2xl font-semibold text-white/50">
              <span className="text-[#fff]">Subscribe</span> to our newsletter
            </h>
            <p className="text-white/50 text-xs mt-4">
              We will send you updates on new products and projects.
            </p>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#0d0e1d] h-12 w-full border border-white/10 rounded-md mt-7 outline-none px-5 text-white"
              name=""
              id=""
            />

            <div className="flex items-center justify-end mt-10">
              <button
                onClick={() => setIsPopupOpen(false)}
                className="text-white/60 mr-10 hover:text-white transition-all text-sm"
              >
                Cancel
              </button>
              <Button
                isLoading={loading}
                onClick={handleSubmit}
                className="rounded-md"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Footer;
