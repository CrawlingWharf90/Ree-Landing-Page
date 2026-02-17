import Hero from "@/components/Hero";
import Team from "@/components/Team";
import ProjectFocus from "@/components/ProjectFocus";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-[#4f60f0]/30">
      <Hero />
      
      <div className="relative z-10 bg-background shadow-[0_-20px_40px_rgba(0,0,0,0.1)] rounded-t-[3rem] -mt-24 pt-12">
        <ProjectFocus />
        <Team />
        <Timeline />
        
        <footer className="py-12 text-center text-muted-foreground border-t border-border/50">
          <p>© 2026 REE Project. HCI Course.</p>
        </footer>
      </div>
    </div>
  );
}
