import Footer2 from "@/components/footers/Footer2";
import Header10 from "@/components/headers/Header10";
import Privacy from "@/components/homes/home-1/PrivacyContent";
import { strongMultiPages } from "@/data/menu";
import dynamic from "next/dynamic";

const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
const dark = false;
const onePage = false;
export const metadata = {
  title:
    "Strong Services || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function StrongServicesPage() {
  return (
    <>
      <div className="theme-strong">
        <div className="page" id="top">
          <nav className="main-nav dark transparent stick-fixed wow-menubar wch-unset">
            <Header10 links={strongMultiPages} />
          </nav>
          <main className="main">
            <ParallaxContainer
              className="page-section bg-dark-alpha-30 light-content parallax-5"
              style={{
                backgroundImage:
                  "url(/assets/images/demo-strong/section-bg-1.jpg)",
              }}
              id="home"
            >
              <div className="container position-relative pt-sm-30">
                {/* Home Section Content */}
                <div className="home-content text-center">
                  <h1 className="hs-title-7 mb-0">
                    <span className="wow charsAnimIn-2" data-splitting="chars">
                      Privacy <span className="font-alt">& Terms</span>
                    </span>
                  </h1>
                </div>
                {/* End Home Section Content */}
              </div>
            </ParallaxContainer>
            <section
              className={`page-section  scrollSpysection  ${
                dark ? "bg-dark-1 light-content" : ""
              }`}
              id="services"
            >
              <div className="container">
                <Privacy />
              </div>
            </section>
          </main>

          <footer className="footer-1 bg-dark-1 light-content">
            <Footer2 />
          </footer>
        </div>
      </div>{" "}
    </>
  );
}
