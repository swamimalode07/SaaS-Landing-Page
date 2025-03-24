import { twMerge } from "tailwind-merge";

export default function Pointer( props :{
    name:string;
    color:"red"|"blue";
} ){

    const {name,color}=props

    return (
        <div className="relative">
           <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="modern-pointer feather feather-mouse-pointer text-white size-5"
        >
            <path d="M12 8l14 40 7-15 15-7z" />
            <path d="M26 48l7-15 15-7" />
        </svg>

            <div className="absolute top-full left-full">
                <div className={twMerge("inline-flex rounded-full font-bold text-sm bg-blue-500 px-2 rounded-tl-none", color ==="red" && "bg-red-500")}>
                        {name}
                </div>
            </div>

        </div> 
    )
}