import Head from "next/head";
import Tst from "../api/lib"
import Image from "next/image";
import Link from "next/link";
export default function Home({posts}) {
  return (
    
    <w class="bg-black">

      <Head>
        <title>Joey Lam"</title>
      </Head>

      <navbar class="nav">
            <div id="home" class="navbot">  
                <Link href="/"><Image width={32} height={32} src="/home.png"/></Link>
            </div>
            <div class="navbot">  
                <Link href="/skills"><Image width={32} height={32} src="/User.png"/></Link>
            </div>
            <div class="navbot">    
                <Link href="/projects"><Image width={32} height={32} src="/Document.png"/></Link>
            </div>
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
              <a href="https://github.com/joeulam"><Image width={32} height={32} src='/GitHub.png'/></a>
              <a href="https://instagram.com/joeulamb?igshid=MjEwN2lyYWYwYw=="><Image width={32} height={32} src='/Instagram.png'/></a>
              <a href="https://www.linkedin.com/in/joey-lam-89057021b/"><Image width={32} height={32} src='/LinkedIn.png'/></a>
              <a href="mailto:joey.lamm@outlook.com"><Image width={32} height={32} src='/Email.png'/></a>

            </div>
          </div>
          
          <h3>{Tst()}</h3>
        </div>

    </w>
  )
}


