import AllFriends from "@/components/homePageComponents/allFriends/AllFriends";
import BannerFourCard from "@/components/homePageComponents/banner/BannerFourCard";
import BannerTitle from "@/components/homePageComponents/banner/BannerTitle";
// import Friends from "@/components/homePageComponents/friendsInfo/Friends";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <>
        <main className="flex flex-1 w-full max-w-7xl flex-col items-center justify-between px-16 bg-white">
          <BannerTitle></BannerTitle>
          <BannerFourCard></BannerFourCard>
          <AllFriends></AllFriends>
        </main>
      </>
    </div>
  );
}
