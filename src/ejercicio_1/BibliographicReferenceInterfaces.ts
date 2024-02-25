/**
 * Interfaz que representa la estructura básica de una referencia bibliográfica.
 */
export interface BibliographicReferenceInterface {
  title: string; // El título de la referencia.
  authors: string[]; // Los autores de la referencia.
  keywords: string[]; // Palabras clave asociadas con la referencia.
  summary: string; // Resumen del contenido de la referencia.
  publishedDate: string; // La fecha de publicación de la referencia.
  pageCount: number; // El número de páginas en la referencia.
  editorial: string; // La editorial o casa editorial.
  url?: string; // URL opcional para referencias en línea.
  printIEEE(): void; // Método para imprimir la referencia en formato IEEE.
}

/**
 * Interfaz que representa una patente, extendiendo BibliographicReferenceInterface.
 */
export interface Patent extends BibliographicReferenceInterface {
  patentNumber: number; // El número de patente.
  country: string; // El país donde se presentó la patente.
}

/**
 * Interfaz que representa un informe técnico, extendiendo BibliographicReferenceInterface.
 */
export interface TechnicalReport extends BibliographicReferenceInterface {
  responsibleBody: string; // El organismo responsable del informe.
  country: string; // El país donde se emitió el informe.
  reportType: string; // El tipo de informe.
  reportNumber: number; // El número de informe.
}

/**
 * Interfaz que representa una norma técnica, extendiendo BibliographicReferenceInterface.
 */
export interface TechnicalRule extends BibliographicReferenceInterface {
  ruleNumber: number; // El número de la norma.
  place: string; // El lugar asociado con la norma.
}

/**
 * Interfaz que representa un trabajo académico, extendiendo BibliographicReferenceInterface.
 */
export interface AcademicWorks extends BibliographicReferenceInterface {
  academicWorkType: string; // El tipo de trabajo académico.
  department: string; // El departamento asociado con el trabajo.
  university: string; // La universidad donde se realizó el trabajo.
  place: string; // El lugar de publicación.
  country: string; // El país de publicación.
}

/**
 * Interfaz que representa un artículo de revista, extendiendo BibliographicReferenceInterface.
 */
export interface MagazineArticle extends BibliographicReferenceInterface {
  magazineName: string; // El nombre de la revista.
  magazineVolume: number; // El número de volumen de la revista.
  magazineNumber: number; // El número de ejemplar de la revista.
}

/**
 * Interfaz que representa un libro, extendiendo BibliographicReferenceInterface.
 */
export interface Book extends BibliographicReferenceInterface {
  edition?: string; // La edición del libro (opcional).
}

/**
 * Interfaz que representa una parte de un libro, extendiendo Book.
 */
export interface PartOfBook extends Book {
  bookTitle: string; // El título del libro.
  editor: string[]; // El editor del libro.
}
