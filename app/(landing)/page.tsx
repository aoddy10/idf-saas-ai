import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs";
import Link from "next/link";

const LandingPage = () => {
  const { userId } = auth();

  return (
    <>
      <div>Landing Page - Un protected.</div>
      {userId ? (
        <div>
          <Link href="/dashboard">
            <Button>Dashboard</Button>
          </Link>
        </div>
      ) : (
        <div>
          <a href="/sign-in">
            <Button>Sign In</Button>
          </a>
          <a href="/sign-up">
            <Button>Sign Up</Button>
          </a>
        </div>
      )}
    </>
  );
};

export default LandingPage;
