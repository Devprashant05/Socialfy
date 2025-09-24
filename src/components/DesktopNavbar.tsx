import { currentUser } from "@clerk/nextjs/server";
import { log } from "console";
import React, { use } from "react";
import ModeToggle from "./ModeToggle";
import { Button } from "./ui/button";
import Link from "next/link";
import { BellIcon, HomeIcon, UserIcon } from "lucide-react";
import { SignInButton, UserButton } from "@clerk/nextjs";

const DesktopNavbar = async () => {
    const user = await currentUser();
    // console.log("user is here: ", user?.emailAddresses[0].emailAddress);

    return (
        <div className="hidden md:flex items-center space-x-4">
            <ModeToggle />

            <Button
                variant={"ghost"}
                className="flex items-center gap-2"
                asChild
            >
                <Link href={"/"}>
                    <HomeIcon className="size-4" />
                    <span className="hidden lg:inline">Home</span>
                </Link>
            </Button>

            {user ? (
                <>
                    <Button
                        variant={"ghost"}
                        className="flex items-center gap-2"
                        asChild
                    >
                        <Link href={"/notifications"}>
                            <BellIcon className="size-4" />
                            <span className="hidden lg:inline">
                                Notifications
                            </span>
                        </Link>
                    </Button>
                    <Button
                        variant={"ghost"}
                        className="flex items-center gap-2"
                        asChild
                    >
                        <Link
                            href={`/profile/${
                                user.username ??
                                user.emailAddresses[0].emailAddress.split(
                                    "@"
                                )[0]
                            }`}
                        >
                            <UserIcon className="size-4" />
                            <span className="hidden lg:inline">Profile</span>
                        </Link>
                    </Button>
                    <UserButton />
                </>
            ) : (
                <SignInButton mode="modal">
                    <Button variant={"default"}>Sign In</Button>
                </SignInButton>
            )}
        </div>
    );
};

export default DesktopNavbar;
