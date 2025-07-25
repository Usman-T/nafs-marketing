"use client";
import { useState } from "react";
import { ctaDetails } from "@/data/cta";
import PlayStoreButton from "./PlayStoreButton";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
} from "@/components/dialog";
import { PiEnvelopeSimple, PiCheckCircle, PiWarning } from "react-icons/pi";

const CTA: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const subscribe = async () => {
    if (!email || !email.includes("@")) return;

    try {
      setStatus("loading");
      // Replace this with your real API route
      const res = await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      subscribe();
    }
  };

  return (
    <section id="cta" className="my-20 px-5">
      <div className="relative mx-auto max-w-5xl">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-20 rounded-3xl bg-gradient-to-br from-[#fe8019]/10 via-transparent to-[#fabd2f]/5"></div>
        <div className="absolute inset-0 -z-10 rounded-3xl bg-[radial-gradient(ellipse_800px_400px_at_center,#282828_0%,transparent_70%)]"></div>

        {/* Main Card */}
        <div className="relative overflow-hidden rounded-3xl border border-[#504945] bg-gradient-to-br from-[#1d2021] via-[#282828] to-[#1d2021] p-10 sm:p-16 shadow-2xl backdrop-blur-xl">
          {/* Subtle inner glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#fe8019]/5 via-transparent to-transparent pointer-events-none"></div>

          {/* Floating elements for visual interest */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#fe8019]/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#fabd2f]/5 rounded-full blur-3xl"></div>

          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-[#ebdbb2] via-[#fbf1c7] to-[#ebdbb2] bg-clip-text text-transparent">
                {ctaDetails.heading}
              </span>
            </h2>

            <p className="mt-6 text-[#a89984] text-lg max-w-2xl mx-auto leading-relaxed">
              {ctaDetails.subheading}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="group">
                    <div className="transform transition-all duration-300 group-hover:scale-105">
                      <PlayStoreButton dark />
                    </div>
                  </button>
                </DialogTrigger>

                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Become a tester</DialogTitle>
                    <DialogDescription>
                      Enter your email and get early access to the app and its features (no spam)
                    </DialogDescription>
                  </DialogHeader>

                  <div className="mt-6 space-y-4">
                    <div>
                      <label className="text-[#ebdbb2] text-sm font-medium mb-2 block">
                        Email address
                      </label>

                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#fe8019] to-[#fabd2f] rounded-lg opacity-0 group-focus-within:opacity-20 transition-opacity duration-300 blur-sm"></div>

                        <div className="relative flex items-center border border-[#504945] rounded-lg overflow-hidden bg-[#282828] transition-all duration-200 focus-within:border-[#fe8019]/50 focus-within:shadow-lg focus-within:shadow-[#fe8019]/10">
                          <div className="px-4 text-[#fe8019] flex-shrink-0">
                            <PiEnvelopeSimple size={18} />
                          </div>

                          <input
                            type="email"
                            className="flex-1 py-3 px-2 bg-transparent text-[#ebdbb2] placeholder-[#a89984]/70 focus:outline-none text-sm"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onKeyPress={handleKeyPress}
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={subscribe}
                      disabled={status === "loading" || !email}
                      className="relative w-full py-3 rounded-lg font-semibold text-sm transition-all duration-300 overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {/* Button background with gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#fe8019] to-[#fabd2f] transition-all duration-300 group-hover:scale-105"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#fabd2f] to-[#fe8019] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Button content */}
                      <span className="relative z-10 text-[#1d2021] flex items-center justify-center gap-2">
                        {status === "loading" && (
                          <div className="w-4 h-4 border-2 border-[#1d2021]/30 border-t-[#1d2021] rounded-full animate-spin"></div>
                        )}
                        {status === "success" && <PiCheckCircle size={16} />}
                        {status === "error" && <PiWarning size={16} />}

                        {status === "loading"
                          ? "Subscribing..."
                          : status === "success"
                          ? "Subscribed! 🎉"
                          : status === "error"
                          ? "Failed. Try again"
                          : "Get Early Access"}
                      </span>
                    </button>

                    {/* Status message */}
                    {status === "success" && (
                      <p className="text-[#b8bb26] text-xs text-center animate-fade-in">
                        Thanks! We'll keep you updated on our progress.
                      </p>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
