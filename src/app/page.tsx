import Image from "next/image";

import InstagramForm from "@/components/instagram/InstagramForm";

import { cn } from "@/utils";

const FEATURES_LIST = [
  {
    
  },
  {
    
  },
  {
    
  },
  {
    
  },
  {
   
  },
  {
    title: "",
    text: "",
  },
];

const BENEFITS_LIST = [
  ,
];

const FAQ_LIST = [
  {
    question: "",
    answer:
      "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer:
      "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer:
      "",
  },
  {
    question: "",
    answer: "",
  },
  {
    question: "",
    answer:
      "",
  },
];

export default function HomePage() {
  return (
    <main id="main" className="flex w-full flex-1 flex-col">
      <section
        id="#download"
        className={cn(
          "flex w-full flex-col items-center px-4 py-24 shadow-sm",
          "bg-gradient-to-r from-blue-600 to-purple-600"
        )}
      >
        <h1
          className={cn(
            "py-2 text-center text-2xl font-extrabold text-white sm:text-4xl"
          )}
        >
          Instagram Downloader by Fazi🫰
        </h1>
        <InstagramForm />
        <p className="my-4 text-center text-xs text-white md:text-sm">
          If the download opens a new page, just right click the video and then
          click `Save as video`
        </p>
      </section>

      <div className="mx-auto mb-12 mt-8 flex w-full max-w-3xl flex-col gap-8 px-2 text-sm md:px-4 md:text-base">
        <section id="logo">
          <div className="flex w-full items-center justify-center gap-4">
            <Image
              src={"/images/logo.png"}
              width={300}
              height={300}
              alt="logo"
              className="h-28 w-28 md:h-37 md:w-40"
            />
            <div
              aria-label="Logo"
              className={cn(
                "flex select-none flex-col items-start text-2xl font-extrabold md:text-5xl",
                "animate-rgb bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 bg-clip-text text-transparent"
              )}
            >
              <span>Instagram Downloader</span>
              <span>By Fazi❤️</span>
            </div>
          </div>
        </section> 
      </div>
    </main>
  );
}
