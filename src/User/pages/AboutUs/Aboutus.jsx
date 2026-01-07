import React, { useState, useEffect } from "react";
import delivery_boy from "../../../assets/delivery man.jpg";
import selling from "../../../assets/selling.jpg";
import inov from "../../../assets/6417880.jpg";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gradient-to-br from-emerald-50 via-blue-50 to-teal-50 min-h-screen">
      {/* Mission Section */}
      <section className="py-12 md:py-20 min-h-screen flex flex-col justify-center">
        <div
          id="mission-title"
          data-animate
          className={`transition-all duration-1000 ${
            isVisible["mission-title"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="md:text-6xl text-4xl font-bold text-emerald-700 text-center mb-12 tracking-tight">
            Our Mission
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 px-8 max-w-7xl mx-auto">
          <div
            id="mission-text"
            data-animate
            className={`md:w-1/2 transition-all duration-1000 delay-200 ${
              isVisible["mission-text"]
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-emerald-100 hover:shadow-2xl transition-shadow duration-300">
              <p className="md:text-2xl text-lg text-slate-700 leading-relaxed">
                At <span className="text-green-700 font-bold text-2xl md:text-3xl">VigyBag</span>, we
                believe in empowering local artisans and connecting them with the
                rest of the country. Our mission is to provide a platform where
                villagers and rural artisans can showcase their eco-friendly
                products to a nationwide audience. We are committed to fostering
                sustainability by bringing the best of rural craftsmanship to your
                doorstep.
              </p>
            </div>
          </div>

          <div
            id="mission-video"
            data-animate
            className={`md:w-1/2 transition-all duration-1000 delay-300 ${
              isVisible["mission-video"]
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="w-full max-w-2xl mx-auto">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-green-600 hover:border-green-500 transition-all duration-300 hover:scale-105">
                <div className="relative overflow-hidden" style={{ paddingTop: "56.25%" }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/F9aJdlUGd08?autoplay=1&loop=1&playlist=F9aJdlUGd08&mute=1"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    loading="lazy"
                    aria-label="About VigyBag"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-emerald-300 to-transparent opacity-50"></div>

      {/* Story Section */}
      <section className="py-12 md:py-20 min-h-screen flex flex-col justify-center">
        <div
          id="story-title"
          data-animate
          className={`transition-all duration-1000 ${
            isVisible["story-title"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="md:text-6xl text-4xl font-bold text-emerald-800 text-center mb-12 tracking-tight">
            Our Story
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 px-8 max-w-7xl mx-auto">
          <div
            id="story-image"
            data-animate
            className={`md:w-1/2 transition-all duration-1000 delay-200 ${
              isVisible["story-image"]
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <img
                className="w-full h-auto object-cover"
                src={delivery_boy}
                alt="Delivery Service"
                style={{ maxHeight: "515px" }}
              />
            </div>
          </div>

          <div
            id="story-text"
            data-animate
            className={`md:w-1/2 transition-all duration-1000 delay-300 ${
              isVisible["story-text"]
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-emerald-100 hover:shadow-2xl transition-shadow duration-300">
              <p className="md:text-xl text-lg text-slate-700 leading-relaxed">
                <span className="text-green-700 font-bold text-2xl">VigyBag</span> was
                born out of a desire to bridge the gap between rural artisans and
                urban consumers. We saw the potential in the handcrafted,
                eco-friendly products being created in villages across India and
                wanted to provide these talented individuals with the tools and
                platform they need to succeed. By harnessing the power of
                e-commerce, we are making these unique products accessible to
                everyone, no matter where they live.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-50"></div>

      {/* Why Choose Section */}
      <section className="py-12 md:py-20 min-h-screen flex flex-col justify-center">
        <div
          id="choose-title"
          data-animate
          className={`transition-all duration-1000 ${
            isVisible["choose-title"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="md:text-6xl text-4xl font-bold text-center mb-12 tracking-tight">
            <span className="text-yellow-500">Why Choose </span>
            <span className="text-green-700">VigyBag</span>
            <span className="text-yellow-500">?</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 px-8 max-w-7xl mx-auto">
          <div
            id="choose-text"
            data-animate
            className={`md:w-1/2 transition-all duration-1000 delay-200 ${
              isVisible["choose-text"]
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-orange-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-orange-500">
                <h3 className="font-bold text-2xl text-orange-500 mb-3">Empowerment</h3>
                <p className="md:text-lg text-sm text-slate-700 leading-relaxed">
                  Every purchase on <span className="text-green-700 font-bold">VigyBag</span> directly supports local artisans and their communities. By choosing <span className="text-green-700 font-bold">VigyBag</span>, you're not just buying a product – you're contributing to a more sustainable and equitable world.
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-500">
                <h3 className="font-bold text-2xl text-green-600 mb-3">Sustainability</h3>
                <p className="md:text-lg text-sm text-slate-700 leading-relaxed">
                  We prioritize products that are made with the environment in mind. From natural materials to eco-friendly packaging, our goal is to reduce the carbon footprint associated with shopping.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
                <h3 className="font-bold text-2xl text-blue-600 mb-3">Authenticity</h3>
                <p className="md:text-lg text-sm text-slate-700 leading-relaxed">
                  Our products are handcrafted with care, carrying the rich heritage and culture of the artisans who make them. Every item tells a story of tradition, skill, and passion.
                </p>
              </div>
            </div>
          </div>

          <div
            id="choose-image"
            data-animate
            className={`md:w-1/2 transition-all duration-1000 delay-300 ${
              isVisible["choose-image"]
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <img
                className="w-full h-auto object-cover"
                src={selling}
                alt="Artisan Selling Products"
                style={{ maxHeight: "515px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-emerald-300 to-transparent opacity-50"></div>

      {/* Values Section */}
      <section className="py-12 md:py-20 min-h-screen flex flex-col justify-center">
        <div
          id="values-title"
          data-animate
          className={`transition-all duration-1000 ${
            isVisible["values-title"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="md:text-6xl text-4xl font-bold text-emerald-800 text-center mb-12 tracking-tight">
            Our Values
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 px-8 max-w-7xl mx-auto">
          <div
            id="values-image"
            data-animate
            className={`md:w-1/2 transition-all duration-1000 delay-200 ${
              isVisible["values-image"]
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <img
                className="w-full h-auto object-cover"
                src={inov}
                alt="Community Values"
                style={{ maxHeight: "580px" }}
              />
            </div>
          </div>

          <div
            id="values-text"
            data-animate
            className={`md:w-1/2 transition-all duration-1000 delay-300 ${
              isVisible["values-text"]
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500">
                <h3 className="font-bold text-2xl text-purple-600 mb-3">Community</h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  We are deeply rooted in the communities we serve. By partnering with artisans and small-scale producers, we create a network of support that benefits everyone involved.
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-500">
                <h3 className="font-bold text-2xl text-green-600 mb-3">Sustainability</h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  We are committed to promoting sustainable practices in everything we do, from the products we offer to the way we operate.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
                <h3 className="font-bold text-2xl text-blue-600 mb-3">Transparency</h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  We believe in being open and honest with our customers. You can trust that when you shop with <span className="text-green-700 font-bold">VigyBag</span> you're getting authentic, high-quality products made with care.
                </p>
              </div>

              <div className="bg-gradient-to-r from-pink-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-pink-500">
                <h3 className="font-bold text-2xl text-pink-600 mb-3">Join the Vigy Family</h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  We invite you to become a part of the <span className="text-green-700 font-bold">VigyBag</span> community. Whether you're a consumer looking for unique, eco-friendly products or an artisan wanting to reach a wider audience, <span className="text-green-700 font-bold">VigyBag</span> is here for you. Together, we can create a sustainable future that benefits everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
