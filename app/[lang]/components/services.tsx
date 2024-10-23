import Image from "next/image";
import Box from "../ui/Box";
import BoxIcon from "../ui/tinybox";
import Typography from "../ui/typography";
import { IServices } from "@/app/interface/services.model";

export default function Services({ services }: { services: IServices }) {
    const { general_production, ploonet_quickserve, header } = services;

    return (
        <Box className="flex justify-center flex-col items-center bg-primary_background" variant={"default"}>
            <div className="relative mb-[60px]">
                <Typography className="main_content_prev_works static">
                    {header}
                </Typography>
                <BoxIcon className="absolute top-0 -left-2" />
            </div>
            <section className="cards_wrapper">
                {/* left box */}
                <Box size={"md"} variant={"default"} className=" flex flex-col items-center pt-[64px] pb-[62px] h-[816px]">
                    <Typography className="prod_title"> {general_production.title} </Typography>

                    <Typography className="text-[24px] max-md:text-base max-md:leading-[24px] max-md:font-bold">{general_production.subtitle}</Typography>

                    {general_production.steps?.map((steps, index) => (
                        <section className="rounded_wrapper w-full flex justify-center relative z-10" key={index}>
                            <article className="general_rounded_wrapper">
                                {/* stepleft */}
                                <div className="left">
                                    <Typography variant={"gradient"} size={"xsm"}>{steps.number}</Typography>
                                    <Typography size={"xmd"}>{steps.description}</Typography>
                                </div>

                                <div className="right">
                                    <Typography className="max-w-[316px] w-full" variant={"light_white"}>{steps.detail}</Typography>
                                </div>
                            </article>
                            <Image src="/down.png" width={29} height={13} alt="drop down" className="absolute -bottom-2" />
                        </section>
                    ))
                    }


                </Box>
                {/* right side */}
                <Box size={"md"} variant={"default"} className=" flex flex-col items-center pt-[64px] pb-[62px] h-[816px]">
                    <Typography className="font-bold text-[44px] leading-[140%] max-md:text-[22px] max-md:leading-[32px] " variant={"gradient"}>
                        {ploonet_quickserve.title}
                    </Typography>

                    <Typography className="text-[24px] max-md:text-base max-md:leading-[24px] max-md:font-bold">{ploonet_quickserve.subtitle}</Typography>

                    {
                        ploonet_quickserve.steps?.map((steps, index) => (
                            <section className="ploonet_rounded_wrapper" key={index}>
                                <article className="rounded_details flex flex-wrap items-center max-w-[594px] w-full bg-light mt-[18px] gap-x-[40px]">
                                    {/* stepleft */}
                                    <Box size={"xsm"} variant={"default"} className="left bg-primary-gradient">
                                        <Typography size={"xsm"} className="text-[24px] max-md:text-[18px]">{steps.number}</Typography>
                                        <Image src="/note_icon.png" width={40} height={51} alt="note icon" />
                                    </Box>

                                    <div className="right">
                                        <Typography>{steps.description}</Typography>
                                        <Typography className="max-w-[316px] w-full" variant={"light_white"}>{steps.detail}</Typography>
                                    </div>
                                </article>
                            </section>
                        ))
                    }

                </Box>
            </section>
        </Box >
    )
}