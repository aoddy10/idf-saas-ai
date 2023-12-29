import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { getApiLimitCount } from "@/lib/api-limit";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const apiLimitCount = await getApiLimitCount();

  return (
    <div className=" h-full relative">
      {/* sidebar */}
      <div className="hidden h-full md:flex md:w-sidebar md:flex-col md:fixed md:inset-y-0 bg-gray-900">
        <Sidebar apiLimitCount={apiLimitCount} />
      </div>

      {/* body */}
      <div className="md:pl-sidebar">
        <Navbar apiLimitCount={apiLimitCount} />

        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
