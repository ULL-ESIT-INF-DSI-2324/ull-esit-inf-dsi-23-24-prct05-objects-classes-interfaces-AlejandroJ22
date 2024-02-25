import { checkDate, BibliographicReference } from "./BibliographicReference";

/**
 * Clase para gestionar referencias bibliográficas.
 * Permite agregar referencias, buscar por palabras clave y mostrar las referencias en formato IEEE.
 */
export class BibliographicReferenceManager {
  /** Array que almacena las referencias bibliográficas. */
  references: BibliographicReference[] = [];

  /**
   * Método para agregar una referencia bibliográfica al gestor.
   * @param reference La referencia bibliográfica a agregar.
   */
  addReference(reference: BibliographicReference) {
    this.references.push(reference);
  }

  /** Método para mostrar todas las referencias bibliográficas en forma de tabla. */
  displayReferences() {
    console.table(this.references, ['title', 'authors', 'keywords', 'publishedDate', 'pageCount', 'editorial', 'url']);
  }

  /**
   * Método para buscar referencias por palabra clave.
   * @param keyword La palabra clave a buscar.
   * @param field El campo en el que se realizará la búsqueda (opcional).
   */
  searchByKeyword(keyword: string, field?: string): void {
    // Se añaden returns para devolver el array con los coincidentes al método filter.
    let results = this.references.filter((element) => {
      if (field === undefined) {
        return element.keywords.includes(keyword);
      } else {
        switch (field.toLowerCase()) {
          case "title":
            return element.title.includes(keyword);
          case "authors":
            return element.authors.includes(keyword);
          case "published date":
            if (checkDate(keyword)) {
              return element.publishedDate.includes(keyword);
            }
          case "editorial":
            return element.editorial.includes(keyword);
          default:
            console.log(
              `Los filtros disponibles son: "title", "authors", "published date" y "editorial".`
            );
            return;
        }
      }
    });
    console.table(results,  ['title', 'authors', 'keywords', 'publishedDate', 'pageCount', 'editorial', 'url']);
  }

  /** Método para imprimir todas las referencias bibliográficas en formato IEEE. */
  printIEEE(): void {
    this.references.forEach((reference) => {
      reference.printIEEE();
    });
  }
}
