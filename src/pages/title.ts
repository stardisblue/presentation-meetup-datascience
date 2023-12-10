import { md, html } from 'presenter';

export const title = {
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
export const titlebold = {
  template: 'title',
  title: () => html.fragment`
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
