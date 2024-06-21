interface IProductVariantLists {
  success: boolean;
  message: string;
  data: VariantLists;
}

interface VariantLists {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  url: string;
  variantId: string;
  entries: Entry[];
}

interface Entry {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image?: string[] | string | any;
  id: number;
  createdAt: Date;
  updatedAt: Date;
  title: Title | null;
  description: Description | null;
  price: null | string;
  samePreviousEntry?: Entry | null;
}

enum Description {
  ThisIsSamsungTV = "this is samsung TV",
  ThisIsSamsungTv = "this is samsung tv",
}

enum Title {
  Samsung21InchTV = "Samsung 21 inch TV",
}
