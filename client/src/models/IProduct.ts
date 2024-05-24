interface IProduct {
  id: string;
  categoryId: string;
  slug: string;
  name: string;
  description: string;
  imageUrl: string;
  priceCent: number;
  isActive: boolean;
}

export default IProduct;
