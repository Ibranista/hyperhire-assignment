import { ButtonHTMLAttributes, HTMLAttributes } from "react";
import { INavbar } from "./nav.model";
export interface IContent {
  navbar: INavbar;
}

type IBaseProps<T> = HTMLAttributes<T>;

export interface ITextProps
  extends IBaseProps<HTMLParagraphElement>,
    ButtonHTMLAttributes<HTMLParagraphElement> {}

export interface IBoxProps
  extends IBaseProps<HTMLDivElement>,
    ButtonHTMLAttributes<HTMLDivElement> {}
