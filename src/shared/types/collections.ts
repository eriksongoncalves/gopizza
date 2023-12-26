export type PizzaModel = {
  name: string;
  name_insensitive: string;
  description: string;
  prices_sizes: {
    p: string;
    m: string;
    g: string;
  };
  photo_url: string;
  photo_path: string;
};
