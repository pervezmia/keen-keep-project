import AllFriends from "@/components/homePageComponents/allFriends/AllFriends";
import BannerFourCard from "@/components/homePageComponents/banner/BannerFourCard";
import BannerTitle from "@/components/homePageComponents/banner/BannerTitle";
// import Friends from "@/components/homePageComponents/friendsInfo/Friends";

export default async function Home() {
  const res = await fetch("http://localhost:3000/data.json");
  const friendsData = await res.json();

  console.log(friendsData);

  return (
    <div className="bg-zinc-50 font-sans">
      <main className="bg-white ">
        <BannerTitle />
        <BannerFourCard />
        <AllFriends />
      </main>
    </div>
  );
}