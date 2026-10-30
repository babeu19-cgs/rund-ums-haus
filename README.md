# Rund ums Haus — Website gata de GitHub & Vercel

Site static **în germană**, construit pentru compania **Rund ums Haus** (Hausmanagement). Include responsive desktop/mobil, cele patru servicii, FAQ, formular de cerere de ofertă, pagini Impressum și Datenschutz, precum și cinci fotografii noi de înaltă rezoluție, optimizate WebP. Logo-ul din materialul original este păstrat.

## Publicare

1. Extrage arhiva ZIP. Fișierul `index.html` și folderul `assets/` trebuie să se afle la **rădăcina repository-ului GitHub**, nu într-un subfolder.
2. Creează un repository la https://github.com/new și încarcă toate fișierele din folder (inclusiv `assets/`). Confirmă prin **Commit changes**.
3. În https://vercel.com/new conectează GitHub și importă repository-ul.
4. **Framework Preset: Other**; **Root Directory: `./`**; **Build Command: gol**. Apasă **Deploy**. Este HTML/CSS/JS simplu: nu ai nevoie de Node, npm sau build.
5. După următoarele modificări, un push în GitHub poate declanșa un deployment automat.

## Conținut

- `index.html` — pagina de prezentare și formularul de ofertă
- `styles.css` — design, adaptare pentru mobil și efecte
- `script.js` — navigație mobilă, selectare servicii, formular mailto
- `assets/hauspflege.webp` — imagine principală pentru servicii de întreținere
- `assets/reinigung.webp` — curățenie
- `assets/gartenarbeit.webp` — lucrări de grădinărit
- `assets/entruempelung.webp` — debarasări
- `assets/umzug.webp` — mutări
- `assets/rund-ums-haus-logo.png`, `assets/favicon.svg` — identitate vizuală
- `impressum.html`, `datenschutz.html` — pagini legale **de completat înainte de publicare**
- `vercel.json` — setări pentru hosting static Vercel
- `robots.txt` — reguli pentru roboți

## Contact și formular

Telefon fix: **09402 988 047**  
Mobil: **01786 672 158**  
E-mail: **info.ums.haus@web.de**

Formularul **nu trimite automat către un server**: deschide aplicația locală de e-mail cu o cerere completată pentru `info.ums.haus@web.de`. Există și opțiune de a copia textul cererii. Dacă dorești trimiterea directă din website, trebuie adăugat ulterior un serviciu backend/formulare, împreună cu actualizarea politicii de confidențialitate.

## De verificat înainte de publicarea oficială

- `impressum.html`: titular sau firma înregistrată și forma juridică, adresa completă, eventual număr de înregistrare/USt-ID (dacă sunt aplicabile).
- `datenschutz.html`: operator, adresă și elemente privind furnizorul de hosting (inclusiv Vercel), server logs, drepturi și termen de păstrare conform fluxurilor reale de date.
- Confirmați că toate serviciile și datele de contact sunt corecte.

**Important despre imagini:** fotografiile din acest proiect sunt **generate pentru ilustrarea serviciilor**, nu fotografii reale ale lucrărilor, echipei sau sediului firmei. Se pot înlocui ulterior cu fotografii proprii fără a schimba macheta.

## Actualizări

Schimbarea conținutului se face direct în `index.html`, designul în `styles.css`, iar fotografiile în `assets/`. Nu folosi prefixul „UMS” în brandingul firmei; `ums` rămâne doar în adresa sa de e-mail.
