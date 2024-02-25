/**
 * Converts a positive integer into a list of allergens that cannot reapeat.
 * @param allergen_identifier The positive integer that represent the allergens.
 * @returns A list of allergens.
 */
export function getAllergens(
  allergen_identifier: number
): string[] | undefined {
  // Check if the input is valid.
  if (allergen_identifier < 1 || !Number.isInteger(allergen_identifier))
    return undefined;
  // Define signals corresponding to each action.
  const signals: string[] = [
    "Gato",
    "Polen",
    "Chocolate",
    "Tomate",
    "Fresa",
    "Marisco",
    "Cacahuete",
    "Huevo",
  ];
  // Initialize the list of allergen.
  let allergens: string[] = [];
  // If the number is greater than 255, reduce it to the range [0, 255]. If 256 = 0 there are not allergens.
  if (allergen_identifier > 255) {
    allergen_identifier -= Math.floor(allergen_identifier / 256) * 256;
  }
  // If the number is zero, return undefined.
  if (allergen_identifier < 1) {
    return undefined;
  }
  // Convert the number to binary representation.
  let binarioNumberArray: number[] = [];
  while (allergen_identifier > 1) {
    binarioNumberArray.unshift(allergen_identifier % 2);
    allergen_identifier = Math.floor(allergen_identifier / 2);
  }
  binarioNumberArray.unshift(allergen_identifier % 2);
  // Pad the binary array with zeros to make it 8 digits long.
  while (binarioNumberArray.length < 8) {
    binarioNumberArray.unshift(0);
  }
  // Add allergens to the list based on the binary representation.
  for (let i = binarioNumberArray.length - 1; i >= 0; --i) {
    if (binarioNumberArray[i] == 1) allergens.push(signals[i]);
  }
  // Return the list of allergens.
  return allergens;
}

// console.log(getAllergens(3)); // All allergens.
