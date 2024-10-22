import { IBoxProps } from "@/app/interface/interface";
import { cva, VariantProps } from "class-variance-authority";
import cn from "@/app/util/cn";

export default function Box({ children, className, variant, size, ...props }: IBoxProps & VariantProps<typeof boxVariants>) {
    return (
        <article className={`${cn(boxVariants({ variant, size, className }))}`} {...props}>
            {children}
        </article>
    )
}

const boxVariants = cva("box-primary", {
    variants: {
        variant: {
            container: "px-40 max-md:px-5 max-auto w-full bg-primary_background relative",
            primary: "bg-white rounded-md shadow-sm",
            secondary: "bg-white rounded-lg shadow-lg p-6",
            default: ""
        },
        size: {
            xsm: "max-w-[134px] w-full max-h-[134px] h-full flex flex-col items-center justify-center max-md:max-w-[80px] max-md:max-h-[80px] box-border py-[20px] px-[32px] rounded-[19px]",
            sm: "max-w-[161px]",
            md: "max-w-[780px] w-full bg-[#141414] rounded-[20px]",
            mdx: "max-w-[306px]",
            lg: "p-6",
            default: "max-w-[1600px] mx-auto"
        }
    },
    defaultVariants: {
        variant: "container",
        size: "default"
    }
})