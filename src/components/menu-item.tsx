import { cn } from "@/lib/utils";

type Params = {title:string,sub:string,show:boolean}
export default function MenuItem({title,sub,show}:Params) {
  return (
    <>
      <div className={cn(" hover:blur-[1.5px] duration-400 cursor-pointer", {
        "opacity-0 translate-x-10 ":!show
      })}>
        <p className="bg-linear-to-r from-primary via-blue-950 to-amber-700 bg-clip-text text-3xl text-transparent inline font-serif tracking-[4px]">{title}</p>
        <p className="font-serif -mt-2">{sub}</p>
      </div>
    </>
  );
}
