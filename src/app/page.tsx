import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Container>
        <Benefits />

        <Stats />

        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
