"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useHasMounted } from "@/hooks/use-has-mounted";

export function ThemeToggle() {
	const { setTheme, resolvedTheme } = useTheme();
    const hasMounted = useHasMounted();

    const toggleTheme = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    }

    if (!hasMounted){
        return null;
    }

	return (
        <Button variant="link" size="icon" className="h-auto" onClick={toggleTheme} aria-label="Switch Theme">
            { resolvedTheme === "dark" ? <MoonIcon /> : <SunIcon /> }
        </Button>
	);
}
