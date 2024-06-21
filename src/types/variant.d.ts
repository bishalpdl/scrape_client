interface IProductVariant {
  success: boolean;
  message: string;
  data: ProductVariant;
}

interface ProductVariant {
  items: Item[];
  totalItems: number;
  totalPages: number;
  currPage: number;
  limit: number;
  hasNextPage: boolean;
}

interface Item {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  url: string;
  variantId: string;
}
