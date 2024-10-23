import Image from "next/image";
import Box from "../ui/Box";

export default function ShowCase() {
    return (
        <section className="show_case w-full pb-[245px] max-md:pb-[107px] bg-primary_background">
            <Box className="max-w-full grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2" variant={"default"}>
                {Array(12).fill(12).map((_, index) =>
                    <div className="relative h-[270px] max-sm:h-[146px] w-full bg-orange-200" key={index}>
                        <Image
                            src={`/${index + 1}.png`}
                            layout="fill"
                            alt="portfolio-project"
                            objectFit="fill"
                        />
                    </div>)}
            </Box>
        </section>
    )
}