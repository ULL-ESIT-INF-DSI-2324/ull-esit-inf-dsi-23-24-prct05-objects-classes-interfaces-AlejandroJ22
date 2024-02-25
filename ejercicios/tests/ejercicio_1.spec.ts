import "mocha";
import { expect } from "chai";

import { BibliographicReferenceManager } from "../src/ejercicio_1/BibliographicReferenceManager";
import { BibliographicReference } from "../src/ejercicio_1/BibliographicReference";
import { Patent } from "../src/ejercicio_1/Patent";
import { TechnicalReport } from "../src/ejercicio_1/TechnicalReport";
import { TechnicalRule } from "../src/ejercicio_1/TechnicalRule";
import { AcademicWorks } from "../src/ejercicio_1/AcademicWorks";
import { MagazineArticle } from "../src/ejercicio_1/MagazineArticle";
import { Book, PartOfBook } from "../src/ejercicio_1/Book";

describe("BibliographicReferenceManager", () => {
  it("Artículo de revista", () => {
    const magazineArticle = new MagazineArticle(
      "DIGNEA",
      ["Alejandro Marrero", "Eduardo Segredo", "Coromoto León", "Emma Hart"],
      [
        "Instance generation",
        "Novelty search",
        "Evolutionary algorithm",
        "Optimisation",
        "Knapsack problem",
      ],
      `To advance research in the development of optimisation algorithms, 
      it is crucial to have access to large test-beds of diverse and discriminatory 
      instances from a domain that can highlight strengths and weaknesses of 
      different algorithms. The DIGNEA tool enables diverse instance suites to 
      be generated for any domain, that are also discriminatory with respect to a 
      set of solvers of the user choice. Written in C++, and delivered as a repository 
      and as a Docker image, its modular and template-based design enables it 
      to be easily adapted to multiple domains and types of solvers with minimal effort. 
      This paper exemplifies how to generate instances for the Knapsack Problem domain.`,
      "2023-03-15",
      7,
      "SoftwareX",
      "SoftwareX",
      1,
      22,
      "https://www.sciencedirect.com/science/article/pii/S2352711023000511#d1e146"
    );
    expect(magazineArticle).to.be.an.instanceOf(MagazineArticle);
  });
});