import React from "react";
import TopCareerComponent from "@/components/careerComponents/TopCareerComponent";

export const metadata = {
  title: "Career | Sodecx",
  description:
    "Join Our Team: Exciting Career Opportunities in Web Solutions. Explore our career page to discover rewarding roles in web development, design, and more. Join us in shaping the digital landscape with innovative solutions.",
};

const HomePage = async () => {
  return (
    <>
      <TopCareerComponent />
    </>
  );
};

export default HomePage;
