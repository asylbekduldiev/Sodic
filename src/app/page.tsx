import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
       <SignedOut>
            <SignInButton mode = "modal"/>
              <Button>Sign in</Button>
              <SignInButton/>
       </SignedOut>

       <SignedIn>
           <UserButton />
       </SignedIn>
       <ModeToggle/>
    </div>
  );
}
