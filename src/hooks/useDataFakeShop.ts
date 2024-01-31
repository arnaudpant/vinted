/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { FakeCategory, FakeProduct, FakeUser } from "@/types/types";
import { useEffect, useState } from "react";


const useDataFakeShop = () => {
    const [fakeShopUsers, setFakeShopUsers] = useState<FakeUser[] | []>([])
    const [fakeShopProducts, setFakeShopProducts] = useState<FakeProduct[] | []>([])
    const [fakeShopCategories, setFakeShopCategories] = useState<FakeCategory[] | []>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    async function getCategoriesFakeShop() {
        try {
            const response = await fetch('https://api.escuelajs.co/api/v1/categories');
            const dataCategories = await response.json();

            if (response.ok) {
                //console.log('Promise resolved and HTTP status is successful');
                setFakeShopCategories(dataCategories) 

            } else {
                // Custom message for failed HTTP codes
                if (response.status === 404) throw new Error('404, Fake Categories Not found');
                if (response.status === 500) throw new Error('500, internal server error');
                // For any other server error
                throw new Error(`${response.status}`);
            }
        } catch (error) {
            console.error('Fetch', error);
            // Output e.g.: "Fetch Error: 404, Not found"
        }
    }
   
    /** 3 */
    async function getProductsFakeShop() {
        try {
            const response = await fetch('https://api.escuelajs.co/api/v1/products');
            const dataProducts = await response.json();

            if (response.ok) {
                //console.log('Promise resolved and HTTP status is successful');
                // ...do something with the response
                setFakeShopProducts(dataProducts)

            } else {
                // Custom message for failed HTTP codes
                if (response.status === 404) throw new Error('404, FakeProducts Not found');
                if (response.status === 500) throw new Error('500, internal server error');
                // For any other server error
                throw new Error(`${response.status}`);
            }
        } catch (error) {
            console.error('Fetch', error);
            // Output e.g.: "Fetch Error: 404, Not found"
        }
    }

    /** 2 */
    async function getUserFakeShop() {
        try {
            const response = await fetch('https://api.escuelajs.co/api/v1/users');
            const dataUser: FakeUser[] = await response.json();

            if (response.ok) {
                //console.log('Promise resolved and HTTP status is successful');
                setFakeShopUsers(dataUser)

            } else {
                // Custom message for failed HTTP codes
                if (response.status === 404) throw new Error('404, FakeUser Not found');
                if (response.status === 500) throw new Error('500, internal server error');
                // For any other server error
                throw new Error(`${response.status}`);
            }
        } catch (error) {
            console.error('Fetch', error);
            // Output e.g.: "Fetch Error: 404, Not found"
        }
    }

    /** 1 */
    useEffect(() => {
        setIsLoading(true)
        getUserFakeShop()
        getProductsFakeShop()
        getCategoriesFakeShop()
        setIsLoading(false)
    }, [])

    return {
        isLoading,
        fakeShopUsers,
        fakeShopProducts,
        fakeShopCategories
    }
};

export default useDataFakeShop;