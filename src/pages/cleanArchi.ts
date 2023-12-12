import { PageData, PageState, html, md } from 'presenter';
import cleanArchiUrl from '../hexagon.gif';

export const cleanArchi: PageState<PageData>[] = [
  {
    title: `Clean Archi 101`,
    content: (_o, holder) => {
      holder.classList.add('flex', 'justify-around', 'items-center');
      holder.append(html.fragment`<figure class="w-50">
        <img class="w-100" src=${cleanArchiUrl} />
        <figcaption class="f4">
          <a href="https://alistair.cockburn.us/hexagonal-architecture/"
            >Alistair Cockburn</a
          >: Hexagonal Architecture
        </figcaption>
      </figure> `);
    },
  },
  {
    title: `Clean Archi 101`,
    content: md`
Isoler le code liée au métier du reste du code :

- Base de Données
- Api
- Frameworks
- librairies
- ...

En quoi ça m'aide ?

- Les cas d'usage sont isolés du reste de l'application
- Facile de les tester
- Simplifie la recherche de bugs
- Facilite l'ajout de nouveaux services
    `,
  },
];
