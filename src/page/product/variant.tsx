import Pagination from "@/components/pagination/pagination";
import useGetProductVariantsLists from "@/services/products/get-product-variant";
import dayjs from "dayjs";
import { ArrowLeftIcon } from "lucide-react";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
const ProductDetail = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    page: "1",
    limit: "20",
  });
  const path = useLocation().pathname;
  const productId = path.split("/").pop();

  const { data: variantData, isLoading } = useGetProductVariantsLists({
    itemsPerPage: Number(searchParams.get("limit") || "20"),
    page: Number(searchParams.get("page") || 1),
    id: productId,
  });

  const handleVariantClick = (variantId: number) => {
    navigate(`/product/${productId}/variant/${variantId}`);
  };

  const paginationData = {
    totalItems: variantData?.data.totalItems,
    totalPages: variantData?.data.totalPages,
    limit: variantData?.data.limit,
    currentPage: variantData?.data.currPage,
    hasNextPage: variantData?.data.hasNextPage,
  };

  const navigate = useNavigate();

  return (
    <main className="flex flex-col gap-6 ">
      <div>
        <p
          onClick={() => navigate(-1)}
          className="flex gap-4 items-center cursor-pointer text-blue-600 py-6"
        >
          <span>
            <ArrowLeftIcon size={24} />
          </span>
          Go back
        </p>
        <p className="text-black px-3  text-2xl font-semibold  ">
          Variant Lists
        </p>
      </div>

      <div className="border border-blue-100  ">
        <div className="min-h-[calc(100vh-180px)] flex flex-col    justify-between">
          <table className="table-auto w-full   text-left">
            <thead>
              <tr className="bg-blue-500  text-white">
                <th className="w-[30px]">
                  <p className="text-white">S.N.</p>
                </th>
                <th className="min-w-max">
                  <div className="flex">
                    <p className="text-white">Variant Name</p>
                  </div>
                </th>
                <th className="min-w-max">
                  <div className="flex">
                    <p className="text-white">Visit Website</p>
                  </div>
                </th>
                <th className="min-w-max">
                  <div className="flex">
                    <p className="text-white">First Scrap Date</p>
                  </div>
                </th>
              </tr>
            </thead>
            {isLoading ? (
              <p>Loading....</p>
            ) : (
              <tbody>
                {variantData?.data.items.map((list, index) => (
                  <tr
                    onClick={() => handleVariantClick(list.id)}
                    key={list.id}
                    className=" cursor-pointer  border-b border-blue-100 hover:bg-slate-100"
                  >
                    <td>{index + 1}.</td>
                    <td>
                      <div className="flex gap-4 break-words  items-center">
                        {list.variantId}
                      </div>
                    </td>
                    <td onClick={(e) => e.stopPropagation()}>
                      <Link
                        to={list.url}
                        className="flex gap-4 text-blue-700 underline px-5 items-center"
                      >
                        Open Link
                      </Link>
                    </td>
                    <td>{dayjs(list.createdAt).format("DD MMM, YYYY")}</td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
          <div className="p-4">
            <Pagination
              className="mt-10"
              searchParams={searchParams}
              setSearchParams={setSearchParams}
              paginationInfo={paginationData}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
