# Klasse: `Password`

Die Klasse `Password` implementiert einen Algorithmus zur Erstellung von Passwörtern, die bestimmten Anforderungen entsprechen.

## Konstruktor

### `constructor(chars: object)`

Erstellt eine neue Instanz der Klasse `Password` mit den gegebenen Eigenschaften der Passwort-Zeichenkette.

Die Eigenschaften sind:

- `length`: Ein Objekt mit den folgenden Eigenschaften:
  - `min`: Die minimale Länge des Passworts.
  - `special`: Die Anzahl der Sonderzeichen, die im Passwort enthalten sein sollen.
  - `big`: Die Anzahl der Großbuchstaben, die im Passwort enthalten sein sollen.
  - `small`: Die Anzahl der Kleinbuchstaben, die im Passwort enthalten sein sollen.
  - `numbs`: Die Anzahl der Ziffern, die im Passwort enthalten sein sollen.
- `included`: Eine Zeichenkette mit Zeichen, die im Passwort enthalten sein sollen.
- `excluded`: Eine Zeichenkette mit Zeichen, die im Passwort ausgeschlossen werden sollen.

## Methoden

### `availableChars(): string[]`

Gibt ein Array mit allen Zeichen zurück, die für das Passwort verfügbar sind, inklusive Sonderzeichen, Großbuchstaben, Kleinbuchstaben und Ziffern.

### `filteredChars(): string[]`

Gibt ein Array mit allenZeichen zurück, die für das Passwort verfügbar sind, ohne die ausgeschlossenen Zeichen.

### `randomCharFromString(str: string = '', numIterations: number): string`

Gibt eine zufällig gewählte Zeichenkette mit der gegebenen Anzahl von Zeichen aus dem gegebenen String zurück. Wenn kein String angegeben wird, wird eine leere Zeichenkette zurückgegeben.

### `randomIntBetween(min: number, max: number): number`

Gibt eine zufällige ganze Zahl zwischen `min` (inklusive) und `max` (inklusive) zurück.

### `randomStringFromChars(length: number): string`

Erstellt eine zufällige Zeichenkette mit der gegebenen Länge, die den Anforderungen für das Passwort entspricht.

### `buldPasswordString(): string`

Erstellt eine Zeichenkette, die den Anforderungen für das Passwort entspricht, indem zufällige Zeichen entsprechend der Eigenschaften in `length` und der inkludierten Zeichen ausgewählt werden.

### `shuffleChars(chars: string): string`

Mischt die Zeichen in der gegebenen Zeichenkette zufällig.

### `getPassword(): string`

Gibt ein Passwort zurück, das den Anforderungen für das Passwort entspricht.

