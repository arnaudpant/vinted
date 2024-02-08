const ImageProduct: React.FC<{ urlImage: string }> = ({ urlImage }) => {
  return (
    <img
      src={urlImage}
      alt="article"
      className="h-[400] w-full cursor-pointer object-cover"
    />
  );
};

export default ImageProduct;
