"use client"
import Image from "next/image";
import lightImage from "@/public/images/error/light-401.png"
import darkImage from "@/public/images/error/dark-401.png"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTheme } from "next-themes";

const UnauthorizedError = () => {
  const { theme } = useTheme();
  return (
    <div className='min-h-screen  overflow-y-auto flex justify-center items-center p-10'>
      <div className='w-full flex flex-col items-center'>
        <div className="max-w-[542px]">
          <Image src={theme === "dark" ? darkImage : lightImage} alt="error image" className="w-full h-full object-cover" priority={true} />
        </div>
        <div className="mt-16 text-center">
          <div className="text-2xl md:text-4xl lg:text-5xl font-semibold text-default-900">You are not Authorized</div>
          <div className="mt-3 text-default-600 text-sm md:text-base">
            You are missing the required rights to be able to access <br /> this page
          </div>
          <Button asChild className="mt-9  md:min-w-[300px]" size="lg">
            <Link href="/en">Go to Homepage</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UnauthorizedError;