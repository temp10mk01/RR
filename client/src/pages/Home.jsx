import { HomeImage } from "../components/Image.jsx"

export default function Home() {
    return(
        <div className="Home page">
            <HomeImage src="/home1.jpg" text="Home Image 1" />
            <HomeImage src="/home2.jpg" text="Home Image 2" />
            <HomeImage src="/home3.jpg" text="Home Image 3" />
        </div>
    )
}