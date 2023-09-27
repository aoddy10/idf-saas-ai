import Navbar from "@/components/navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" h-full relative">
      {/* sidebar */}
      <div className="hidden h-full md:flex md:w-sidebar md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900"></div>

      {/* body */}
      <div className="pl-sidebar">
        <Navbar />

        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;