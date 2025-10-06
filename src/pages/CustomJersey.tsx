import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ContactModal from "@/components/ContactModal";
import { Paintbrush, Shirt } from "lucide-react";

const CustomJersey = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 pt-28 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in space-y-6">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Paintbrush className="h-12 w-12 text-primary animate-float" />
              <Shirt className="h-16 w-16 text-primary" />
              <Paintbrush className="h-12 w-12 text-primary animate-float" style={{ animationDelay: "1.5s" }} />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold">
              Design Your Own <span className="bg-gradient-primary bg-clip-text text-transparent">Jersey</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Send us your own design or photo, and we'll make your dream jersey a reality. 
              Our expert team will bring your vision to life with premium quality materials.
            </p>
          </div>

          <div className="bg-gradient-card backdrop-blur-sm rounded-2xl border border-border/50 p-8 md:p-12 space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">How It Works</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="font-semibold">Share Your Design</h3>
                  <p className="text-sm text-muted-foreground">
                    Send us your custom design, logo, or photo
                  </p>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <h3 className="font-semibold">We Create</h3>
                  <p className="text-sm text-muted-foreground">
                    Our team crafts your jersey with care
                  </p>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="font-semibold">You Receive</h3>
                  <p className="text-sm text-muted-foreground">
                    Get your unique jersey delivered
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-border/50">
              <h2 className="text-2xl font-bold mb-6 text-center">Ready to Create?</h2>
              <p className="text-center text-muted-foreground mb-6">
                Contact us through WhatsApp or Email to start designing your custom jersey
              </p>
              <div className="flex justify-center">
                <Button
                  onClick={() => setShowContactModal(true)}
                  variant="hero"
                  size="xl"
                  className="animate-glow-pulse"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border/30">
              <h3 className="font-semibold text-lg mb-3">Premium Quality</h3>
              <p className="text-muted-foreground">
                We use only the finest materials to ensure your custom jersey looks and feels professional.
              </p>
            </div>
            
            <div className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border/30">
              <h3 className="font-semibold text-lg mb-3">Fast Turnaround</h3>
              <p className="text-muted-foreground">
                Quick production and delivery to get your custom jersey to you as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </main>

      <ContactModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
      />

      <Footer />
    </div>
  );
};

export default CustomJersey;
