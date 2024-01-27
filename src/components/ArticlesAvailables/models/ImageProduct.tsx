const ImageProduct: React.FC<{ urlImage: string }> = ({ urlImage }) => {
  return (
    <img
      src={urlImage}
      alt="article"
      className="cursor-pointer object-cover w-full h-[400]"
    />
  );
};

export default ImageProduct;
