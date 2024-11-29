import { Injectable } from '@angular/core';
import { Recipe } from './recipe.interface';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class RecipeService {
	image = 'https://placehold.co/100';

	recipes: Recipe[] = [
		{
			id: 1,
			name: ' Classic Chocolate Brownies',
			description: ' Fudgy, rich, and irresistibly chocolaty, these brownies have a perfect balance of a crackly top and a gooey center.',
			imagePath: 'Brownies.jpg',
			ingredients: [
				'200g dark chocolate',
				'150g unsalted butter',
				'200g sugar',
				'3 eggs',
				'100g flour',
                '1 tsp vanilla extract',
			],
			rating: 4.5,
		},
		{
			id: 2,
			name: 'Lemon Tart',
			description: 'This tart combines zesty lemon filling with a buttery, flaky crust, offering a refreshing and tangy treat.',
			imagePath: 'lemontart.jpg',
			ingredients: [
				'1 pre-made tart crust',
				'4 eggs',
				'200g sugar',
				'120ml lemon juice',
				'150ml heavy cream',
			],
			rating: 4.7,
		},
		{
			id: 3,
			name: 'Tiramisu',
			description: ' A creamy Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream, dusted with cocoa.',
			imagePath: 'tiramisu.jpg',
			ingredients: [
				'200ml espresso',
				'300g mascarpone cheese',
				'200ml heavy cream',
				'100g sugar',
				'1 pack ladyfingers',
                'Cocoa powder',
			],
			rating: 4.3,
		},
		{
			id: 4,
			name: 'Raspberry Cheesecake',
			description: ' A velvety cheesecake topped with a sweet-tart raspberry sauce for a delightful balance of flavors.',
			imagePath: 'raspberrychesscake.jpg',
			ingredients: [
				'250g cream cheese',
				'100g sugar',
				'2 eggs',
				'1 tsp vanilla',
				'150g crushed graham crackers',
                '50g butter',
                '200g fresh raspberries',
			],
			rating: 4.6,
		},
		{
			id: 5,
			name: 'Churros with Chocolate Dip',
			description: 'Crispy, golden churros dusted with cinnamon sugar and served with a rich chocolate dip.',
			imagePath: 'Churros.jpg',
			ingredients: [
                '250ml water', 
                '50g butter', 
                '150g flour', 
                '2 eggs',
                'Oil for frying',
                'Sugar and cinnamon for dusting',
                '100g dark chocolate',
            ],
            rating: 4.8,
		},
		{
			id: 6,
			name: 'Banoffee Pie',
			description: 'A luscious no-bake dessert with layers of bananas, caramel, and whipped cream on a cookie crust.',
			imagePath: 'banoffeepie.jpg',
			ingredients: [
				'200g digestive biscuits',
				'100g butter',
				'400g dulce de leche',
				'3 bananas',
                '200ml whipped cream',
			],
			rating: 4.4,
		},
		{
			id: 7,
			name: 'Pavlova',
			description: 'A crisp meringue shell with a marshmallow-like center, topped with whipped cream and fresh fruits.',
			imagePath: 'pavlova.jpg',
			ingredients: [
                '4 egg whites', 
                '200g sugar', 
                '1 tsp vinegar',
                '200ml cream',
                'Fresh fruits (berries, kiwi)',
            ],
			rating: 4.2,
		},
		{
			id: 8,
			name: 'Pancakes',
			description: 'Fluffy pancakes with maple syrup.',
			imagePath: 'pancakes.jpg',
			ingredients: [
				'flour',
				'milk',
				'egg',
				'baking powder',
				'maple syrup',
			],
			rating: 4.9,
		},
		{
			id: 9,
			name: 'Matcha Panna Cotta',
			description: 'A creamy, elegant panna cotta infused with the earthy flavors of matcha green tea.',
			imagePath: 'Matchapannacotta.jfif',
			ingredients: [
				'200ml heavy cream',
				'200ml milk',
				'50g sugar',
				'2 tsp matcha powder',
				'2 gelatin sheets',
			],
			rating: 4.5,
		},
		
	];

	getRecipes(): Observable<Recipe[]> {
		return new Observable((observer) => {
			observer.next(this.recipes);
			observer.complete();
		});
	}
}