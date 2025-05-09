import { apiInstanExpress } from "./apiInstance"

export const getProducts = async () => {
    try {
        let product = await apiInstanExpress.get('/product');
        return product.data.data
    } catch(err) {
        console.log(err)
    }
}

