"use client";
import React, { useEffect, useState, useRef } from "react";

import { uploadImage } from "@components/items/server-items/Handle";

const TextEditor = ({ initialValue, onChange }: any) => {
  const [editorData, setEditorData] = useState(initialValue);
  const editorRef = useRef<any>();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const { CKEditor, ClassicEditor }: any = editorRef.current || {};

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };
    setEditorLoaded(true);
  }, []);

  useEffect(() => {
    setEditorData(initialValue);
  }, [initialValue]);

  function uploadAdapter(loader: any) {
    return {
      upload: () => {
        return loader.file
          .then((file: any) => {
            return uploadImage(file, "editor")
              .then((uploadedFileUrl: any) => {
                return {
                  default: uploadedFileUrl,
                };
              })
              .catch((error: any) => {
                console.error("Lỗi khi xử lý kết quả tải lên:", error);
                throw error;
              });
          })
          .catch((error: any) => {
            console.error("Lỗi tải lên tệp tin:", error);
            throw error;
          });
      },
    };
  }

  function uploadPlugin(editor: any) {
    editor.plugins.get("FileRepository").createUploadAdapter = (
      loader: any
    ) => {
      return uploadAdapter(loader);
    };
  }

  return (
    <div>
      {editorLoaded ? (
        <CKEditor
          editor={ClassicEditor}
          config={{ extraPlugins: [uploadPlugin] }}
          data={editorData}
          onChange={(event: any, editor: any) => {
            const data = editor.getData();
            setEditorData(data);
            onChange(data);
          }}
        />
      ) : (
        "loading..."
      )}
    </div>
  );
};

export default TextEditor;
