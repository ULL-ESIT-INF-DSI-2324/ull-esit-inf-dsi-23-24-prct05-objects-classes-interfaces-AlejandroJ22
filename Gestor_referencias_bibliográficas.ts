interface BibliographicReferenceInterface {
  title: string;
  authors: string[];
  keywords: string[];
  publishedDate: string;
  pageCount: number;
  editorial: string;
  url?: string;
  printIEEE(): void;
}

interface Patent extends BibliographicReferenceInterface {
  patentNumber: number;
  country: string;
}

interface TechnicalReport extends BibliographicReferenceInterface {
  responsibleBody: string;
  country: string;
  reportType: string;
  reportNumber: number;
}

interface TechnicalRule extends BibliographicReferenceInterface {
  ruleNumber: number;
  place: string;
}

interface AcademicWorks extends BibliographicReferenceInterface {
  academicWorkType: string;
  department: string;
  university: string;
  place: string;
  country: string;
}

interface MagazineArticle extends BibliographicReferenceInterface {
  magazineName: string;
  magazineVolume: number;
  magazineNumber: number;
}

interface Book extends BibliographicReferenceInterface {
  edition?: string;
}

interface PartOfBook extends Book {
  bookTitle: string;
  editor: string;
}

function checkDate(date: string): void {
  if (!/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/.test(date)) {
    console.error(
      "La Fecha: ",
      date,
      "es no válida o es inadecuada, use por favor el formato YYYY-MM-DD."
    );
    process.exit(1); // Termina el programa con un código de error.
  }
}

abstract class BibliographicReference implements BibliographicReferenceInterface {
  constructor(
    public title: string,
    public authors: string[],
    public keywords: string[],
    public publishedDate: string,
    public pageCount: number,
    public editorial: string,
    public url?: string
  ) {
    checkDate(publishedDate);
  }
  abstract printIEEE(): void;
}

// Nota: en el caso de la patente, si es una patente en línea, su estructura cambia bastante.
class Patent extends BibliographicReference implements Patent {
  constructor(
    public title: string,
    public authors: string[],
    public keywords: string[],
    public publishedDate: string,
    public pageCount: number,
    public editorial: string,
    public patentNumber: number,
    public country: string,
    public url?: string
  ) {
    super(title, authors, keywords, publishedDate, pageCount, editorial, url);
  }
  printIEEE(): void {
    let referenceIEEE: string = "";
    if (this.url === undefined) {
      // Para una patente:
      // Autores, "Título", País Patente Número de patente, fecha de publicación.
      referenceIEEE += `${this.authors.join(", ")}, "${this.title}", ${this.country} ${this.patentNumber}, ${this.publishedDate}.`;
    } else {
      // Para una patente en línea:
      // "Título", autores. Fecha. Número de patente [en línea]. Disponible: URL
      referenceIEEE += `"${this.title}", ${this.authors.join(", ")}. ${this.publishedDate}. ${this.patentNumber} [online]. Disponible: ${this.url}`;
    }
    console.log(referenceIEEE);
  }
}

class TechnicalReport extends BibliographicReference implements TechnicalReport {
  constructor(
    title: string,
    authors: string[],
    keywords: string[],
    publishedDate: string,
    pageCount: number,
    editorial: string,
    public responsibleBody: string,
    public country: string,
    public reportType: string,
    public reportNumber: number,
    url?: string
  ) {
    super(title, authors, keywords, publishedDate, pageCount, editorial, url);
  }

  printIEEE(): void {
    // Autores, "Título", Organismo responsable, País, Tipo de informe Número de informe, fecha de publicación.
    let referenceIEEE: string = `${this.authors.join(", ")}, "${this.title}", ${this.responsibleBody}, ${this.country}, ${this.reportType} ${this.reportNumber}, ${this.publishedDate}`;
    // Para recursos electronicos.
    if (this.url) {
      referenceIEEE += ` [Online]. Disponible en: ${this.url}`;
    } else {
      referenceIEEE += `.`;
    }
    console.log(referenceIEEE);
  }
}

class TechnicalRule extends BibliographicReference implements TechnicalRule {
  constructor(
    title: string,
    authors: string[],
    keywords: string[],
    publishedDate: string,
    pageCount: number,
    editorial: string,
    public ruleNumber: number,
    public place: string,
    url?: string
  ) {
    super(title, authors, keywords, publishedDate, pageCount, editorial, url);
  }
  printIEEE(): void {
    // Título de la norma en cursiva, número de la norma, autores, lugar, fecha.
    let referenceIEEE: string = `*${this.title}*, ${this.ruleNumber}, ${this.authors.join(", ")}, ${this.place}, ${this.publishedDate}`;
    // Para recursos electronicos.
    if (this.url) {
      referenceIEEE += ` [Online]. Disponible en: ${this.url}`;
    } else {
      referenceIEEE += `.`;
    }
    console.log(referenceIEEE);
  }
}

class AcademicWorks extends BibliographicReference implements AcademicWorks {
  constructor(
    title: string,
    authors: string[],
    keywords: string[],
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
    super(title, authors, keywords, publishedDate, pageCount, editorial, url);
  }
  
  printIEEE(): void {
    //Autores, "Título", Tipo de trabajo académico, Departamento, Universidad, Lugar, País, año.
    let referenceIEEE: string = `${this.authors.join(", ")}, "${this.title}", ${this.academicWorkType}, ${this.department}, ${this.university} ${this.place}, ${this.country}, ${this.publishedDate.substring(0,4)}`;
    // Para recursos electronicos.
    if (this.url) {
      referenceIEEE += ` [Online]. Disponible en: ${this.url}`;
    } else {
      referenceIEEE += `.`;
    }
    console.log(referenceIEEE);
  }
}

