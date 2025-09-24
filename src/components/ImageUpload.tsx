"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import { error } from "console";
import { XIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

interface ImageUploadProps {
    onChange: (url: string) => void;
    value: string;
    endpoint: "postImage";
}

const ImageUpload = ({ endpoint, onChange, value }: ImageUploadProps) => {
    if (value) {
        return (
            <div className="relative size-40">
                <img
                    src={value}
                    alt="uploaded image"
                    className="rounded-md size-40 object-cover"
                    loading="lazy"
                />
                <button
                    onClick={() => onChange("")}
                    className="absolute top-0 right-0 p-1 bg-red-500 rounded-full shadow-sm"
                >
                    <XIcon className="size-4 text-white" />
                </button>
            </div>
        );
    }

    return (
        <UploadDropzone
            endpoint={endpoint}
            onClientUploadComplete={(res) => {
                onChange(res?.[0].ufsUrl);
            }}
            onUploadError={(error: Error) => {
                console.log(error);
            }}
        />
    );
};

export default ImageUpload;
