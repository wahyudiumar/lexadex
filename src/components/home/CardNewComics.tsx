import Image from "next/image";
import Link from "next/link";

export function CardNewComics() {
  return (
    <>
      <Link href="" className="w-full">
        <div className="relative w-full h-64">
          <Image
            src={`https://mangadex.org/covers/d2d0b8ea-4dfc-4d72-b584-5b26380f9bed/3ac79714-ef69-4274-a018-75a31c76fca8.png`}
            alt="Title Image"
            className="rounded-md"
            fill
          />
        </div>
        <div className="mt-2 text-center">
          <h4 className="font-bold text-neutral-300">
            Koori no Jouheki (Book Version)
          </h4>

          <div className="text-start flex flex-col-reverse mt-3 gap-y-2">
            <Link
              href=""
              className="py-1.5 px-3 rounded-md text-sm text-start flex  items-center justify-between bg-neutral-800"
            >
              <p>Chapter 1</p>
              <span className="text-[11px] text-neutral-400">1 hours</span>
            </Link>
            <Link
              href=""
              className="py-1.5 px-3 rounded-md text-sm bg-neutral-800 flex justify-between items-center"
            >
              <div className="flex gap-x-1.5">
                <p>Chapter 2</p>
                <span className="text-[10px] -mt-1 font-semibold text-yellow-500">
                  UP
                </span>
              </div>

              <span className="text-[11px] text-neutral-400">1 hours</span>
            </Link>
          </div>
        </div>
      </Link>
    </>
  );
}
