import React from "react";
import Header from "../../components/About/AboutUsHeader";

const AboutUs = () => {
  return (
    <div className=" bg-green-50 from-[#ceedfa] to-[#cee1fa] min-h-screen">
      <Header />
      <section className="py-12 md:py-20 bg-yellow-50 h-[90vh]">
        <p className="text-5xl font-bold text-yellow-500 text-center mt-4">
          Our Mission
        </p>
        <div class="flex flex-col md:flex-row justify-between p-8">
          <div class="md:w-1/2  p-14">
            <p class="text-3xl text-gray-500 font-serif">
              At <span className="text-green-500">VigyBag,</span> we believe in
              empowering local artisans and connecting them with the rest of the
              country. Our mission is to provide a platform where villagers and
              rural artisans can showcase their eco-friendly products to a
              nationwide audience. We are committed to fostering sustainability
              by bringing the best of rural craftsmanship to your doorstep.
            </p>
          </div>

          <div class="md:w-1/2 p-4">
            <div class="aspect-w-16 aspect-h-9 border-8 border-green-600 rounded-md ">
              <iframe
                width="685"
                height="415"
                src="https://www.youtube.com/embed/F9aJdlUGd08?si=5BOrQptz9R-lc_su"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-emerald-50 h-[90vh]">
        <p className="text-5xl font-bold text-orange-300 text-center mt-4">
          Our Story
        </p>
        <div class="flex flex-col md:flex-row justify-between p-8">
          <div class="md:w-1/2 p-4">
            <div class="aspect-w-16 aspect-h-9 border-8 border-green-600 ">
              <img
                style={{
                  width: "685px",
                  height: "415px",
                }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL7fZywYDSrKqUlXeHrZnJd9VL0sVcx2q7Yg&s"
                alt=""
              />
            </div>
          </div>
          <div class="md:w-1/2  p-14">
            <p class="text-2xl text-gray-500 font-serif">
              <span className="text-green-500">VigyBag,</span> was born out of a
              desire to bridge the gap between rural artisans and urban
              consumers. We saw the potential in the handcrafted, eco-friendly
              products being created in villages across India and wanted to
              provide these talented individuals with the tools and platform
              they need to succeed. By harnessing the power of e-commerce, we
              are making these unique products accessible to everyone, no matter
              where they live.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-yellow-50 h-[90vh]">
        <p className="text-5xl font-bold text-yellow-500 text-center mt-4">
          Why Choose <span className="text-green-500">VigyBag</span>?
        </p>
        <div class="flex flex-col md:flex-row justify-between p-8">
          <div class="md:w-1/2  p-14">
            <p className="font-bold text-2xl text-teal-300">💡Empowerment:</p>
            <p class="text-xl text-gray-500 font-serif">
              Every purchase on <span className="text-green-500">VigyBag,</span>{" "}
              directly supports local artisans and their communities. By
              choosing <span className="text-green-500">VigyBag,</span> you're
              not just buying a product – you're contributing to a more
              sustainable and equitable world.
            </p>
            <br />
            <p className="font-bold text-2xl text-green-400">
              🌱 Sustainability:
            </p>
            <p class="text-xl text-gray-500 font-serif">
              We prioritize products that are made with the environment in mind.
              From natural materials to eco-friendly packaging, our goal is to
              reduce the carbon footprint associated with shopping.
            </p>
            <br />
            <p className="font-bold text-2xl text-orange-400">
              🔒 Authenticity
            </p>
            <p class="text-xl text-gray-500 font-serif">
              Our products are handcrafted with care, carrying the rich heritage
              and culture of the artisans who make them. Every item tells a
              story of tradition, skill, and passion.
            </p>
          </div>

          <div class="md:w-1/2 p-4">
            <div class="aspect-w-16 aspect-h-9 border-8 border-green-600 rounded-md ">
              <img
                style={{
                  width: "685px",
                  height: "415px",
                }}
                src="https://i.ytimg.com/vi/F9aJdlUGd08/sddefault.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-emerald-50 h-[120vh]">
        <p className="text-5xl font-bold text-yellow-500 text-center mt-4">
          Our Values
        </p>
        <div class="flex flex-col md:flex-row justify-between p-8">
          <div class="md:w-1/2 p-4">
            <div class="aspect-w-16 aspect-h-9 border-8 border-green-600 rounded-md ">
              <img
                style={{
                  width: "685px",
                  height: "415px",
                }}
                src="https://www.vigybag.com/assets/Storage-Baskets-CsXAtQTR.png"
                alt=""
              />
            </div>
          </div>
          <div class="md:w-1/2  p-14">
            <p className="font-bold text-2xl text-teal-300">🧑‍🤝‍🧑Community</p>
            <p class="text-xl text-gray-500 font-serif">
              We are deeply rooted in the communities we serve. By partnering
              with artisans and small-scale producers, we create a network of
              support that benefits everyone involved.
            </p>
            <br />
            <p className="font-bold text-2xl text-green-400">
              🌱 Sustainability:
            </p>
            <p class="text-xl text-gray-500 font-serif">
              We are committed to promoting sustainable practices in everything
              we do, from the products we offer to the way we operate.
            </p>
            <br />
            <p className="font-bold text-2xl text-orange-400">🔍Transparency</p>
            <p class="text-xl text-gray-500 font-serif">
              We believe in being open and honest with our customers. You can
              trust that when you shop with
              <span className="text-green-500">VigyBag</span> you’re getting
              authentic, high-quality products made with care.
            </p>
            <br />
            <p className="font-bold text-2xl text-orange-400">
              💕 Join the Vigy Family
            </p>
            <p class="text-xl text-gray-500 font-serif">
              We invite you to become a part of the{" "}
              <span className="text-green-500">VigyBag</span> community. Whether
              you're a consumer looking for unique, eco-friendly products or an
              artisan wanting to reach a wider audience,{" "}
              <span className="text-green-500">VigyBag</span>
              is here for you. Together, we can create a sustainable future that
              benefits everyone.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
