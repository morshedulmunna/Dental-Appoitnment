import React from "react";
import chair from "../../assets/images/chair.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Banner = () => {
  return (
    <>
      <div className="lg:container md:container sm:container mx-auto mt-12 px-5">
        <div className="flex items-center flex-col lg:flex-row-reverse">
          <img className=" lg:w-1/2 rounded-lg shadow-2xl" src={chair} alt="" />
          <div className="lg:w-1/2 mt-5 lg:mt-0">
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6 pr-12">
              Are you looking for Best Dentist or Dentist near me or Best Dental
              Clinic in Uttara, Dhaka, Bangladesh? Yes, you are in the right
              place. LASER DENTAL is one of the most hi-tech dental clinics in
              Dhaka, serving all of your dental needs , with special emphasis on
              3D Dental Scanning
            </p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
