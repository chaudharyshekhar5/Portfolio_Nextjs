"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Netflix Clone Website",
    description: "This Netflix Clone is a React project that aims to replicate the user interface and functionality of the popular streaming service Netflix. It uses components, hooks, custom hooks, context API, and React Router to create a dynamic and responsive web app. It also uses Firebase for authentication and  database services. The project fetches data from The Movie Database (TMDB) API to display movie's Trailer in different categories, such as trending, popular, top rated, and Coming Soon. Users can  read descriptions, and see releasing date of the movies . The project demonstrates the use of React.js to build a complex and modern web application ",
    image: "/images/projects/1.avif",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/chaudharyshekhar5/netflix-gpt",
    previewUrl: "https://netflix-clone-by-shekharchaudhary.netlify.app/",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "This project is a personal portfolio website built with Next.js and Tailwind CSS. It showcases my skills, projects, and achievements as a web developer. It uses server-side rendering to improve the performance and SEO of the website, and static site generation to create a blog section with markdown files. It also uses Next.js API routes to handle contact form submissions and send emails.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Swiggy's Clone (Currently working on it)",
    description: "This is a Swiggy clone made in React JS.The app have the following functionality-A home page where the user can browse different categories of food and filter them by various criteria such as price, rating, cuisine, etc.A restaurant page where the user can view the menu, reviews, and ratings of a selected restaurant and add items to their cart.A cart page where the user can review their order, apply coupons, and proceed to checkout.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Gym Website",
    description: "This is a basic gym website using Html,Css and Javascript in which user get weekly training schedules.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/chaudharyshekhar5/gym_site",
    previewUrl: "https://gym-website1111.netlify.app/",
  },
  {
    id: 5,
    title: "Dice Game",
    description: "This project is a game where two player throw dice and each time the dice value is added to the previous value, and the user who get the sum as 50 first will be the winner of the game.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/chaudharyshekhar5/pig_game",
    previewUrl: "https://piggame5.netlify.app",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-amber-800 mt-4 mb-8 md:mb-12 underline underline-offset-4">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
