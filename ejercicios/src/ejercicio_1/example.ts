import { BibliographicReferenceManager } from "./BibliographicReferenceManager";
import { Patent } from "./Patent";
import { TechnicalReport } from "./TechnicalReport";
import { TechnicalRule } from "./TechnicalRule";
import { AcademicWorks } from "./AcademicWorks";
import { MagazineArticle } from "./MagazineArticle";
import { Book, PartOfBook } from "./Book";

const manager = new BibliographicReferenceManager();

// Agrgamos las referencias pedidas.
manager.addReference(
  new MagazineArticle(
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
    22,
    1,
    "https://www.sciencedirect.com/science/article/pii/S2352711023000511#d1e146"
  )
);

manager.addReference(
  new MagazineArticle(
    "Engaging Primary and Secondary School Students in Computer Science Through Computational Thinking Training",
    [
      "Rafael Herrero-Álvarez",
      "Gara Miranda",
      "Coromoto León",
      "Eduardo Segredo",
    ],
    [
      "Instance generation",
      "Novelty search",
      "Evolutionary algorithm",
      "Optimisation",
      "Knapsack problem",
    ],
    `Although Computer Science has grown to become one of the most highly 
    demanded professional careers, every year, only a small percentage of 
    students choose a degree directly related to Computer Science. Perhaps 
    the problem lies in the lack of information that society has about 
    Computer Science itself, and particularly about the work computer 
    scientists do. No one doubts the role of Mathematics or Languages 
    as core subjects in every primary and secondary education syllabus; 
    however, Computer Science plays a negligible role in most current 
    syllabuses. Only in a few countries have governments paid special 
    attention to content related to Computer Science and to learning to 
    analyze and solve problems the way computer scientists do 
    (Computational Thinking). In this article, we present Piens@ 
    Computacion@ULLmente , a project that provides a methodology 
    to promote Computer Science through Computational Thinking activities 
    among primary and secondary education students. The results 
    obtained from an exhaustive statistical analysis of the data we 
    collected demonstrate that the perception of Computer Science that 
    pre-university students have can be improved through specific training. 
    Moreover, we can also confirm that the performance of pre-university 
    students involving Computational Thinking skills is independent of gender, 
    particularly at the primary education level.`,
    "2022-04-05",
    69,
    "IEEE",
    "IEEE Transactions on Emerging Topics in Computing",
    11,
    1,
    "https://ieeexplore.ieee.org/abstract/document/9749967"
  )
);

manager.addReference(
  new TechnicalReport(
    `Generating Diverse and Discriminatory Knapsack Instances bySearching for 
    Novelty in Variable Dimensions of Feature-Space`,
    [
      "Alejandro Marrero",
      "Eduardo Segredo",
      "Emma Hart",
      "Jakob Bossek",
      "Aneta Neumann",
    ],
    [
      "Instance generation",
      "instance-space analysis",
      "knapsack problem",
      "novelty search",
      "evolutionary computation",
    ],
    `Generating new instances via evolutionary methods is commonly used to create 
    new benchmarking data-sets, with a focus on attempting to cover an instance-space 
    as completely as possible. Recent approaches have exploited Quality-Diversity 
    methods to evolve sets of instances that are both diverse and discriminatory 
    with respect to a portfolio of solvers, but these methods can be challenging when
    attempting to find diversity in a high-dimensional feature-space. We address this
    issue by training a model based on Principal Component Analysis on existing 
    instances to create a low-dimension projection of the high-dimension feature-vectors, 
    and then apply Novelty Search directly in the new low-dimension space. We conduct 
    experiments to evolve diverse and discriminatory instances of Knapsack Problems, 
    comparing the use of Novelty Search in the original feature-space to using Novelty 
    Search in a low-dimensional projection, and repeat over a given set of dimensions. 
    We find that the methods are complementary: if treated as an ensemble, they 
    collectively provide increased coverage of the space. Specifically, searching 
    for novelty in a low-dimension space contributes 56% of the filled regions of 
    the space, while searching directly in the feature-space covers the remaining 44%.`,
    "2023-07-12",
    320,
    "ACM Conferences",
    "GECCO '23: Proceedings of the Genetic and Evolutionary Computation Conference",
    "Portugal",
    "Contribution to Congress",
    9798400701191,
    "https://doi.org/10.1145/3583131.3590504"
  )
);

