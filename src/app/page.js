"use client";
import CategorySlider from "@/components/home/CategorySlider";
import HeroSlider from "@/components/home/HeroSlider";
import OfferCard from "@/components/home/OfferCard";
import ReviewSection from "@/components/home/ReviewSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProductGrid from "@/components/product/ProductGrid";
import TitleHead from "@/components/TitleHead";
import Wrapper from "@/components/Wrapper";
import { dresesData, kurtasData } from "@/utils/data";

export default function Home() {
  return (
    <div>
      <HeroSlider />

      <Wrapper>
        <div className="my-14">
          <CategorySlider />
        </div>
        <div className="my-14">
          <ProductGrid title={"New Arrival"} data={dresesData.slice(0, 4)} />
        </div>
        <div className="my-14">
          <OfferCard />
        </div>
        <div className="my-14">
          <ProductGrid
            title={"Categories For Women"}
            data={dresesData.slice(5, 9)}
          />
        </div>
        <div className="my-14">
          <ProductGrid
            title={"Categories For Men"}
            data={kurtasData.slice(0, 4)}
          />
        </div>
        {/* <div className="my-14">
          <TitleHead title={"Services"} />
          <ServicesSection />
        </div> */}
        <div className="my-14">
          <div className="mb-10">
            <TitleHead title={"Feedback"} />
          </div>
          <ReviewSection />
        </div>
      </Wrapper>
    </div>
  );
}
