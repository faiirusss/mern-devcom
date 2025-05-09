import { useEffect, useState } from "react"
import { getProducts } from "@/utils/getProducts"
import { apiInstanExpress } from "@/utils/apiInstance";
import {useForm} from "react-hook-form"
import {Button} from "@/components/ui/button"

const ProductPage = () => {
    const [products, setProducts] = useState([])
    const {register, handleSubmit, reset} = useForm()

    useEffect(()=>{
        getProducts()
        .then((data) => {
            setProducts(data)
        })
    }, [])

    const onSubmit = async (data) => {
        try {
          const res = await apiInstanExpress.post('/product', data);
          reset(); 
          const product = res.data.data;
          setProducts((prev) => [...prev, product]);
        } catch (error) {
          console.error("Gagal menambahkan produk:", error);
          alert("Terjadi kesalahan.");
        }
      };
    return (
        <div className="w-full p-8">
            <h1>Product Page</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <section className="max-w-sm mt-5">
                <input type="text" {...register("name")} placeholder="Product Name"  className="w-full p-2 border" />
                <input type="number" {...register("price")} placeholder="Price" className="w-full p-2 border" />
                <textarea {...register("description")} placeholder="Description" className="w-full p-2 border"/>
                </section>
                <Button>add product</Button>
            </form>
            <div className="my-5 text-sm">
                <ul>
                    {products.map((product) => (
                        <li key={product._id}><span className="font-bold">{product.name}</span> - {product.price} - {product.description}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ProductPage