/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/Footer";
import React from "react";

function Team() {
  const team = [
    {
      name: "Aditya Kumar Jha",
      role: "Founder , CEO",
      image:
        "https://res.cloudinary.com/dxfa5a3ya/image/upload/v1701031718/portfolio/image_1_kujlgv.png",
      color: "#F36363",
    },
    {
      name: "Subhankar Jha",
      role: "Founder , CTO",
      image:
        "https://res.cloudinary.com/dxfa5a3ya/image/upload/v1701031718/portfolio/image_18_elyu5f.png",
      color: "#F36363",
    },
    {
      name: "Onkar Nath Jha",
      role: "Accounting",
      image:
        "https://res.cloudinary.com/dxfa5a3ya/image/upload/v1701031718/portfolio/image_1-1_nw0av9.png",
      color: "#BFD200",
    },
    {
      name: "Priyangsu Banerjee",
      role: "Lead Developer",
      image:
        "https://res.cloudinary.com/dxfa5a3ya/image/upload/v1701031718/portfolio/image_17_liwbzt.png",
      color: "#9086FF",
    },
    {
      name: "Shaona Sarkar",
      role: "Lead Graphic Designer",
      image:
        "https://res.cloudinary.com/dxfa5a3ya/image/upload/v1701031718/portfolio/image_16_zf3ycp.png",
      color: "#9086FF",
    },
    {
      name: "Lakshman Rao",
      role: "Graphic Designer",
      image:
        "https://res.cloudinary.com/dxfa5a3ya/image/upload/v1701031718/portfolio/image_18-1_tnjikb.png",
      color: "#325FFF",
    },
    {
      name: "Divya Pandey",
      role: "Graphic Designer",
      image:
        "https://res.cloudinary.com/dxfa5a3ya/image/upload/v1701031718/portfolio/image_16-1_ng5vuw.png",
      color: "#325FFF",
    },
    {
      name: "Darpan Singh",
      role: "Video Editor",
      image:
        "https://res.cloudinary.com/dxfa5a3ya/image/upload/v1701031718/portfolio/image_17-1_v3z3ne.png",
      color: "#325FFF",
    },
  ];

  const ProfileCard = ({ name, role, image, color }) => {
    return (
      <div className="flex flex-col items-center justify-center">
        <img src={image} alt="" className="mx-auto h-[150px]" />
        <div>
          <h3 className="text-white text-xl font-medium text-center mt-4">
            {name}
          </h3>
          <p
            style={{
              color: color,
            }}
            className="mt-2"
          >
            {role}
          </p>
        </div>
      </div>
    );
  };
  return (
    <div className="font-mona-sans min-h-screen">
      <p className="text-[#B4AEF6] text-center text-sm tracking-[1.6px] mt-16">
        THE SQUAD
      </p>
      <h1 className="text-white font-bold text-center text-[40px]">
        Meet the team
      </h1>
      <p className="text-sm text-[#CCC] text-center mt-2 leading-6">
        Get to Know the Faces Behind Our Success!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 px-[20px] md:px-[40px] lg:px-[100px] mt-20 mb-44">
        {team.map((member, i) => (
          <ProfileCard
            key={i}
            name={member.name}
            role={member.role}
            image={member.image}
            color={member.color}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Team;
