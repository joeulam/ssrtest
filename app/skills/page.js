import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function skills(){
    return(
    <w class="w">
        <Head>
            <title>Joey Lam"</title>
        </Head>
        <navbar class="nav">
            <div class="navbot">  
                <Link href="/"><Image width={32} height={32} src="/home.png"/></Link>
            </div>
            <div id="skills" class="navbot">  
                <Link href="/skills"><Image width={32} height={32} src="/User.png"/></Link>
            </div>
            <div class="navbot">    
                <Link href="/projects"><Image width={32} height={32} src="/Document.png"/></Link>
            </div>
            <div class="navbot">    
                <Link href="/timeline"><Image width={32} height={32} src="/timeline.png"/></Link>
            </div>
        </navbar>

        <div class="body1 text-[#FFFFFF]">
            <h1 class="mt-5 mb-5 title">Languages</h1>
            <div class="skillcomp">
                <Image width={48} height={48} src="/c-logo.png"/>
                <h2 class="mt-5">C++</h2>
                <p>2023</p>
            </div>
            <div class="skillcomp">
                <Image width={48} height={48} src="/java.png"/>
                <h2 class="mt-5">Java</h2>
                <p>2021</p>
            </div>
            <div class="skillcomp">
                <Image width={48} height={48} src="/python.png"/>
                <h2 class="mt-5">Python</h2>
                <p>2020</p>
            </div>
            <div class="skillcomp">
                <Image width={48} height={48} src="/javascript.png"/>
                <h2 class="mt-5">Javascript</h2>
                <p>2020</p>
                <h3>Frameworks: Next.js, React</h3>
            </div>
            <div class="skillcomp"> 
                <Image width={48} height={48} src="/html.png"/>
                <h2 class="mt-5">HTML</h2>
                <p>2019</p>
            </div>
            <div class="skillcomp">
                <Image width={48} height={48} src="/css-3.png"/>
                <h2 class="mt-5">CSS</h2>
                <p>2019</p>
                <h3>Frameworks: Tailwind CSS</h3>
            </div>
            
            
            
        </div>
    </w>
    

    
        
    )
}