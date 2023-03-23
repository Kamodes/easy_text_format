import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";

export const Chapter = ({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick: any;
  className?: string;
}) => {
  return (
    <div className={className}>
      <div className={`flex flex-col items-center`}>
        <input
          type="text"
          placeholder="章のタイトルを入力してください"
          className="input input-bordered w-full max-w-xs border"
        />
        <textarea
          className="textarea textarea-bordered mt-2 max-w-4xl w-full"
          placeholder="章の内容を入力してください"
        ></textarea>
        {children}
        <button className="btn gap-2 flex border mt-2" onClick={onClick}>
          <AiFillPlusCircle className="h-6 w-6" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
          章を追加する
        </button>
      </div>
    </div>
  );
};
