'use client';
import CircularText from "@/app/components/circulartext/CircularText";
import GlitchText from "@/app/components/GlitchText";
import GradientText from "@/app/components/GradientText";
import ScrollVelocity from "@/app/components/scrollvelocity/ScrollVelocity";
import Silk from "@/app/components/Silk";


export default function Hero() {
  return (

  

    <div className="hero min-h-[100vh] bg-base-200">
      <CircularText
  text="ZAFROS*ESSENCE*OF*LUXARY*"
  onHover="speedUp"
  spinDuration={20}
  className="z-10 absolute -bottom-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-primary font-bold hero-title"
/>
         <div className="hero-content text-center z-20">
          <div className="max-w-max">
           <GlitchText
  speed={0.4}
  enableShadows={true}
  enableOnHover={true}
  className='hero-title text-9xl uppercase'
>
zafros
</GlitchText>
            <p className="py-6">
              Long-lasting, alcohol-free scents made for you.
            </p>
            <button className="btn btn-primary">Shop Now</button>
          </div>
        </div>
      <Silk>
     
      </Silk>
    </div>
  );
}
