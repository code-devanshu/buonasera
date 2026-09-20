import { cafe, type Stage } from "@/lib/content";
import ReserveForm from "./ReserveForm";

/** Every section carries data-stop so the 3D scene knows where the bean should rest. */

export function Hero() {
  const { primaryCta, secondaryCta } = cafe.hero;
  return (
    <section className="hero" id="top" data-stop>
      <video
        className="hero-video"
        src="/video/oven.mp4"
        poster="/video/oven-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="word-wrap">
        <h1 className="word title">
          <span className="sr-only">{cafe.name} </span>
          {cafe.titleLines.map((line) => (
            <span key={line} className="line" aria-hidden="true">
              {line}
            </span>
          ))}
        </h1>
      </div>
      <div className="hero-copy">
        <p className="eyebrow">{cafe.subtitle}</p>
        <p className="tagline">{cafe.tagline}</p>
        <p className="facts">{cafe.hero.facts.join(" · ")}</p>
        <div className="actions">
          <a className="btn primary" href={primaryCta.href}>
            {primaryCta.label}
          </a>
          <a className="btn ghost" href={secondaryCta.href}>
            {secondaryCta.label}
          </a>
        </div>
      </div>
      <p className="hint">{cafe.hint}</p>
    </section>
  );
}

export function StageSection({ stage }: { stage: Stage }) {
  return (
    <section className={`stage ${stage.side}`} id={stage.id} data-stop>
      <div className="word-wrap">
        <h2 className="word">{stage.word}</h2>
      </div>
      <div className="copy">
        <p className="lead">{stage.lead}</p>
        <ul className="menu">
          {stage.items.map((item) => (
            <li key={item.name}>
              <span className="name">{item.name}</span>
              {item.price && <span className="price">{item.price}</span>}
              <span className="note">{item.note}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Reviews() {
  const r = cafe.reviews;
  return (
    <section className={`stage ${r.side}`} id={r.id} data-stop>
      <div className="word-wrap">
        <h2 className="word">{r.word}</h2>
      </div>
      <div className="copy">
        <p className="lead">{r.lead}</p>
        <ul className="ratings">
          {r.ratings.map((x) => (
            <li key={x.platform}>
              <span className="score">{x.score} ★</span>
              <span className="platform">{x.platform}</span>
              <span className="count">{x.count}</span>
            </li>
          ))}
        </ul>
        {r.quotes.map((q) => (
          <figure className="quote" key={q.author + q.quote.slice(0, 12)}>
            <blockquote>“{q.quote}”</blockquote>
            <figcaption>
              {q.author}
              {q.detail ? `, ${q.detail}` : ""}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export function Visit() {
  const v = cafe.visit;
  return (
    <section className={`stage ${v.side}`} id={v.id} data-stop>
      <div className="word-wrap">
        <h2 className="word">{v.word}</h2>
      </div>
      <div className="copy">
        <p className="lead">{v.lead}</p>
        <div className="actions cta">
          <a className="btn primary" href="#reserve">
            Reserve a table
          </a>
          <a className="btn ghost" href={cafe.phoneHref}>
            Call {cafe.phone}
          </a>
          <a className="btn ghost" href={v.zomatoHref} target="_blank" rel="noopener noreferrer">
            Order or book on Zomato
          </a>
        </div>
        <p className="fine tight">{v.bookingNote}</p>
        <ReserveForm />
        <dl className="info">
          <dt>Hours</dt>
          <dd>{v.hours.join(", ")}</dd>
          <dt>Address</dt>
          <dd>
            {v.address}
            <br />
            Plus code: {v.plusCode}
          </dd>
          <dt>Price</dt>
          <dd>{v.cost}</dd>
          <dt>Good to know</dt>
          <dd>{v.amenities.join(" · ")}</dd>
          <dt>Instagram</dt>
          <dd>
            <a href={cafe.instagram.href} target="_blank" rel="noopener noreferrer">
              {cafe.instagram.handle}
            </a>{" "}
            ({cafe.instagram.followers} followers)
          </dd>
        </dl>
        <iframe
          className="map"
          title="Map showing Buona Sera Cafe in Sector 104, Noida"
          src={v.mapEmbedSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="actions">
          <a className="btn primary" href={v.directionsHref} target="_blank" rel="noopener noreferrer">
            Get directions
          </a>
        </div>
        <p className="fine">{cafe.footnote}</p>
      </div>
    </section>
  );
}
