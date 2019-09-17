import { ProductListComponent } from "./components/product-list/product-list.component";
import { CartComponent } from "./components/cart/cart.component";
import { RegestrationComponent } from "./components/regestration/regestration.component";

export const ApplicationRouting = [
    {path: '', component: ProductListComponent},
    {path: 'regestration', component: RegestrationComponent, outlet: 'sidebar'},
    {path: '', component: CartComponent, outlet: 'sidebar'}
] 