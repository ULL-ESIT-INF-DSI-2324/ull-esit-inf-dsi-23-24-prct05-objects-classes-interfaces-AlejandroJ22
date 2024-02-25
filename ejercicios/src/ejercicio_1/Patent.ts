import { BibliographicReference } from "./BibliographicReference";
import { Patent as PatentInterface } from "./BibliographicReferenceInterfaces";

/**
 * Clase que representa una patente bibliográfica.
 * Extiende de BibliographicReference e implementa la interfaz PatentInterface.
 */
export class Patent extends BibliographicReference implements PatentInterface {
  /**
   * @param title El título de la patente.
   * @param authors Los autores de la patente.
   * @param keywords Las palabras clave asociadas con la patente.
   * @param summary Resumen del contenido de la referencia.
   * @param publishedDate La fecha de publicación de la patente.
   * @param pageCount El número de páginas en la patente.
   * @param editorial La editorial o casa editorial de la patente.
   * @param patentNumber El número de la patente.
   * @param country El país de la patente.
   * @param url URL opcional para la patente en línea.
   */
  constructor(
    title: string,
    authors: string[],
    keywords: string[],
    summary: string,
    publishedDate: string,
    pageCount: number,
    editorial: string,
    public patentNumber: number,
    public country: string,
    url?: string
  ) {
    super(title, authors, keywords, summary, publishedDate, pageCount, editorial, url);
  }

  /**
   * Método para imprimir la patente en formato IEEE.
   * Si la patente tiene una URL, se muestra como una patente en línea.
   * Si no tiene URL, se muestra como una patente estándar.
   * Patente estándar: Autores, "Título", País Patente Número de patente, fecha de publicación.
   * Patente en línea: "Título", autores. Fecha. Número de patente [en línea]. Disponible: URL
   */
  printIEEE(): void {
    let referenceIEEE: string = "";
    if (this.url === undefined) {
      referenceIEEE += `${this.authors.join(", ")}, "${this.title}", ${
        this.country
      } ${this.patentNumber}, ${this.publishedDate}.`;
    } else {
      referenceIEEE += `"${this.title}", ${this.authors.join(", ")}. ${
        this.publishedDate
      }. ${this.patentNumber} [online]. Disponible: ${this.url}`;
    }
    console.log(referenceIEEE);
  }
}
