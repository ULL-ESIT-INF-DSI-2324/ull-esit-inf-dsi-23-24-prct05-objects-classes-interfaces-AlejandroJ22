import { BibliographicReference } from "./BibliographicReference";
import { AcademicWorks as AcademicWorksInterface } from "./BibliographicReferenceInterfaces";

/**
 * Clase que representa un trabajo académico bibliográfico.
 * Extiende de BibliographicReference e implementa la interfaz AcademicWorksInterface.
 */
export class AcademicWorks
  extends BibliographicReference
  implements AcademicWorksInterface
{
  /**
   * @param title El título del trabajo académico.
   * @param authors Los autores del trabajo académico.
   * @param keywords Las palabras clave asociadas con el trabajo académico.
   * @param summary Resumen del contenido de la referencia.
   * @param publishedDate La fecha de publicación del trabajo académico.
   * @param pageCount El número de páginas en el trabajo académico.
   * @param editorial La editorial o casa editorial del trabajo académico.
   * @param academicWorkType El tipo de trabajo académico.
   * @param department El departamento al que pertenece el trabajo académico.
   * @param university La universidad a la que está asociado el trabajo académico.
   * @param place El lugar donde se realizó el trabajo académico.
   * @param country El país donde se realizó el trabajo académico.
   * @param url URL opcional para el trabajo académico en línea.
   */
  constructor(
    title: string,
    authors: string[],
    keywords: string[],
    summary: string,
    publishedDate: string,
    pageCount: number,
    editorial: string,
    public academicWorkType: string,
    public department: string,
    public university: string,
    public place: string,
    public country: string,
    url?: string
  ) {
    super(title, authors, keywords, summary, publishedDate, pageCount, editorial, url);
  }

  /**
   * Método para imprimir el trabajo académico en formato IEEE.
   * Si el trabajo académico tiene una URL, se muestra como un trabajo en línea.
   * Si no tiene URL, se muestra como un trabajo estándar:
   * Autores, "Título", Tipo de trabajo académico, Departamento, Universidad, Lugar, País, año.
   */
  printIEEE(): void {
    let referenceIEEE: string = `${this.authors.join(", ")}, "${this.title}", ${
      this.academicWorkType
    }, ${this.department}, ${this.university} ${this.place}, ${
      this.country
    }, ${this.publishedDate.substring(0, 4)}`;
    // Para recursos electrónicos.
    if (this.url) {
      referenceIEEE += ` [Online]. Disponible en: ${this.url}`;
    } else {
      referenceIEEE += `.`;
    }
    console.log(referenceIEEE);
  }
}
