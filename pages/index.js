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
   <div className="fixed z-[1000] right-[50px] bottom-[50px] w-[100px] h-[100px] bg-[#cccccc] rounded-[50%] p-[10px]">
   <div className=" overflow-hidden spine ">
   <svg
  className="transform-origin-center-center"
  style={{
    width: "100%",
    height: "100%",
    position: "absolute",
    inset: 0,
    transformOrigin: "center center",
    willChange: "transform",
    transform: "rotate(353.34deg)"
  }}
  viewBox="0 0 100 100"
  overflow="visible"
>
  <path
    id="curve-wnxkz4"
    d="M 0 50 L 0 50 A 1 1 0 0 1 100 50 L 100 50 L 100 50 A 1 1 0 0 1 0 50 L 0 50"
    strokeWidth="none"
    fill="transparent"
  />
  <text>
    <textPath
      href="#curve-wnxkz4"
      startOffset={0}
      dominantBaseline="Hanging"
      style={{
        fontSize: 10,
        fontFamily: "MANROPE",
        fontWeight: 700,
        wordSpacing: 0,
        letterSpacing: "6.1px",
        fill:
          'var(--token-b882507f-00b1-4ceb-a2ff-bc04610c539e, rgba(0, 0, 0, 0.8)) /* {"name":"Primary inverted"} */'
      }}
    >
      SUBSCRIBE TO CREATIVE POST{/* */}
    </textPath>
  </text>
</svg>
   </div>

   </div>
   </div>
    </div>
  )
}
