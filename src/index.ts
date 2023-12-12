import 'highlight.js/styles/github.css';
import 'tachyons/css/tachyons.css';
import 'presenter/dist/index.css';
import './css/style.css';
import { create, html, md } from 'presenter';
import { title } from './pages/title';
import { tdd, tddExamples } from './pages/tdd';
import { cleanArchi } from './pages/cleanArchi';
import { pyspark } from './pages/pyspark';
import exemplesVideo from './castello-oui-exemples.mp4';
import { comwatt } from './pages/comwatt';
import comwattUrl from './comwatt.jpg';
import bigdataUrl from './bigdata.webp';
import flintUrl from './flint_company_logo.jpg';
import slbUrl from './slbdigital_logo.jpg';

const logos = [
  {
    src: bigdataUrl,
    url: 'https://www.meetup.com/big-data-science-montpellier/',
  },
  { src: flintUrl, url: 'https://www.flint.sh/' },
  { src: slbUrl, url: 'https://www.slb.com' },
  { src: comwattUrl, url: 'https://comwatt.com' },
];

(function () {
  const $entry = document.querySelector<HTMLElement>('#hero')!;
  create($entry, [
    ...title,
    tdd,
    ...tddExamples,
    ...cleanArchi,
    {
      template: 'title',
      title: `TDD 💖 Clean Archi`,
    },
    pyspark,
    comwatt,
    {
      template: 'title',
      title: `TDD, Archi Hexagonale, PySpark, Comwatt ...`,
      content: `C'est bien tout ça, mais j'en fais quoi ?`,
    },
    {
      template: 'title',
      title: ``,
      content: html`<figure class="flex flex-column items-center">
        <video
          src=${exemplesVideo}
          class="w-60 h-60"
          autoplay
          loop
          controls
        ></video>
        <figcaption class="f4">
          <a href="https://www.youtube.com/watch?v=cKuxIOKagFs">youtube</a> :
          Suisse?" - C'est quoi l'accent suisse ?
        </figcaption>
      </figure>`,
    },
    {
      title: `Posons d'abord notre problématique`,
      content: html`
        <p class="measure">
          <strong>Objectif</strong> : récupérer pour un jour donné l'ensemble
          des données pour tous les appareils.
        </p>

        <div class="flex items-baseline">
          <div class="w-80">
            <strong>Cassandra</strong> : consommation et production des
            appareils.
          </div>

          <div class="pa2"></div>
          <div class="w-100">
            <pre class="w-100 code">
cass.measures(
  <em>user_id</em>,
  <em>time_bucket</em>,
  <em>connected_object_uid</em>,
  <em>timestamp</em>,
  value
)</pre
            >
          </div>
        </div>
        <div class="flex items-baseline">
          <div class="w-80">
            <strong>Postgres</strong>: informations des appareils
          </div>
          <div class="pa2"></div>
          <div class="w-100 code">
            <pre class="w-100 code">
pg.devices(
    <em>device_uid</em>,
    connected_object_uid,
    user_id,
    type,
    label
)</pre
            >
          </div>
        </div>
      `,
    },
    {
      title: `Limitations`,
      content: md`
- Isoler le technique et le métier demande de la réflexion
- Faire des cas d'usage purs peut être compliqué
- Peut affecter la performance
- Ne remplace pas les test e2e
- Ne remplace pas les test d'integration
- Lourdement couplé à pyspark
      `,
    },
    {
      title: `Conclusion`,
      content: md`
- TDD: tester c'est garantir
- Clean-Archi: facilite l'interaction avec les entrées sorties
- pyspark: transverse à l'application
      `,
    },
    {
      title: 'Merci pour votre attention',
      content: (_o, $holder) => {
        const _md = md`
### Fati CHEN

[LinkedIn](https://www.linkedin.com/in/fati-chen/) | <small>📚[github.com/stardisblue](https://github.com/stardisblue)</small>

<div id="mybanner"></div>
        `;

        $holder.append(_md);
      },
      footer: html`<div
        class="flex-grow-1"
        style="display:flex; justify-content: space-around"
      >
        ${logos.map(
          ({ url, ...attrs }) => html`<a
            href=${url}
            target="_blank"
            rel="noopener noreferrer"
            ><img class="br3" height="256px" style="width:auto;" ${attrs} />
          </a> `
        )}
      </div>`,
    },
  ]);
})();

export {};
