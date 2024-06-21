interface IProductLists {
  success: boolean;
  message: string;
  data: ProductLists;
}

interface ProductLists {
  items: Item[];
  totalItems: number;
  totalPages: number;
  currPage: number;
  limit: number;
  hasNextPage: boolean;
}
interface Pagination {
  totalItems?: number;
  totalPages?: number;
  currPage?: number;
  limit?: number;
  hasNextPage?: boolean;
}

interface Item {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  productSlug: string;
}
