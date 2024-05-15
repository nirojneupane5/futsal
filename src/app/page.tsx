import sabin from "../../public/players/sabin.jpg";
import Image from "next/image";
import { player } from "./player";
export default function Home() {
  return (
    <>
      <div className="max-w-[1320px] mx-auto">
        <h1 className="text-center text-2xl font-bold pt-4 text-black">
          Player List
        </h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 mx-4 sm:mx-0 pt-2">
          {player &&
            player.map((info, index) => (
              <div className="shadow-lg rounded-md text-center" key={index}>
                <div className="overflow-hidden">
                  <Image
                    src={info.img}
                    alt={info.name}
                    className="object-cover md:h-52 h-64 object-top w-full hover:scale-150 duration-1000"
                    height={200}
                    width={300}
                  />
                </div>
                <h1 className="text-xl font-bold text-black py-2">
                  Name: {info.name}
                </h1>
                <p className="text-xl font-semibold text-black">
                  Position: {info.position}
                </p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
