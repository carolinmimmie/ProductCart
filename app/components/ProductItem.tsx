import Link from "next/link";
import React from "react";
import Image from "next/image";
import ProductRate from "./ProductRate";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  brand:string,
  countInStock: number;
  rating: number;
  numReviews: number;
  description: string;
}

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="card">
      <Link href={`/product/${product.id}`}>
        <Image
          src={product.image}
          width={400}
          height={400}
          alt={product.name}
          className="rounded shadow object-cover h-96 w-full"
        />
      </Link>
      <div className="flex flex-col items-center justify-centerp-5"></div>
      <Link href={`/product/${product.id}`}>
        <h2 className="text-lg">{product.name}</h2>
      </Link>
      <ProductRate rate={product.rating} count={product.numReviews} />
      <p className="mb-2">{product.brand}</p>
      <p>${product.price}</p>
      <button>Add to cart</button>
    </div>
  );
};

export default ProductItem;
