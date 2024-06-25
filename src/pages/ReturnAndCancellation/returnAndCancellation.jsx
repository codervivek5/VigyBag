import React, { useEffect } from "react";

const ReturnAndCancellation = () => {
  useEffect(() => {
    document.title = "VigyBag | Return and Cancellation";
  }, []);

  return (
    <div className="Return-policy">
      <div className="containerprivacy">
        <main>
          <div className="head">
            <h1>Return and Cancellation</h1>
          </div>
          <h2>Cancellation Policy</h2>
          <p>
            The customer can choose to cancel an order any time before it's
            dispatched. The order cannot be canceled once it’s out for delivery.
            However, the customer may choose to reject it at the doorstep.
          </p>
          <p>
            The time window for cancellation varies based on different
            categories and the order cannot be canceled once the specified time
            has passed.
          </p>
          <p>
            In some cases, the customer may not be allowed to cancel the order
            for free, post the specified time and a cancellation fee will be
            charged. The details about the time window mentioned on the product
            page or order confirmation page will be considered final.
          </p>
          <p>
            In case of any cancellation from the seller due to unforeseen
            circumstances, a full refund will be initiated for prepaid orders.
          </p>
          <p>
            <b>VigyBag</b> reserves the right to accept the cancellation of any
            order.
            <b>VigyBag</b> also reserves the right to waive off or modify the
            time window or cancellation fee from time to time.
          </p>
          <h2>Returns Policy</h2>
          <p>
            Returns is a scheme provided by respective sellers directly under
            this policy in terms of which the option of exchange, replacement
            and/ or refund is offered by the respective sellers to you. All
            products listed under a particular category may not have the same
            returns policy. For all products, the returns/replacement policy
            provided on the product page shall prevail over the general returns
            policy. Do refer the respective item's applicable return/replacement
            policy on the product page for any exceptions to this returns policy
            and the table below.
          </p>
          <p>
            The return policy is divided into three parts; Do read all sections
            carefully to understand the conditions and cases under which returns
            will be accepted.
          </p>
          <br />
          <h3>Part 1 – Category, Return Window and Actions possible</h3>
          <br />
          <table className="table">
            <thead>
              <tr className="tr">
                <th className="th">Category</th>
                <th>
                  Returns Window, Actions Possible and Conditions (if any)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="tr">
                <td className="td">
                  Furniture
                  <br />
                  Home: Pet Supplies & Rest of Home (Except Home décor,
                  Furnishing, Home Improvement Tools, Household Items)
                </td>
                <td className="td">
                  10 days
                  <br />
                  Refund or Replacement
                  <br />
                  For products requiring installation, returns shall be eligible
                  only when such products are installed by the brand's
                  authorized personnel.
                  <br />
                  In order to help you resolve issues with your product, we may
                  troubleshoot your product either through online tools, over
                  the phone, and/or through an in-person technical visit.
                  <br />
                  If a defect is determined within the Returns Window, a
                  refund/replacement of the same product will be provided at no
                  additional cost. If no defect is confirmed or the issue is not
                  diagnosed within 10 days of delivery or Installation wherever
                  applicable, you will be directed to a brand service centre to
                  resolve any subsequent issues.
                  <br />
                  In any case, only one replacement shall be provided.
                </td>
              </tr>
              <tr className="tr">
                <td className="td">
                  Lifestyle: Watch, T-Shirt, Footwear, Sari, Short, Dress, Kid’s
                  (Capri, Shorts & Tops), Men’s (Ethnic Wear, Shirt, Formals,
                  Jeans, Clothing Accessory), Women’s (Ethnic Wear, Fabric,
                  Blouse, Jean, Skirt, Trousers, Bra), Bags, Raincoat, Sunglass,
                  Belt, Frame, Backpack, Suitcase, Luggage, etc.
                  <br />
                  Lifestyle: Jewellery, Footwear Accessories, Travel
                  Accessories, Watch Accessories, etc.
                  <br />
                  Lifestyle: WinterWear (sweatshirt, jacket, sweater, cardigan,
                  kids_thermal, pullover, windcheater, track_suit, thermal,
                  shawl, track_top, glove, muffler, scarf, blazer,
                  uniform_sweatshirt, uniform_blazer, kids_muffler, kids_mitten,
                  shrug, poncho, uniform_sweater, cap, waistcoat, leg_warmer,
                  legging, elder_halloween_costume)
                </td>
                <td className="td">
                  10 days
                  <br />
                  Refund, Replacement or Exchange
                </td>
              </tr>
              <tr className="tr">
                <td className="td">Medicine (Allopathy & Homeopathy)</td>
                <td className="td">
                  2 days
                  <br />
                  Refund
                </td>
              </tr>
              <tr className="tr">
                <td className="td">
                  Home: Home Improvement Tools, Household Items, Home décor,
                  Furnishing
                </td>
                <td className="td">
                  7 days
                  <br />
                  Refund or replacement
                </td>
              </tr>
              <tr className="tr">
                <td className="td">
                  Books (All books)
                  <br />
                  Sports Equipments (Racquet, ball, support, gloves, bags etc.)
                  <br />
                  Exercise & Fitness Equipments (Home Gym combos, dumbbell etc.)
                  <br />
                  Auto Accessories - Car and Bike accessories (helmets, car kit,
                  media players etc.)
                </td>
                <td className="td">
                  7 days
                  <br />
                  Replacement only
                  <br />
                  Free replacement will be provided within 7 days if the product
                  is delivered in defective/damaged condition or different from
                  the ordered item.
                  <br />
                  Please keep the product intact, with original accessories,
                  user manual and warranty cards in the original packaging at
                  the time of returning the product.
                </td>
              </tr>
              <tr className="tr">
                <td className="td">
                  Toys (Remote controlled toys, Learning toys, Stuffed toys
                  etc.)
                  <br />
                  Stationary (Pens, Diary notebooks, Calculators etc.)
                  <br />
                  Musical Instruments (Microphones & Accessories, Guitars,
                  Violins etc.)
                </td>
                <td className="td">
                  7 days
                  <br />
                  Replacement only
                  <br />
                  Free replacement will be provided within 7 days if the product
                  is delivered in defective/damaged condition or different from
                  the ordered item.
                  <br />
                  Please keep the product intact, with original accessories,
                  user manual and warranty cards in the original packaging at
                  the time of returning the product.
                </td>
              </tr>
              <tr className="tr">
                <td className="td">
                  Non-Returnable - All Wind Instruments (Harmonicas, Flutes
                  etc.)
                </td>
                <td className="td">
                  This item is non-returnable due to hygiene and personal
                  wellness. In case these products are delivered in
                  damaged/defective condition or different from the ordered
                  item, we will provide a free replacement.
                </td>
              </tr>
              <tr className="tr">
                <td className="td">
                  All Mobiles (except Apple, Google, Motorola, Infinix, Redmi,
                  MI, Vivo, POCO, Realme, Samsung phones)
                  <br />
                  Electronics - (except Apple / Beats, Google, Realme, Samsung,
                  JBL& Infinity, Epson, HP, Dell, Canon, MI, Dizo Products)
                  (Tablets, Laptops, Smart Watches)
                  <br />
                  All Small Home Appliances (Except Chimney, Water Purifier,
                  Fan, Geyser)
                  <br />
                  Furniture - Hammock Swing & Stool
                </td>
                <td className="td">
                  7 days
                  <br />
                  Replacement only
                  <br />
                  In order to help you resolve issues with your product, we may
                  troubleshoot your product either through online tools, over
                  the phone, and/or through an in-person technical visit.
                  <br />
                  If a defect is determined within the Returns Window, a
                  replacement of the same model will be provided at no
                  additional cost. If no defect is confirmed or the issue is not
                  diagnosed within 7 days of delivery, you will be directed to a
                  brand service center to resolve any subsequent issues.
                  <br />
                  In any case, only one replacement shall be provided.
                </td>
              </tr>
              <tr className="tr">
                <td className="td">
                  Mobile – Apple, Google, Motorola, Infinix, Redmi, MI, Vivo,
                  POCO, Realme, Samsung phones
                  <br />
                  Electronics - Acer, AMKETTE, Apple/Beats, Bose, Brother,
                  Canon, Compaq, CREATIVE, DELL, DIZO, Epson, Google, GoPro,
                  GOVO, HP, INFINITY, JBL, Lenovo, LG, Lifelong, Mi, MOTOROLA,
                  Nothing, OnePlus, OPPO, Panasonic, PHILIPS, Realme, REDMI,
                  SAMSUNG, Sansui, Seagate, Sonos, SONY, Thomson, Total, Xiaomi
                  products (Tablets, Laptops, Smart Watches, Headphones,
                  Speakers)
                  <br />
                  Large –Vu, LG, Godrej, Haier, IFB, Hindware , Glen, Faber,
                  AGARO, Voltas, BOSCH, Pureit, PHILIPS, HAVELLS, Elica, BAJAJ,
                  Kenstar, Eureka Forbes Aquasure from Aquaguard, Aquaguard,
                  LIVPURE, EUREKA FORBES, Crompton, Hindware Snowcrest, Hindware
                  Calisto, Eurodomo, Symphony, Hindware Atlantic, ONIDA, CANDY,
                  Llyod, Voltas Beko, realme, Daikin, CARRIER, Mi, Midea,
                  Whirlpool, Blue Star, Panasonic, Morphy Richards, iFFALCON,
                  Hisense, TCL, TOSHIBA, Hitachi, Rockwell, KENT
                </td>
                <td className="td">
                  7 Days Service Center Replacement/Repair only
                  <br />
                  Brand assistance for device related issues is subject to brand
                  warranty guidelines and service policies. Please reach out to
                  the nearest brand authorized service centre for more detail
                  <br />
                  Please note that VigyBag is an online marketplace and the
                  final decision on replacement of defective device rests with
                  the seller/brand.
                  <br />
                  For Samsung, in case of DOA approved by brand, share the
                  certificate of approval to the VigyBag customer support team
                  to process your complaint
                  <br />
                  Authorized Service partner Locator for Brands: Click here
                  <br />
                  For any other issues with the product, you may contact VigyBag
                  - VigyBag’s 24×7 Customer Care.
                </td>
              </tr>
              <tr className="tr">
                <td className="td">
                  Furniture, Large appliances (Except Vu, LG, Godrej,Haier, IFB,
                  Hindware , Glen, Faber, AGARO, Voltas, BOSCH, Vu, LG, Godrej,
                  Haier, IFB, Hindware, Glen, Faber, AGARO, Voltas, BOSCH,
                  Pureit, PHILIPS, HAVELLS, Elica, BAJAJ, Kenstar, Eureka Forbes
                  Aquasure from Aquaguard, Aquaguard, LIVPURE, EUREKA FORBES,
                  Crompton, Hindware Snowcrest, Hindware Calisto, Eurodomo,
                  Symphony, Hindware Atlantic, ONIDA, CANDY, Llyod, Voltas Beko,
                  realme, Daikin, CARRIER, Mi, Midea, Whirlpool, Blue Star,
                  Panasonic, Morphy Richards, iFFALCON, Hisense, TCL, TOSHIBA,
                  Hitachi, Rockwell, KENT)
                  <br />
                  Rest of Small Home Appliances - Chimney, Water Purifier, Fan,
                  Geyser only
                </td>
                <td className="td">
                  10 days
                  <br />
                  Replacement only
                  <br />
                  For products requiring installation, returns shall be eligible
                  only when such products are installed by the brand's
                  authorized personnel.
                  <br />
                  In order to help you resolve issues with your product, we may
                  troubleshoot your product either through online tools, over
                  the phone, and/or through an in-person technical visit.
                  <br />
                  If a defect is determined within the Returns Window, a
                  replacement of the same model will be provided at no
                  additional cost. If no defect is confirmed or the issue is not
                  diagnosed within 10 days of delivery or Installation wherever
                  applicable, you will be directed to a brand service centre to
                  resolve any subsequent issues.
                  <br />
                  In any case, only one replacement shall be provided.
                </td>
              </tr>
              <tr className="tr">
                <td className="td">No Questions Asked</td>
                <td className="td">
                  10 days
                  <br />
                  Refund or replacement
                  <br />
                  This policy enables easy product return requests for customers
                  through the Platform, subject to product validations at the
                  time of pick-up and fraud prevention mechanisms.
                  <br />
                  This policy shall be applicable only if the product was bought
                  when this policy was applicable to the product. If not, the
                  policy provided here shall apply to the order. It is clarified
                  that a customer may only be able to seek a one-time
                  replacement under this Policy, subject to the other terms
                  provided herein.
                  <br />
                  Exceptions to this policy: Following claims will be covered
                  under the policy provided here and through corresponding
                  validation processes
                  <br />
                  a. product undelivered
                  <br />
                  b. product/accessories missing
                  <br />
                  c. wrong product/accessories delivered
                </td>
              </tr>
              <tr className="tr">
                <td className="td">Refurbished</td>
                <td className="td">
                  7 days
                  <br />
                  Replacement only
                  <br />
                  To help you resolve issues with your product, we may
                  troubleshoot your product either through online tools, over
                  the phone, and/or through an in-person technical visit.
                  <br />
                  If a defect is determined within the Returns Window, a
                  replacement of the same model will be provided at no
                  additional cost. If no defect is confirmed or the issue is not
                  diagnosed within 7 days of delivery, you will be directed to
                  the warranty partner for resolving any subsequent issues.
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <h3>Part 2 - Returns Pick-Up and Processing</h3>
          <p>
            In case of returns where you would like item(s) to be picked up from
            a different address, the address can only be changed if pick-up
            service is available at the new address. During pick-up, your
            product will be checked for the following conditions:
          </p>
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Conditions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="td">Correct Product</td>
                <td className="td">
                  IMEI/ name/ image/ brand/ serial number/ article number/ bar
                  code should match and MRP tag should be undetached and clearly
                  visible.
                </td>
              </tr>
              <tr>
                <td className="td">Complete Product</td>
                <td className="td">
                  All in-the-box accessories (like remote control, starter kits,
                  instruction manuals, chargers, headphones, etc.), freebies and
                  combos (if any) should be present.
                </td>
              </tr>
              <tr>
                <td className="td">Unused Product</td>
                <td className="td">
                  The product should be unused, unwashed, unsoiled, without any
                  stains and with non-tampered quality check seals/return
                  tags/warranty seals (wherever applicable). Before returning a
                  Mobile/ Laptop/ Tablet, the device should be formatted and
                  Screen Lock (Pin, Pattern or Fingerprint) must be disabled.
                  iCloud lock must be disabled for Apple devices.
                </td>
              </tr>
              <tr>
                <td className="td">Undamaged Product</td>
                <td className="td">
                  The product (including SIM trays/ charging port/ headphone
                  port, back-panel etc.) should be undamaged and without any
                  scratches, dents, tears or holes.
                </td>
              </tr>
              <tr>
                <td className="td">Undamaged Packaging</td>
                <td className="td">
                  The product’s original packaging/ box should be undamaged.
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <p class="highlight">
            The field executive will refuse to accept the return if any of the
            above conditions are not met.
          </p>
          <p>
            For any products for which a refund is to be given, the refund will
            be processed once the returned product has been received by the
            seller.
          </p>
          <br />
          <h3>Part 3 - General Rules for a successful Return</h3>
          <ul>
            <li>
              In certain cases where the seller is unable to process a
              replacement for any reason whatsoever, a refund will be given.
            </li>
            <li>
              In cases where a product accessory is found
              missing/damaged/defective, the seller may either process a
              replacement of the particular accessory or issue an eGV for an
              amount equivalent to the price of the accessory, at the seller’s
              discretion.
            </li>
            <li>
              During open box deliveries, while accepting your order, if you
              received a different or a damaged product, you will be given a
              refund (on the spot refunds for cash-on-delivery orders). Once you
              have accepted an open box delivery, no return request will be
              processed, except for manufacturing defects. In such cases, these
              category-specific replacement/return general conditions will be
              applicable. Click here to know more about Open Box Delivery.
            </li>
            <li>
              For products where installation is provided by VigyBag's service
              partners, do not open the product packaging by yourself. VigyBag
              authorised personnel shall help in unboxing and installation of
              the product.
            </li>
            <li>
              For Furniture, any product-related issues will be checked by
              authorised service personnel (free of cost) and attempted to be
              resolved by replacing the faulty/ defective part of the product.
              Full replacement will be provided only in cases where the service
              personnel opines that replacing the faulty/defective part will not
              resolve the issue.
            </li>
            <li>
              <b>VigyBag</b> holds the right to restrict the number of returns
              created per order unit, post the evaluation of the product/order
              defect is undertaken by <b>VigyBag’s</b> authorized
              representative.
            </li>
          </ul>
        </main>
      </div>
    </div>
  );
};

export default ReturnAndCancellation;
