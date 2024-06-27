# README für True University ID
Praktische Umsetzung der Masterarbeit  
von Leon Stadler  
im Masterstudiengang InterMedia  
Betreuung: Dr. Margarita Köhl, MAS  
Sommersemester 2024  
Studiengang: Intermedia  
Fachhochschule Vorarlberg

# Inhaltsverzeichnis

1. [Überblick](#überblick)
2. [Hauptfunktionen](#hauptfunktionen)
3. [Systemanforderungen](#systemanforderungen)
4. [Installation und Einrichtung](#installation-und-einrichtung)
   - [Deployment des Smart Contracts](#deployment-des-smart-contracts)
   - [Verwendung der Webanwendung](#verwendung-der-webanwendung)
5. [Mitwirkung](#mitwirkung)
6. [Lizenz](#lizenz)
7. [Kontakt](#kontakt)

## Überblick
Dieses Projekt ist Teil meiner Masterarbeit im Masterstudiengang InterMedia an der Fachhochschule Vorarlberg. In meiner Arbeit untersuche ich die Einsatzmöglichkeiten von Soulbound Tokens (SBTs) zur Verwaltung digitaler Identitäten in einem dezentralen Web3-Ökosystem.
Ziel des Projektes ist es, zu untersuchen, wie solche Technologien eingesetzt werden können und welche Möglichkeiten sich daraus ergeben.

Das Projekt ermöglicht die Erstellung von nicht übertragbaren Token, die spezifische Informationen von Universitäten enthalten. Diese Token können als digitaler Identitätsnachweis für Studierende dienen. Ein Token kann jederzeit nach seiner Ausgabe vom Benutzer selbst oder von Administratoren gelöscht werden, indem die Verbindung zu IPFS getrennt und der Token verbrannt wird. Bitte beachten Sie, dass bei der Eingabe personenbezogene Daten verarbeitet werden, die unwiderruflich auf der Blockchain gespeichert und über IPFS auf Pinata abgelegt werden.
Es kann und wird keine Garantie für die Rechtmäßigkeit der Daten übernommen, welche durch die Nutzer*innen eingegeben oder abgefragt werden. 

## Hauptfunktionen
- **Nicht übertragbare Token**: Erstellung einzigartiger digitaler Identitäten, die sicher an eine Einzelperson gebunden sind und nicht übertragen werden können.
- **Blockchain-basierte Verifizierung**: Nutzung der Blockchain-Technologie zur Sicherstellung der Authentizität und Unveränderlichkeit der Identitätsnachweise.
- **Datenschutz und Sicherheit**: Schutz der Privatsphäre durch sichere Speicherung personenbezogener Daten auf der Blockchain.
- **Einfache Zugänglichkeit**: Benutzer können ihre digitale Identität über eine Webanwendung einfach verwalten und überprüfen.

## Systemanforderungen
Um das True University ID Projekt zu nutzen, müssen folgende Anforderungen erfüllt werden:
- Eine Internetverbindung.
- Eine kompatible Wallet (z.B. MetaMask, Rainbow, Coinbase Wallet, WalletConnect) zur Interaktion mit dem Polygon Amoy Testnet.
- Ein Browser, der Web3-Interaktionen unterstützt.
- Token des Amoy Testnets, die für Anfragen benötigt werden. Diese können über die Alchemy Faucet für das Polygon Amoy Testnet bezogen werden. Diese Tokens stellen keinen realen Wert dar und können kostenlos über die unten angegebene Links bezogen werden, und könne nur für das Testnetzweck verwendet werden.

### Verwendung der Webanwendung
Der Prototyp der Webanwendung ist unter der URL [https://true-id.leon-stadler.com/](https://true-id.leon-stadler.com/) oder [https://true-id.vercel.app/](https://true-id.vercel.app/)zugänglich. Seien sie sich bewusst dass dies nur ein  Prototyp darstellt. Die Nutzung erfolgt wie folgt:
1. **Wallet verbinden**: Verbinden Sie Ihre Wallet mit der Webanwendung, um auf deren Funktionen zuzugreifen.
2. **Token anfordern**: Fordern Sie einen digitalen Identitätsnachweis in Form eines Tokens an, indem Sie die erforderlichen Universitätsinformationen bereitstellen.
3. **Token erhalten**: Der Token muss zunächst vom Inhaber des Smartcontracts freigegeben werden, sollte dies länger als 3-6 Werktage dauern melden sie sich gerne beim inhaber des Repositorie
4. **Tokens anzeigen**: Nach der Verbindung Ihrer Wallet können Sie alle ausgestellten Tokens anzeigen und verwalten.

## Mitwirkung
Das True University ID Projekt lädt Entwickler und Interessierte ein, zum Projekt beizutragen, sei es durch das Melden von Fehlern, Vorschlagen von Verbesserungen oder direkte Beiträge zum Code. Pull-Requests sind willkommen. Bitte stellen Sie sicher, dass Ihre Beiträge den Richtlinien des Projekts entsprechen.

## Kontakt
Für Fragen oder Anregungen zum True University ID Projekt wenden Sie sich bitte an den Inhaber dieses Repositorie.

---

Diese Dokumentation soll einen umfassenden Überblick über das True University ID Projekt bieten, von den Systemanforderungen und der Installation bis hin zur Nutzung der Webanwendung. 

### Weitere Informationen:

Contract: [0xa98c5e64f44e048f98b4d408bacf3a2b6672ac7c80103b8b2b25bcb12d9f3d2e](https://www.oklink.com/de/amoy/tx/0xa98c5e64f44e048f98b4d408bacf3a2b6672ac7c80103b8b2b25bcb12d9f3d2e)

Faucet: [Polygon Faucet](https://faucet.polygon.technology/)  
oder [Alchemy](https://www.alchemy.com/faucets/polygon-amoy)

Bereitgestellt mit: [Remix IDE](https://remix.ethereum.org/)

Gehostet über Vercel: [Vercel](https://vercel.com/)
