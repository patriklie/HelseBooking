# HelseBooking

En fullstack bookingapplikasjon for helsetjenester, der pasienter kan finne og booke time hos behandlere. Bygget som et CV-prosjekt for å demonstrere mine ferdigheter i webutvikling.

🔗 **Live demo:** [helsebooking.onrender.com](https://helsebooking.onrender.com)

---

## Skjermbilder

## 📸 App Showcase

Under har jeg lagt ved noen skjermbilder fra Helsebooking-appen! Men anbefaler at du logger inn på en testbruker å selv klikker deg rundt i appen, eller at vi sammen tar en gjennomgang!

---

### 🏠 Forside / About
<div>
  <img src="docs/bilder/About_Hero.png" width="300" style="display:inline-block; vertical-align: top;" />
  <img src="docs/bilder/About_Behandlere.png" width="300" style="display:inline-block; vertical-align: top;" />
</div>
<br>
<div>
  <img src="docs/bilder/About_FeatureListe.png" width="300" style="display:inline-block; vertical-align: top;" />
  <img src="docs/bilder/About_footer.png" width="300" style="display:inline-block; vertical-align: top;" />
</div>

---

### 🔐 Auth (login/registrering)
<div>
  <img src="docs/bilder/Login.png" width="300" style="display:inline-block; vertical-align: top;" />
  <img src="docs/bilder/Registrer.png" width="300" style="display:inline-block; vertical-align: top;" />
</div>


---

### 👤 Book time (pasient)
<div>
  <img src="docs/bilder/BookTime_pasient.png" width="300" style="display:inline-block; vertical-align: top;" />
  <img src="docs/bilder/BookTime_valgt_time.png" width="300" style="display:inline-block; vertical-align: top;" />
</div>

---

### 👤 Mine timer (pasient)
<div>
  <img src="docs/bilder/MineTimer_pasient.png" width="300" style="display:inline-block; vertical-align: top;" />
  <img src="docs/bilder/MineTimer_timeinfo.png" width="300" style="display:inline-block; vertical-align: top;" />
</div>

---

### 👤 Klinikker (behandler)
<div>
  <img src="docs/bilder/Klinikker.png" width="300" style="display:inline-block; vertical-align: top;" />
  <img src="docs/bilder/klinikk_behandlere.png" width="300" style="display:inline-block; vertical-align: top;" />
  <img src="docs/bilder/klinikk_rediger.png" width="300" style="display:inline-block; vertical-align: top;" />
</div>

### Min profil (behandler)
  <img src="docs/bilder/Behandler_profil.png" width="300" style="display:inline-block; vertical-align: top;" />
  <img src="docs/bilder/Slett_behandler_profil.png" width="300" style="display:inline-block; vertical-align: top;" />


## Test-brukere
Jeg har laget en rekke testbrukere som du kan prøve å logge inn på. Det er bare å opprette og slette timer, pasienter, behandlere, profilbilder og klinikker, gjør som du vil. 

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


## Funksjonalitet

**Pasient**
- Registrering og innlogging med JWT-autentisering
- Bla gjennom behandlere med Swiper-karusell
- Se behandlerprofiler med profilbilde, navn og spesialitet
- Booke ledig time med bekreftelsesmodal
- Se og avbestille egne timer med swipe-to-delete animasjon
- Laste opp og slette profilbilde via Cloudinary

**Behandler**
- Opprette ledige timer med dato og tidspunkt
- Se oversikt over bookede timer i kalender
- Rollebasert visning – behandlere ser andre verktøy enn pasienter

**Generelt**
- Rollebasert tilgangskontroll (pasient / behandler / admin)
- Atomisk booking som forhindrer dobbeltbooking (race conditions)
- Responsivt design med animert navigasjon

---

## Tech Stack

### Frontend
| Teknologi | Bruk |
|---|---|
| React + Vite | UI-rammeverk og byggverktøy |
| React Router v7 | Klientside routing |
| Zustand | Global state management |
| Framer Motion | Animasjoner og swipe-to-delete |
| Swiper | Karusell for behandleroversikt |
| Axios | HTTP-kall mot API |
| Lucide React | Ikonbibliotek |

### Backend
| Teknologi | Bruk |
|---|---|
| Node.js + Express | API-server |
| MongoDB + Mongoose | Database og ODM |
| JWT + bcryptjs | Autentisering og passordhashing |
| Cloudinary + Multer | Bildeopplasting og lagring |
| CORS | Kryssdomene-tilgang |

### Deploy
| Tjeneste | Bruk |
|---|---|
| Render | Hosting av frontend (Static Site) og backend (Web Service) |
| MongoDB Atlas | Skybasert database |
| Cloudinary | Bildelagring |

---

## Arkitektur

```
behandler-booking/
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

---

## Kom i gang lokalt

### Forutsetninger
- Node.js
- MongoDB Atlas-konto
- Cloudinary-konto

### Installasjon

```bash
# Klon repoet
git clone https://github.com/patriklie/behandler-booking.git

# Installer backend
cd behandler-booking/backend
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

---

## Utvikler

**Patrik Lie**
- GitHub: [@patriklie](https://github.com/patriklie)
