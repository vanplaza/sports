import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JerseyCard from "@/components/JerseyCard";
import jerseyData from "@/data/jerseys.json";
import heroImage from "@/assets/hero-jersey.jpg";

const Home = () => {
  const featuredJerseys = jerseyData.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero backdrop-blur-sm" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="animate-fade-in space-y-6 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Wear Your Passion.
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Play in Style.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Premium football jerseys for passionate players and fans worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/sports/shop">
                  Shop Now
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button variant="glass" size="xl" asChild>
                <Link to="/sports/custom">
                  Custom Jersey
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Featured Jerseys */}
      <section className="py-12 sm:py-20 container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 animate-slide-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Featured Jerseys</h2>
            <Star className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
          </div>
          <p className="text-muted-foreground text-sm sm:text-lg">
            Handpicked selections from top clubs
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-8 max-w-5xl mx-auto">
          {featuredJerseys.map((jersey, index) => (
            <div 
              key={jersey.id} 
              className="animate-float"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <JerseyCard jersey={jersey} />
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/sports/shop">
              View All Jerseys
              <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">About VanPlaza</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are dedicated to bringing you the finest football jerseys from around the world. 
              Whether you're a passionate player or a devoted fan, VanPlaza ensures premium quality, 
              authentic designs, and unmatched style. Your football passion deserves the best.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/sports/about">
                Learn More
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
