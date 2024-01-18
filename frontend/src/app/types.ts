export type Location = {
  type: 'Point';
  coordinates: [number, number];
};

export type Vendor = {
  id: number;
  userId: number;
  name: string;
  location: {
    type: string;
    coordinates: number[];
  };
  address: string;
};

export type Product = {
  id: number;
  name: string;
  humanName: string;
  price: number;
  desc: string;
  expireAt: string;
};

export type Stock = {
  id: number;
  productId: number;
  quantity: number;
  product: Product;
};
