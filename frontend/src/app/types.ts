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
