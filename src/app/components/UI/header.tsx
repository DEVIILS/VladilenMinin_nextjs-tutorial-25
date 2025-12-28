"use client";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Logo = () => {
    return <Image src="/logo_fire.svg" width={26} height={26} alt="logo" priority />;
};

export default function Header() {
    const pathname = usePathname();

    const navItems = [
        { href: "/", label: "Рецепты" },
        { href: "/ingredients", label: "Ингредиенты" },
        { href: "/about", label: "О нас" },
    ];

    return (
        <Navbar>
            <NavbarBrand>
                <Link
                    href="/"
                    className="text-white flex gap-3 hover:text-orange-400 transition-colors duration-200  ">
                    <Logo />
                    <p className="font-bold text-inherit"> Kitchen </p>
                </Link>
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-10" justify="center">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <NavbarItem key={item.href + item.label}>
                            <Link
                                color="foreground"
                                href={item.href}
                                className={`${
                                    isActive ? "text-orange-400" : "text-foreground"
                                } hover:text-orange-500 transition-colors duration-200 font-semibold`}>
                                {item.label.toUpperCase()}
                            </Link>
                        </NavbarItem>
                    );
                })}
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Логин</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Регистрация
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
