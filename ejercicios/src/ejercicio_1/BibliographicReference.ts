import { BibliographicReferenceInterface } from "./BibliographicReferenceInterfaces";

/**
 * Función para verificar si una fecha tiene el formato correcto (YYYY-MM-DD).
 * @param date La fecha a verificar en formato de cadena de texto.
 */
export function checkDate(date: string): boolean {
  if (!/^\d{4}(-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01]))?$/.test(date)) {
    return false;
  }
  return true;
}

/**
 * Clase abstracta que representa una referencia bibliográfica.
 * Implementa la interfaz BibliographicReferenceInterface.
 */
export abstract class BibliographicReference
  implements BibliographicReferenceInterface
{
  /**
   * @param title El título de la referencia.
   * @param authors Los autores de la referencia.
   * @param keywords Las palabras clave asociadas con la referencia.
   * @param summary Resumen del contenido de la referencia.
   * @param publishedDate La fecha de publicación de la referencia.
   * @param pageCount El número de páginas en la referencia.
   * @param editorial La editorial o casa editorial.
   * @param url URL opcional para referencias en línea.
   */
  constructor(
    public title: string,
    public authors: string[],
    public keywords: string[],
    public summary: string,
    public publishedDate: string,
    public pageCount: number,
    public editorial: string,
    public url?: string
  ) {
    // Verificar el formato de la fecha al instanciar la referencia.
    if (!checkDate(publishedDate)) {
      console.error(
        "La Fecha: ",
        publishedDate,
        "es no válida o es inadecuada, use por favor el formato YYYY-MM-DD."
      );
      process.exit(1); // Termina el programa con un código de error.
    }
  }

  /**
   * Método abstracto para imprimir la referencia en formato IEEE.
   * Debe ser implementado por las clases hijas.
   */
  abstract printIEEE(): void;
}
