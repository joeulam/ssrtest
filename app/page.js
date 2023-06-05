import Head from "next/head";
export default function Home({posts}) {
  return (
    
    <w class="bg-black">

      <Head>
        <title>Joey Lam"</title>
      </Head>

        <navbar class="nav">
          <img src="../HomePage.png"/>
          <img src="../User.png"/>
          <img src="../Document.png"/>
        </navbar>

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
          
          <Tst posts={posts} />
          <h3 class="mt-5">
            Im currently doing: {"discordapi"}
          </h3>
      
        </div>

    </w>
  )
}



import React from 'react';

export async function Tst() {
  const music = await loadspotify();
  //var a = music.entries[1].API
  if(music.is_playing){
    return <p>Im currently listening to: {music.item.name}</p>;
  }
  else{
    return <p>Im currently listening to nothing</p>
  }
}


  const clientId = '70adfcf4e5aa488e9d8d86274ab01561'; // Replace with your Spotify client ID
  const redirectUri = 'http://localhost:3000/callback'; // Replace with your redirect URI
  const clientSecret = '265a505c48184865976f0ada6a90d9a1'
  const refresh_token = 'AQAfp3qUGQ1-hrJKBWQq18yBwdgLP--YFnu8WmkEObI1zoLnDKzk6ZKL6I9gmPf6QLS6GKEAqzeiVvGQDPhdF1LKIQsvjsGMCwld3xpEozBNQhJSnHnr7q_sRwHmqRaXhpQ'
  const acctok = 'BQAtaPEaz_mApHEr3xDQin-3doOFd3ngFb9ExLhJ-09BmfOrqjmSPe5BC2LLSDlHnLC0cdnM6FDWm2RiB72BHrMB0MBfSg2aTidClpWCtoWj0jkPGr9NFxItIEGihEXoNw2RV3s3mWqxLnB5YGQB8O7Mh6YXtYweAiO8PJdcoZlNdPKacrfFst0NQ0U6CLxHky9NWsTlXOc'
async function auth() {
  cache: "no-store"
  const url = 'https://accounts.spotify.com./api/token';
  var response = await fetch(url, {
      method: 'POST',
      headers: {
          'Authorization': 'Basic ' + (Buffer.from(clientId + ':' + clientSecret).toString('base64')),
          'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token,
      }),
      cache: 'no-store',
      revalidate: 10
    });
  if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      return jsonResponse
  } else {
      console.log(response.statusText);
      throw new Error(`Request failed! Status code: ${response.status} ${response.statusText}`);
  }
}

export async function loadspotify() {
  var token = await auth()
  const url = `https://api.spotify.com./v1/me/player/currently-playing`;
  var response = await fetch(url, {
    headers: {
        Authorization:`Bearer ${token.access_token}`,
    },
});
if (response.ok) {
  const jsonResponse = await response.json();
  console.log(jsonResponse);
  return jsonResponse
}}