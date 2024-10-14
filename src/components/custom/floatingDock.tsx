"use client";


import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconExchange,
    IconFolders,
    IconHome,
    IconNewSection,
    IconPhone,
    IconTerminal2,
    IconUser,
} from "@tabler/icons-react";


export function FloatingDockDemo() {
    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-700 dark:text-neutral-300" />
            ),
            href: "#home",
        },

        {
            title: "About Me",
            icon: (
                <IconUser className="h-full w-full text-neutral-700 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Skills",
            icon: (
                <IconTerminal2 className="h-full w-full text-neutral-700 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Projects",
            icon: (
                <IconFolders className="h-full w-full text-neutral-700 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Contact",
            icon: (
                <IconPhone className="h-full w-full text-neutral-700 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-700 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "LinkedIn",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-neutral-700 dark:text-neutral-300" />
            ),
            href: "#",
        }
    ];
    return (
        <div className="sticky flex items-center justify-center w-full">
            <FloatingDock
                items={links}
            />
        </div>
    );
}
