import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JerseyCard from "@/components/JerseyCard";
import jerseyData from "@/data/jerseys.json";

const Shop = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 pt-28 pb-20">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Shop <span className="bg-gradient-primary bg-clip-text text-transparent">All Jerseys</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Browse our complete collection of premium football jerseys
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {jerseyData.map((jersey) => (
            <JerseyCard key={jersey.id} jersey={jersey} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
