"use client";
import { useState } from "react";
import { layoutConfig } from "@/config/layout.config";
import { siteConfig } from "@/config/site.config";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@heroui/react";
import { usePathname } from "next/navigation";
import RegistrationModal from "../modals/registration.modal";
import LoginModal from "../modals/login.modal";
import Link from "next/link";
import Image from "next/image";
import { signOutFunc } from "@/actions/sign-out";
import { useAuthStore } from "@/store/auth.store";

export const Logo = () => {
    return <Image src="/logo_fire.svg" width={26} height={26} alt={siteConfig.name} priority />;
};

export default function Header() {
    const pathname = usePathname();
    const { isAuth, session, status, setAuthState } = useAuthStore();

    const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const getNavItems = () => {
        return siteConfig.navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
                <NavbarItem key={item.href} isActive={isActive}>
                    <Link
                        color="foreground"
                        href={item.href}
                        className={`${isActive ? "text-orange-400" : "text-foreground"} hover:text-orange-500 transition-colors duration-200 font-semibold px-3`}>
                        {item.label.toUpperCase()}
                    </Link>
                </NavbarItem>
            );
        });
    };

    const handleSignOut = async () => {
        try {
            await signOutFunc();
        } catch (error) {
            console.log("error: ", error);
        }
        setAuthState("unauthenticated", null);
    };

    const customHeaderButtonStyles =
        " h-[2rem] w-31  text-white  hover:opacity-100! transition-all duration-300 ease-in-out ";
    const customActiveItem = {
        item: [
            "flex",
            "relative",
            "h-full",
            "items-center",
            "data-[active=true]:after:content-['']",
            "data-[active=true]:after:absolute",
            "data-[active=true]:after:bottom-0",
            "data-[active=true]:after:left-0",
            "data-[active=true]:after:right-0",
            "data-[active=true]:after:h-[2px]",
            "data-[active=true]:after:rounded-[2px]",
            "data-[active=true]:after:bg-orange-500",
        ],
    };

    return (
        <Navbar
            // className={`border-b-1 backdrop-blur`}
            classNames={{ wrapper: "border-b-1 border-orange-200/15", ...customActiveItem }}
            maxWidth="full"
            isBordered
            isBlurred
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
                {isAuth && <p className="hidden xl:flex ">{session?.user?.email}</p>}
                {status === "loading" ? (
                    <p>Загрузка..</p>
                ) : !isAuth ? (
                    <>
                        <NavbarItem className="hidden xl:flex ">
                            <Button
                                as={Link}
                                href="#"
                                variant="flat"
                                onPress={() => setIsRegistrationOpen(true)}
                                className={`${customHeaderButtonStyles} bg-transparent hover:border-1 border-orange-400/0 hover:border-orange-400 `}>
                                Регистрация
                            </Button>
                        </NavbarItem>

                        <NavbarItem>
                            <Button
                                as={Link}
                                href="#"
                                variant="flat"
                                onPress={() => setIsLoginOpen(true)}
                                className={`${customHeaderButtonStyles} bg-orange-400 hover:bg-orange-500 hover:rounded-sm`}>
                                Войти
                            </Button>
                        </NavbarItem>
                    </>
                ) : (
                    <NavbarItem>
                        <Button
                            as={Link}
                            href="#"
                            variant="flat"
                            onPress={handleSignOut}
                            className={`${customHeaderButtonStyles} bg-transparent hover:border-1 border-orange-400/0 hover:border-orange-400 `}>
                            Выйти
                        </Button>
                    </NavbarItem>
                )}
            </NavbarContent>

            <RegistrationModal
                isOpen={isRegistrationOpen}
                onClose={() => setIsRegistrationOpen(false)}
            />
            <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        </Navbar>
    );
}
