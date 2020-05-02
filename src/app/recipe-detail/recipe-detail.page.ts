import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RecipeModel} from '../recipe/recipe.model';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.page.html',
    styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
    recipe: RecipeModel;

    constructor(private route: ActivatedRoute) {
        this.recipe = this.route.snapshot.data.recipe as RecipeModel;
    }

    ngOnInit() {
    }
}
