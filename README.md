# README für True University ID
Praktische Umsetzung der Masterarbeit  
von Leon Sadler  
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
True University ID ist ein innovatives Web3-Projekt, das eine sichere und überprüfbare Identitätslösung für die akademische Gemeinschaft mittels Blockchain-Technologie bietet. Es handelt sich um einen Prototyp im Rahmen einer studentischen Masterarbeit. Es wird keine Garantie für die Rechtmäßigkeit der Daten übernommen. 

Das Projekt ermöglicht die Erstellung von nicht übertragbaren Token, die spezifische Informationen von Universitäten enthalten. Diese Token können als digitale Identitätsnachweise für Studierende und Mitarbeiter von Universitäten dienen. Ein Token kann nach der Ausstellung jederzeit vom Benutzer selbst oder von Administratoren gelöscht werden, wodurch die Verbindung zu IPFS aufgehoben und der Token verbrannt wird. Beachten Sie, dass bei der Eingabe personenbezogene Daten verarbeitet werden, die unwiderruflich auf einer Blockchain gespeichert und per IPFS auf Pinata abgelegt werden.

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
- Amoy Testnet Token, die für Anfragen benötigt werden und zuerst vom Inhaber des Smart Contracts freigegeben werden müssen.

## Installation und Einrichtung
### Deployment des Smart Contracts
Der Smart Contract für True University ID befindet sich im `contract`-Ordner des Projekts. Derzeit ist der Smart Contract auf dem Polygon Amoy Testnet bereitgestellt. Die genauen Schritte für das Deployment sind wie folgt:

1. **Umgebung vorbereiten**: Stellen Sie sicher, dass Node.js und npm auf Ihrem System installiert sind. Sie benötigen außerdem Truffle oder ein ähnliches Framework zur Bereitstellung von Smart Contracts.
2. **Deployment-Einstellungen konfigurieren**: Konfigurieren Sie Ihre `truffle-config.js` oder eine äquivalente Konfigurationsdatei zur Nutzung des Polygon Amoy Testnets.
3. **Deployment durchführen**: Führen Sie den Deployment-Prozess mit dem entsprechenden Befehl (z.B. `truffle migrate --network amoy`) aus, um den Smart Contract im Testnet bereitzustellen.

### Verwendung der Webanwendung
Der Prototyp der Webanwendung ist unter der URL [https://true-id.vercel.app/](https://true-id.vercel.app/) zugänglich. Die Nutzung erfolgt wie folgt:

1. **Wallet verbinden**: Verbinden Sie Ihre Wallet mit der Webanwendung, um auf deren Funktionen zuzugreifen.
2. **Token anfordern**: Fordern Sie einen digitalen Identitätsnachweis in Form eines Tokens an, indem Sie die erforderlichen Universitätsinformationen bereitstellen.
3. **Tokens anzeigen**: Nach der Verbindung Ihrer Wallet können Sie alle ausgestellten Tokens anzeigen und verwalten.

## Mitwirkung
Das True University ID Projekt lädt Entwickler und Interessierte ein, zum Projekt beizutragen, sei es durch das Melden von Fehlern, Vorschlagen von Verbesserungen oder direkte Beiträge zum Code. Pull-Requests sind willkommen. Bitte stellen Sie sicher, dass Ihre Beiträge den Richtlinien des Projekts entsprechen.

## Kontakt
Für Fragen oder Anregungen zum True University ID Projekt wenden Sie sich bitte über die im GitHub-Profil der Projektbetreuer angegebenen Kontaktinformationen.

---

Diese Dokumentation soll einen umfassenden Überblick über das True University ID Projekt bieten, von den Systemanforderungen und der Installation bis hin zur Nutzung der Webanwendung. Sie wird regelmäßig aktualisiert, um den neuesten Entwicklungsstand und die Bedürfnisse der Benutzer widerzuspiegeln.

Weitere Informationen:  
Contract: [https://www.oklink.com/de/amoy/tx/0xa98c5e64f44e048f98b4d408bacf3a2b6672ac7c80103b8b2b25bcb12d9f3d2e](https://www.oklink.com/de/amoy/tx/0xa98c5e64f44e048f98b4d408bacf3a2b6672ac7c80103b8b2b25bcb12d9f3d2e)  
Faucet: [https://faucet.polygon.technology/](https://faucet.polygon.technology/)  
Bereitgestellt mit: [https://remix.ethereum.org/](https://remix.ethereum.org/)
