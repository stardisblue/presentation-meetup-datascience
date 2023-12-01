import { create, md, html } from 'presenter';
import 'tachyons/css/tachyons.css';
import 'presenter/dist/index.css';
import './css/style.css';

const title = {
  template: 'title',
  title: `Introduction au TDD et au principe de clean-archi avec Pyspark`,
  content: md`
### Bonnes pratiques et datascience

Fati Chen <small>🔗[LinkedIn](https://www.linkedin.com/in/fati-chen/) | 📚[github.com/stardisblue](https://github.com/stardisblue)</small>

> _Dr. en Datascience & Dataviz_
>
> Data scientist & dev. Fullstack @[Comwatt](https://www.comwatt.com/)

_12 déc. 2023_
  `,
};

const titlebold = {
  template: 'title',
  title: html.fragment`
    <span style="opacity:0.5">Introduction au </span>TDD<span
      style="opacity:0.5"
    >
      et au principe de </span
    >clean-archi<span style="opacity:0.5"> avec </span>Pyspark<span
      style="opacity:0.5"
    ></span>
  `,
  content: md`
<div style="opacity:0.5">

### Bonnes pratiques et datascience

Fati Chen <small>🔗[LinkedIn](https://www.linkedin.com/in/fati-chen/) | 📚[github.com/stardisblue](https://github.com/stardisblue)</small>

> _Dr. en Datascience & Dataviz_
>
> Data scientist & dev. Fullstack @[Comwatt](https://www.comwatt.com/)

_12 déc. 2023_
  `,
};

(function () {
  const $entry = document.querySelector<HTMLElement>('#hero')!;
  create($entry, [
    title,
    titlebold,
    {
      title: `De quoi va-t-on parler ?`,
      content: md`
- Présentation du tdd
- Présentation de la clean-archi
- Présentation de pyspark
      `,
    },
    {
      title: `De quoi va-t-on parler ?`,
      content: md`
tdd
      `,
    },
    {
      title: `De quoi va-t-on parler ?`,
      content: md`
clean-archi
      `,
    },
    {
      title: `De quoi va-t-on parler ?`,
      content: md`
pyspark
      `,
    },
    {
      title: `Ouii des exemples ?`,
      content: md`
https://youtu.be/cKuxIOKagFs?feature=shared&t=187
      `,
    },
    {
      title: `La datascience dans Comwatt`,
      content: md`
objets connectés et valorisation des données dans cassandra
      `,
    },
    {
      title: `La datascience dans Comwatt`,
      content: md`
Base postgres et base cassandra
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
