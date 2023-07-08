import React from "react";
import LegalDocuments from "@/components/legalDocuments/legalDocument";

export const metadata = {
  title: "Legal | Sodecx",
  description:
    "Legal Information: Access important legal information regarding our terms of service, privacy policy, and data protection practices. We are committed to transparency and ensuring compliance with applicable laws to protect your rights and provide a secure online experience. Stay informed about your rights and responsibilities by reviewing our legal documentation.",
};

const HomePage = async () => {
  return (
    <>
      <LegalDocuments />
    </>
  );
};

export default HomePage;
