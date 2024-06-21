import useGetProductVariantsDetailLists from "@/services/products/get-product-variant-lists";
import { ArrowLeftIcon } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { cn } from "@/lib/utils";
import { useState } from "react";

const VariantDetail = () => {
  const [shownId, setShownId] = useState<number | null>(null);
  const navigate = useNavigate();
  const path = useLocation().pathname;
  const productId = path.split("/")[2];
  const variantId = path.split("/")[4];

  const { data: variantDetailData, isLoading } =
    useGetProductVariantsDetailLists({
      id: productId,
      variantId: variantId,
    });

  return (
    <main className="flex flex-col gap-8">
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
          Variant Details
        </p>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex gap-2 ">
          <div className="border"></div>

          <div className="flex flex-col gap-3 rounded-lg w-full">
            {variantDetailData?.data.entries.map((variant, index) =>
              variant.samePreviousEntry !== null ? (
                <>
                  <p className="font-light text-sm text-neutral-600">
                    {dayjs(variant?.samePreviousEntry?.createdAt).format(
                      "DD MMM, YYYY"
                    )}
                  </p>
                  <div
                    key={variant.id + index}
                    className="flex gap-4 items-center rounded-lg justify-between p-4 border w-full"
                  >
                    <div className="w-full flex flex-col gap-4">
                      <p className="text-[16px] font-medium text-neutral-900">
                        {variant.samePreviousEntry?.title}{" "}
                        <span className="border  ml-2 px-3 py-1 text-sm font-medium bg-blue-400 text-white rounded-full">
                          unchanged
                        </span>
                      </p>
                      <p
                        //   className="font-light text-sm text-neutral-500"
                        onClick={() =>
                          setShownId(shownId === variant.id ? null : variant.id)
                        }
                        className={cn(
                          "!text-neutral-500 text-sm font-normal line-clamp-2",
                          {
                            " line-clamp-none min-h-[100px] h-full":
                              shownId === variant.id,
                          }
                        )}
                      >
                        {variant?.samePreviousEntry?.description}
                      </p>
                      <div className="flex gap-3">
                        {variant?.image && (
                          <img
                            src={variant.image}
                            alt="variant"
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                        )}
                      </div>
                    </div>
                    <div className="w-1/4 flex  justify-between flex-col h-full items-end gap-4">
                      <p className="font-light text-sm text-neutral-600">
                        {dayjs(variant?.samePreviousEntry?.createdAt).format(
                          "DD MMM, YYYY"
                        )}
                      </p>
                      {variant?.samePreviousEntry?.price ? (
                        <p className="font-bold text-lg text-neutral-900">
                          ${variant?.samePreviousEntry?.price}
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <p className="font-light text-sm text-neutral-600">
                    {dayjs(variant.createdAt).format("DD MMM, YYYY")}
                  </p>
                  <div
                    key={variant.id + index}
                    className="flex gap-4 items-start rounded-lg justify-between p-4 border w-full"
                  >
                    <div className="w-full flex flex-col gap-4">
                      <p className="text-[16px] font-medium text-neutral-900">
                        {variant.title}{" "}
                      </p>
                      <p
                        onClick={() =>
                          setShownId(shownId === variant.id ? null : variant.id)
                        }
                        // className="font-light text-sm text-neutral-500"
                        className={cn(
                          "!text-neutral-500 text-sm font-normal line-clamp-2",
                          {
                            " line-clamp-none min-h-[100px] h-full":
                              shownId === variant.id,
                          }
                        )}
                      >
                        {variant.description}
                      </p>
                      <div className="flex gap-3">
                        {variant?.image && (
                          <img
                            src={variant.image}
                            alt="variant"
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                        )}
                      </div>
                    </div>
                    <div className="w-1/4 flex  justify-between flex-col h-full items-end gap-4">
                      <p className="font-light text-sm text-neutral-600">
                        {dayjs(variant.createdAt).format("DD MMM, YYYY")}
                      </p>
                      {variant.price ? (
                        <p className="font-bold text-lg text-neutral-900">
                          ${variant.price}
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </>
              )
            )}
          </div>
        </div>
      )}
    </main>
  );
};

export default VariantDetail;
