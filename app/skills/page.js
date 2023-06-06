import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function skills(){
    return(
    <w class="bg-black">
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
        </navbar>

        <div class="body1">
            <h1 class="mt-5 mb-5 title">Languages</h1>
            
            <div class="skillcomp">
                <Image></Image>
                <h2>Javascript</h2>
            </div>
            <div class="skillcomp">
                <Image></Image>
                <h2>Python</h2>
            </div>
            <div class="skillcomp"> 
                <Image></Image>
                <h2>HTML</h2>
            </div>
            <div class="skillcomp">
                <Image></Image>
                <h2>CSS</h2>
            </div>
            <div class="skillcomp">
                <Image></Image>
                <h2>Java</h2>
            </div>
            <div class="skillcomp">
                <Image></Image>
                <h2>C#</h2>
            </div>
        </div>
    </w>
    

    
        
    )
}