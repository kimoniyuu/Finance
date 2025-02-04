import Link from "next/link";
import Image from "next/image";

export const Headerlogo = () => {
  return (
    <Link href="/">
      <div className="items-center hidden lg:flex">
        <Image src="/logo.svg" alt="alt" width={100} height={100} />
        <p className="font-semibold text-white text-2xl ml-2.5">finance</p>
      </div>
    </Link>
  );
};
