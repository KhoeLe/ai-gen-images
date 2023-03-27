import Image from "next/image";
import Link from "next/link";

function Header() {
    return (
        <header className="top-0 flex justify-between p-5 shadow-md stick bg-white-z-50">
            {/* left */}
            <div className="flex items-center space-x-2">
                <Image
                    src="https://cdn.hashnode.com/res/hashnode/image/upload/v1679496404723/ng7bBSxaj.png"
                    alt="Chat GPT Logo"
                    width={80}
                    height={80}
                />

                <div>
                    <h1 className="font-bold ">
                        The KhoeLe <span className="text-violet-500">AI</span>{" "}
                        Images Generator <p className="text-red-300">Be-Real</p>
                    </h1>
                    <h2 className="text-xs">
                        Power by DALL E 2, Chat GPT 4 & AWS(Lambda, S3, API Gateway)
                    </h2>
                </div>
            </div>

            {/* right */}
            <div className="flex items-center text-xs text-gray-500 divide-x md:text-base">
                <Link
                    className="px-2 font-light text-right"
                    href={"https://khoele.hashnode.dev/"}
                    target={"_blank"}>
                    Real me more on Hashnode Blog Khoe Le
                </Link>
                <Link
                    // Use target="_blank" to open the link in a new tab
                    className="px-2 font-light"
                    target={"_blank"}
                    href={"https://github.com/KhoeLe/ai-gen-images"}>
                    Git Hub Repo
                </Link>
            </div>
        </header>
    );
}

export default Header;
