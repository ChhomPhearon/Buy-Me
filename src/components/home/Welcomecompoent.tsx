import { Button } from "@nextui-org/react";
import Image from "next/image";

const SlideSection = () => {
  return (
    <section
      data-aos="zoom-in-up"
      className="bg-white max-sm:justify-center mt-5 lg:mt-10 flex flex-col lg:flex-row justify-between items-center py-8 px-4 md:px-12 lg:px-24"
    >

      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h1 className="text-2xl lg:text-4xl font-semibold leading-normal text-gray-800">
          BUY ME WITH ME NOW OR NEVER 
        </h1>
        <h5 className="text-base lg:text-xl mt-4 lg:mt-5 font-normal text-gray-600">
        Welcome to BUY ME, where your ultimate shopping experience begins. Dive into a world of endless possibilities as we redefine the way you shop online. With an extensive range of products, unbeatable deals, and a seamless shopping experience, BUY ME is your one-stop destination for all your shopping needs.


        </h5>
      </div>

      {/* Slide Image */}
      <div className=" lg:w-1/2 lg:pl-8">
        <Image
          className="object-cover w-full h-96"
          src="/assets/homeimage.png"
          alt="svg"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default SlideSection;