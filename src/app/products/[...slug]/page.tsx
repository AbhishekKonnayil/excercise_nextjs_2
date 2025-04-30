import React from "react";

const Product = async ({ params }: { params: { slug: string[] } }) => {
  const { slug } = await params;
  return (
    <div>
      <h1>detail about the product {slug.join(",")}</h1>
      <h1>All products</h1>
      {slug.map((id, index) => (
        <ul>
          <li key={index}>{id}</li>
        </ul>
      ))}
    </div>
  );
};

export default Product;
