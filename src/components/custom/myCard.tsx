"use client";

import { useState } from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';
import { FollowerPointerCard } from "../ui/following-pointer";

// Utility function to generate a random color
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export function FollowingPointerDemo() {
  const [isHovered, setIsHovered] = useState(false);
  const [arrowColor, setArrowColor] = useState(getRandomColor());
  
  // Get dynamic date
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Function to scroll smoothly to the #about section
  const scrollToAboutSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto perspective-1000">
      <motion.div
        whileHover={{ scale: 1.05, rotateY: 10 }} // Add a stronger 3D tilt effect
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
        onHoverStart={() => {
          setIsHovered(true);
          setArrowColor(getRandomColor()); // Change the arrow color on hover
        }}
        onHoverEnd={() => setIsHovered(false)}
      >
        <FollowerPointerCard
          title={
            <TitleComponent
              title={blogContent.author}
              avatar={blogContent.authorAvatar}
            />
          }
          className="w-full h-full"
          animateOnHover={isHovered}
          arrowColor={arrowColor} // Pass arrow color dynamically
        >
          <motion.div
            className="relative overflow-hidden h-[30rem] rounded-2xl transition-all duration-300 bg-gradient-to-br from-purple-100 to-indigo-200 hover:shadow-2xl border border-indigo-200 flex flex-col"
            whileHover={{ boxShadow: '0 10px 50px rgba(0, 0, 255, 0.2)', borderColor: arrowColor }} // Glowing border
          >
            <div className="h-52 overflow-hidden relative">
              <Image
                src={blogContent.image}
                alt="Blog thumbnail"
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="flex-grow p-6 flex flex-col justify-between bg-white bg-opacity-80 backdrop-blur-sm relative">
              <div>
                <motion.h2 
                  className="font-bold mb-3 text-2xl text-indigo-900 line-clamp-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {blogContent.title}
                </motion.h2>
                <motion.p 
                  className="text-sm text-indigo-700 mb-4 line-clamp-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {blogContent.description}
                </motion.p>
                <motion.p 
                  className="text-sm text-indigo-500 italic"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  &quot;I am passionate about creating beautiful and functional websites and applications.&quot;
                </motion.p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm font-medium text-indigo-600">{currentDate}</span>
                <motion.button 
                  className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg text-sm transition-all hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToAboutSection} // Scrolls to #about section on click
                >
                  Read More
                </motion.button>
              </div>
            </div>
          </motion.div>
        </FollowerPointerCard>
      </motion.div>
    </div>
  );
}

const blogContent = {
  slug: "web-app-developer-ui-ux-designer",
  author: "Hitendra Singh Choudhary",
  title: "Web/App Developer || UI/UX Designer",
  description:
    "Hello Evryone, I am Hitendra Singh Choudhary, a Web/App Developer and UI/UX Designer. I am passionate about creating beautiful and functional websites and applications. I have experience in building responsive and user-friendly websites using modern technologies like React, Next.js, Tailwind CSS, and more.",
  image: "/hitendra.png",
  authorAvatar: "/me.jpg",
};

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <motion.div 
    className="flex items-center space-x-3 p-2 bg-white bg-opacity-90 backdrop-blur-sm rounded-full shadow-lg"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ type: "spring", stiffness: 260, damping: 20 }}
  >
    <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-indigo-300">
      <Image
        src={avatar}
        alt={`Avatar of ${title}`}
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
    <p className="font-semibold text-indigo-900 text-sm">{title}</p>
  </motion.div>
);
