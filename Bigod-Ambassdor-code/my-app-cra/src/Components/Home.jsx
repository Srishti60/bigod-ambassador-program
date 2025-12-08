import React from 'react'
import Banner from './Homepage/Banner'
import WhyBecome from './Homepage/WhyBecome'
import Application from './Homepage/application';
import Note from './Homepage/note';
import Footer from './Homepage/footer';
import Rewards from './Homepage/rewards';
import RolesAndResponsibility from './Homepage/RolesAndResponsibility';
import TopLeaderboard from './Homepage/TopLeaderboard';





function Home() {
  console.log("Banner:", Banner);
  console.log("WhyBecome:", WhyBecome);
  return (
    <div className="flex flex-col">
      <Banner />
      <WhyBecome />
      <TopLeaderboard/>
      <RolesAndResponsibility/>
      <Rewards />
      <div id="application">
      <Application />
      </div>
      <Note />
      <Footer />
    </div>
  )
}

export default Home