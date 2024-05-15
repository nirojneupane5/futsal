import sabin from "../../public/players/sabin.jpg";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <div className="max-w-[1320px] mx-auto">
        <h1 className="text-center text-2xl font-bold pt-4 text-black">
          Player List
        </h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 py-2">
          <div className="shadow-lg rounded-md text-center">
            <div className="overflow-hidden">
              <Image
                src={sabin}
                alt="sabin profile"
                className="object-cover h-52 w-full hover:scale-150 duration-1000 hover:object-top"
              />
            </div>
            <h1 className="text-xl font-bold text-black py-2">
              Name: Sabin Neupane
            </h1>
            <p className="text-xl font-semibold text-black">
              Position: Forward/Keeper
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
