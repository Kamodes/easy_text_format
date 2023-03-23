"use client";
import { Chapter } from "@/components/chapter";
import { Section } from "@/components/section";
import { useState } from "react";

export default function Page() {
  const [section, setSection] = useState<number[]>([1]);
  return (
    <div className="mx-4">
      <h2 className="">文章作成</h2>
      <p className="mt-6 border-b-2">文章のタイトル</p>
      <input
        type="text"
        placeholder="文章のタイトルを入力してください"
        className="input input-bordered w-full max-w-xs mt-10"
      />
      <div className="flex flex-col">
        {section.map((chapter, idx) => {
          return (
            <Chapter
              key={idx}
              onClick={() => {
                setSection([...section, 0]);
              }}
              className="mt-4"
            >
              {[...Array(chapter)].map((_, index) => {
                return (
                  <Section
                    key={index}
                    onClick={() => {
                      setSection([
                        ...section.slice(0, idx),
                        section[idx] + 1,
                        ...section.slice(idx + 1),
                      ]);
                    }}
                    className="mt-4"
                  />
                );
              })}
            </Chapter>
          );
        })}
      </div>
    </div>
  );
}
