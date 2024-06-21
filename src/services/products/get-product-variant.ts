import toast from "react-hot-toast";
import http from "@/lib/http";
import { useQuery } from "react-query";

const getProductVariantsLists = async ({
  itemsPerPage,
  page,
  id,
}: {
  itemsPerPage?: string | number;
  page?: number;
  id?: string;
}): Promise<IProductVariant | undefined> => {
  try {
    const response = await http.get(`api/v1/admin/product/${id}/variant`, {
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

const useGetProductVariantsLists = ({
  itemsPerPage,
  page,
  id,
}: {
  itemsPerPage?: string | number;
  page?: number;
  id?: string;
}) => {
  return useQuery({
    queryKey: ["variant", itemsPerPage, page, id],
    queryFn: () => getProductVariantsLists({ itemsPerPage, page, id }),
    enabled: !!id,
  });
};

export default useGetProductVariantsLists;
