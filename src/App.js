
import { color } from '@mui/system';
import { Route, Routes } from 'react-router';
import './App.css';
import KnjigaItemList from './components/knjiga/KnjigaItemList';
import KorpaList from './components/korpa/KorpaList';
import NavBar from './components/navbar/NavBar';

const BOOKS = [
  {
    id:1,
    naslov:"Prokleta avlija",
    opis:"Carigradski zatvor, nazvan „Prokleta avlija“, sa svojim simbolički šarenim svetom, spojio je jednog skromnog, poštenog i nedužno optuženog bosanskog fratra i razočaranog, životom otrovanog i fikcijom opsednutog turskog bogataša. Svet „Proklete avlije“, koja kroz svoju utrobu propušta sve vrste ljudskih grehova i poroka i čija je nepregledna raznolikost pomno nadgledana zastrašujućim očima upravnika Latifage Karađoza, mesto je sa vrlo upečatljivim likovima i sudbinama. Ipričana smirenim rečenicama koje su izraz istančanog umeća pripovedanja, kao i unutrašnjom dinamikom koja obuhvata čitavo delo, Prokleta avlija je nedvosmisleno jedno od najboljih ostvarenja u celom Andrićevom bogatom književnom opusu.",
    slikaUrl:'https://upload.wikimedia.org/wikipedia/sr/2/24/Prokleta_avlija.jpg',
    brojPonavljanja:0
  },
  {
    id:2,
    naslov:"Dnevnik Ane Frank",
    opis:"Nakon što je Nemačka okupirala Holandiju, Ana Frank je sa porodicom živela u tajnom skloništu, koje je nazvala Utočište, gde je bila primorana da uguši gotovo sve svoje tinejdžerske potrebe. U svom dnevniku, Ana beleži događaje, strepnje, probleme stanara Utočišta i prikazuje kakve dobre i loše osobine ljudi dolaze do izražaja u ovakvim situacijama. Ovo je potresna priča o tragično prekinutom detinjstvu, koja kroz prizmu nevine jevrejske devojčice verno prikazuje užase nacističkog režima tog vremena.",
    slikaUrl:'https://www.delfi.rs/_img/artikli/2022/05/dnevnik_ane_frank_-_prosireno_izdanje_vv.jpg',
    brojPonavljanja:0
  },
  {
    id:3,
    naslov:"Ana Karenjina",
    opis: "Većina ljudi zna čuvenu uvodnu rečenicu Tolstojevog tragičnog remek-dela: „Sve srećne porodice liče jedna na drugu, svaka nesrećna porodica nesrećna je na svoj način.“ „Ana Karenjina“ kazuje priču o Aninoj skandaloznoj aferi sa grofom Vronskim, aferi koja će ishodovati Aninim progonom iz društva i naposletku samoubistvom. Tolstoj Aninu priču balansira paralelnim zapletom o Konstantinu Ljevinu, bogatom zemljoposedniku koji je delimično zasnovan i na samom autoru.",
    slikaUrl:'https://www.laguna.rs/_img/korice/4529/ana_karenjina-lav_tolstoj_v.jpg',
    brojPonavljanja:0
  }
]


function App() {
  return (
    <div className="App">
     <NavBar className="navBar"/>
     <p>PONUDA</p>
     <Routes>
       <Route path='/' element={<KnjigaItemList knjige={BOOKS}/>}/>
       <Route path='/korpa' element={<KorpaList/>}/>
     </Routes>
     
    </div>
  );
}

export default App;
