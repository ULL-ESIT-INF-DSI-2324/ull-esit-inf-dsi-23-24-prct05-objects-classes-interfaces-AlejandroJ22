import { BibliographicReference } from "./BibliographicReference";
import {
  Book as Bookinterface,
  PartOfBook as PartOfBookInterface,
} from "./BibliographicReferenceInterfaces";

/**
 * Clase que representa un libro.
 * Extiende de BibliographicReference e implementa la interfaz Bookinterface.
 */
export class Book extends BibliographicReference implements Bookinterface {
  /**
   * @param title El título del libro.
   * @param authors Los autores del libro.
   * @param keywords Las palabras clave asociadas con el libro.
   * @param publishedDate La fecha de publicación del libro.
   * @param pageCount El número de páginas del libro.
   * @param editorial La editorial o casa editorial del libro.
   * @param edition La edición del libro (opcional).
   * @param url URL opcional para el libro en línea.
   */
  constructor(
    title: string,
    authors: string[],
    keywords: string[],
    summary: string,
    publishedDate: string,
    pageCount: number,
    editorial: string,
    public edition?: string,
    url?: string
  ) {
    super(title, authors, keywords, summary, publishedDate, pageCount, editorial, url);
  }

  /**
   * Método para imprimir el libro en formato IEEE.
   * Si el libro tiene una edición y una URL, se muestra como un libro en línea con edición.
   * Si el libro tiene solo una edición, se muestra como un libro estándar con edición.
   * Si el libro no tiene edición, se muestra como un libro estándar.
   */
  printIEEE(): void {
    // Autores, *Título*, Edición. Editorial, Año de publicación.
    let referenceIEEE: string = `${this.authors.join(", ")}, *${this.title}*, ${
      this.edition ?? ""
    }, `;
    if (this.edition) {
      referenceIEEE += `${this.edition}, `;
    }
    referenceIEEE += `${this.editorial}, ${this.publishedDate.substring(0, 4)}`;
    // Para recursos electrónicos.
    if (this.url) {
      referenceIEEE += ` [Online]. Disponible en: ${this.url}`;
    } else {
      referenceIEEE += `.`;
    }
    console.log(referenceIEEE);
  }
}

/**
 * Clase que representa una parte de un libro.
 * Extiende de Book e implementa la interfaz PartOfBookInterface.
 */
export class PartOfBook extends Book implements PartOfBookInterface {
  /**
   * @param title El título de la parte del libro.
   * @param authors Los autores de la parte del libro.
   * @param keywords Las palabras clave asociadas con la parte del libro.
   * @param summary Resumen del contenido de la referencia.
   * @param publishedDate La fecha de publicación de la parte del libro.
   * @param pageCount El número de páginas de la parte del libro.
   * @param editorial La editorial o casa editorial de la parte del libro.
   * @param bookTitle El título del libro al que pertenece la parte.
   * @param editor El editor de la parte del libro.
   * @param edition La edición del libro al que pertenece la parte (opcional).
   * @param url URL opcional para la parte del libro en línea.
   */
  constructor(
    title: string,
    authors: string[],
    keywords: string[],
    summary: string,
    publishedDate: string,
    pageCount: number,
    editorial: string,
    public bookTitle: string,
    public editor: string[],
    public edition?: string,
    url?: string
  ) {
    super(
      title,
      authors,
      keywords,
      summary,
      publishedDate,
      pageCount,
      editorial,
      edition,
      url
    );
  }

  /**
   * Método para imprimir la parte del libro en formato IEEE.
   * Si la parte del libro tiene una edición y una URL, se muestra como una parte de libro en línea con edición.
   * Si la parte del libro tiene solo una edición, se muestra como una parte de libro estándar con edición.
   * Si la parte del libro no tiene edición, se muestra como una parte de libro estándar.
   */
  printIEEE(): void {
    // Autores, "Título capitulo", *Título libro*, Editor. Editorial, Año de publicación, páginas que abarca.
    let referenceIEEE: string = `${this.authors.join(", ")}, "${
      this.title
    }", *${this.bookTitle}*, ${this.editor.join(", ")}. ${
      this.editorial
    }, ${this.publishedDate.substring(0, 4)}, pp.${this.pageCount}`;
    // Para recursos electrónicos.
    if (this.url) {
      referenceIEEE += ` [Online]. Disponible en: ${this.url}`;
    } else {
      referenceIEEE += `.`;
    }
    console.log(referenceIEEE);
  }
}
