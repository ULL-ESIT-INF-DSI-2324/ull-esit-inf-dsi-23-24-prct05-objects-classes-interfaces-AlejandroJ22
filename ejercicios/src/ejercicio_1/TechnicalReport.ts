import { BibliographicReference } from "./BibliographicReference";
import { TechnicalReport as TechnicalReportInterface } from "./BibliographicReferenceInterfaces";

/**
 * Clase que representa un informe técnico bibliográfico.
 * Extiende de BibliographicReference e implementa la interfaz TechnicalReportInterface.
 */
export class TechnicalReport
  extends BibliographicReference
  implements TechnicalReportInterface
{
  /**
   * @param title El título del informe técnico.
   * @param authors Los autores del informe técnico.
   * @param keywords Las palabras clave asociadas con el informe técnico.
   * @param summary Resumen del contenido de la referencia.
   * @param publishedDate La fecha de publicación del informe técnico.
   * @param pageCount El número de páginas en el informe técnico.
   * @param editorial La editorial o casa editorial del informe técnico.
   * @param responsibleBody El organismo responsable del informe técnico.
   * @param country El país del informe técnico.
   * @param reportType El tipo de informe.
   * @param reportNumber El número de informe.
   * @param url URL opcional para el informe técnico en línea.
   */
  constructor(
    title: string,
    authors: string[],
    keywords: string[],
    summary: string,
    publishedDate: string,
    pageCount: number,
    editorial: string,
    public responsibleBody: string,
    public country: string,
    public reportType: string,
    public reportNumber: number,
    url?: string
  ) {
    super(title, authors, keywords, summary, publishedDate, pageCount, editorial, url);
  }

  /**
   * Método para imprimir el informe técnico en formato IEEE.
   * Si el informe técnico tiene una URL, se muestra como un informe en línea.
   * Si no tiene URL, se muestra como un informe estándar:
   * Autores, "Título", Organismo responsable, País, Tipo de informe Número de informe, fecha de publicación.
   */
  printIEEE(): void {
    let referenceIEEE: string = `${this.authors.join(", ")}, "${this.title}", ${
      this.responsibleBody
    }, ${this.country}, ${this.reportType} ${this.reportNumber}, ${
      this.publishedDate
    }`;
    // Para recursos electrónicos.
    if (this.url) {
      referenceIEEE += ` [Online]. Disponible en: ${this.url}`;
    } else {
      referenceIEEE += `.`;
    }
    console.log(referenceIEEE);
  }
}
