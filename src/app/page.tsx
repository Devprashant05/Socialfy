import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";

export default function Home() {
    return (
        <div className="m-4">
            <h1>Home page content</h1>
        </div>
    );
}
