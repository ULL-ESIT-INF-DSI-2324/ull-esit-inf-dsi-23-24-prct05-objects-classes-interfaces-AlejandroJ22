import { BibliographicReference } from "./BibliographicReference";
import { MagazineArticle as MagazineArticleInterface } from "./BibliographicReferenceInterfaces";

/**
 * Clase que representa un artículo de revista bibliográfica.
 * Extiende de BibliographicReference e implementa la interfaz MagazineArticleInterface.
 */
export class MagazineArticle
  extends BibliographicReference
  implements MagazineArticleInterface
{
  /**
   * @param title El título del artículo de revista.
   * @param authors Los autores del artículo de revista.
   * @param keywords Las palabras clave asociadas con el artículo de revista.
   * @param summary Resumen del contenido de la referencia.
   * @param publishedDate La fecha de publicación del artículo de revista.
   * @param pageCount El número de páginas que abarca el artículo de revista.
   * @param editorial La editorial o casa editorial del artículo de revista.
   * @param magazineName El nombre de la revista donde se publicó el artículo.
   * @param magazineVolume El volumen de la revista donde se publicó el artículo.
   * @param magazineNumber El número de la revista donde se publicó el artículo.
   * @param url URL opcional para el artículo de revista en línea.
   */
  constructor(
    title: string,
    authors: string[],
    keywords: string[],
    summary: string,
    publishedDate: string,
    pageCount: number,
    editorial: string,
    public magazineName: string,
    public magazineVolume: number,
    public magazineNumber: number,
    url?: string
  ) {
    super(title, authors, keywords, summary, publishedDate, pageCount, editorial, url);
  }

  /**
   * Método para imprimir el artículo de revista en formato IEEE.
   * Si el artículo tiene una URL, se muestra como un artículo en línea.
   * Si no tiene URL, se muestra como un artículo estándar.
   * Autores, "Título del artículo", Título de la revista en cursiva,
   * volumen de la revista (abreviado vol.), número de la revista (abreviado nº.),
   * páginas que abarca el artículo (abreviado pp.), fecha de publicación.
   */
  printIEEE(): void {
    let referenceIEEE: string = `${this.authors.join(", ")}, "${
      this.title
    }", *${this.magazineName}*, vol.${this.magazineVolume}, nº${
      this.magazineNumber
    }, pp. ${this.pageCount}, ${this.publishedDate}`;
    // Para recursos electrónicos.
    if (this.url) {
      referenceIEEE += ` [Online]. Disponible en: ${this.url}`;
    } else {
      referenceIEEE += `.`;
    }
    console.log(referenceIEEE);
  }
}
