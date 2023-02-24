# Klasse: `Crypto`

Die Klasse `Crypto` implementiert einen Algorithmus zur Verschlüsselung und Entschlüsselung von Text mithilfe einer "Salz" Zeichenkette.

## Konstruktor

### `constructor(salt: string)`

Erstellt eine neue Instanz der Klasse `Crypto` mit der gegebenen Salz-Zeichenkette.

## Methoden

### `encrypted(pswd: string): string`

Verschlüsselt das gegebene Passwort und gibt die verschlüsselte Zeichenkette zurück.

### `decrypted(encoded: string): string`

Entschlüsselt die gegebene verschlüsselte Zeichenkette und gibt die ursprüngliche Zeichenkette zurück.

### `textToChars(text: string): number[]`

Wandelt die gegebene Zeichenkette in ein Array von ASCII-Zeichencodes um.

### `byteHex(num: number): string`

Konvertiert die gegebene Zahl in eine Hexadezimaldarstellung. Wenn die Hexadezimaldarstellung nur aus einem Zeichen besteht, wird eine führende 0 hinzugefügt.
