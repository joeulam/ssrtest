import Head from "next/head";
import Tst from "../api/lib"

import Navbar from "./componets/navbar";
export default function Home({posts}) {
  return (
    
    <w class="bg-black">

      <Head>
        <title>Joey Lam"</title>
      </Head>

        <Navbar/>

        <div class="body">
          <h1 class="name">
            Im <span class="text-[#FF3364]">Joey</span> <span class="text-[#52BECC]">Lam</span>
          </h1>
          <h3>
            A passionate student from New York Interested in robotics,
            web development, Cybersecurity and machine learning.
          </h3>
          <div class="mt-10 mb-10">
            <h2 class="text-xl">My socials</h2>
            <div class="socials">
              <img src='../GitHub.png'></img>
              <img src='../Instagram.png'></img>
              <img src='../LinkedIn.png'></img>
              <img src='../Email.png'></img>

            </div>
          </div>
          
          <h3>{Tst()}</h3>
          <h3 class="mt-5">
            Im currently doing: {"discordapi"}
          </h3>
      
        </div>

    </w>
  )
}


