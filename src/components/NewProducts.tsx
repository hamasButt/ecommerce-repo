"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useSearchParams } from "next/navigation";

const NewProducts = () => {
  const [data, setData] = useState<any>(null);
  const [data2, setData2] = useState<any>(null);
  const params = useSearchParams();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setData(data.products);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data === undefined) return;
    if(params.get("category")==null){
      setData2(data)
      return
    }

    let newData = data
      ?.map((it: any) => {
        if (it.category === params.get("category")) {
          return it;
        }else{}
      })
      .filter((iu:any) => iu != undefined);
    console.log({ newData });
    setData2(newData);
  }, [params.get("category"), data?.length]);
  console.log({ data });

  return (
    <div>
      <div className="container pt-16">
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {data2?.map((item: any, index: number) => (
            <ProductCard
              key={index}
              id={item.id}
              discount={item.discountPercentage}
              img={item.thumbnail}
              title={item.title}
              rating={Math.floor(item.rating)}
              price={item.price}
              stock={item.stock}
              brand={item.brand}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
