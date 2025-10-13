import { ClassNameValue } from "tailwind-merge";

type Params = {className?:ClassNameValue};
export default function X({className}: Params) {
  return (
    <>
      <svg className={className?.toString()} xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 60 60">
        <g id="share_x.svg">
          <path
            id="x"
            d="M34.1,26.7l15.9-18.5h-3.8l-13.8,16-11-16h-12.7l16.7,24.2-16.7,19.4h3.8l14.6-16.9,11.6,16.9h12.7l-17.3-25.1h0ZM28.9,32.6l-1.7-2.4L13.8,11h5.8l10.8,15.5,1.7,2.4,14.1,20.1h-5.8l-11.5-16.4h0Z"
          ></path>
        </g>
      </svg>
    </>
  );
}
