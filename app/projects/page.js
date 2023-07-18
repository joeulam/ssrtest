import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
export default function projects(){
return(
    <w class="w">
        <Head>
            <title>Joey Lam"</title>
        </Head>
        <navbar class="nav">
            <div class="navbot">  
                <Link href="/"><Image width={32} height={32} src="/home.png"/></Link>
            </div>
            <div class="navbot">  
                <Link href="/skills"><Image width={32} height={32} src="/User.png"/></Link>
            </div>
            <div id="projects" class="navbot">    
                <Link href="/projects"><Image width={32} height={32} src="/Document.png"/></Link>
            </div>
            <div class="navbot">    
                <Link href="/timeline"><Image width={32} height={32} src="/timeline.png"/></Link>
            </div>
        </navbar>

        <div class="body2 text-[#FFFFFF]">
            <h1 class="mt-5 mb-5 title ">Projects</h1>
            <div class="projectcomp ">
                <h1>Stock Scraper</h1>
                <p>A python script that scarpes data from capitoltrades and return the most recent updates</p>
                <p>Languages/Libary used: Python, Numpy, Pandas, and BeautifulSoup</p>
            </div>
            <div class="projectcomp">
                <h1>My website portfolio</h1>
                <p>A website portfolio that showcase of my work, skills, and achievements in web development and design.</p>
                <p>Languages/Libary used: Nextjs, Vercel, Tailwind CSS and MUI</p>
            </div>
            <div class="projectcomp ">
                <h1>Cotracker</h1>
                <p>A minialisitc finance tracker that allows for ease of keeping tabs on finances. </p>
                <p>Languages/Libary used: Nextjs, Vercel, Firebase, Tailwind CSS and MUI</p>
            </div>
            <div class="projectcomp">
                <h1>Human detector</h1>
                <p>An AI human vision detector system that detects humans and runs on tensorflow and python.</p>
            </div>
            <div class="projectcomp ">
                <h1>Heyo</h1>
                <p>A mental health app running on electron and postgresql that allowed users to track their mood and record their feeling in a journal</p>
            </div>
            <div>
                
            </div>
        </div>
    </w>
        
    )
}