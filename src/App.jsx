import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
  Footer,
} from "./sections";
import Nav from "./components/Nav";
//!
//! https://youtu.be/tS7upsfuxmo?si=BHzIvuuSv-VssqAV&t=6241
export default function App() {
  return (
    <>
      <main className="relative">
        <Nav />
        {/* custom classes from index.css */}
        <section className="xl:padding-l wide:padding-r padding-b">
          <Hero />
        </section>
        <section className="padding">
          <PopularProducts />
        </section>
        <section className="padding">
          <SuperQuality />
        </section>
        <section className="padding-x py10">
          <Services />
        </section>
        <section className="padding">
          <SpecialOffer />
        </section>
        <section className="padding bg-pale-blue">
          <CustomerReviews />
        </section>
        <section className="padding-x sm:py-32 py-16 w-full">
          <Subscribe />
        </section>
        <section className="padding bg-black padding-x padding-t">
          <Footer />
        </section>
      </main>
    </>
  );
}
