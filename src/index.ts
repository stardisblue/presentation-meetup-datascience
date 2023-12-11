import 'highlight.js/styles/github.css';
import 'tachyons/css/tachyons.css';
import 'presenter/dist/index.css';
import './css/style.css';
import { create, html, md } from 'presenter';
import { title, titlebold } from './pages/title';
import { tdd, tddExamples } from './pages/tdd';
import { cleanArchi } from './pages/cleanArchi';
import { pyspark } from './pages/pyspark';
import exemplesVideo from './castello-oui-exemples.mp4';
import { comwatt } from './pages/comwatt';

(function () {
  const $entry = document.querySelector<HTMLElement>('#hero')!;
  create($entry, [
    // title,
    // titlebold,
    // tdd,
    // ...tddExamples,
    // ...cleanArchi,
    // {
    //   template: 'title',
    //   title: `TDD 💖 Clean Archi`,
    // },
    // pyspark,
    // comwatt,
    // {
    //   template: 'title',
    //   title: `TDD, Archi Hexagonale, PySpark, Comwatt ...`,
    //   content: `C'est bien tout ça, mais j'en fais quoi ?`,
    // },
    // {
    //   template: 'title',
    //   title: ``,
    //   content: html`<figure class="flex flex-column items-center">
    //     <video
    //       src=${exemplesVideo}
    //       class="w-60 h-60"
    //       autoplay
    //       loop
    //       controls
    //     ></video>
    //     <figcaption class="f4">
    //       <a href="https://www.youtube.com/watch?v=cKuxIOKagFs">youtube</a> :
    //       Suisse?" - C'est quoi l'accent suisse ?
    //     </figcaption>
    //   </figure>`,
    // },
    {
      title: `Posons d'abord notre problématique`,
      content: html`
        <p class="measure">
          <strong>Objectif</strong> : récupérer pour un jour donné l'ensemble
          des données pour tous les appareils.
        </p>

        <div class="flex items-baseline">
          <div class="w-80">
            <p class="measure">
              <strong>Cassandra</strong> : consommation et de production des
              appareils.
            </p>
          </div>

          <div class="pa2"></div>
          <div class="w-100">
            <pre class="w-100 code">
cass.measures(
  <em>user_id</em>,
  <em>bucket_month</em>,
  <em>connected_object_uid</em>,
  <em>timestamp</em>,
  value
)</pre
            >
          </div>
        </div>
        <div class="flex items-baseline">
          <div class="w-80">
            <p class="measure">
              <strong>Postgres</strong>: informations des appareils
            </p>
          </div>
          <div class="pa2"></div>
          <div class="w-100 code">
            <pre class="w-100 code">
pg.devices(
    <em>device_id</em>,
    <em>connected_object_uid</em>,
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
      title: `Quand on y pense c'est assez logique`,
      content: md`
extraire les entrées sorties + extraire les considérations techniques
= isolation totale du métier

J'ai mon code et j'essaie de faire le process inverse
      `,
    },
  ]);
})();

export {};
