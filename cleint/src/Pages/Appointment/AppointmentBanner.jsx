import React from "react";
import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
      }}
      className="container mx-auto"
    >
      <div className="flex items-center justify-center gap-12 flex-col lg:flex-row-reverse ">
        <img
          src={chair}
          className=" lg:w-[80%] h-[400px] object-cover w-full px-5 rounded-lg shadow-2xl  "
          alt="Dentist Chair"
        />
        <div>
          <DayPicker mode="single" selected={date} onDayClick={setDate} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
