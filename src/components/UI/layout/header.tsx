"use client";
import { layoutConfig } from "@/config/layout.config";
import { siteConfig } from "@/config/site.config";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import RegistrationModal from "../modals/registration.modal";
import LoginModal from "../modals/login.modal";
import { useState } from "react";

export const Logo = () => {
    return <Image src="/logo_fire.svg" width={26} height={26} alt={siteConfig.name} priority />;
};

export default function Header() {
    const pathname = usePathname();
    const getNavItems = () => {
        return siteConfig.navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
                <NavbarItem key={item.href + item.label}>
                    <Link
                        color="foreground"
                        href={item.href}
                        className={`${
                            isActive ? "text-orange-400" : "text-foreground"
                        } hover:text-orange-500 transition-colors duration-200 font-semibold px-3`}>
                        {item.label.toUpperCase()}
                    </Link>
                </NavbarItem>
            );
        });
    };

    const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    return (
        <Navbar
            className={`border-b-1 backdrop-blur`}
            style={{
                height: `${layoutConfig.headerHeight} `,
            }}>
            <NavbarBrand>
                <Link
                    href="/"
                    className="text-white flex items-center gap-3 hover:text-orange-400 transition-colors duration-200  ">
                    <Logo />
                    <p className="font-bold leading-inherit"> {siteConfig.name} </p>
                </Link>
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-1 " justify="center">
                {getNavItems()}
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Button
                        as={Link}
                        color="secondary"
                        href="#"
                        variant="flat"
                        onPress={() => setIsLoginOpen(true)}>
                        Войти
                    </Button>
                </NavbarItem>
                <NavbarItem>
                    <Button
                        as={Link}
                        color="primary"
                        href="#"
                        variant="flat"
                        onPress={() => setIsRegistrationOpen(true)}>
                        Регистрация
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <RegistrationModal
                isOpen={isRegistrationOpen}
                onClose={() => setIsRegistrationOpen(false)}
            />
            <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        </Navbar>
    );
}
