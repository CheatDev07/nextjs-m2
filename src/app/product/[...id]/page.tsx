import { ProductDetailComponent } from "@/components/products/ProductDetailComponent";

// // implement generate metadata
// import type { Metadata, ResolvingMetadata } from 'next'
 
// type Props = {
//   params: Promise<{ id: number }>
//   searchParams: Promise<{ [key: string]: string | string[] | undefined }>
// }
 
// export async function generateMetadata(
//   { params, searchParams }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   // read route params
//   const { id } = await params
 
//   // fetch data
//   const product = await fetch(`${process.env.FAKESTORE_API}/products/${id}`).then((res) => res.json())
 
//   // optionally access and extend (rather than replace) parent metadata
//   // const previousImages = (await parent).openGraph?.images || []
 
//   return {
//     title: product.title,
//     openGraph: {
//       title: product.title,
//       description: product.description,
//       images: [`${product.image}`],
//     },
//   }
// }

export default async function ProductDetailPage({
  params
}: {
  params:Promise<{id:number}>
}) {

  const {id} = await params;
  return (
    <div>
      <ProductDetailComponent id={id}/>
      {/* <h1>Product Slug: {slug}</h1> */}
    </div>
  )
}
