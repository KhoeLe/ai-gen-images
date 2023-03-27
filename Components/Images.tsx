"use client";

import fetchImages from "@/lib/fetchImages";
import Image from "next/image";
import useSWR from "swr";

interface ImageType {
    url: string;
    name: string;
}

function Images() {
    //fetching data from aws s3
    const {
        data: images,
        isLoading,
        mutate: refreshImages,
        isValidating,
    } = useSWR("/api/getImages", fetchImages, { revalidateOnFocus: false });


    return (
        <div>
            {
                <button
                    className="fixed z-20 px-5 py-3 font-bold text-white rounded-md bottom-10 right-10 bg-violet-400/90 hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-400"
                    onClick={() => refreshImages(images)}>
                    {!isLoading && isValidating
                        ? "Refreshing....."
                        : "Refresh Images"}
                </button>
            }
            {isLoading ? (
                <p className="text-center animate-pulse pb-7 font-extralight">
                    Loading <span className="text-violet-400">AI</span>{" "}
                    Generated Images......
                </p>
            ) : null}

            <div className="grid gap-4 px-0 grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 md:px-10">
                {images?.imagesURL?.map((image: ImageType, i: number) => (
                    <div
                        className={` relative cursor-help ${
                            i === 0 && "md:col-span-2 md:row-span-2"
                        } hover:scale-[103%] transition-transform duration-200 ease-in-out`}
                        key={image.name}>
                        <div className="absolute z-10 flex items-center justify-center w-full h-full transition-opacity duration-200 bg-white opacity-0 hover:opacity-80">
                            <p className="p-5 text-lg font-light text-center">
                                {image.name
                                    .split("_")
                                    .shift()
                                    ?.toString()
                                    .split(".")
                                    .shift()}
                            </p>
                        </div>
                        <Image
                            src={image.url}
                            alt={image.name}
                            width={800}
                            height={800}
                            className="z-10 w-full rounded-sm shadow-2xl drop-shadow-lg"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Images;
