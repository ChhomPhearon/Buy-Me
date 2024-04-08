import React from "react";
import styles from "./AboutUs.module.css"
import { Metadata } from "next";
import AboutUs from "./aboutus";
export const metadata: Metadata = {
  title: "About us",
  description: "This is about us shop",
  keywords: ['shop', 'ecommerce', 'sell']
};

const page = () => {
  console.log("This is about page")
  return (
    <><AboutUs/></>
  );
};

export default page;
