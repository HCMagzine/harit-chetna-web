import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BlogCard } from '@/components/BlogCard';
import { HeroSlider } from '@/components/HeroSlider';
import { Leaf, Microscope, Tractor, Droplets, Sprout, Sun } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSlider />

      {/* Daily Updates Section */}
      <section className="py-24 px-4 bg-white dark:bg-slate-950">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-100 dark:border-slate-800 pb-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 dark:text-emerald-400 mb-2">Daily Updates 📰🚜</h2>
              <p className="text-muted-foreground text-lg">Latest news, articles, and media from the agricultural world.</p>
            </div>
            <Link href="/archives">
              <Button variant="outline" className="text-emerald-700 border-emerald-200 hover:bg-emerald-50 rounded-full dark:text-emerald-400 dark:border-emerald-800 dark:hover:bg-emerald-950">Explore All Updates</Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <BlogCard 
              title="Modern Irrigation Techniques for Arid Regions"
              excerpt="Discover how new micro-irrigation systems are saving water and boosting crop yields in drought-prone areas."
              date="March 22, 2026"
              imageUrl="https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=800&auto=format&fit=crop&q=60"
            />
            <BlogCard 
              title="State Government Announces New Subsidies"
              excerpt="A comprehensive breakdown of the newly announced financial support schemes for small and marginal farmers."
              date="March 21, 2026"
              youtubeUrl="https://www.youtube.com/watch?v=1F2lYvj2BOM"
            />
            <BlogCard 
              title="The Rise of Precision Agriculture"
              excerpt="How IoT sensors and drones are transforming traditional farming into a data-driven science."
              date="March 20, 2026"
              imageUrl="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&auto=format&fit=crop&q=60"
            />
            <BlogCard 
              title="Organic Farming Success Story: Ram's Journey"
              excerpt="Watch how a local farmer transitioned to 100% organic farming and doubled his income in two years."
              date="March 19, 2026"
              youtubeUrl="https://www.youtube.com/watch?v=FjU_x1106pg"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 dark:text-emerald-400 mb-6 drop-shadow-sm">About Harit Chetna 🌿</h2>
            <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
          </div>
          <div className="prose prose-lg prose-emerald dark:prose-invert max-w-none text-muted-foreground space-y-7 leading-relaxed font-serif tracking-wide">
            <p className="indent-8">
              Harit Chetna is a peer-reviewed, open-access monthly magazine dedicated to creating awareness, promoting innovation, and strengthening communication in agriculture and rural development. It aims to bridge the critical gap between scientific knowledge, technological advancements, government initiatives, and the rural community that depends on agriculture for their livelihood.
            </p>
            <p className="indent-8">
              Despite the availability of cutting-edge agricultural technologies, innovative practices, and supportive government schemes, farmers and rural stakeholders often face challenges in accessing timely, accurate, and practical information. Limited awareness, lack of direct communication channels, and scattered information prevent the effective adoption of innovations, restricting productivity, income, and sustainable development. Harit Chetna addresses this critical gap by serving as a direct conduit between research, policy, and practice, ensuring that knowledge reaches the farmer’s doorstep and empowers rural communities.
            </p>
            <p className="indent-8">
              The magazine provides a platform for researchers, scientists, agripreneurs, progressive farmers, and start-ups to share innovations, success stories, and practical solutions. It covers a wide range of disciplines including agronomy, horticulture, soil science, plant breeding and protection, animal husbandry, fisheries, sericulture, irrigation science, agri-business management, biotechnology, environmental sciences, and allied sectors. Special emphasis is placed on sustainable farming practices, climate-resilient technologies, precision agriculture, post-harvest innovations, and government-supported schemes that can improve rural livelihoods.
            </p>
            <p className="font-semibold italic text-emerald-900 dark:text-emerald-100 text-xl border-l-4 border-emerald-500 pl-6 my-8">
              &ldquo;By bridging critical information gaps and promoting technology-driven solutions, Harit Chetna aspires to transform agriculture into a progressive, innovative, and sustainable sector, ensuring the prosperity and resilience of rural India.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Key Focus Areas (Agritech Vibe) */}
      <section className="py-24 px-4 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 dark:text-emerald-400 mb-6 drop-shadow-sm">Research & Innovation Focus</h2>
            <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Pioneering advancements across allied scientific sectors bridging the gap from lab to land.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Agronomy & Soil Science", icon: <Sprout className="w-8 h-8 text-emerald-600" />, desc: "Sustainable farming practices, soil health, and crop production management." },
              { title: "Precision Agriculture", icon: <Tractor className="w-8 h-8 text-emerald-600" />, desc: "Agri-tech, IoT sensors, drone mapping, and data-driven farming." },
              { title: "Bio-Technology", icon: <Microscope className="w-8 h-8 text-emerald-600" />, desc: "Plant breeding, genetics, and climate-resilient crop development." },
              { title: "Irrigation & Water Management", icon: <Droplets className="w-8 h-8 text-emerald-600" />, desc: "Micro-irrigation, hydrology, and water conservation technologies." },
              { title: "Horticulture", icon: <Leaf className="w-8 h-8 text-emerald-600" />, desc: "Fruit, vegetable cultivation, and post-harvest innovations." },
              { title: "Agri-Business & Climate", icon: <Sun className="w-8 h-8 text-emerald-600" />, desc: "Market linkages, supply chain, and climate-resilient practices." }
            ].map((area, idx) => (
              <Card key={idx} className="border-emerald-100 dark:border-emerald-900/40 hover:border-emerald-400 dark:hover:border-emerald-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group bg-slate-50/50 dark:bg-slate-900/50">
                <CardHeader>
                  <div className="bg-emerald-100 dark:bg-emerald-900/50 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800">
                    {area.icon}
                  </div>
                  <CardTitle className="text-xl text-emerald-900 dark:text-emerald-300 leading-snug">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{area.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-20 px-4 container mx-auto">
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-8 border-t-emerald-500 rounded-2xl overflow-hidden">
            <CardHeader className="bg-emerald-50/50 dark:bg-emerald-950/20 pb-6">
              <CardTitle className="text-2xl md:text-3xl text-emerald-800 dark:text-emerald-400 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                To empower farmers, rural youth, women, and the scientific community by delivering timely, science-based, and practical information. The magazine bridges knowledge gaps by sharing innovations, advancements, and updates in agriculture, environment, policies, and technologies, enabling informed decision-making and enhanced productivity.
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-8 border-t-emerald-600 rounded-2xl overflow-hidden">
            <CardHeader className="bg-emerald-50/50 dark:bg-emerald-950/20 pb-6">
              <CardTitle className="text-2xl md:text-3xl text-emerald-800 dark:text-emerald-400 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                To foster an informed, innovative, and self-reliant rural India, where access to knowledge, best practices, and government initiatives drives sustainable development, supporting the goals of a <strong className="text-emerald-700 dark:text-emerald-300">Viksit Bharat</strong> and <strong className="text-emerald-700 dark:text-emerald-300">Atmanirbhar Bharat</strong>.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-4 bg-emerald-900 text-white text-center rounded-t-[3rem] mt-10">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-14 drop-shadow-md">Core Values</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto">
            {['Knowledge sharing', 'Inclusivity', 'Innovation', 'Sustainability', 'Accessibility'].map((value, idx) => (
              <div key={idx} className="bg-emerald-800/80 backdrop-blur-md px-8 py-4 rounded-xl border border-emerald-600/50 font-medium text-lg hover:bg-emerald-700 hover:-translate-y-1 transition-all duration-300 shadow-sm cursor-default">
                {value}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
