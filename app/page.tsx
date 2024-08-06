import Image from "next/image";
import Header from "./components/header/Header";
import TopNav from "./components/TopNav";
import Explore from "./components/Explore";

export default function Home() {
  return (
    <>
    <TopNav />
    <Header />
    <Explore />
    </>
  );
}
