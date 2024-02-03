import brands from '@/data/brands';

const BrandSearch = () => {
  return (
    <div className="container mx-auto max-w-[1240px] py-12">
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
