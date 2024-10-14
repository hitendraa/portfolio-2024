import { FloatingDockDemo } from "@/components/custom/floatingDock";
import { FollowingPointerDemo } from "@/components/custom/myCard";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Cover } from "@/components/ui/cover";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export default function Home() {
  const words = [
    { text: "I", className: "text-blue-500 font-bold" },
    { text: "Am", className: "text-blue-500 font-bold" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <BackgroundBeamsWithCollision className="absolute inset-0 z-0" children={undefined} />
      
      <main className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-8 lg:p-16 min-h-screen">
        <section className="w-full lg:w-1/2 space-y-6 text-center lg:text-left" id="home">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="block mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Welcome to my
            </span>
            <span className="block mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-600">
              Portfolio
            </span>
          </h1>
          
          <div className="flex flex-col items-center lg:items-start space-y-2">
            <div className="text-2xl md:text-3xl font-semibold">
              <TypewriterEffectSmooth words={words} />
            </div>
            <Cover>
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">
                Hitendra Singh Choudhary
              </span>
            </Cover>
          </div>
        </section>
        
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
          <FollowingPointerDemo />
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
        <FloatingDockDemo />
      </div>
    </div>
  );
}