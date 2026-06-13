import Banner from "@/components/Banner";
import PackageSection from "@/components/PackageSection";
import WhyBookNook from "@/components/WhyBookNook";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <WhyBookNook></WhyBookNook>
      <PackageSection></PackageSection>
    </div>
  );
}
