import { Suspense } from "react";
import LoadingComponent from "../loading";
import { ProductType } from "@/types/product";
import Link from "next/link";
import { Metadata } from "next";
import CardComponentHome from "@/components/cards/CardComponentHome";
import SlideSection from "@/components/home/Welcomecompoent";

async function fetchData() {
  const data = await fetch("https://store.istad.co/api/products/")
  const res = await data.json()
  return res.results;
}

export const metadata: Metadata = {
  title : "Product",
  description: "This is Product page shop",
  keywords: ['shop', 'ecommerce', 'sell']
};

export default async function Home() {
  const products = await fetchData()

  return (
    <>
     <SlideSection/>
      <div className="mt-10 flex justify-center flex-wrap gap-5">
        <Suspense fallback={<LoadingComponent />}>
          {products?.map((product: ProductType) => {
            return (
              <Link href={`/product/${product.id}`} key={product.id}>
                <CardComponentHome
                  name={product.name}
                  image={product.image} 
                  price={product.price}
                  products={""} map={""}/>
              </Link>
            );
          })}
        </Suspense>
      </div>
    </>
  );
}
