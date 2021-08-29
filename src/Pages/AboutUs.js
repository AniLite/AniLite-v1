import React from "react";
import Footer from "../Components/Footer";
import { ReactComponent as Undraw_content_team } from "../Media/Undraw_content_team.svg";

export default function AboutUs() {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 mt-20">
        <div className="col-span-1" />
        <div className="col-span-10">
          <Undraw_content_team className="relative opacity-75 mb-5 left-2/4 transform -translate-x-1/2" />
          <p className="text-white font-quicksand text-5xl font-medium text-center ">
            Under Construction
          </p>
        </div>
        <div className="col-span-1" />
      </div>
      <Footer />
    </>
  );
}
