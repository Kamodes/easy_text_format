"use client";
import { Chapter } from "@/components/chapter";
import { Section } from "@/components/section";
import {
  Document,
  StyleSheet,
  Page as PdfPage,
  View,
  Text,
  PDFViewer,
} from "@react-pdf/renderer";
import { useState } from "react";

export default function Page() {
  type sectionType = { title: string; text: string };
  const [chapters, setChapters] = useState<
    { title: string; text: string; section: sectionType[] }[]
  >([{ title: "", text: "", section: [{ title: "", text: "" }] }]);
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#E4E4E4",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
  });
  const MyDocument = () => {
    return (
      <Document>
        <PdfPage size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>Section #1</Text>
          </View>
          <View style={styles.section}>
            <Text>Section #2</Text>
          </View>
        </PdfPage>
      </Document>
    );
  };
  return (
    <div className="mx-4">
      <h2>文章作成</h2>
      <p className="mt-6 border-b-2">文章のタイトル</p>
      <input
        type="text"
        placeholder="文章のタイトルを入力してください"
        className="input input-bordered w-full max-w-xs mt-10"
      />
      <div className="flex flex-col">
        {chapters.map((chapter, idx) => {
          return (
            <Chapter
              key={idx}
              onClick={() => {
                setChapters([
                  ...chapters,
                  { title: "", text: "", section: [] },
                ]);
              }}
              onChange={(e: any) => {
                setChapters([
                  ...chapters.slice(0, idx),
                  { ...chapter, text: e.target.value },
                  ...chapters.slice(idx + 1),
                ]);
              }}
              className="mt-4"
            >
              {chapter.section.map((sectionItem, index) => {
                return (
                  <Section
                    key={index}
                    onClick={() => {
                      setChapters([
                        ...chapters.slice(0, idx),
                        {
                          title: chapter.title,
                          text: chapter.text,
                          section: [
                            ...chapter.section.slice(0, index),
                            { title: "", text: "" },
                            ...chapter.section.slice(index + 1),
                          ],
                        },
                        ...chapters.slice(idx + 1),
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
      <button className="btn" onClick={() => {}}>
        PDFに出力する
      </button>
    </div>
  );
}
