import Image from "next/image";
import { useState } from "react";

export default function UIWidget() {
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = ["/ui-shots/dashboard.png", "/ui-shots/account widget.png"];

  return (
    <div className="p-1 rounded-2xl overflow-auto bg-gradient-to-b from-white to-slate-50 border-slate-200 shadow-sm border flex">
      {images.map((image, index) => {
        return (
          <Image
            className="rounded-xl object-cover"
            src={image}
            width={500}
            height={500}
            key={index}
            alt=""
          />
        );
      })}
    </div>
  );
}
