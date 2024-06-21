import cn from "classnames";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

interface PaginationProps {
  className: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  searchParams: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setSearchParams: any;
  paginationInfo: Pagination | undefined;
}

function Pagination({
  className,
  searchParams,
  setSearchParams,
  paginationInfo,
}: PaginationProps) {
  const totalPages = paginationInfo && paginationInfo.totalPages;
  const totalItems = paginationInfo && paginationInfo.totalItems;
  const hasNext = paginationInfo && paginationInfo.hasNextPage;
  // const hasPrev = paginationInfo && paginationInfo.hasPrev
  const currentPage =
    paginationInfo?.currPage ?? parseInt(searchParams.get("page") || "1");
  const limit = paginationInfo?.limit ?? parseInt(searchParams.get("limit") || "20");

  return (
    <div className={cn("flex justify-between items-center", className)}>
      <div className="flex gap-4 items-center">
        <p className="text-sm  text-state-600">Items per page : </p>

        <select
          onChange={(e) =>
            setSearchParams({
              page: "1",
              limit: parseInt(e.target.value) * 10,
            })
          }
          className="input cursor-pointer w-[80px]"
        >
          {Array.from({ length: 5 }).map((_, idx) => (
            <option
              selected={limit == (idx + 1) * 10}
              key={idx}
              value={idx + 1}
            >
              {(idx + 1) * 10}
            </option>
          ))}
        </select>
        <p className="body-default-semibold text-neutral-800">
          {(currentPage - 1) * limit + 1} -
          {hasNext
            ? currentPage * limit
            : totalItems && Math.min(currentPage * limit, totalItems)}{" "}
          of {totalItems} items
        </p>
      </div>

      <div className="flex gap-4 items-center">
        <select
          onChange={(e) =>
            setSearchParams({
              page: e.target.value,
              limit,
            })
          }
          className="input cursor-pointer w-[80px]"
        >
          {Array.from({ length: Number(totalPages) }).map((_, idx) => (
            <option selected={currentPage == idx + 1} key={idx} value={idx + 1}>
              {idx + 1}
            </option>
          ))}
        </select>

        <p className="text-sm text-state-600"> of {totalPages} page</p>

        <div className="flex gap-2">
          <button
            onClick={() => {
              const prevPage = currentPage - 1;

              setSearchParams({
                page: prevPage.toString(),
                limit,
              });
            }}
            disabled={currentPage === 1}
            className={cn("bg-neutral-100 text-center p-2 rounded-full", {
              "bg-neutral-100 cursor-not-allowed": currentPage === 1,
            })}
          >
            <ChevronLeftIcon
              className={cn("h-5 w-5", {
                "text-state-300": currentPage === 1,
              })}
            />
          </button>

          <button
            onClick={() => {
              const nextPage = currentPage + 1;

              setSearchParams({
                page: nextPage.toString(),
                limit,
              });
            }}
            disabled={currentPage >= Number(totalPages)}
            className={cn("bg-neutral-100 text-center p-2 rounded-full", {
              "bg-neutral-100": currentPage >= Number(totalPages),
            })}
          >
            <ChevronRightIcon
              height={20}
              width={20}
              className={cn("", {
                "bg-neutral-100 cursor-not-allowed":
                  currentPage >= Number(totalPages),
              })}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
