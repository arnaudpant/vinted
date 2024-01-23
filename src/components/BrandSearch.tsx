import brands from '@/data/brands';

const BrandSearch = () => {
  return (
    <div className="container mx-auto my-20 max-w-[1280px] items-center px-5">
      <h1 className="h1">Rechercher par marque</h1>
      <div className="flex flex-wrap gap-x-3">
        {brands.map((brand) => (
          <div key={brand} className="mt-3 border p-2">
            {brand}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSearch;
