export class DbLecturerRating {
  punctuality: number = 0.5;
  commitment: number = 0.5;
  clarity: number = 0.5;
  kindness: number = 0.5;

  static calculateAverage(thies: DbLecturerRating): number {
    return Math.round(((thies.punctuality + thies.commitment + thies.clarity + thies.kindness) / 4) * 100) / 100;
  }
}

export class DbModuleRating {
  clarity: number = 0.5;
  richness: number = 0.5;
  effort: number = 0.5;
  relevance: number = 0.5;

  static calculateAverage(thies: DbModuleRating): number {
    return Math.round(((thies.clarity + thies.richness + thies.effort + thies.relevance) / 4) * 100) / 100;
  }
}

export class DbTimelineEntry {
  year: number = 2024;
  text: string = "n. a.";
}

export class DbLecturer {
  [key: string]: any;
  user: string = "astley";
  name: string = "Rick Astley";
  title: string = "Prof. Dr.";
  image: string = "https://upload.wikimedia.org/wikipedia/commons/1/19/Rick_Astley_Aint_Too_Proud_To_Beg.jpg";
  timeline: DbTimelineEntry[] = [
    { year: 1987, text: "Veröffentlichung seines Debütalbums, das mit Hits wie \"Never Gonna Give You Up\" und \"Together Forever\" große kommerzielle Erfolge feiert und ihn zu einem der bekanntesten Popstars der 1980er Jahre macht." },
    { year: 2007, text: "Entstehung des Phänomens \"Rickrolling\", bei dem Internetnutzer irreführende Links zu Videos von Rick Astleys Hit \"Never Gonna Give You Up\" teilen, was zu einem weltweiten viralen Trend wird und Millionen von Internetnutzern erreicht." },
    { year: 2016, text: "Rückkehr ins Rampenlicht mit seinem Album \"50\", das sein erstes Studioalbum nach über einem Jahrzehnt ist und einen bemerkenswerten Erfolg erzielt, wodurch er seine Popularität auch im digitalen Zeitalter unter Beweis stellt." },
  ];
  rating: DbLecturerRating = new DbLecturerRating();
  modules: number[] = [ 1234, 5181, 5179, 5180, 5100 ];
  suggestions: string[] = [ "turing", "hilbert", "hopper", "einstein", "neumann" ];
}

export class DbModule {
  [key: string]: any;
  num: number = 1234;
  name: string = "Philosophie";
  image: string = "https://upload.wikimedia.org/wikipedia/commons/3/3f/Totally_not_a_Rickroll_QR_code.png";
  abbreviation: string = "PHI";
  responsible: string = "astley";
  lecturers: string[] = [ "astley" ];
  language: string = "de_DE";
  usage: string[][] = [
    ["Elektrotechnik (B.Sc.)", "2. Semester", "Pflichtmodul"],
    ["Medizin- und Gesundheitstechnologie (B.Sc.)", "2. Semester", "Pflichtmodul"],
    ["Technische Informatik (B.Sc.)", "2. Semester", "Pflichtmodul"]
  ];
  time: number[] = [ 60, 90 ];
  credits: number = 5;
  goals: string = "Die Studierenden sollen ein grundlegendes Verständnis für die zentralen Konzepte, Methoden und Fragen der Philosophie entwickeln. Sie sollen in der Lage sein, philosophische Argumente zu analysieren, kritisch zu reflektieren und schriftlich sowie mündlich über philosophische Probleme zu argumentieren. Darüber hinaus sollen sie die historische Entwicklung der Philosophie nachvollziehen und die Relevanz philosophischer Fragestellungen für andere Disziplinen erkennen können.";
  content: string = "Vorlesung: Einführung in die Philosophiegeschichte, Logik und Argumentationstheorie, Ethik und Moralphilosophie, Metaphysik und Erkenntnistheorie; Diskussion und Analyse von philosophischen Texten und Argumenten aus verschiedenen Epochen und Traditionen. Seminar: Vertiefende Diskussionen zu spezifischen Themen der Philosophie, Präsentation und kritisches Feedback zu eigenen philosophischen Positionen und Argumenten.";
  exam: string = "Schriftliche Prüfung, Dauer 120 Minuten, benotet. Die Note setzt sich aus der Bewertung der schriftlichen Prüfungsleistung sowie der aktiven Teilnahme an Seminaren und Diskussionen zusammen.";
  date: string = "1970-01-01T00:00:00Z";
  rating: DbModuleRating = new DbModuleRating();
  suggestions: number[] = [ 5198, 5205, 5181, 5174, 5155 ];
}
