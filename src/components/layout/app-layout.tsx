import Sidebar from "./sidebar";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full mx-auto">
      <div className=" flex gap-[6px] lg:gap-[32px]">
        <Sidebar className="max-w-[200px]  w-full h-screen flex-none sticky top-0" />

        <div className="grow   mr-1.5 lg:mr-8 w-full overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
