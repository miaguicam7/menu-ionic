import {Component, OnInit} from '@angular/core';
import {RecipeService} from '../services/recipe.service';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.page.html',
    styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
    recipe = this.recipeService.obtenerPlato(1);

    constructor(private recipeService: RecipeService) {
    }

    ngOnInit() {
    }

}
