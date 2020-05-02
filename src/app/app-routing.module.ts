import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {RecipeResolver} from './resolver/recipe-resolver';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'recipe-detail',
        loadChildren: () => import('./recipe-detail/recipe-detail.module').then(m => m.RecipeDetailPageModule)
    },
    {
        path: 'recipes',
        children: [
            {
                path: '',
                loadChildren: () => import('./recipe/recipe.module').then(m => m.RecipePageModule)
            },
            {
                path: ':recipeId',
                loadChildren: () => import('./recipe-detail/recipe-detail.module').then(m => m.RecipeDetailPageModule),
                resolve: {
                    recipe: RecipeResolver
                }
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
