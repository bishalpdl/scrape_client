import toast from "react-hot-toast";
import http from "@/lib/http";
import { useQuery } from "react-query";

const getProductLists = async ({
  itemsPerPage,
  page,
}: {
  itemsPerPage?: string | number;
  page?: number;
}): Promise<IProductLists | undefined> => {
  try {
    const response = await http.get("api/v1/admin/product", {
      params: {
        limit: itemsPerPage,
        page,
      },
    });
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    toast.error(e.response?.data?.message || "Something went wrong");
    return;
  }
};

const useGetProductLists = ({
  itemsPerPage,
  page,
}: {
  itemsPerPage?: string | number;
  page?: number;
}) => {
  return useQuery({
    queryKey: ["product", itemsPerPage, page],
    queryFn: () => getProductLists({ itemsPerPage, page }),
  });
};

export default useGetProductLists;
