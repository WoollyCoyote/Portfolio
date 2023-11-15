import Contact from "@/components/contact";
import Portfolio from "@/components/portfolio/portfolio";
import Landing from "@/components/landing";
export default function Home() {

  return (
    <main>
      <div className="parallax">
        
        <Landing/>
        <div id="portfolio" className="portfolio center">
   <Portfolio/>
        </div>
        <div id="contact" className="contact center">
          <Contact />
          
        </div>
        </div>
      
    </main>
  );
}
