import React from "react";

interface PaginationProps {
    currentPage: number;
    imagesPerPage: number;
    totalPages: number;
    setCurrentPage: (page: number) => void;
}
function Pagination({
    currentPage,
    totalPages,
    setCurrentPage,
}: PaginationProps) {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    const handleClick = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const handlePreviousClick = () => {
        if (currentPage === 1) {
            return;
        } else {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage === totalPages) {
            return;
        } else {
            setCurrentPage(currentPage + 1);
        }
    };

    const renderPageNumbers = pageNumbers.map((page) => (
        <p
            key={page}
            className={`px-2 pt-3 mr-4 text-sm font-medium leading-none border-t border-transparent cursor-pointer ${
                currentPage === page
                    ? "text-indigo-700 border-indigo-400"
                    : "text-gray-600 hover:text-indigo-700 hover:border-indigo-400"
            }`}
            onClick={() => handleClick(page)}>
            {page}
        </p>
    ));

    return (
        <div className="pagination ">
            <div className="flex items-center justify-center h-full px-4 h-w lg:px-0 sm:px-6">
                <div className="flex items-center justify-between h-full border-t border-gray-200 lg:w-3/5">
                    <div
                        className={`flex items-center pt-3 text-gray-600 cursor-pointer ${
                            currentPage === 1
                                ? "opacity-50 cursor-not-allowed"
                                : "cursor-pointer hover:text-indigo-700"
                        }`}
                        onClick={() => handlePreviousClick()}>
                        <svg
                            width="14"
                            height="8"
                            viewBox="0 0 14 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.1665 4H12.8332"
                                stroke="currentColor"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M1.1665 4L4.49984 7.33333"
                                stroke="currentColor"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M1.1665 4.00002L4.49984 0.666687"
                                stroke="currentColor"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <p className="ml-3 text-sm font-medium leading-none ">
                            Previous
                        </p>
                    </div>
                    <div className="hidden sm:flex">{renderPageNumbers}</div>
                    <div
                        className={`flex items-center pt-3 text-gray-600 cursor-pointer ${
                            currentPage === totalPages
                                ? "opacity-50 cursor-not-allowed"
                                : "cursor-pointer hover:text-indigo-700"
                        }`}
                        onClick={() => handleNextClick()}>
                        <p className="mr-3 text-sm font-medium leading-none">
                            Next
                        </p>
                        <svg
                            width="14"
                            height="8"
                            viewBox="0 0 14 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.1665 4H12.8332"
                                stroke="currentColor"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M9.5 7.33333L12.8333 4"
                                stroke="currentColor"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M9.5 0.666687L12.8333 4.00002"
                                stroke="currentColor"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pagination;
