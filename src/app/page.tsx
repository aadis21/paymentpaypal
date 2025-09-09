import AboutSecurity from "@/components/Home/AboutSecurity";
import GetPaid from "@/components/Home/GetPaid";
import JoinMillions from "@/components/Home/JoinMillions";
import LandingPage from "@/components/Home/LandingPage";
import SendPaymentsWay from "@/components/Home/SendPaymentsWay";
import Simplified from "@/components/Home/Simplified";
import Yourway from "@/components/Home/Yourway";


export default function Home() {
  return (
    <div>
      <LandingPage />
      <Yourway />
      <Simplified />
      <SendPaymentsWay />
      <GetPaid />
      <AboutSecurity />
      <JoinMillions />
     
     
    </div>
  );
}
