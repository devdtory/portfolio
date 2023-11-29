import { Accordion, AccordionItem } from "@nextui-org/react";
import React from "react";

function FAQ() {
  return (
    <div id="faq" className="font-mona-sans pt-[100px] lg:pt-[180px]">
      <h1 className="text-white font-bold text-center text-[40px]">FAQs</h1>
      <div className="px-[30px] lg:px-[250px] mt-7 font-mona-sans">
        <Accordion isCompact={false} className="space-y-2">
          <AccordionItem
            className="border-b border-[#D6D6D6]"
            key="1"
            aria-label="01. UX / Wireframing"
            title={
              <div className="flex items-center text-xl font-semibold text-white">
                What is the refund policy ?
              </div>
            }
          >
            <p className="pb-4 text-left leading-7 text-neutral-300 -mt-2">
              Owing to the superior quality of the work and time put in, we do
              not entertain refund requests.
            </p>
          </AccordionItem>
          <AccordionItem
            className="border-b border-[#D6D6D6]"
            key="2"
            aria-label="01. UX / Wireframing"
            title={
              <div className="flex items-center text-xl font-semibold text-white">
                Do you offer e-commerce solutions for online businesses?
              </div>
            }
          >
            <p className="pb-4 text-left leading-7 text-neutral-300 -mt-2">
              Absolutely! Our e-commerce solutions deliver seamless online
              shopping experiences, integrating cutting-edge technology for
              secure transactions and user-friendly interfaces to elevate your
              business.
            </p>
          </AccordionItem>
          <AccordionItem
            className="border-b border-[#D6D6D6]"
            key="3"
            aria-label="01. UX / Wireframing"
            title={
              <div className="flex items-center text-xl font-semibold text-white">
                What if I don&apos;t like the design ?
              </div>
            }
          >
            <p className="pb-4 text-left leading-7 text-neutral-300 -mt-2">
              No problem! We&apos;re committed to refining the design until it
              meets your expectations completely. Your satisfaction is our
              priority.
            </p>
          </AccordionItem>
          <AccordionItem
            className="border-b border-[#D6D6D6]"
            key="4"
            aria-label="01. UX / Wireframing"
            title={
              <div className="flex items-center text-xl font-semibold text-white">
                Do you offer ongoing support and maintenance after the project
                is completed?
              </div>
            }
          >
            <p className="pb-4 text-left leading-7 text-neutral-300 -mt-2">
              Yes we have an annual maintenance package which you can subscribe
              for support and maintenance after completion of the project.
            </p>
          </AccordionItem>
          <AccordionItem
            className="border-b border-[#D6D6D6]"
            key="4"
            aria-label="01. UX / Wireframing"
            title={
              <div className="flex items-center text-xl font-semibold text-white">
                Do you offer ongoing support and maintenance after the project
                is completed?
              </div>
            }
          >
            <p className="pb-4 text-left leading-7 text-neutral-300 -mt-2">
              An individual full-time designer will charge around $100k/annually
              whereas we charge according to the work. Also we have multiple
              services and individuals who are expert in their own respective
              fields. So to summarise, this is like a great package for your
              brand with everything included in a perfect budget fit.
            </p>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default FAQ;
