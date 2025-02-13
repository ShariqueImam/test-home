import React, { useEffect, useState } from "react";
import Home from "./Home";
import Reviews from "../About/Reviews/Reviews";
import Footer from "../UI/Footer/Footer";
import MovingSection from "./MovingSection";
import Animator from "../UI/Animator";
import OurSuccess from "./OurSuccess";
import OurTeam from "./OurTeam";
import OurFAQ from "../About/FAQ";
import Blog from "../Blog/Blog";
import client from "../../client";
const Main = () => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      const orderData = await client.fetch(`*[_type=='blog']`);
      if (orderData && orderData.length > 0) {
        setData(orderData);
      }
    };
    getProduct();
  }, []);
  return (
    <Animator>
      <div className="font">
        <Home />
        <OurSuccess />
        <MovingSection />
        <OurTeam />
        <OurFAQ />
        <Reviews />
        <Blog data={Data} />
        <section className="bg-yellowDark">
          <Footer />
        </section>
      </div>
    </Animator>
  );
};

export default Main;
// export async function getStaticProps(context) {
//   return {
//     props: {}, // will be passed to the page component as props
//   };
// }
