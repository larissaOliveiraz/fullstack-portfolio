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
import postgresIcon from "../../public/images/svg/postgresql-original.svg";
import mysqlIcon from "../../public/images/svg/mysql-original.svg";

export default function Home() {
  return (
    <main className="h-[calc(100%-5.75rem)] flex items-center justify-between pb-12 mx-8">
      <div className="w-[30rem]">
        <Image src={homeTech} alt="" />
        <p className="flex justify-center w-full">
          <a href="https://www.freepik.com/free-vector/innovation-concept-illustration_13717657.htm#query=technology%20illustration&position=0&from_view=keyword&track=ais">
            Image by storyset
          </a>
          on Freepik
        </p>
      </div>

      <div>
        <h1 className="text-[2rem] font-semibold">Fullstack Development</h1>
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
              <Image src={postgresIcon} alt="" />
              <Image src={mysqlIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
