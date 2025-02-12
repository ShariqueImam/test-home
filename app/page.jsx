import Footer2 from "@/components/footers/Footer2";
import Header10 from "@/components/headers/Header10";
import Home1 from "@/components/homes/home-1";
import { strongMultiPages } from "@/data/menu";
import Hero4 from "@/components/homes/home-1/heros/Hero4";

export const metadata = {
  title: "Home Care Management || Compassionate Home Care Services",
  description:
    "Providing high-quality, compassionate home care services tailored to support independence, dignity, and well-being. ",
};
export default function Home1SliderBackgroundMultiPage() {
  return (
    <>
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar ">
            <Header10 links={strongMultiPages} />
          </nav>
          <main id="main">
            <div className="home-section relative scrollSpysection" id="home">
              <Hero4 />
            </div>
            <Home1 />
          </main>
          <Footer2 />
        </div>{" "}
      </div>
    </>
  );
}
