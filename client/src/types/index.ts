import { InferOutput } from 'valibot';
import { ProductSchema } from "../utils/product-schema";

export type Product = InferOutput<typeof ProductSchema>