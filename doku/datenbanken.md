# Datenbanken
Genutzt wird eine NoSQL-Datenbank, die auf JSON basiert.

## In der Dokumentation verwendete Datentypen

| Doku-Datentyp | JSON-Datentyp | Beschreibung                                                                                                  |
|---------------|---------------|---------------------------------------------------------------------------------------------------------------|
| `bool`        | `boolean`     | Wahrheitswert                                                                                                 |
| `char`        | `string`      | Unicode-Zeichen                                                                                               |
| `uN`          | `number`      | N-Bit vorzeichenloser Integer                                                                                 |
| `iN`          | `number`      | N-Bit vorzeichenbehafteter Integer                                                                            |
| `unit`        | `number`      | Reelle Zahl im Wertebereich von 0.0 bis 1.0 (normiert) <br /> Name von Eigenschaft, Einheitsintervall zu sein |
| `string`      | `string`      | UTF-8-kodierte Zeichenkette                                                                                   |
| `d[n]`        | `array`       | Array von n Elementen des Datentyps `d`                                                                       |
| `object`      | `object`      | Assoziatives Feld                                                                                             |

## In der Dokumentation verwendete Bemerkungen

- F: kennzeichnet ein Format
- UTC-Stempel ist ein Zeitstempel im Format `YYYY-MM-DDTHH:MM:SSZ`

## Daten

### LecturerRating: `object` - REQ 8000
| Attribut     | Datentyp | Beschreibung     |  REQ |
|--------------|----------|------------------|-----:|
| punctuality  | `unit`   | Pünktlichkeit    | 8010 |
| commitment   | `unit`   | Engagement       | 8020 |
| clarity      | `unit`   | Verständlichkeit | 8030 |
| kindness     | `unit`   | Freundlichkeit   | 8040 |

### ModuleRating: `object` - REQ 9000
| Attribut   | Datentyp | Beschreibung                      |  REQ |
|------------|----------|-----------------------------------|-----:|
| clarity    | `unit`   | Verständlichkeit                  | 9010 |
| richness   | `unit`   | Reichhaltigkeit des Lehrmaterials | 9020 |
| effort     | `unit`   | Lernaufwand                       | 9030 |
| relevance  | `unit`   | Relevanz                          | 9040 |

### TimelineEntry: `object` - REQ 6040
| Attribut | Datentyp | Beschreibung |  REQ |
|----------|----------|--------------|-----:|
| year     | `i32`    | Jahr         | 6040 |
| text     | `string` | Text         | 6040 |

### Lecturer: `object` - REQ 6000
| Attribut    | Datentyp           | Bemerkungen | Beschreibung                      |  REQ |
|-------------|--------------------|-------------|-----------------------------------|-----:|
| user        | `string`           |             | ILIAS-Benutzername                | 6000 |
| name        | `string`           |             | Name(n)                           | 6020 |
| title       | `string`           |             | Titel                             | 6030 |
| image       | `string`           | URL         | Bild                              | 6010 |
| modules     | `u32[n]`           |             | Dozierte Module                   |      |
| timeline    | `TimelineEntry[n]` |             | Werdegang                         | 6040 |
| rating      | `LecturerRating`   |             | Bewertung                         | 6800 |
| suggestions | `string[n]`        |             | Vorschläge als Array von Prof-IDs | 6900 |

### Module: `object` - REQ 7000
| Attribut       | Datentyp          | Bemerkungen | Beschreibung                           |  REQ |
|----------------|-------------------|-------------|----------------------------------------|-----:|
| num            | `u32`             |             | Modulnummer                            | 7002 |
| name           | `string`          |             | Bezeichnung des Moduls                 | 7020 |
| image          | `string`          | URL         | Bild                                   | 7010 |
| abbreviation   | `string`          |             | Kurzzeichen des Moduls                 | 7004 |
| responsible    | `string`          |             | Modulverantwortlicher                  | 7030 |
| lecturers      | `ID(Lecturer)[n]` |             | Dozenten                               | 7040 |
| language       | `string`          | F: xx_YY    | Sprachcode: (ISO 639)_(ISO 3166)       | 7050 |
| usage          | `string[3][n]`    |             | Verwendung des Moduls in Studiengängen | 7060 |
| time           | `u16[2]`          | in Stunden  | (Kontaktzeit, Eigenstudienzeit)        | 7080 |
| credits        | `u8`              |             | Credits für den Kurs                   | 7090 |
| goals          | `string`          |             | Lernziele und Kompetenzen              | 7110 |
| content        | `string`          |             | Inhalt des Kurses                      | 7120 |
| exam           | `string`          |             | Prüfungsmodalitäten                    | 7130 |
| date           | `string`          | UTC-Stempel | Letzte Aktualisierung                  | 7140 |
| rating         | `ModuleRating`    |             | Bewertung                              | 7800 |
| suggestions    | `u32[n]`          |             | Vorschläge als Array von Kurs-IDs      | 7900 |

### Lecturers: `array` - REQ 1000
| Attribut | Datentyp      | Bemerkungen | Beschreibung       |
|----------|---------------|-------------|--------------------|
| this     | `Lecturer[n]` |             | Liste von Dozenten |

### Modules: `array` - REQ 2000
| Attribut | Datentyp    | Bemerkungen | Beschreibung       |
|----------|-------------|-------------|--------------------|
| this     | `Module[n]` |             | Liste von Modulen  |

