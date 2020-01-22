import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

// - Components Imports
import { LoginComponent } from '../pages/login/login.component';
import { ChatComponent } from '../pages/chat/chat.component';

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "chat", component: ChatComponent },
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}