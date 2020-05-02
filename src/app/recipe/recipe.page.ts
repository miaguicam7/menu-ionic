import {Component, OnInit} from '@angular/core';
import {RecipeService} from '../services/recipe.service';

@Component({
    selector: 'app-recipe',
    templateUrl: './recipe.page.html',
    styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {
    private recipeList = this.recipeService.obtenerPlatos();

    constructor(private recipeService: RecipeService) {
    }

    ngOnInit() {
    }
}
