# HelseBooking

En fullstack bookingapplikasjon for helsetjenester, der pasienter kan finne og booke time hos behandlere. Bygget som et CV-prosjekt for å demonstrere praktiske ferdigheter i moderne webutvikling.

🔗 **Live demo:** [helsebooking.onrender.com](https://helsebooking.onrender.com)

---

## Skjermbilder

<!-- Legg til skjermbilder her -->
![Forside](docs/bilder/About_Hero.png)
![Login](docs/bilder/Login.png)
![Registrer](docs/bilder/Registrer.png)
![Book time](docs/bilder/BookTime_valgt_time.png)
![Book time pasient](docs/bilder/BookTime_pasient.png.png)




---

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