class MagazineArticle extends BibliographicReference implements MagazineArticle {
  constructor(
    title: string,
    authors: string[],
    keywords: string[],
    publishedDate: string,
    pageCount: number,
    editorial: string,
    public magazineName: string,
    public magazineVolume: number,
    public magazineNumber: number,
    url?: string
  ) {
    super(title, authors, keywords, publishedDate, pageCount, editorial, url);
  }

  printIEEE(): void {
    // Autores, "Título del artículo", Título de la revista en cursiva, volumen de la revista (abreviado vol.), número de la revista (abreviado nº.), páginas que abarca el artículo (abreviado pp.), fecha de publicación.
    let referenceIEEE: string = `${this.authors.join(", ")}, "${this.title}", *${this.magazineName}*, vol.${this.magazineVolume}, nº${this.magazineNumber}, pp. ${this.pageCount}, ${this.publishedDate}`;
    // Para recursos electronicos.
    if (this.url) {
      referenceIEEE += ` [Online]. Disponible en: ${this.url}`;
    } else {
      referenceIEEE += `.`;
    }
    console.log(referenceIEEE);
  }
}

class Book extends BibliographicReference implements Book {
  constructor(
    title: string,
    authors: string[],
    keywords: string[],
    publishedDate: string,
    pageCount: number,
    editorial: string,
    public edition?: string,
    url?: string
  ) {
    super(title, authors, keywords, publishedDate, pageCount, editorial, url);
  }

  printIEEE(): void {
    // Autores, *Título*, Edición. Editorial, Año de publicación.
    let referenceIEEE: string = `${this.authors.join(", ")}, *${this.title}*, ${this.edition}, `;
    if (this.edition) {
      referenceIEEE += `${this.edition}, `;
    }
    referenceIEEE += `${this.editorial}, ${this.publishedDate.substring(0, 4)}`;
    // Para recursos electronicos.
    if (this.url) {
      referenceIEEE += ` [Online]. Disponible en: ${this.url}`;
    } else {
      referenceIEEE += `.`;
    }
    console.log(referenceIEEE);
  }
}

class PartOfBook extends Book implements PartOfBook {
  constructor(
    title: string,
    authors: string[],
    keywords: string[],
    publishedDate: string,
    pageCount: number,
    editorial: string,
    public bookTitle: string,
    public editor: string,
    public edition?: string,
    url?: string
  ) {
    super(title, authors, keywords, publishedDate, pageCount, editorial, edition, url);
  }

  printIEEE(): void {
    // Autores, "Título capitulo", *Título libro*, Editor. Editorial, Año de publicación, páginas que abarca.
    let referenceIEEE: string = `${this.authors.join(", ")}, "${this.title}", *${this.bookTitle}*, ${this.editor}. ${this.editorial}, ${this.publishedDate.substring(0, 4)}, pp.${this.pageCount}`;
    // Para recursos electronicos.
    if (this.url) {
      referenceIEEE += ` [Online]. Disponible en: ${this.url}`;
    } else {
      referenceIEEE += `.`;
    }
    console.log(referenceIEEE);
  }
}

class BibliographicReferenceManager {
  references: BibliographicReference[] = [];

  addReference(reference: BibliographicReference) {
    this.references.push(reference);
  }

  displayReferences() {
    console.table(this.references);
  }

  searchByKeyword(keyword: string, field?: string): void {
    // Se añaden returns para devolver booleans al método filter
    let results = this.references.filter((element) => {
      if (field === undefined) {
        return element.keywords.includes(keyword);
      } else {
        switch (field) {
          case "title":
            return element.title.includes(keyword);
          case "authors":
            return element.authors.includes(keyword);
          case "published date":
            if (
              /^\d{4}([\-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/.test(
                keyword
              )
            ) {
              return true;
            }
          case "editorial":
            return element.editorial.includes(keyword);
          default:
            console.log(
              "Los filtros disponibles son: titulo, autores, fecha de publicacion y editorial, en minusculas y sin acentos."
            );
            return;
        }
      }
    });
    console.table(results);
  }

  printIEEE(): void {
    this.references.forEach((reference) => {
      reference.printIEEE();
    });
  }
}

// Crear un gestor de referencias bibliográficas
const manager = new BibliographicReferenceManager();

// Agregar referencias
manager.addReference(
  new Patent(
    "Sample Patent",
    ["Jane Smith"],
    ["sample", "patent"],
    "1998-12-31",
    15,
    "Sample Journal",
    12345,
    "Sample Country",
    "https://patenturl.com"
  )
);

manager.addReference(
  new TechnicalReport(
    "Sample Technical Report",
    ["John Doe"],
    ["sample", "report"],
    "2022-02-15",
    30,
    "Sample Editorial",
    "Sample Organization",
    "Sample Country",
    "Technical",
    123,
    "https://reporturl.com"
  )
);

manager.addReference(
  new TechnicalRule(
    "Sample Technical Rule",
    ["John Doe"],
    ["sample", "rule"],
    "2023-05-20",
    5,
    "Sample Editorial",
    456,
    "Sample Place",
    "https://ruleurl.com"
  )
);

// Mostrar todas las referencias
console.log("Todas las referencias:");
manager.displayReferences();

// Buscar referencias por palabra clave
console.log("\nBúsqueda por palabra clave:");
manager.searchByKeyword("sample");

// Buscar referencias por palabra clave en un campo específico
console.log("\nBúsqueda por palabra clave en el campo 'authors':");
manager.searchByKeyword("Jane Smith", "authors");

// Exportar referencias en formato IEEE
console.log("\nExportación en formato IEEE:");
manager.printIEEE();