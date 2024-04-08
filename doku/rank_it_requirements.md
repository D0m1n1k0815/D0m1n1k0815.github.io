# Requirements

FT steht für Funktionalität, DEF für Definition.

| REQ ID | Requirement/Text                            | Object  | Priority | Implementation | Fragen |
|-------:|---------------------------------------------|---------|---------:|----------------|--------|
|      0 | Definitionen/Glossar                        | FT      |          |                |        |
|     10 | Professor: Professoren & Dozenten           | DEF     |          |                |        |
|     20 | Kurse: Alte & neue Module                   | DEF     |          |                |        |
|     30 | Bewertung: Durchschnitt aller Bewertungen   | DEF     |          |                |        |
|        |                                             |         |          |                |        |
|   1000 | **Prof-Charts**                             | FT      |        1 |                |        |
|   1010 | Top-5 Professoren in einer Liste darstellen |         |        1 |                |        |
|   1015 | Prof-Rang                                   |         |        1 |                |        |
|   1020 | Prof-Bild                                   |         |        1 |                |        |
|   1040 | Prof-Name                                   |         |        1 |                |        |
|   1050 | Prof-Gesamtbewertung                        |         |        1 |                |        |
|   1060 | Mehr anzeigen                               |         |        1 |                |        |
|        |                                             |         |          |                |        |
|   2000 | **Kurs-Charts**                             | FT      |        1 |                |        |
|   2010 | Top-5 Kurse in einer Liste darstellen       |         |        1 |                |        |
|   2015 | Kurs-Rang                                   |         |        1 |                |        |
|   2020 | Kurs-Bild                                   |         |        1 |                |        |
|   2040 | Kurs-Name                                   |         |        1 |                |        |
|   2050 | Kurs-Gesamtbewertung                        |         |        1 |                |        |
|   2060 | Mehr anzeigen                               |         |        1 |                |        |
|        |                                             |         |          |                |        |
|   3000 | **Prof-Filtern**                            | FT      |        1 |                |        |
|   3010 | Professoren in einer Liste darstellen       |         |        1 |                |        |
|   3020 | Professoren nach Fachbereich filtern        |         |        1 |                |        |
|   3030 | Professoren nach Studiengang filtern        |         |        1 |                |        |
|   3200 | Sortieren nach beste Bewertung              |         |        1 |                |        |
|   3210 | Sortieren nach schlechtester Bewertung      |         |        1 |                |        |
|   3220 | Sortieren nach Alphabet aufsteigend         |         |        1 |                |        |
|   3230 | Sortieren nach Alphabet absteigend          |         |        1 |                |        |
|   3240 | Sortieren nach meiste Kurse                 |         |        1 |                |        |
|   3250 | Sortieren nach wenigste Kurse               |         |        1 |                |        |
|   3400 | Professorenattribute                        |         |        1 |                |        |
|   3405 | Rang                                        |         |        1 |                |        |
|   3410 | Bild                                        |         |        1 |                |        |
|   3420 | Name                                        |         |        1 |                |        |
|   3430 | Bewertung                                   |         |        1 |                |        |
|        |                                             |         |          |                |        |
|   4000 | **Kurs-Filtern**                            | FT      |        1 |                |        |
|   4010 | Kurse in einer Liste darstellen             |         |        1 |                |        |
|   4020 | Kurse nach Fachbereich filtern              |         |        1 |                |        |
|   4030 | Kurse nach Studiengang filtern              |         |        1 |                |        |
|   4200 | Sortieren nach beste Bewertung              |         |        1 |                |        |
|   4210 | Sortieren nach schlechtester Bewertung      |         |        1 |                |        |
|   4220 | Sortieren nach Alphabet aufsteigend         |         |        1 |                |        |
|   4230 | Sortieren nach Alphabet absteigend          |         |        1 |                |        |
|   4400 | Kursattribute                               |         |        1 |                |        |
|   4405 | Rang                                        |         |        1 |                |        |
|   4410 | Bild                                        |         |        1 |                |        |
|   4420 | Name                                        |         |        1 |                |        |
|   4430 | Bewertung                                   |         |        1 |                |        |
|        |                                             |         |          |                |        |
|   5000 | **Suchfunktion**                            | FT      |        1 |                |        |
|   5010 | Filtern nach Fachbereich                    |         |        1 |                |        |
|   5020 | Suche nach Professor/Kurs                   |         |        1 |                |        |
|   5030 | Dropdownliste erscheint nach Teileingabe    |         |        2 |                |        |
|   5040 | Suchergebnisse in einer Liste darstellen    |         |        3 |                |        |
|        |                                             |         |          |                |        |
|   6000 | **Profilansicht des Professors**            | FT      |        1 |                |        |
|   6010 | Bild                                        |         |        1 |                |        |
|   6020 | Name                                        |         |        1 |                |        |
|   6030 | Titel                                       |         |        1 |                |        |
|   6040 | Timeline basierend auf String-Sprechblasen  |         |        1 |                |        |
|   6050 | Dozierte Module                             |         |          |                |        |
|   6800 | Bewertungen                                 |         |        1 |                |        |
|   6810 | Bewertungsbutton                            |         |        1 |                |        |
|   6900 | Vorschläge basierend auf Suchen             |         |        1 |                |        |
|        |                                             |         |          |                |        |
|   7000 | **Profilansicht des Kurses**                | FT      |        1 |                |        |
|   7002 | Führende Nummer                             |         |          |                |        |
|   7004 | Kurzzeichen                                 |         |          |                |        |
|   7010 | Bild                                        |         |        1 |                |        |
|   7020 | Name                                        |         |        1 |                |        |
|   7030 | Verantwortlicher                            |         |        1 |                |        |
|   7040 | Dozenten                                    |         |        1 |                |        |
|   7050 | Sprache                                     |         |        1 |                |        |
|   7060 | Verwendung des Moduls in Studiengängen      |         |        1 |                |        |
|   7070 | Lehrformen                                  | DELETED |        1 |                |        |
|   7080 | Zeit                                        |         |        1 |                |        |
|   7090 | Credits                                     |         |        1 |                |        |
|   7110 | Lernziele und Kompetenzen                   |         |        1 |                |        |
|   7120 | Inhalt des Kurses                           |         |        1 |                |        |
|   7130 | Prüfungsmodalitäten                         |         |        1 |                |        |
|   7140 | Letzte Aktualisierung                       |         |        1 |                |        |
|   7800 | Bewertungen                                 |         |        1 |                |        |
|   7810 | Bewertungsbutton                            |         |        1 |                |        |
|   7900 | Vorschläge basierend auf Suchen             |         |        1 |                |        |
|        |                                             |         |          |                |        |
|   8000 | **Professor-Bewertungsfunktion**            | FT      |        1 |                |        |
|   8010 | Pünktlichkeit                               |         |        1 |                |        |
|   8020 | Engagement                                  |         |        1 |                |        |
|   8030 | Verständlichkeit                            |         |        1 |                |        |
|   8040 | Freundlichkeit                              |         |        1 |                |        |
|   8900 | Möglichkeit, Gewichtung anzupassen          |         |        3 |                |        |
|        |                                             |         |          |                |        |
|   9000 | **Kurs-Bewertungsfunktion**                 | FT      |        1 |                |        |
|   9010 | Inhaltliche Verständlichkeit                |         |        1 |                |        |
|   9020 | Reichhaltigkeit an Lehrmaterialien          |         |        1 |                |        |
|   9030 | Lernaufwand                                 |         |        1 |                |        |
|   9040 | Relevanz                                    |         |        1 |                |        |
|   9900 | Möglichkeit, Gewichtung anzupassen          |         |        3 |                |        |
|        |                                             |         |          |                |        |

