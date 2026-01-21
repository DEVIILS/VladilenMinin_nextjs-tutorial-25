import { ReactNode } from "react";

interface IProps {
    children: ReactNode;
}

export default function IngredientsLayout({ children }: IProps) {
    return <section>{children}</section>;
}
