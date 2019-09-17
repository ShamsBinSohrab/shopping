import { ProductListComponent } from "./components/product-list/product-list.component";
import { CartComponent } from "./components/cart/cart.component";

export const ApplicationRouting = [
    {path: '', component: ProductListComponent},
    {path: '', component: CartComponent, outlet: 'sidebar'}
] 