
import { Navigation } from "@/components/navigation";
import { Headerlogo } from "./header-logo";

export const Header = () => {
  return (
    <header className="bg-gradient-to-b from-[#543A14] to-[#462B28] text-white px-4 py-8 lg:px-14 pb-36">
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full flex items-center justify-between mb-16">
          <div className="flex items-center lg:gap-x-16">
            <Headerlogo />
            <Navigation />
          </div>
        </div>
      </div>
    </header>
  );
};
