import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();

  return (
    <div className=" h-full relative">
      {/* sidebar */}
      <div className="hidden h-full md:flex md:w-sidebar md:flex-col md:fixed md:inset-y-0 bg-gray-900">
        <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      </div>

      {/* body */}
      <div className="md:pl-sidebar">
        <Navbar />

        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
