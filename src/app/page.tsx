import Hero from "@/components/Hero";
import NewProducts from "@/components/NewProducts";
import Link from "next/link";
// import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main>
      <Link href={'/products'}>
     <button className="p-4 bg-emerald-700 text-white my-6 mx-6">
     Go to products
     </button>
      </Link>
      {/* <Hero /> */}
      {/* <Testimonial /> */}
    </main>
  );
}
