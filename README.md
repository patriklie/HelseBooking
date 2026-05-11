<div align="center">
<img src="docs/bilder/HelseBooking_Logo_blue.png" width="300" />
</div>

# Hei 👋

### Velkommen til HelseBooking, min fullstack bookingapplikasjon for helsetjenester hvor pasienter kan finne og booke time hos behandlere.

Problemet appen løser er at mange bookingløsninger i helsebransjen er fragmenterte og lite brukervennlige. Målet med dette prosjektet var å bygge en enkel og moderne løsning der pasienter og behandlere kan samhandle sømløst i en plattform, og samtidig prøve å redusere antall klikk fra du logger inn til du har booket riktig time. Prosjektet er laget som et CV-prosjekt så jeg ville samtidig demonstrere ferdigheter innen moderne webutvikling, med fokus på brukeropplevelse, autentisering og rollebasert tilgang.

## 📋 Innhold

- [Live Demo](https://helsebooking.onrender.com)
- [Skjermbilder](#-skjermbilder-fra-appen)
- [Logo design prosess](#-logo-design) 
- [Funksjonalitet](#-funksjonalitet)
- [Tech Stack](#tech-stack)
- [Arkitektur](#️-arkitektur--systemdesign)
- [Installer lokalt](#installer-appen-lokalt)
- [Utvikler](#-utvikler)

<div align="center">

<h1><a href="https://helsebooking.onrender.com" target="_blank">⚡️ Live Demo ⚡️</a></h1>

<img src="docs/bilder/HelseBooking_booktime.gif" width="350" />

</div>

<br>

Jeg har laget testbrukere under man kan logge på med. Med disse er det bare å opprette timer, slette timer, pasienter, behandlere, endre profilbilder og klinikker. **Logg inn og utforsk fritt** — timer og klinikker er forhåndsutfylt.

> [!TIP]
> Appen er responsiv og fungerer på alle enheter, men er optimalisert for mobil (375px – 1000px). For best opplevelse: legg til HelseBooking som PWA på mobilen.
>
> <img src="docs/bilder/helsebooking_ios_2_rounded.png" width="80" />



### 🔑 Test-brukere

| Rolle      | Epost                        | Passord   |
|------------|------------------------------|-----------|
| Behandler  | kristoffer@helsebooking.no   | Test1234  |
| Behandler  | lise@helsebooking.no         | Test1234  |
| Behandler  | tove@helsebooking.no         | Test1234  |
| Behandler  | steinar@helsebooking.no      | Test1234  |
| Behandler  | jonas@helsebooking.no        | Test1234  |
| Behandler  | morten@helsebooking.no       | Test1234  |
| Behandler  | kari@helsebooking.no         | Test1234  |
| Pasient    | anders@helsebooking.no       | Test1234  |
| Pasient    | camilla@helsebooking.no      | Test1234  |
| Pasient    | daniel@helsebooking.no       | Test1234  |
| Pasient    | emilie@helsebooking.no       | Test1234  |
| Pasient    | fredrik@helsebooking.no      | Test1234  |
| Pasient    | ingrid@helsebooking.no       | Test1234  |
| Pasient    | marius@helsebooking.no       | Test1234  |

<br>

# 📸 Skjermbilder fra appen

Under har jeg tatt noen skjermbilder fra appen! Men jeg anbefaler at du logger deg inn på en av testbrukerne å klikker deg rundt selv, eller at vi sammen tar en gjennomgang! 😊


## 🏠 Forside / Om

<div>
  <img src="docs/bilder/about_hero_1.png" width="300" style="display:inline-block; vertical-align: top;" />
  <img src="docs/bilder/about_hero_2.png" width="300" style="display:inline-block; vertical-align: top;" />
</div>
<br>
<div>
  <img src="docs/bilder/about_hero_3.png" width="300" style="display:inline-block; vertical-align: top;" />
  <img src="docs/bilder/about_hero_4.png" width="300" style="display:inline-block; vertical-align: top;" />
</div>

## 🔐 Auth (login/registrering)
<div>
  <img src="docs/bilder/auth_login_1.png" width="300" style="display:inline-block; vertical-align: top;" />
  <img src="docs/bilder/auth_registrer_1.png" width="300" style="display:inline-block; vertical-align: top;" />
</div>

## 📅 Book time (pasient)
<div>
  <img src="docs/bilder/book_time_1.png" width="300" style="display:inline-block; vertical-align: top;" />
  <img src="docs/bilder/book_time_2.png" width="300" style="display:inline-block; vertical-align: top;" />
</div>

## 👨🏻 Mine timer (pasient)
<div>
  <img src="docs/bilder/mine_timer_1.png" width="300" style="display:inline-block; vertical-align: top;" />
  <img src="docs/bilder/mine_timer_2.png" width="300" style="display:inline-block; vertical-align: top;" />
</div>

## 🏥 Klinikker (behandler)
<div>
  <img src="docs/bilder/klinikker_1.png" width="300" style="display:inline-block; vertical-align: top;" />
  <img src="docs/bilder/klinikker_3.png" width="300" style="display:inline-block; vertical-align: top;" />
</div>

## 🧑🏻‍⚕️ Min profil (behandler)
<div>
  <img src="docs/bilder/profil_1.png" width="300" style="display:inline-block; vertical-align: top;" />
  <img src="docs/bilder/profil_2.png" width="300" style="display:inline-block; vertical-align: top;" />
</div>

<br>

# 🎨 Logo design

HelseBooking er et fullstack bookingsystem for behandlere og pasienter, bygget som et CV-prosjekt. Denne siden dokumenterer logodesignprosessen fra første idé til endelig valg.

## Inspirasjon

Tidlige varianter bruker arbeidsnavnet **Behandler Booking**. Navnet ble senere endret til **HelseBooking** for å gjøre merkevaren kortere, mer minneverdig og lettere å bygge en visuell identitet rundt.

Utgangspunktet var en håndskrevet B-logo jeg kom over når jeg gjorde research rundt bruken av bokstaven B i logoer. Jeg synes denne bruker bokstaven B på en elegant og leken måte. Det ble startskuddet for å utforske en egen visuell identitet.

![Utgangspunkt](docs/bilder/Logo_prosess/B_retning/Utgangspunkt_tynn.png)

Jeg tok inspirasjonen videre ved å legge til en stjerne på enden av B-kurven — et lite detaljelement som skulle gi logoen personlighet. Det åpnet døren til fire ulike designretninger.

- **Retning 1** - Bokstaven B i logoen
- **Retning 2** - Helse-ikon basert retning
- **Retning 3** - Rename appen til **Helse.** retningen
- **Retning 4** - Fart, Flat-design og moderne retning  (Meteor, flamme, lyn retningen)


## Retning 1 — Bokstaven B

Det naturlige startpunktet var initialen — bokstaven B for Booking. Jeg utforsket alt fra håndskrevne og lekne varianter til geometriske og minimalistiske tolkninger. Etter hvert begynte noen av variantene å nærme seg helse-symbolikk, og det åpnet døren til neste retning.

<table align="center">
  <tr>
    <td align="center" width="200"><img src="docs/bilder/Logo_prosess/B_retning/B_1.png" width="200" /></td>
    <td align="center" width="200"><img src="docs/bilder/Logo_prosess/B_retning/B_2.png" width="200" /></td>
    <td align="center" width="200"><img src="docs/bilder/Logo_prosess/B_retning/B_3.png" width="200" /></td>
  </tr>
  <tr>
    <td align="center" width="200">Bold B i bubbly håndskriftstil, innrammet i et avrundet kvadrat</td>
    <td align="center" width="200">Negativ B med håndskrevet wordmark</td>
    <td align="center" width="200">Geometrisk B som ligner et 8-tall, tung og moderne</td>
  </tr>
  <tr>
    <td align="center" width="200"><img src="docs/bilder/Logo_prosess/B_retning/B_3-1.png" width="200" /></td>
    <td align="center" width="200"><img src="docs/bilder/Logo_prosess/B_retning/B_4.png" width="200" /></td>
    <td align="center" width="200"><img src="docs/bilder/Logo_prosess/B_retning/B_5.png" width="200" /></td>
  </tr>
  <tr>
    <td align="center" width="200">BB tolket som to separate avrundede rektangler</td>
    <td align="center" width="200">Minimalistisk wordmark med to overlappende blå firkanter</td>
    <td align="center" width="200">Avrundet B-ikon med kryss — begynner å nærme seg helse-territoriet</td>
  </tr>
</table>

<br>

## Retning 2 — Helse Ikon

Med helse som kjernen i appen var det naturlig å utforske klassiske helse-symboler — plusstegnet, hjertet og plasteret. Variantene ble organiske og myke, men også generiske. Den siste varianten i denne retningen introduserte grønt som farge, noe som skulle dukke opp igjen senere.

<table align="center">
  <tr>
    <td align="center" width="200"><img src="docs/bilder/Logo_prosess/Helse_ikon_retning/Helse_ikon_1.png" width="200" /></td>
    <td align="center" width="200"><img src="docs/bilder/Logo_prosess/Helse_ikon_retning/Helse_ikon_2.png" width="200" /></td>
    <td align="center" width="200"><img src="docs/bilder/Logo_prosess/Helse_ikon_retning/Helse_ikon_3.png" width="200" /></td>
  </tr>
  <tr>
    <td align="center" width="200">Minimalistisk wordmark med lite + over teksten</td>
    <td align="center" width="200">Kryss som eksploderer ut i stråler, nesten som en snøfnugg</td>
    <td align="center" width="200">+ med diagonal bølge som deler mørk og lys blå</td>
  </tr>
  <tr>
    <td align="center" width="200"><img src="docs/bilder/Logo_prosess/Helse_ikon_retning/Helse_ikon_4.png" width="200" /></td>
    <td align="center" width="200"><img src="docs/bilder/Logo_prosess/Helse_ikon_retning/Helse_ikon_5.png" width="200" /></td>
    <td align="center" width="200"><img src="docs/bilder/Logo_prosess/Helse_ikon_retning/Helse_ikon_6.png" width="200" /></td>
  </tr>
  <tr>
    <td align="center" width="200">Symmetrisk kryss omgitt av ellipser, nesten som et kompass</td>
    <td align="center" width="200">Fire overlappende hjerter med gradient</td>
    <td align="center" width="200">Samme hjerte-blomst med wordmark under</td>
  </tr>
</table>

legg inn ikon 7

<br>

## Retning 3 — Rename appen til **Helse.**

Fart og effektivitet ble det nye fokuset — booking skal gå raskt. Flamme- og meteor-formen viste seg å kombinere bevegelse og helse på en måte de andre retningene ikke klarte. Det var her den endelige logoen tok form. Den siste varianten med lynikon viser at jeg også utforsket en helt annen energi før jeg landet.

<table align="center">
  <tr>
    <td align="center" width="200"><img src="docs/bilder/Logo_prosess/Helse_retning/Helse_1.png" width="200" /></td>
    <td align="center" width="200"><img src="docs/bilder/Logo_prosess/Helse_retning/Helse_2.png" width="200" /></td>
  </tr>
  <tr>
    <td align="center" width="200">"Helse." med avrundet lys boks rundt "e" og punktum</td>
    <td align="center" width="200">Ekstremt minimalistisk — bare tekst med grå prikk som punktum</td>
  </tr>
  <tr>
    <td align="center" width="200"><img src="docs/bilder/Logo_prosess/Helse_retning/Helse_3.png" width="200" /></td>
    <td align="center" width="200"><img src="docs/bilder/Logo_prosess/Helse_retning/Helse_4.png" width="200" /></td>
  </tr>
  <tr>
    <td align="center" width="200">"e" og punktum løftet inn i blå avrundet boks</td>
    <td align="center" width="200">Grønn variant med plaster-ikon til venstre for wordmark</td>
  </tr>
</table>

<br>

## Retning 4 — Meteor retning

Parallelt med de visuelle eksperimentene vurderte jeg å forenkle selve navnet til bare Helse. — med punktum som et bevisst stilgrep. Den siste varianten i denne retningen hentet inn det grønne fra retning 2, og fikk meg til å vurdere grønt som hovedfarge for hele appen.

<table align="center">
  <tr>
    <td align="center" width="200"><img src="docs/bilder/Logo_prosess/Meteor_retning/M_1.png" width="200" /></td>
    <td align="center" width="200"><img src="docs/bilder/Logo_prosess/Meteor_retning/M_2.png" width="200" /></td>
    <td align="center" width="200"><img src="docs/bilder/Logo_prosess/Meteor_retning/M_3.png" width="200" /></td>
  </tr>
  <tr>
    <td align="center" width="200">Geometrisk flamme med + og mørk skygge, iOS app-ikon stil</td>
    <td align="center" width="200">Flamme med gull/blå detaljer og + i avrundet ikon, wordmark til høyre</td>
    <td align="center" width="200">Liten flamme med + wordmark, navn under med to vekter</td>
  </tr>
  <tr>
    <td align="center" width="200"><img src="docs/bilder/Logo_prosess/Meteor_retning/M_4.png" width="200" /></td>
    <td align="center" width="200"><img src="docs/bilder/Logo_prosess/Meteor_retning/M_5.png" width="200" /></td>
    <td align="center" width="200"><img src="docs/bilder/Logo_prosess/Meteor_retning/M_6.png" width="200" /></td>
  </tr>
  <tr>
    <td align="center" width="200">Hånd i fart med + — unik kombinasjon av omsorg og bevegelse</td>
    <td align="center" width="200">Fart-piler med + og "Helse." wordmark</td>
    <td align="center" width="200">FMeteor med + i app-ikon, wordmark til høyre</td>
  </tr>
  <tr>
    <td align="center" width="200"><img src="docs/bilder/Logo_prosess/Meteor_retning/M_7.png" width="200" /></td>
    <td align="center" width="200"><img src="docs/bilder/Logo_prosess/Meteor_retning/M_8.png" width="200" /></td>
    <td align="center" width="200"><img src="docs/bilder/Logo_prosess/Meteor_retning/M_9.png" width="200" /></td>
  </tr>
  <tr>
    <td align="center" width="200">Samme meteor med orange flamme-detalj integrert i teksten</td>
    <td align="center" width="200">Gult lynikon i avrundet boks med HelseBooking wordmark under</td>
    <td align="center" width="200">Flamme/dråpe som separator mellom "Behandler" og "Booking" i wordmark</td>
  </tr>
</table>

<br>

## Her er final versjonen.

<table align="center">
  <tr>
    <td align="center"><img src="docs/bilder/Logo_prosess/Meteor_retning/HelseBooking_Final_Green.png" width="300" /></td>
    <td align="center"><img src="docs/bilder/Logo_prosess/Meteor_retning/HelseBooking_Final_Blue.png" width="300" /></td>


  </tr>
  <tr>
    <td align="center">Final versjon grønn</td>
    <td align="center">Final versjon blå</td>

  </tr>


</table>

# ✨ Funksjonalitet

**Pasient**
- Registrering og innlogging med JWT-autentisering
- Bla gjennom behandlere med Swiper-karusell
- Se behandlerprofiler med profilbilde, navn og spesialitet
- Booke ledig time med bekreftelsesmodal
- Se og avbestille egne timer med swipe-to-delete animasjon


**Behandler**
- Opprette ledige timer med dato og tidspunkt
- Se oversikt over bookede timer i kalender
- Rollebasert visning – behandlere ser andre verktøy enn pasienter
- Laste opp og slette profilbilde via Cloudinary
- Opprett og rediger klinikker og tilhørende behandlere
- Rediger timer, legg til eller fjern pasienter på timen.


**Generelt**
- Rollebasert tilgangskontroll (pasient / behandler / admin)
- Hindrer at samme time bookes flere ganger
- Det er ikke mulig å booke eller opprette timer tilbake i tid
- Timer blir slettet dersom man fjerner en behandler fra en klinikk
- Timer blir slettet dersom man sletter profilen (pasient/behandler)
- Responsivt design med animert navigasjon

<br>

# Tech Stack

### 💻 Frontend
| Teknologi          | Bruk                           | Begrunnelse                                      |
|---                 |---                             |---                                               |
| React + Vite       | UI-rammeverk og byggverktøy    | Rask utviklingsopplevelse                        |
| React Router v7    | Klientside routing             | Industristandard for React SPA                   |
| Zustand            | Global state management        | Enklere API enn Redux, ingen boilerplate         |
| Framer Motion      | Animasjoner og swipe-to-delete | Animasjon med god React-integrasjon              |
| Swiper             | Karusell for behandleroversikt | Touch-vennlig og mobil-optimalisert              |
| Axios              | HTTP-kall mot API              | Enklere enn fetch og god feilhåndtering          |
| Lucide React       | Ikonbibliotek                  | Fine, lette og konsistente ikoner + treeshakable |
| Leaflet + Geoapify | Kart og adressesøk             | Open source, ingen kostnad og enkel integrasjon  |

### 🗄️ Backend
| Teknologi           | Bruk                            | Begrunnelse                                         |
|---                  |---                              |---                                                  |
| Node.js + Express   | API-server                      | Samme språk som frontend, stort økosystem           |
| MongoDB + Mongoose  | Database og ODM                 | Fleksibel modellering og enkel skalering            |
| JWT + bcryptjs      | Autentisering og passordhashing | Stateless auth, ingen server-side sessions          |
| Cloudinary + Multer | Bildeopplasting og lagring      | CDN-optimalisert bildelagring med transformasjoner  |
| CORS                | Kryssdomene-tilgang             | Nødvendig for separat frontend/backend deploy       |

### ☁️ Deploy
| Tjeneste      | Bruk                                                       | Begrunnelse                           |
|---            |---                                                         |---                                    |
| Render        | Hosting av frontend og backend                             | Gratis tier, enkel GitHub-integrasjon |
| MongoDB Atlas | Skybasert database                                         | Gratis tier, enkel oppsett            |
| Cloudinary    | Bildelagring                                               | Gratis tier med CDN                   |

<br>

# 🏗️ Arkitektur / systemdesign

Dette prosjektet er bygget som et rollebasert bookingsystem der kjernen i systemet er samspillet mellom brukere, klinikker og timeavtaler.

Systemet er designet rundt tre hovedentiteter:

- 🧑‍⚕️ Brukere (User)
- 🏥 Klinikker (Klinikk)
- 📅 Timer (Time)


## 🧑‍⚕️ Brukere og roller

Systemet har tre roller:

- Pasient – kan velge behandler og booke tilgjengelige timer
- Behandler – kan opprette tilgjengelige timer og administrere egne pasienter på sine timer
- Admin – kan administrere systemets struktur (klinikker, brukere og relasjoner) (funksjon kommer)

Brukere lagres i én felles User-modell, der rollen bestemmer tilgangsnivå og funksjonalitet i UI og API.

Behandlere har i tillegg utvidet profil med:

- fagfelt (typeBehandler)
- profilinformasjon
- profilbilde (Cloudinary)

<br>

![Bruker-relasjoner](docs/bilder/bruker_relasjoner.png)

## 🏥 Klinikker som “hub”

Klinikker fungerer som et organisatorisk lag mellom behandlere og timer.

En Klinikk inneholder:

- navn og adresse
- geografiske koordinater (Leaflet/Geoapify)
- liste over tilknyttede behandlere
- eier (opprettetAv)

Dette gjør at én behandler kan tilhøre flere klinikker, og klinikker kan skaleres uavhengig av brukere.

<br>

![Klinikk-relasjoner](docs/bilder/klinikk_relasjoner.png)

## 📅 Time-modellen (kjerne i systemet)

Time er den mest sentrale entiteten i systemet og binder hele domenet sammen.

En time inneholder:

- behandler (reference til User)
- pasient (valgfri frem til booking)
- klinikk
- dato + start/slutt-tid
- status: ledig | booket | avlyst

Systemet er bygget rundt state transitions:

- ledig → booket (pasient reserverer)
- booket → ledig (avlysning)
- opprettet → tilgjengelig slot fra behandler

Dette gir en tydelig og kontrollert livssyklus for hver time.

<br>

![Time-relasjoner](docs/bilder/time_relasjoner.png)

## 🛡️ Backend regler

Backend håndhever all forretningslogikk:

- Overlappende timer blokkeres på server (ingen dobbeltbooking)
- Tid i fortid kan ikke opprettes
- Kun tilgjengelige timer kan bookes
- Avlysning frigjør timer automatisk
- Sletting av klinikk eller bruker rydder relaterte data (cascade-logikk)

## 🔐 Autentisering og tilgang
- JWT brukes for autentisering
- Middleware beskytter private routes
- Rollebasert tilgang styrer:
  - Hvem som kan opprette timer
  - Hvem som kan booke
  - Hvem som kan administrere klinikker

## 🚀 Designvalg
- MongoDB ble valgt for fleksibel modellering av relasjoner
- Mongoose brukes til validering og relasjonslogikk
- Backend håndterer all validering (ikke frontend)
- Frontend er kun presentasjonslag + state management
- API er REST-basert og delt mellom frontend/backend (separat deploy)


## 📁 Mappestruktur:

```
HelseBooking/
├── backend/
│   └── src/
│       ├── controllers/
│       ├── middleware/
│       ├── models/
│       ├── routes/
│       └── server.js
└── frontend/
    └── src/
        ├── components/
        ├── pages/
        ├── store/
        └── main.jsx
```

Frontend og backend er deployet som to separate services på Render og kommuniserer via REST API.

<br>

## Installer appen lokalt

### Forutsetninger
- Node.js
- MongoDB Atlas-konto
- Cloudinary-konto

### Installasjon

```bash
# Klon repoet
git clone https://github.com/patriklie/HelseBooking.git

# Installer backend
cd HelseBooking/backend
npm install

# Installer frontend
cd ../frontend
npm install
```

### Miljøvariabler

Opprett `.env` i `backend/`-mappen:

```
MONGO_URI=din_mongodb_connection_string
JWT_SECRET=din_hemmelige_nøkkel
CLOUDINARY_URL=din_cloudinary_url
PORT=3000
NODE_ENV=development
```

Opprett `.env` i `frontend/`-mappen:

```
VITE_API_URL=http://localhost:3000
VITE_GEOAPIFY_API_KEY=din_geoapify_nøkkel
```

### Start applikasjonen

```bash
# Start backend (fra backend-mappen)
npm run dev

# Start frontend (fra frontend-mappen)
npm run dev
```
<br>

## 👨🏻‍💻 Utvikler

**Patrik Bystrøm Lie**
- GitHub: [@patriklie](https://github.com/patriklie)
- E-post: [patrik.lie@hotmail.com](mailto:patrik.lie@hotmail.com)

<br>

## 👏 Kreditering

Dette prosjektet bruker tredjepartsillustrasjoner og verktøy:

- Freepik – illustrasjoner og 3D assets
- Leaflet – kartvisning
- Geoapify – kartdata

<a href="https://www.magnific.com/free-psd/3d-female-character-with-superhero-cape-launching-into-flight_13678512.htm">Image by freepik</a>