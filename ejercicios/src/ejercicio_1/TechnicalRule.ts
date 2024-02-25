import { BibliographicReference } from "./BibliographicReference";
import { TechnicalRule as TechnicalRuleInterface } from "./BibliographicReferenceInterfaces";

/**
 * Clase que representa una regla técnica bibliográfica.
 * Extiende de BibliographicReference e implementa la interfaz TechnicalRuleInterface.
 */
export class TechnicalRule
  extends BibliographicReference
  implements TechnicalRuleInterface
{
  /**
   * @param title El título de la regla técnica.
   * @param authors Los autores de la regla técnica.
   * @param keywords Las palabras clave asociadas con la regla técnica.
   * @param summary Resumen del contenido de la referencia.
   * @param publishedDate La fecha de publicación de la regla técnica.
   * @param pageCount El número de páginas en la regla técnica.
   * @param editorial La editorial o casa editorial de la regla técnica.
   * @param ruleNumber El número de la regla técnica.
   * @param place El lugar de la regla técnica.
   * @param url URL opcional para la regla técnica en línea.
   */
  constructor(
    title: string,
    authors: string[],
    keywords: string[],
    summary: string,
    publishedDate: string,
    pageCount: number,
    editorial: string,
    public ruleNumber: number,
    public place: string,
    url?: string
  ) {
    super(title, authors, keywords, summary, publishedDate, pageCount, editorial, url);
  }

  /**
   * Método para imprimir la regla técnica en formato IEEE.
   * Si la regla técnica tiene una URL, se muestra como una regla en línea.
   * Si no tiene URL, se muestra como una regla estándar:
   * Título de la norma en cursiva, número de la norma, autores, lugar, fecha.
   */
  printIEEE(): void {
    let referenceIEEE: string = `*${this.title}*, ${
      this.ruleNumber
    }, ${this.authors.join(", ")}, ${this.place}, ${this.publishedDate}`;
    // Para recursos electrónicos.
    if (this.url) {
      referenceIEEE += ` [Online]. Disponible en: ${this.url}`;
    } else {
      referenceIEEE += `.`;
    }
    console.log(referenceIEEE);
  }
}
