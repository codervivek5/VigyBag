import React from "react";
import anv from "../../../assets/anniversary.webp";
import best from "../../../assets/best wishes.jpg";
import birthday from "../../../assets/birthday-gifts.webp";
import birthdaygift from "../../../assets/cake.jpg";
import cong from "../../../assets/clap.avif";
import farewell from "../../../assets/flowers.avif";
import generic from "../../../assets/gift.jpg";
import giftcard from "../../../assets/giftcard.jpg";
import more from "../../../assets/gifts.jpg";
import thank from "../../../assets/thank you.jpg";
import wedding from "../../../assets/wedding.webp";
import laddo from "../../../assets/laddo.png";

import Header from "../../components/About/GiftHeader";

const GiftCard = () => {
  const leadershipData = [
    {
      image: more,
      description: "More→",
    },
    {
      image: generic,
      description: "Generic→",
    },
    {
      image: birthdaygift,
      description: "Birthday→",
    },
    {
      image: best,
      description: "Best Wishes→",
    },
    {
      image: anv,
      description: "Anniversary→",
    },
    {
      image: birthday,
      description: "Birthday→",
    },
    {
      image: cong,
      description: "Congratulations→",
    },
    {
      image: farewell,
      description: "Farewell→",
    },
    {
      image: giftcard,
      description: "Gift Cards→",
    },
    {
      image: wedding,
      description: "Wedding→",
    },
    {
      image: thank,
      description: "Thank You→",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#fff0e3] to-white min-h-screen">
      {/* Header Section */}
      <Header />
      
      {/* Introduction Section */}
      <div className="p-9">
        <h1 className="font-bold text-gray-600 text-2xl">Gift Card Store</h1>
        <br />
        <p className="text-sm">
          Special occasions call for special gifts. Whether it’s a birthday or
          an anniversary, finding the right gift for your loved ones is always a
          difficult task. And after you get a gift, you have to hope that they
          like what you got. Well, there’s a simple solution to this conundrum -
          VigyBag Gift Cards Store.
        </p>
        <p className="text-sm">
          You can give VigyBag gift cards and Vouchers across multiple occasions
          to your friends or family and give them the chance to shop for
          whatever their heart desires. So, what are you waiting for? Get gift
          vouchers online on VigyBag, gift or redeem them and do more with this
          feature.
        </p>
        <br />
        <p className="text-sm">
          VigyBag Gift Card Store also has a wide range of Gift Cards from
          categories such as travel, jewellery, fashion, grocery, and apps &
          more. You can choose from a diverse range of denominations available
          or enter any preferred amount between Rs 25 to Rs 10,000.
        </p>
        <p className="text-sm">
          Bid adieu to gifting troubles, send online gift cards to your friends
          and family, bring a smile to their faces and make special moments even
          more special! The information you are reading has been last updated on
          05-Aug-24.
        </p>
      </div>

      {/* Cards for every Occasions Section */}
      <section className="py-10 bg-blue-50 md:py-20">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-16 text-gray-700">
          Cards for Every Occasion!
        </h2>
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {leadershipData.map((leader, index) => (
              <div
                key={index}
                className="bg-white flex flex-col items-center rounded-lg shadow-xl overflow-hidden transition-transform transform hover:scale-105">
                <div className="relative w-full h-[200px] md:h-[150px]">
                  <img
                    src={leader.image}
                    alt={leader.description}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="text-sm font-bold text-gray-900">
                    {leader.description}
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-green-300 to-transparent opacity-70"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Section */}
      <div className="p-9">
        <h1 className="font-bold text-gray-600 text-2xl">
          VigyBag Gift Cards - For Those Special Moments
        </h1>
        <br />
        <p className="text-sm">
          Gift Cards provide an ideal gifting solution for all occasions. In
          addition to the ease of gifting, it also provides a choice to the
          individual to buy something they want and when they want. If you can’t
          decide what to get someone, there’s a simple solution for this - Go to
          the Gift Cards Section on VigyBag. From something as small as fashion
          accessories and groceries to travel coupons and jewellery vouchers,
          gift vouchers offer a great way to let the recipient choose what they
          want. Gift Cards range from Rs. 50 to Rs. 10,000 and above. You can
          choose one as per your wish and the category you want to choose. You
          can gift them VigyBag Gift Cards or choose from 100+ brands like
          Myntra, Tanishq, Croma, Google Play, Big Bazar & others from
          categories such as Fashion, Travel, Jewellery, Grocery, Apps, and
          Subscriptions.
        </p>
        <br />
        <h1 className="font-bold text-gray-600 text-2xl">
          Buy VigyBag Gift Cards & Vouchers Online
        </h1>
        <br />
        <p className="text-sm">
          Purchasing gift vouchers online is very simple. At the product page,
          select the value of the gift card you would like to purchase, click on
          buy now and then enter the recipient details, address (if required),
          and 'proceed to pay’. You can then pay using a credit card, debit
          card, net banking & UPI. After the checkout process, you will receive
          an email with the Gift card details.
        </p>
        <br />
        <p className="text-sm">
          If you have irregular working hours and do not have time to do
          shopping, or if a special event is around the corner and you’re still
          wondering what to get, then VigyBag gift cards are the best option for
          you. Send your loved ones VigyBag vouchers and give them the freedom
          of choosing what their heart desires the most.
        </p>
      </div>

      {/* Promotional Section */}
      <div className="relative h-[100vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://png.pngtree.com/thumb_back/fh260/background/20200724/pngtree-happy-raksha-bandhan-orange-background-vector-illustration-image_364910.jpg"
            alt="Background"
            className="w-full h-full object-cover filter"
          />
        </div>
        <div className="relative text-center text-gray-700 px-4 md:px-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Celebrate Sibling Love with
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            VigyBag Rakhi Gift Cards!
          </h1>
          <button className="text-3xl rounded-lg font-bold text-white bg-yellow-400 p-5">
            Up to ₹2,000* Off* | →
          </button>
          <div className="flex justify-center gap-4 mt-8">
            <img
              className="h-[30vh] w-auto md:h-[50vh] md:w-[30vw] rotate-[-15deg]"
              src="https://i.pinimg.com/736x/fe/bb/91/febb912ff66ac274a9a1b5efd036c8c1.jpg"
              alt="Decorative"
            />
            <img
              className="h-[30vh] w-auto md:h-[50vh] md:w-[25vw]"
              src={laddo}
              alt="Decorative"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCard;
