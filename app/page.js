import Navigation from "./ui/Navigation";
import MainLoad from "./ui/MainLoad";
import MediaSection from "./ui/MediaSection";
import MobileMenu from "./ui/MobileMenu";

export default function Home() {
  return (
    <div className="mb-[136px]">
      <MobileMenu />
      <Navigation />
      <MainLoad />
      <MediaSection />
    </div>
  )
}
