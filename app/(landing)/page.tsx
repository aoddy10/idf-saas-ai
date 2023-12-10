import { Button } from "@/components/ui/button";

const LandingPage = () => {
  return (
    <>
      <div>Landing Page - Un protected.</div>
      <div>
        <a href="/sign-in">
          <Button>Sign In</Button>
        </a>
        <a href="/sign-up">
          <Button>Sign Up</Button>
        </a>
      </div>
    </>
  );
};

export default LandingPage;
