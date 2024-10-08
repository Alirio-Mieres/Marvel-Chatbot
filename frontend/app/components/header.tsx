import Image from "next/image";

export default function Header() {
  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:p-4">
      <a
          href="https://www.marvel.com/"
          className="flex items-center justify-center font-nunito text-lg font-bold gap-2"
        >
          <span></span>
          <Image
            src="/marvel_logo.png"
            alt="Marvel Logo"
            width={150}
            height={150}
            priority

          />
        </a>
      </div>
      <div className="fixed bottom-0 left-0 mb-4 flex h-auto w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:w-auto lg:bg-none lg:mb-0">
        <a
          href="https://github.com/Alirio-Mieres/Marvel-Chatbot"
          className="flex items-center justify-center font-nunito text-lg font-bold gap-2"
        >
          <span></span>
          <Image
            src="/github_logo.png"
            alt="Github Logo"
            width={100}
            height={100}
            priority
          />
        </a>
      </div>
    </div>
  );
}
