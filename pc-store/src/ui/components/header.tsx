"use client";

import { logoURL } from "../prev-logo";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="lg:w-full w-72 m-auto px-5 py-3">
      {/* Top Header */}
      <div className="flex flex-row gap-1.5 justify-between items-center">
        <Image width={200} height={150} src={logoURL} alt="PC-Store Logo" className="pr-2 rounded-md" />

        <div className="flex items-center gap-1">
          {Array.from({ length: 4 }).map((_, idx) => (
            <div key={idx} className="p-1 flex items-center gap-0.5 rounded-sm bg-secondary">
              <Image width={50} height={50} src="/placeholder/user-icon.png" alt="User Icon" />
              <span>Teste {idx + 1}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Header */}
      <div className="flex flex-row justify-center-safe"></div>
    </header>
  );
};
