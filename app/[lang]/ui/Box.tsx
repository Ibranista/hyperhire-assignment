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
            sm: "max-w-[161px]",
            md: "w-60 px-4",
            mdx: "max-w-[306px]",
            lg: "p-6",
            default: "max-w-[1600px]"
        }
    },
    defaultVariants: {
        variant: "container",
        size: "default"
    }
})