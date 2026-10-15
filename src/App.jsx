import { useRef, useState } from 'react';
import { ArrowRight, MapPin, List, X, InstagramLogo, ArrowUpRight } from '@phosphor-icons/react';
import { brand, menu } from './content.js';

const arrow = <ArrowRight size={23} aria-hidden="true" />;

function Wordmark() {
  return <a className="wordmark" href="#home" aria-label="Brew and Grind Coffee Bar home"><span>BREW &amp; GRIND</span><small>COFFEE BAR · SINGAPORE</small></a>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  return <header className="header" onKeyDown={event => {
    if (event.key === 'Escape' && open) {
      setOpen(false);
      toggle.current?.focus();
    }
  }}>
    <Wordmark />
    <button ref={toggle} className="nav-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'}>{open ? <X size={28}/> : <List size={28}/>}</button>
    <nav id="main-navigation" className={open ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">
      {[['Menu', '#menu'], ['Our story', '#story'], ['Visit', '#visit']].map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
    </nav>
  </header>;
}

function Hero() {
  return <section className="hero" id="home" aria-labelledby="hero-title">
    <img className="hero-image" src={`${import.meta.env.BASE_URL}images/coffee-craft-hero.webp`} alt="" fetchPriority="high" width="1920" height="760" />
    <Header />
    <div className="hero-copy">
      <h1 id="hero-title">Good mornings.<br/>Great evenings.</h1>
      <p>Specialty coffee, local brews and craft beer,<br className="desktop-break"/> all day on Pickering Street.</p>
      <div className="hero-actions"><a className="button" href="#menu">Explore the menu {arrow}</a><a className="text-link" href="#visit">Visit us {arrow}</a></div>
    </div>
  </section>;
}

function DayNight() {
  return <section className="day-night" aria-label="Coffee and craft beer">
    <article className="day-panel"><img src={`${import.meta.env.BASE_URL}images/daily-grind.webp`} alt="Illustrative pandan latte, lavender flat white and kopi" width="1000" height="800"/><div className="panel-copy"><p className="eyebrow">Coffee all day</p><h2>The daily grind.</h2><p>From our Pandan Latte and Lavender<br className="desktop-break"/> Flat White to local favourites like Kopi,<br className="desktop-break"/> Teh and Yuan Yang.</p></div></article>
    <article className="night-panel"><img src={`${import.meta.env.BASE_URL}images/time-to-unwind.webp`} alt="Illustrative craft beers with pizza, lychee and peach" width="1000" height="800"/><div className="panel-copy"><p className="eyebrow">Craft beer &amp; more</p><h2>Time to unwind.</h2><p>Kick back with craft beers like Bo Chup,<br className="desktop-break"/> lychee and peach, alongside a menu of<br className="desktop-break"/> toast, wraps, pastries and pizza.</p></div></article>
  </section>;
}

function Menu() {
  const [active, setActive] = useState('Coffee');
  const visible = menu.filter(item => item.category === active);
  return <section className="menu-section section-wrap" id="menu" aria-labelledby="menu-title">
    <div className="section-heading"><div><p className="eyebrow">Something for every part of your day</p><h2 id="menu-title">Find your favourite.</h2></div><p>Creative coffees, familiar local flavours<br/> and something to unwind with.</p></div>
    <div className="menu-filters" role="group" aria-label="Menu category">{['Coffee', 'Local favourites', 'Craft beer', 'All-day bites'].map(category => <button key={category} type="button" aria-pressed={category === active} onClick={() => setActive(category)}>{category}</button>)}</div>
    <div className="menu-items" aria-live="polite" aria-atomic="true">{visible.map(item => <article className="menu-item" key={item.name}><h3>{item.name}</h3><p>{item.description}</p></article>)}</div>
    <p className="menu-note">A selection from our menu. Ask our team about today’s availability and prices.</p>
    <a className="text-link dark-link" href={brand.deliveryUrl} target="_blank" rel="noopener noreferrer">View delivery menu <ArrowUpRight size={19} aria-hidden="true"/></a>
  </section>;
}

function Story() {
  return <section className="story-section" id="story" aria-labelledby="story-title">
    <div className="story-image"><img src={`${import.meta.env.BASE_URL}images/david-ow.webp`} width="600" height="400" loading="lazy" alt="Founder David Ow outside Brew and Grind Coffee Bar"/><p>David Ow, founder · Brew &amp; Grind Coffee Bar</p></div>
    <div className="story-copy"><p className="eyebrow">Homegrown. Welcoming. All day.</p><h2 id="story-title">A place to pause.<br/>A reason to return.</h2><p>Founded by David Ow, Brew &amp; Grind brings artisanal coffee and craft beer together in the heart of Singapore’s CBD.</p><p>Drop in for breakfast, take a break over kopi, or settle into an evening with beer and pizza. Wherever the day takes you, there’s a warm welcome here.</p><a className="text-link" href={brand.pressUrl} target="_blank" rel="noopener noreferrer">Read our brand announcement <ArrowUpRight size={19} aria-hidden="true"/></a></div>
  </section>;
}

function Visit() {
  return <section className="visit-section section-wrap" id="visit" aria-labelledby="visit-title">
    <div><p className="eyebrow">Your all-day stop at Nankin Row</p><h2 id="visit-title">See you on<br/>Pickering Street.</h2></div>
    <div className="visit-details"><address>{brand.street}<br/>{brand.unit}<br/>{brand.postcode}</address><a className="button" href={brand.mapsUrl} target="_blank" rel="noopener noreferrer">Get directions {arrow}</a><a className="instagram-link" href={brand.instagramUrl} target="_blank" rel="noopener noreferrer"><InstagramLogo size={22} aria-hidden="true"/> @brewandgrindsg <ArrowUpRight size={18} aria-hidden="true"/></a></div>
  </section>;
}

export function App() {
  return <><a className="skip-link" href="#menu">Skip to menu</a><main><Hero/><DayNight/><div className="location-strip"><a href="#visit"><MapPin size={23} weight="fill" aria-hidden="true"/><span>{brand.fullAddress}</span></a><span>Product photography is illustrative.</span></div><Menu/><Story/><Visit/></main><footer className="footer"><Wordmark/><p>© {new Date().getFullYear()} Brew &amp; Grind Coffee Bar</p><a href={brand.pressUrl} target="_blank" rel="noopener noreferrer">Brand information source <ArrowUpRight size={16} aria-hidden="true"/></a></footer></>;
}
