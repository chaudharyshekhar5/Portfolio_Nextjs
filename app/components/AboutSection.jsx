"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Link from "next/link"
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 text-white">
        <li>Next.js</li>
        <li>React</li>
        <li>JavaScript</li>
        <li>Redux</li>
        <li>Html & Css</li>
        <li>SQL</li>
        <li>Python 3</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 text-white">
        <li>Graduation from Dr. A.P.J Abdul Kalam University in Bachelor of Technology - (2018-2022)</li>
        <li>Secondary (2016) & Higher secondary education (2018) from C.B.S.E Board</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 text-white underline underline-offset-2">
        <li ><Link href="https://onedrive.live.com/?cid=BACBED5F68008E67&id=BACBED5F68008E67%21164962&parId=root&o=OneUp">NextJS</Link></li>
        <li ><Link href="https://onedrive.live.com/?id=root&cid=BACBED5F68008E67&qt=search&q=sql&scope=drive">SQL</Link></li>
        <li ><Link href="https://onedrive.live.com/?cid=BACBED5F68008E67&id=BACBED5F68008E67%21164962&parId=root&o=OneUp">ReactJS</Link></li>
        <li><Link href="https://onedrive.live.com/?cid=BACBED5F68008E67&id=BACBED5F68008E67%21164965&parId=root&o=OneUp">Redux</Link></li>
        <li><Link href="https://onedrive.live.com/?cid=BACBED5F68008E67&q=python%203&scope=drive&id=BACBED5F68008E67%21164966&parId=root&parQt=search&o=OneUp">Python 3</Link></li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.jpg" alt="about-image" width={400} height={400} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-amber-800  underline underline-offset-4 mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a Front-end web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Next.js, SQL,
            HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;