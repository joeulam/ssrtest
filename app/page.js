import Head from "next/head";
import Tst from "../api/lib"
import Image from "next/image";
import Link from "next/link";

export default function Home({posts}) {
  return (
    
    <w class="w">

      <Head>
        <title>Joey Lam</title>
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
          <h1 class="name text-[#FFFFFF]" >
            I'm <span class="text-[#FF3364]">Joey</span> <span class="text-[#52BECC]">Lam</span>
          </h1>
          <h3 class="text-[#FFFFFF]">
            A passionate student from New York, interested in robotics, web development, cybersecurity, and machine learning.
          </h3>
          <div class="mt-10 mb-10">
            <h2 class="text-xl text-[#FFFFFF] mb-5">My socials</h2>
            <div class="socials">
              <a class="mr-5"href="https://github.com/joeulam"><Image width={32} height={32} src='/GitHub.png'/></a>
              <a class="mr-5"href="https://instagram.com/joeulamb?igshid=MjEwN2lyYWYwYw=="><Image width={32} height={32} src='/Instagram.png'/></a>
              <a class="mr-5"href="https://www.linkedin.com/in/joey-lam-89057021b/"><Image width={32} height={32} src='/LinkedIn.png'/></a>
              <a class="mr-5"href="mailto:joey.lamm@outlook.com"><Image width={32} height={32} src='/Email.png'/></a>

            </div>
          </div>
          
          <h3 class="text-[#FFFFFF]">{Tst()}</h3>
        </div>

    </w>
  )
}


