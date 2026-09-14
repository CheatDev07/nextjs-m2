import type { Metadata } from "next";
import { Geist_Mono, Kantumruy_Pro, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Suspense } from "react";


const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const kantumruy = Kantumruy_Pro({
  variable: '--font-kantumruy-pro',
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | M2',
    default: 'M2'
  },
  keywords:'Skirt For Women, Trouser For Men, Kid Clothes, E-commerce, products, selling product',
  description: "M2 is the best platform for selling products in ecommerce modern website for Cambodian people.",
  openGraph: 
    {
      title:'M2' ,
      description: 'M2 is the best platform for selling products in ecommerce modern website for Cambodian people.',
      images: ['/M2_Thumbnail.png'],
    }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", kantumruy.variable, geistMono.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">
         <h1 className="bg-red-500">Navbar</h1>
        <Suspense fallback={<h1 className="bg-red-500 text-7xl text-center">Loading...</h1>}>
          {children}
        </Suspense>
        {/* <h2 className="bg-blue-500">Footer</h2> */}
      </body>
    </html>
  );
}
