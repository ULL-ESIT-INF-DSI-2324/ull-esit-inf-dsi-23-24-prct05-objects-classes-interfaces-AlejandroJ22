// class Food {
//     public food_name_: string;
//     public nutritional_information_: string;
//     constructor(name: string, nutritional_information: string) {
//       this.food_name_ = name;
//       this.nutritional_information_ = nutritional_information;
//     }
//     getFoodName() {
//       return this.food_name_;
//     }
//     getInformation() {
//       return this.nutritional_information_;
//     }
// }

// class Fridge {
//     public fridge_name_: string;
//     public fridge_food_: [Food, number][]; // List of tuplas [food, amount].
//     public shopping_list_: Food[];
//     constructor(fridge_name: string, fridge_food: [Food, number][], shopping_list: Food[]) {
//         this.fridge_name_ = fridge_name;
//         this.fridge_food_ = fridge_food;
//         this.shopping_list_: shopping_list;
//     }
//     getFridgeFood(): [Food, number][] {
//         return this.fridge_food_;
//     }
//     Eat(food_name: string, amount: number): void {
//       this.fridge_food_.forEach((food) => {
//         if (food[0].food_name_ == food_name) {
//             if (food[1] !== 0) {
//               --food[1];
//               if (food[1] == 0) {

//               }
//             }
//         }
//       });
//     }
//     add(food_name: string, amount: number): void {
//         if (amount < 1 || !Number.isInteger(amount)) {
//             throw new Error("Cannot add a zero amount.");
//         }
//         this.fridge_food_.forEach((food) => {
//             if (food[0].food_name_ == food_name) {
//                 ++food[1];
//             }
//         });
//     }
//     checkShoppingList(): Food[] {
//         return this.shopping_list_;
//     }
// }