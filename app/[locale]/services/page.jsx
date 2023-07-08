import React from "react";
import ThreeStepAlignment from "@/components/services/ThreeStepAlignment";
import ChooseUsInfo from "@/components/services/ChooseUsInfo";
import HostingPlan from "@/components/services/HostingPlans";
import DescriptionPack from "@/components/services/descriptionPacks";
import CardShowCase from "@/components/mainpage/CardShowCase";

export const metadata = {
  title: "Services | Sodecx",
  description:
    "Sodecx. Hosting Services:Experience reliable and secure hosting solutions tailored to your needs. Our hosting services provide robust infrastructure, fast performance, and 24/7 technical support, ensuring your website or webshop is always accessible to your audience. Website Solutions: Unlock your online potential with our comprehensive website solutions. From stunning designs to seamless user experiences, we craft custom websites that reflect your brand identity, drive engagement, and help you achieve your business goals. Let us transform your vision into a captivating online presence.",
};

const ServicesPage = async () => {
  return (
    <>
      <ChooseUsInfo />
      <ThreeStepAlignment />
      <DescriptionPack />
      <CardShowCase />
      <HostingPlan />
    </>
  );
};

export default ServicesPage;
