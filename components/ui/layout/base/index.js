import {Navbar, Footer} from "@components/ui/common"
import { Web3Provider } from "@components/providers"
export default function BaseLayout({children}){
    return(
     <Web3Provider>
        <div className="relative max-w-7xl mx-auto px-4">
            <Navbar/>
            <div className="fit pt-6">
                {children}
            </div>
        </div>
        <Footer/>
    </Web3Provider>
    )
}