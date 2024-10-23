import { IMainContent } from "@/app/interface/content.model";
import Box from "../ui/Box";
import Typography from "../ui/typography";
import BoxIcon from "../ui/tinybox";

export default function HomeTopContent({ content }: { content: IMainContent }) {
    return (
        <section className="main_content_wrapper flex flex-col items-center">
            <Box variant={"container"} className="flex flex-col items-center gap-y-[15px]">
                <Typography variant={"gradient"} className="text-base">{content.title}</Typography>
                <Typography variant={"light_white"} className="text-[44px] max-md:text-base" dangerouslySetInnerHTML={{ __html: content.subHeading }} />
                <section className="main_content_cards_wrapper">
                    {content.cards?.map((item, index) => (
                        <article className="main_content_rounded_box bg-outer" key={index}>
                            <div className="main_content_rounded_box scale-[.97] bg-inner">
                                <Typography variant={"gradient"} className="rounded_item_header">{item.title}</Typography>
                                <Typography variant={"lightgrad"} className="rounded_item_desc">{item.description}</Typography>
                            </div>
                        </article>
                    ))
                    }
                </section>
                <Typography className="text-2xl max-md:text-[18px]">{content.aiVideoOnDemand}</Typography>
                <article className="main_content_desc_wrapper">
                    <Typography className="main_content_description">
                        {content.description}
                    </Typography>
                    <Typography className="main_content_description">
                        {content.pricingBenefits}
                    </Typography>
                </article>
                <div className="horizontal_line"></div>
                <div className="relative main_prev_wrapper">
                    <Typography className="main_content_prev_works static">
                        PREVIOUS WORKS
                    </Typography>
                    <BoxIcon className="absolute top-0 left-0" />
                </div>
            </Box>
        </section>
    )
}