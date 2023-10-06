import Image from "next/image";

import homeTech from "../../public/images/home-tech.jpg";
import javascriptIcon from "../../public/images/svg/javascript-original.svg";
import typescriptIcon from "../../public/images/svg/typescript-original.svg";
import javaIcon from "../../public/images/svg/java-original.svg";
import reactIcon from "../../public/images/svg/react-original.svg";
import nextIcon from "../../public/images/svg/nextjs-original.svg";
import tailwindIcon from "../../public/images/svg/tailwindcss-original.svg";
import nodeIcon from "../../public/images/svg/nodejs-original.svg";
import expressIcon from "../../public/images/svg/express-original.svg";
import nestIcon from "../../public/images/svg/nestjs-original.svg";
import springIcon from "../../public/images/svg/spring-original.svg";

export default function Home() {
  return (
    <main className="h-[calc(100%-5.25rem)] flex items-center justify-between pb-24">
      <div className="w-[30rem]">
        <Image src={homeTech} alt="" />
      </div>

      <div>
        <h1 className="text-[2rem] font-semibold">Devenvolvimento Fullstack</h1>
        <hr className="h-[2px] bg-main" />
        <div className="flex flex-col gap-5 mt-3">
          <div>
            <p className="mb-1 text-xl">Programming languages</p>
            <div className="w-[3rem] flex gap-4">
              <Image src={javascriptIcon} alt="" />
              <Image src={typescriptIcon} alt="" />
              <Image src={javaIcon} alt="" />
            </div>
          </div>
          <div>
            <p className="mb-1 text-xl">Front-end Stack</p>
            <div className="w-[3rem] flex gap-4">
              <Image src={reactIcon} alt="" />
              <Image src={nextIcon} alt="" />
              <Image src={tailwindIcon} alt="" />
            </div>
          </div>
          <div>
            <p className="mb-1 text-xl">Back-end Stack</p>
            <div className="w-[3rem] flex gap-4">
              <Image src={nodeIcon} alt="" />
              <Image src={expressIcon} alt="" />
              <Image src={nestIcon} alt="" />
              <Image src={springIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
