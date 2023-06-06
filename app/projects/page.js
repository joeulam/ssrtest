import Link from "next/link";
export default function projects(){
return(
    <w class="bg-black">
        <navbar class="nav">
            <div class="navbot">  
                <Link href="/"><img src="../HomePage.png"/></Link>
            </div>
            <div class="navbot">  
                <Link href="/skills"><img src="../User.png"/></Link>
            </div>
            <div id="projects" class="navbot">    
                <Link href="/projects"><img src="../Document.png"/></Link>
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