import { Button } from "@/components/ui/button";

const LandingPage = () => {
  return (
    <>
      <div>Landing Page - Un protected.</div>
      <a href="/sign-in">
        <Button>Login</Button>
      </a>
    </>
  );
};

export default LandingPage;
