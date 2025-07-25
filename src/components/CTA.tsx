import { ctaDetails } from "@/data/cta";
import PlayStoreButton from "./PlayStoreButton";

const CTA: React.FC = () => {
  return (
    <section id="cta" className="my-20 px-5">
      <div className="relative z-10 mx-auto max-w-5xl rounded-3xl p-10 sm:p-16 bg-[#1d2021] border border-[#3c3836] shadow-xl">
        <div className="absolute inset-0 -z-10 rounded-3xl bg-[radial-gradient(circle_600px_at_center,#282828_0%,transparent_100%)]"></div>
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#ebdbb2]">
            {ctaDetails.heading}
          </h2>
          <p className="mt-4 text-[#a89984] text-lg max-w-2xl mx-auto">
            {ctaDetails.subheading}
          </p>
          <div className="mt-8 flex justify-center">
            <PlayStoreButton dark />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
