import AnimatedListDemo from "@/components/shadcn-space/animated-list/animated-list-01";
import { Metadata } from "next";

// static seo implement
export const metadata: Metadata = {
  title:'About',
  description: "This page showcase about the team, mission, and vision of our product."
};

export default function AboutPage() {
  return (
    <div className="text-red-500">
      ស្វាគមន៍មកកាន់មេរៀន ណិច Welcome To About Page ❤️
      <AnimatedListDemo/>

    </div>
  )
}
