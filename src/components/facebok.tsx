import { ClassNameValue } from "tailwind-merge";

type Params = { className?: ClassNameValue };
export default function FaceBook({ className }: Params) {
  return (
    <>
      <svg className={className?.toString()} xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 60 60">
        <g id="share_fb.svg">
          <path
            id="fb"

            d="M60,30.1C60,13.6,46.6.1,30,.1,13.4.1,0,13.5,0,30.1c0,13.8,9.4,25.8,22.8,29.1v-19.9h-6.2v-9.2h6.2v-4c0-10.2,4.6-14.9,14.6-14.9,2.2,0,4.4.3,6.5.7v8.3c-.7,0-1.9-.1-3.5-.1-4.9,0-6.8,1.9-6.8,6.7v3.2h9.8l-1.7,9.2h-8.1v20.6c15-1.8,26.4-14.6,26.4-29.8Z"
          ></path>
        </g>
      </svg>
    </>
  );
}
