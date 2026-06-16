import Banner from "@/components/Banner";
import FeaturedPage from "@/components/Featured";
import PackageSection from "@/components/PackageSection";
import WhyBookNook from "@/components/WhyBookNook";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <FeaturedPage></FeaturedPage>
      <WhyBookNook></WhyBookNook>
      <PackageSection></PackageSection>
    </div>
  );
}
