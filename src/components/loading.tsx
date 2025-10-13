import LoadingLine from "./loading-line";
import Sakura from "./sakura";

export default function Loading() {
  return (
    <>
      <div className="absolute w-50 h-50 animate-spin top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer" style={{animationDuration:'15s'}}>
        <LoadingLine/>
        <Sakura />
      </div>
    </>
  );
}
