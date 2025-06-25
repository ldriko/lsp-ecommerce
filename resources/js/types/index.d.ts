import type { Config } from "ziggy-js";

export interface Auth {
    user: User;
}

export interface SharedData {
    name: string;
    auth: Auth;
    ziggy: Config & { location: string };
    storage: {
        url: string;
    };
    flash: {
        type: string | null;
        message: string | null;
    };
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

export interface Category {
    id: number;
    name: string;
}

export interface Product {
    id: number;
    category_id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    is_active: boolean;
    is_featured: boolean;

    category?: Category;
}

export interface CartItem {
    id: number;
    product_id: number;
    user_id: number;
    qty: number;
    price: number;

    product?: Product;
}

export interface Order {
    id: number;
    user_id: number;
    total: number;
    status: string;
    created_at: string;
    updated_at: string;

    user?: User;
    lines?: OrderLine[];
}

export interface OrderLine {
    id: number;
    order_id: number;
    product_id: number;
    qty: number;
    price: number;

    order?: Order;
    product?: Product;
}
