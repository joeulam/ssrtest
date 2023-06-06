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
                <Link href="/"><img src="../HomePage.png"/></Link>
            </div>
            <div id="skills" class="navbot">  
                <Link href="/skills"><img src="../User.png"/></Link>
            </div>
            <div class="navbot">    
                <Link href="/projects"><img src="../Document.png"/></Link>
            </div>
        </navbar>

        <div class="body">
            <h1>Languages</h1>
            <div>
                <Image></Image>
                Javascript
            </div>
            <div>
                <Image></Image>
                Python
            </div>
            <div>
                <Image></Image>
                HTML
            </div>
            <div>
                <Image></Image>
                CSS
            </div>
            <div>
                <Image></Image>
                Java
            </div>
            <div>
                <Image></Image>
                C#
            </div>
        </div>
    </w>
    

    
        
    )
}