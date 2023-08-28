import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Section5 from "@/components/Section5";


export default function Home() {
  return (
    <div className="bg-black text-white ">
   <Header/>
   <div className=" pt-[130px]">
   <Hero/>
   <Section1/>
   <Section2/>
   <Section3/>
   <Section4/>
   <Section5/>
   <Footer/>
   </div>
    </div>
  )
}
