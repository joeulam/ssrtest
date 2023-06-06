import Link from 'next/link';

export default function Navbar(){
    return(
        <navbar class="nav">
            <div>  
                <Link href="/"><img src="../HomePage.png"/></Link>
            </div>
            <div>  
                <Link href="/skills"><img src="../User.png"/></Link>
            </div>
            <div>    
                <Link href="/projects"><img src="../Document.png"/></Link>
            </div>
        </navbar>
    )

}