manager.addReference(
  new TechnicalReport(
    `Dealing With a Problematic Roundabout by Optimizing aTraffic Light System Through Evolutionary Computation`,
    ["Francisco Cruz-Zelante", "Eduardo Segredo", "Gara Miranda"],
    [
      "Traffic light scheduling problem",
      "evolutionary algorithm",
      "geneticalgorithm",
      "optimization",
      "simulation",
      "SUMO",
    ],
    `The Padre Anchieta roundabout (Tenerife) takes on a substantial amount of traffic 
    which, at peak times, often causes significant traffic jams. With the aim of 
    alleviating traffic congestion, this paper analyses the possibility of installing 
    a set of traffic lights in the roundabout. The duration of the phases of traffic 
    lights are optimized through a genetic algorithm. SUMO, an open source traffic 
    simulator, is used to evaluate the traffic of the area by considering real traffic data. 
    Seven different scenarios are evaluated with respect to the roundabout, three of them 
    without traffic lights and the other four with them. Simultaneously, the number of 
    pedestrians, and the particular location of the traffic lights, are modified in each 
    of the aforementioned scenarios, when applicable. To determine which parameters of the 
    evolutionary algorithm provided the best results, a previous parameter setting study 
    based on a statistical comparison procedure was performed. Particularly, the crossover 
    operator and the population size, were analyzed. From the results obtained in the 
    experimental assessment, we conclude that the use of an optimized traffic light system 
    would not improve traffic flow in the roundabout. Another important conclusion is that 
    the larger the number of pedestrians, the slower the traffic flow.`,
    "2021-07-08",
    306,
    "ACM Conferences",
    "GECCO '21: Proceedings of the Genetic and Evolutionary Computation Conference Companion",
    "France",
    "Contribution to Congress",
    9781450383516,
    "https://dl.acm.org/doi/abs/10.1145/3449726.3459443"
  )
);

manager.addReference(
  new PartOfBook(
    `A Novelty-Search Approach to Filling an Instance-Space with Diverse 
    and Discriminatory Instances for the Knapsack Problem`,
    ["Alejandro Marrero", "Eduardo Segredo", "Coromoto León", "Emma Hart"],
    [
      "Instance generation",
      "Novelty search",
      "Evolutionary algorithm",
      "Knapsack problem",
      "Optimisation",
    ],
    `We propose a new approach to generating synthetic instances in the knapsack domain 
    in order to fill an instance-space. The method uses a novelty-search algorithm to 
    search for instances that are diverse with respect to a feature-space but also 
    elicit discriminatory performance from a set of target solvers. We demonstrate that 
    a single run of the algorithm per target solver provides discriminatory 
    instances and broad coverage of the feature-space. Furthermore, the instances also 
    show diversity within the performance-space, despite the fact this is not explicitly 
    evolved for, i.e. for a given "winning solver", the magnitude of the performance-gap
    between it and other solvers varies across a wide-range. The method therefore provides 
    a rich instance-space which can be used to analyse algorithm strengths/weaknesses, conduct 
    algorithm-selection or construct a portfolio solver.`,
    "2022-08-14",
    5,
    "Springer, Cham",
    "Lecture Notes in Computer Science",
    [
      "Günter Rudolph",
      "Anna V. Kononova",
      "Hernán Aguirre",
      "Pascal Kerschke",
      "Gabriela Ochoa",
      "Tea Tušar",
    ],
    "vol 13398",
    "https://doi.org/10.1007/978-3-031-14714-2_16"
  )
);

manager.addReference(
  new Book(
    "Essential TypeScript 4: From Beginner to Pro",
    ["Freeman, Adam"],
    [
      "Adam Freeman",
      "Computer Science",
      "Improving your TypeScript",
      "JavaScript Programming",
      "Microsoft and .NET",
      "Microsoft development",
      "Microsoft Programming",
      "Professional and Applied Computing",
      "Programming Languages, Compilers, Interpreters",
      "Programming TypeScript",
      "TypeScript",
      "TypeScript (Computer program language)",
      "TypeScript with Angular",
      "TypeScript with ASP.NET",
      "TypeScript with DOM",
      "TypeScript with Node and Express",
      "TypeScript with React",
    ],
    `Learn the essentials and more of TypeScript, a popular superset of the JavaScript 
    language that adds support for static typing. TypeScript combines the typing features 
    of C# or Java with the flexibility of JavaScript, reducing typing errors and providing 
    an easier path to JavaScript development.Author Adam Freeman explains how to get the 
    most from TypeScript 4 in this second edition of his best-selling book. He begins by 
    describing the TypeScript language and the benefits it offers and then shows you how 
    to use TypeScript in real-world scenarios, including development with the DOM API, and 
    popular frameworks such as Angular and React. He starts from the nuts-and-bolts and 
    builds up to the most advanced and sophisticated features.Each topic is covered clearly 
    and concisely, and is packed with the details you need to be effective. The most important 
    features are given a no-nonsense, in-depth treatment and chapters include common problems 
    and teach you how to avoid them.What You Will LearnGain a solid understanding of the 
    TypeScript language and toolsUse TypeScript for client- and server-side developmentExtend 
    and customize TypeScriptTest your TypeScript codeApply TypeScript with the DOM API, Angular, 
    React, and Vue.js Who This Book Is ForJavaScript developers who want to use TypeScript to 
    create client-side or server-side applications`,
    "2021",
    434,
    "Apress Berkeley, CA",
    "2",
    "https://doi.org/10.1007/978-1-4842-7011-0"
  )
);

