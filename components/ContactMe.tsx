import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:ivankadimov8@gmail.com?subject=${formData.subject}&body=Hi, my name is
     ${formData.name}.${formData.message} (${formData.email})`;
  };

  return (
    <div className="relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly">
      <h3 className="absolute top-14 uppercase tracking-[20px] text-gray-400 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col py-5 space-y-2 sm:space-y-3 2xl:space-y-5 sm:py-8 2xl:py-16 ">
        <h4 className="mb-5 text-xl font-semibold text-center 2xl:mb-10 sm:text-2xl ">
        I got just what you need! {" "}
          <span className="decoration-[#ed714f]/50 underline">
            {" "} Lets talk😊
             </span> 
        </h4>

        <div className="space-y-12 sm:space-y-3 2xl:space-y-15">
          <div className="flex items-center justify-center space-x-15">
            <PhoneIcon className="text-[#ed714f] h-4 sm:h-6 2xl:h-7 sm:w-6 2xl:w-7 w-7 animate-pulse" />
            <p className="text-base sm:text-xl 2xl:text-2xl">+18502923555</p>
          </div>

          <div className="flex items-center justify-center space-x-15">
            <EnvelopeIcon className="text-[#ed714f] h-4 w-7 animate-pulse" />
            <p className="text-base sm:text-xl 2lx:text-2xl">ivankadimov8@gmail.com</p>
          </div>
          <div className="flex items-center justify-center space-x-15">
            <MapPinIcon className="text-[#ed714f] h-7  sm:h-6 2xl:h-7 sm:w-6 2xl:w-7  w-7 animate-pulse" />
            <p className="text-base sm:text-xl 2lx:text-2xl">Toronto, Canada</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col mx-auto space-y-4 w-fit"
        >
          <div className="flex space-x-4">
            <input
              {...register("name")}
              placeholder="Name"
              type="text"
              className="contactInput"
            />
            <input
              {...register("email")}
              placeholder="Email"
              type="email"
              className="contactInput"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            type="text"
            className="contactInput"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#ed714f] py-4 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;