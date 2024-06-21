import toast from "react-hot-toast";
import http from "@/lib/http";
import { useQuery } from "react-query";

const getProductVariantsDetailLists = async ({
  id,
  variantId,
}: {
  id?: string;
  variantId?: string;
}): Promise<IProductVariantLists | undefined> => {
  try {
    const response = await http.get(
      `api/v1/admin/product/${id}/variant/${variantId}`
    );
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    toast.error(e.response?.data?.message || "Something went wrong");
    return;
  }
};

const useGetProductVariantsDetailLists = ({
  id,
  variantId,
}: {
  id?: string;
  variantId?: string;
}) => {
  return useQuery({
    queryKey: ["variant", id, variantId],
    queryFn: () => getProductVariantsDetailLists({ id, variantId }),
    enabled: !!id,
  });
};

export default useGetProductVariantsDetailLists;
