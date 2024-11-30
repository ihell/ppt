import { useNavigation } from "@remix-run/react";
import React from "react";

const PageTransition: React.FC = () => {
  const navigation = useNavigation();

  return (
    <div
      className={`fixed inset-0 bg-white z-50 pointer-events-none transition-opacity ${
        navigation.state === "loading" ? "opacity-100" : "opacity-0"
      }`}
    />
  );
};

export default PageTransition;
