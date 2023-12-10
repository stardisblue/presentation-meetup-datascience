import { html, md } from 'presenter';
import comwattUrl from '../comwatt-pub-1.webp';

export const comwatt = {
  title: `Comwatt`,
  content: (_o, holder) => {
    holder.classList.add('flex', 'flex-wrap');
    holder.append(
      html`<div class="w-100">
        Objets connectés, suivi de la consommation et gestion d'énergie.
      </div>`,
      html`<figure>
        <img src=${comwattUrl} />
      </figure>`,
      html`<div class="pa1"></div>`,
      md`
<div class="w-50">

- Suivi de la consommation des appareils
- Contrôle à distance
- Contrôle de la temperature des chauffages et clims avec [Tado](https://www.tado.com/fr-fr)
- Définir des plannings de consommation
- ... ou laisser Comwatt s'en occuper
      `
    );
  },
};
