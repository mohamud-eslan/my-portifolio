import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        My Name is Mohamud Eslan Hassen And I am a Self-taught Front-end Developer Who is Based in Addis Ababa Ethiopia.
I Have a Serious Passion For Web Development Technologies And I Enjoy Creating Intuitive And Dynamic Web Applications.
I am Well-organized Person, Problem Solver And Indepent Thinker. 
I'm Interested in The Front-end Spectrum and Ambitious Working With Big Projects and Positive People.
 
        </p>

        <br />

        <p className="text-xl">
Here are Some of the Languages and Frameworks that I'm Equiped With.
HTML, CSS, JavaScript, React, Bootstrap, Tailwindcss, Figma Design, Git, Github, Firebase, Nextjs and Graphql.
        </p>
      </div>
    </div>
  );
};

export default About;
