import Link from "next/link";
import Image from "next/image";

export default function projects(){
return(
    <w class="bg-black">
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
        </navbar>

        <body>
            <div>
                projects
            </div>
        </body>
    </w>
        
    )
}