import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <header className="absolute top-2 left-2 m-4 font-bold text-2xl text-black">
        ELK STACK TEST
      </header>
      <div className="absolute top-30 right-25 z-0">
      <Image
            src="/elk-stack-logo.png"
            alt="elk-stack-logo Image"
            width={499}
            height={605}
          />
      </div>
      <div className="flex justify-between w-full items-center font-mono text-sm lg:flex">
        <div className="text-left pl-6 font-sans">
          <br /> <br /> <br /> <br /> <br /> <br />
          <h1 className="w-full font-bold text-4xl text-black">Front-end test ELK Stack</h1>
          <p className="mt-6 text-black text-justify text-base">
            Đây là một cái text nói gì đó, <br /> đăng nhập để biết bí mật của trang web <br />
            Một nửa của sự thật không phải sự thật. <br /> Nhưng điều quan trọng nhất đó là, <br /> phải có một trái tim kiên cường
          </p> 
          <Link legacyBehavior href="/sign-up">
            <a className="mt-8 inline-block bg-blue-500 text-white px-32 py-3 rounded">Tiếp tục</a>
          </Link>
        </div>
      </div>
    </main>
  );
}
