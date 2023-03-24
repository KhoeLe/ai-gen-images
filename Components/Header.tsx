import Image from "next/image";
import Link from "next/link";

function Header() {
    return (
        <header className=" flex p-5 justify-between stick top-0 bg-white-z-50 shadow-md">
            {/* left */}
            <div className="flex space-x-2 items-center">
                <Image
                    src="https://links.papareact.com/4t3"
                    alt="Chat GPT Logo"
                    width={30}
                    height={30}
                />

                <div>
                    <h1 className=" font-bold">
                        The KhoeLe <span className="text-violet-500">AI</span>{" "}
                        Images Generator <p className="text-red-300">Be-Real</p>
                    </h1>
                    <h2 className="text-xs">
                        Power by DALL E 2, Chat GPT 4 & Microsoft
                    </h2>
                </div>
            </div>

            {/* right */}
            <div className=" flex text-xs md:text-base divide-x items-center text-gray-500">
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
                    href={"https://github.com/KhoeLe"}>
                    Git Hub Repo
                </Link>
            </div>
        </header>
    );
}

export default Header;
