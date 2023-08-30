import Navbar from "@/layout/Navbar";
import Sidebar from "@/layout/Sidebar";
import Welcome from "@/sections/Welcome";

export default function Home() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Welcome />
    </>
  );
}
