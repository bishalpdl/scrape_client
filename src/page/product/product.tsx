import useGetProductLists from "@/services/products/get-product";
import { useNavigate, useSearchParams } from "react-router-dom";
import Pagination from "@/components/pagination/pagination";
import dayjs from "dayjs";

const Product = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    page: "1",
    limit: "20",
  });

  const navigate = useNavigate();
  const { data: productData, isLoading } = useGetProductLists({
    itemsPerPage: Number(searchParams.get("limit") || "20"),
    page: Number(searchParams.get("page") || 1),
  });

  const paginationData = {
    totalItems: productData?.data.totalItems,
    totalPages: productData?.data.totalPages,
    limit: productData?.data.limit,
    currentPage: productData?.data.currPage,
    hasNextPage: productData?.data.hasNextPage,
  };

  const handleClick = (id: number) => {
    navigate(`/product/${id}`);
  };
  return (
    <main className="flex flex-col  gap-8 ">
      <p className="text-black px-3 py-4 text-2xl font-semibold  ">Product</p>
      <div className="border border-blue-100  ">
        <div className="min-h-[calc(100vh-130px)]  flex flex-col    justify-between">
          <table className="table-auto w-full   text-left">
            <thead>
              <tr className="bg-blue-500  text-white">
                <th className="w-[30px]">
                  <p className="text-white">S.N.</p>
                </th>
                <th className="min-w-max">
                  <div className="flex">
                    <p className="text-white">Product Name</p>
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
              <p>Loading...</p>
            ) : (
              <tbody>
                {productData?.data.items.map((list, index) => (
                  <tr
                    onClick={() => handleClick(list.id)}
                    key={list.id}
                    className="cursor-pointer   border-b border-blue-100 hover:bg-slate-100"
                  >
                    <td>{index + 1}.</td>
                    <td>
                      <div className="flex gap-4 items-center">
                        {list.productSlug}
                      </div>
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

export default Product;
