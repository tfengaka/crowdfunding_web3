import React, { useMemo } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import ImageUploader from 'quill-image-uploader';
import 'react-quill/dist/quill.snow.css';
Quill.register('modules/imageUploader', ImageUploader);
function TextEditor({ value, placeholder, onChange }) {
  const modules = useMemo(
    () => ({
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote'],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ['link', 'image'],
      ],
      imageUploader: {
        upload: async (file) => {
          console.log(file);
        },
      },
    }),
    []
  );

  return (
    <ReactQuill
      placeholder={placeholder}
      modules={modules}
      theme="snow"
      value={value}
      onChange={onChange}
      className="border-2 rounded-lg border-[#3A3A43]"
    />
  );
}

export default TextEditor;
