import Banner from "@/components/pages/home/banner/Banner";
import CommentSection from "@/components/pages/home/comment-section";
import FAQSection from "@/components/pages/home/faq-section";
import FastAndEaseSetUp from "@/components/pages/home/fast-setup/FastAndEaseSetUp";
import ImmediateStablecoin from "@/components/pages/home/immediate-stablecoin/ImmediateStablecoin";
import MajorMerchants from "@/components/pages/home/major-merchants/MajorMerchants";
import TheChoiceIsYours from "@/components/pages/home/the-choice-is-yours/TheChoiceIsYours";

function HomePage() {
  return (
    <>
      <Banner />
      <MajorMerchants />
      <ImmediateStablecoin />
      <TheChoiceIsYours />
      <FastAndEaseSetUp />
      <CommentSection />
      <FAQSection />
    </>
  );
}

export default HomePage;
