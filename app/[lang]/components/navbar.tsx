"use client";
import Image from "next/image";
import Typography from "../ui/typography";
import { INavbar } from "@/app/interface/nav.model";
import Box from "../ui/Box";
import HumButton from "./humbutton";
import { useState } from "react";
import LocaleSwitch from "@/app/util/localSwitch";

export default function Navbar({ navContent }: { navContent: INavbar }) {
    const [toggled, setToggled] = useState(false);
    const [showlanguages, setShowLanguages] = useState(false);
    const { menuItems,
        logo: { src: logoSrc, alt: logoAlt, width: logoWidth, height: logoHeight },
        navRight } = navContent;

    const {
        loginLabel,
        globe: {
            icon: { src: globeIconSrc, alt: globeIconAlt, width: globeIconWidth, height: globeIconHeight },
            dropdown: { src: dropdownSrc, alt: dropdownAlt, width: dropdownWidth, height: dropdownHeight },
        } } = navRight;

    return (
        <nav className="w-full relative">
            <Box className="py-9 max-md:pt-[60px] max-md:pb-[15px] max-md:flex justify-between">
                <section className="flex">
                    <div className="logo_image_wrapper max-w-[170px]">
                        <Image src={logoSrc} width={logoWidth} height={logoHeight} alt={logoAlt} />
                    </div>
                    <article className={`menu_items ${toggled ? "max-md:left-0" : "max-md:-left-full"}`}>
                        <ul className="menu_item_wrapper">
                            {
                                menuItems?.map((item, index) => (
                                    <li key={index} className="max-md:flex max-md:gap-x-2 max-md:items-center">
                                        <Typography>{item}</Typography>
                                        {/* {index === 4 &&
                                            <BoxIcon className="" />
                                        } */}
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="nav_right_section">
                            <Typography>{loginLabel}</Typography>
                            <article className="globe_icon_wrapper flex gap-2 cursor-pointer"
                                onClick={() => setShowLanguages(!showlanguages)}
                                onMouseOver={() => setShowLanguages(true)}
                                onMouseOut={() => setShowLanguages(false)}>
                                <Image src={globeIconSrc} width={globeIconWidth} height={globeIconHeight} alt={globeIconAlt} className="mr-2" />
                                <Image src={dropdownSrc} width={dropdownWidth} height={dropdownHeight} alt={dropdownAlt} />
                                {showlanguages && <LocaleSwitch />}
                            </article>
                        </div>
                    </article>
                </section>
                <HumButton setToggled={setToggled} toggled={toggled} />
            </Box>
        </nav>
    )
}