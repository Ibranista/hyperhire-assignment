import { ITextProps } from "@/app/interface/interface";
import { cva, VariantProps } from "class-variance-authority";
import cn from "@/app/util/cn";

export default function Typography({ children, className, variant, size, ...props }: ITextProps & VariantProps<typeof textVariants>) {
    return <p className={`${cn(textVariants({ variant, size, className }))}`} {...props}>{children}</p>
}

const textVariants = cva("text-primary", {
    variants: {
        variant: {
            primary: "text-white relative",
            secondary: "text-lighter_black",
            gradient: "bg-primary-gradient bg-clip-text text-transparent",
            lightgrad: "bg-primary-light-gradient bg-clip-text text-transparent",
            md_dark: "text-[#343741]",
            light_white: "text-light_white"
        },
        size: {
            sm: "text-sm",
            mdx: "text-lg leading-[150%] max-md:text-2xl",
            md: "font-black text-base leading-[150%]",
            lg: "text-5xl max-md:text-4xl",
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "md"
    }
})
