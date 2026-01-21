import { ReactNode } from "react";

interface IProps {
    children: ReactNode;
}

export default function AboutLayout({ children }: IProps) {
    return <section>{children}</section>;
}
