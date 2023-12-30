import { useEffect, useState } from 'react';

type Product = {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: {
        rate: number;
        count: number;
    };
    title: string;
};

const Home = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        async function fetchProducts(): Promise<void> {
            try {
                const response = await fetch('https://fakestoreapi.com/products?limit=5');
                const productsData: Product[] = await response.json();
                setProducts(productsData);
            } catch (error) {
                console.error('Erreur lors de la récupération des données :', error);
            }
        }

        fetchProducts();
    }, []);

    function test() {
        fetch('https://fakestoreapi.com/products?limit=5')
        .then((res)=> res.json())
        .then((json)=> console.log(json))
    }

    return (
        <div>
            <h1>Explorer les articles de créateur</h1>
            {products.map((product: Product) => (
                <div key={product.id}>
                    <h2>Titre : {product.title}</h2>
                    <br />
                    <p>Description : {product.description}</p>
                </div>
            ))}
            <p onClick={test}>bouton</p>
        </div>
    );
};
export default Home;
