import Image from "next/image";

export default function HeroJumbotron() {
    return (
        <section className="hero_jumbotron relative max-h-[934px] max-md:max-h-[361px] h-screen">
            <Image src="/large_jumbotron.png" alt="hero" layout="fill" objectFit="cover" className="max-md:hidden" />
            <Image src="/mobile_jumbotron.png" alt="hero" layout="fill" objectFit="cover" className="md:hidden" />
        </section>
    )
}