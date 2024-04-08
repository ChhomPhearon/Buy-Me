import { Button } from "@nextui-org/react";
import Image from "next/image";

const Welcomecompoent = () => {
  return (
    <section
      data-aos="zoom-in-up"
      className="bg-white max-sm:justify-center mt-8 lg:mt-10 flex flex-col lg:flex-row justify-between items-center py-8 px-4 md:px-12 lg:px-24"
    >

      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h1 className="text-2xl lg:text-4xl font-semibold leading-normal text-gray-800">
          WELCOME TO BUY ME OFFICAL WEBSITE
        </h1>
        <h5 className="text-base lg:text-xl mt-4 lg:mt-5 font-normal text-gray-600">
        At BUY ME, we believe that shopping should be both enjoyable and affordable. That is  why we are  committed to offering unbeatable deals and discounts on a wide range of products. Whether you are hunting for seasonal sales, clearance offers, or exclusive promotions, you will find incredible savings at BUY ME.

        </h5>
      </div>

      {/* Slide Image */}
      <div className=" lg:w-1/2 lg:pl-8">
        <Image
          className="object-cover w-full h-96"
          src="/assets/Welcome.png"
          alt="svg"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Welcomecompoent;