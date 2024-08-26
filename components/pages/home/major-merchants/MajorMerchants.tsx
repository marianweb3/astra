import { AnimatedText } from "@/components/common/animations/AnimatedText";
import {
  NetflixLogo,
  AmazonLogo,
  WalmartLogo,
  AirbnbLogo,
  SteamLogo,
} from "@/components/common/SVG/major-merchants";
import MerchantsCard from "./MerchantsCard";

const MajorMerchants = () => {
  return (
    <section className="min-[1441px]:mt-[245px] mb-[160px] md:mb-[250px] flex flex-col items-center gap-[50px] max-w-[1600px] mx-auto w-full px-4 md:px-6 overflow-hidden">
      <AnimatedText
        once
        startText="Shop at all the"
        el="h1"
        word="major&nbsp;merchants"
        className="xl:text-center max-w-[382px] md:max-w-[950px] text-left s:text-center md:mt-[124px]"
        bgColor="bg-[#A9F019]"
        textStyles="bg-[#A9F019]/20"
      />
      <div className="flex flex-wrap gap-5 justify-center w-full">
        <MerchantsCard component={NetflixLogo} classname="flex-grow" />
        <MerchantsCard component={AmazonLogo} classname="flex-grow" />
        <MerchantsCard component={WalmartLogo} classname="flex-grow" />
        <MerchantsCard component={AirbnbLogo} classname="flex-grow" />
        <MerchantsCard component={SteamLogo} classname="flex-grow" />
      </div>
    </section>
  );
};

export default MajorMerchants;
