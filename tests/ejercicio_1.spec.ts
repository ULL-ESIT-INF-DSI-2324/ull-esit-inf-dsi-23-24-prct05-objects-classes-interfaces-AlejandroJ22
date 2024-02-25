import "mocha";
import { expect } from "chai";

import { BibliographicReferenceManager } from "../src/ejercicio_1/BibliographicReferenceManager";
import { checkDate, BibliographicReference } from "../src/ejercicio_1/BibliographicReference";
import { Patent } from "../src/ejercicio_1/Patent";
import { TechnicalReport } from "../src/ejercicio_1/TechnicalReport";
import { TechnicalRule } from "../src/ejercicio_1/TechnicalRule";
import { AcademicWorks } from "../src/ejercicio_1/AcademicWorks";
import { MagazineArticle } from "../src/ejercicio_1/MagazineArticle";
import { Book, PartOfBook } from "../src/ejercicio_1/Book";

describe("Date", () => {
  it("Fecha correcta", () => {
    const date: string = "2024-02-25";
    expect(checkDate(date)).to.be.equal(true);
    const date_only_year: string = "2024";
    expect(checkDate(date_only_year)).to.be.equal(true);
  });
  it("Fecha incorrecta", () => {
    const wrong_date: string = "";
    expect(checkDate(wrong_date)).to.be.equal(false);
    const wrong_day: string = "2024-02-33";
    expect(checkDate(wrong_day)).to.be.equal(false);
    const wrong_month: string = "2024-13-25";
    expect(checkDate(wrong_month)).to.be.equal(false);
  });
});

// Para comprobar el funcionamiento correcto del resto del programa ejecute el fichero "example.ts".