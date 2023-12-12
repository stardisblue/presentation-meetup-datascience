import { PageData, PageState, html, md } from 'presenter';
import apacheSparkUrl from '../apache-spark.png';

export const pyspark: PageState<PageData> = {
  title: `Apache Spark et pyspark`,
  content: (_o, holder) => {
    holder.classList.add('flex', 'flex-wrap');
    holder.append(
      html`<div class="w-100">
        Manipuler de manière unifiée des données hétérogènes
      </div>`,
      html`<figure>
        <img src=${apacheSparkUrl} />
        <figcaption class="f4">
          <a href="https://www.sqlshack.com/introduction-to-apache-spark/"
            >sqlshack.com</a
          >: Intro to apache spark
        </figcaption>
      </figure>`,
      html`<div class="pa1"></div>`,
      md`
Apache Spark

- Moteur SQL
- En scala
- Distribué
- Scalable
- Lazy evaluation

PySpark  
_"api python pour spark"_
      `
    );
  },
};
