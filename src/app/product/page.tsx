import ProductCardListComponent from "@/components/products/ProductCardListComponent";
import { Metadata } from "next";

// static seo implement
export const metadata: Metadata = {
  title:'Product',
  description: "This page showcase about the team, mission, and vision of our product.",
  openGraph: 
    {
      title:'Product' ,
      description: 'M2 is the best platform for selling products in ecommerce modern website for Cambodian people.',
      images: ['/M2_Thumbnail.png'],
    }
};

export default function PrductPage() {
  return (
    
     <ProductCardListComponent/>
    
  )
}