manager.addReference(
  new AcademicWorks(
    "Resolución del Multi Depot Cumulative Capacitated Vehicle Routing Problem mediante computación evolutiva.",
    ["Navarro Rodríguez, Cristo Daniel"],
    [
      "Optimization Problem",
      "Vehicle Routing Problem",
      "Evolutionary Computation",
      "Software Development",
    ],
    `The Multi Depot cumulative Capacitated Vehicle routing Problem is an optimization
    problem for vehicle routes which was recently formulated. Its objective is to minimize the
    arrival time of a fleet of vehicles to a group of clients, taking into account the capacity of
    the vehicles. This problem can be very useful when applied to natural disaster situations,
    where the arrival time to the possible victims is crucial.
    Evolutionary Computation gives us the tools to solve this type of optimization problem,
    being able to bring new results to the previous studies of this problem. It is for this reason
    that we decided to implement a memetic algorithm to solve the problem, performing the
    corresponding study of the results, and creating a web application to show its functioning.
    In order to implement it, the library GeneticsJS was extended to adapt it to the needs of
    the problem.`,
    "2021-09-07",
    78,
    "none",
    "TFG",
    "Ingeniería Informática",
    "ULL",
    "La Laguna",
    "Spain",
    "http://riull.ull.es/xmlui/handle/915/25441"
  )
);

manager.addReference(
  new AcademicWorks(
    "Resolución del Multi Depot Cumulative Capacitated Vehicle Routing Problem mediante computación evolutiva.",
    ["Navarro Rodríguez, Cristo Daniel"],
    [
      "Optimization Problem",
      "Vehicle Routing Problem",
      "Evolutionary Computation",
      "Software Development",
    ],
    `The Multi Depot cumulative Capacitated Vehicle routing Problem is an optimization
    problem for vehicle routes which was recently formulated. Its objective is to minimize the
    arrival time of a fleet of vehicles to a group of clients, taking into account the capacity of
    the vehicles. This problem can be very useful when applied to natural disaster situations,
    where the arrival time to the possible victims is crucial.
    Evolutionary Computation gives us the tools to solve this type of optimization problem,
    being able to bring new results to the previous studies of this problem. It is for this reason
    that we decided to implement a memetic algorithm to solve the problem, performing the
    corresponding study of the results, and creating a web application to show its functioning.
    In order to implement it, the library GeneticsJS was extended to adapt it to the needs of
    the problem.`,
    "2021-09-07",
    78,
    "none",
    "TFG",
    "Ingeniería Informática",
    "ULL",
    "La Laguna",
    "Spain",
    "http://riull.ull.es/xmlui/handle/915/25441"
  )
);

manager.addReference(
  new AcademicWorks(
    "On the automatic planning of healthy and balanced menus",
    ["Marrero Díaz, Alejandro"],
    [
      "menu planning",
      "computer science",
      "evolutionary computing",
      "multiobjective optimisation",
    ],
    `With the raise of diseases related with unhealthy lifestyles such as heartattacks, overweight, diabetes, 
    etc., encouraging healthy and balanced patterns in the population is one of the most important action 
    points for governments around the world. Furthermore, it is actually even a more critical situation when 
    a high percentage of patients are children and teenagers whose habits consist merely in eating fast or 
    ultra-processed food and a sedentary life. The development of healthy and balanced menu plans becomes a 
    typical task for physicians and nutritionists, and it is at this point that Computer Science has taken 
    an important role. Discovering new approaches for generating healthy and balanced, as well as inexpensive 
    menu plans will play an important part in banish of diseases from actual and new generations. In this 
    Master Thesis, a recently proposed Evolutionary Algorithm has been compared to other state-of-art 
    evolutionary algorithms for solving the Menu Planning Problem. In order to evaluate the performance 
    of the developed algorithm, an exhaustive experimental assessment was made. Firstly, we focused on 
    evaluating the parameter setting of the algorithm so afterwards the best configuration found could be 
    compared with other well-known algorithms.`,
    "2019-03-13",
    40,
    "none",
    "TFM",
    "Ingeniería Informática",
    "ULL",
    "La Laguna",
    "Spain",
    "http://riull.ull.es/xmlui/handle/915/14783"
  )
);

// Mostrar todas las referencias
console.log("Todas las referencias:");
manager.displayReferences();

// Buscar referencias por palabra clave
console.log("\nBúsqueda por palabra clave:");
manager.searchByKeyword("Optimization Problem");

// Buscar referencias por palabra clave en un campo específico
console.log("\nBúsqueda por palabra clave en el campo 'authors':");
manager.searchByKeyword("Eduardo Segredo", "authors");

// Exportar referencias en formato IEEE
console.log("\nExportación en formato IEEE:");
manager.printIEEE();
