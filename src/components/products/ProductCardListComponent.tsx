"use client"

import { useEffect, useState } from "react"
import EcommerceProductCard, { ProductInfer } from "./ProductCardComponent";
import Link from "next/link";
import useSWR from 'swr'
import { LoadingComponent } from "../loading/LoadingComponent";

const fetcher = (url:string) => fetch(url).
then((r) => r.json())
export default function ProductCardListComponent() {

  const {data:products, error, isLoading} = useSWR(
    `${process.env.NEXT_PUBLIC_FAKESTORE_API}/products`,
    fetcher );
  
  if (error) return <div>failed to load</div>
  if (isLoading) {
     return <LoadingComponent/>
  }

  return (
    <section className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 gap-4 justify-center mx-auto">
      {
        products?.map(({image,title,description,price,id}:ProductInfer)=> (
          isLoading? (
            <LoadingComponent key={id}/>
          ):(
            <Link key={id} href={`product/${id}`}>
            <EcommerceProductCard 
            image={image} 
            title={title} 
            description={description} 
            price={price}/>
          </Link>
          )
        ))
      }
    </section>
  )
}
