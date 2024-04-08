import { Button } from "@nextui-org/react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section
      data-aos="zoom-in-up"
      className="bg-white max-sm:justify-center mt-5 lg:mt-10 flex flex-col lg:flex-row justify-between items-center py-8 px-4 md:px-12 lg:px-24"
    >

      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h1 className="text-2xl lg:text-4xl font-semibold leading-normal text-gray-800">
        ABOUT US 
        </h1>
        <h5 className="text-base lg:text-xl mt-4 lg:mt-5 font-normal text-gray-600">
        Welcome to BUY ME – your premier destination for online shopping. Founded with a passion for providing customers with a convenient, enjoyable, and secure shopping experience, BUY ME is dedicated to delivering excellence in every aspect of our service.

At BUY ME, we understand the importance of variety, which is why we offer an extensive range of products across numerous categories. From fashion and beauty to electronics, home essentials, and beyond, our diverse selection ensures that there is  something for everyone.

What sets BUY ME apart is our commitment to customer satisfaction. Our user-friendly website, intuitive navigation, and detailed product descriptions make shopping a breeze. Plus, our personalized recommendation system helps you discover new favorites tailored to your preferences.

We take pride in offering unbeatable deals and discounts, ensuring that you get the best value for your money. With fast and reliable delivery, secure payment options, and exceptional customer support, shopping at BUY ME is not just convenient – it is a delight.

Join the BUY ME community today and experience the joy of shopping without boundaries. Whether you are treating yourself or finding the perfect gift for a loved one, let BUY ME be your trusted partner in online shopping. Welcome to a world of endless possibilities with BUY ME.

        </h5>
      </div>

      {/* Slide Image */}
      <div className=" lg:w-1/2 lg:pl-8">
        <Image
          className="object-cover w-30 m-r-10"
          src="/assets/BUY ME.png"
          alt="svg"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
};

export default AboutUs;