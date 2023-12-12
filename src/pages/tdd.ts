import { PageData, PageState, html, md } from 'presenter';
import tddImage from '../tdd.png';
import exemplesVideo from '../castello-oui-exemples.mp4';
export const tdd: PageState<PageData> = {
  title: `Le principe du TDD`,
  content: (_o, $holder) => {
    $holder.classList.add('flex', 'justify-center');
    $holder.append(
      html.fragment`
            <figure class="w-60 flex flex-column justify-between">
              <img src="${tddImage}" />
              <figcaption class="gray f4">
                <a
                  href="https://marsner.com/blog/why-test-driven-development-tdd/"
                  >marsner.com</a
                >: Why TDD
              </figcaption>
            </figure>
          `,
      html`<div class="pa1"></div>`,
      html`<div class="w-100">
        <p>Vision pragmatique de la programmation</p>
        <ol>
          <li>Créer le test avant code</li>
          <li>Ne coder que ce qu'il faut pour que les tests passent</li>
          <li>Raffiner</li>
        </ol>
      </div>`
    );
  },
};

export const tddExamples: PageState<PageData>[] = [
  {
    title: `La pratique du TDD, l'addition svp`,
    content: html`<figure class="flex flex-column items-center">
      <video class="w-60 h-60" autoplay loop muted playsinline controls>
        <source src="${exemplesVideo}" type="video/mp4" />
      </video>
      <figcaption>
        <a href="https://www.youtube.com/watch?v=cKuxIOKagFs">youtube</a> :
        Suisse?" - C'est quoi l'accent suisse ?
      </figcaption>
    </figure>`,
  },
  {
    title: `La pratique du TDD, l'addition svp`,
    content: html`Je veux faire une fonction qui additionne deux éléments`,
  },
  {
    title: `La pratique du TDD, l'addition svp`,
    content: html`
      Je veux faire une fonction qui additionne deux éléments
      <div class="flex items-baseline">
        <div class="w-50">J'écris le test associé</div>
        <div class="pa1"></div>
        <div class="w-100 ">
          ${md`
~~~py
# test_add_two_numbers.py
def test_add_numbers():
    assert add(2, 3) == 5
~~~
          `}
        </div>
      </div>
    `,
  },
  {
    title: `La pratique du TDD, l'addition svp`,
    content: html`
      Je veux faire une fonction qui additionne deux éléments
      <div class="flex items-baseline">
        <div class="w-50">J'écris le test associé</div>
        <div class="pa1"></div>
        <div class="w-100 ">
          ${md`
~~~py
# test_add_two_numbers.py
def test_add_numbers():
    assert add(2, 3) == 5
~~~
          `}
        </div>
      </div>
      <span class="red">Le test plante</span>
    `,
  },
  {
    title: `La pratique du TDD, l'addition svp`,
    content: html`
      Je veux faire une fonction qui additionne deux éléments
      <div class="flex items-baseline">
        <div class="w-50">J'écris le test associé</div>
        <div class="pa1"></div>
        <div class="w-100 ">
          ${md`
~~~py
# test_add_two_numbers.py
def test_add_numbers():
    assert add(2, 3) == 5
~~~
          `}
        </div>
      </div>
      <span class="red">Le test plante</span>
      <div class="flex items-baseline">
        <div class="w-50">Je fais passer le test 🎉</div>
        <div class="pa1"></div>
        <div class="w-100 ">
          ${md`
~~~py
# add.py
def add(_a, _b):
    return 5
~~~
          `}
        </div>
      </div>
    `,
  },
  {
    title: `La pratique du TDD, éh mais attends une minute !`,
    content: html` <div class="flex items-baseline">
      <div class="w-50">C'est une arnaque l'implémentation !</div>
      <div class="pa1"></div>
      <div class="w-100 ">
        ${md`
~~~py
# add.py
def add(_a, _b):
    return 5
~~~
        `}
      </div>
    </div>`,
  },
  {
    title: `La pratique du TDD, éh mais attends une minute !`,
    content: html` <div class="flex items-baseline">
        <div class="w-50">C'est une arnaque l'implémentation !</div>
        <div class="pa1"></div>
        <div class="w-100 ">
          ${md`
~~~py
# add.py
def add(_a, _b):
    return 5
~~~
          `}
        </div>
      </div>
      <div class="flex items-baseline">
        <div class="w-50">Non c'est que le test est mal spécifié</div>
        <div class="pa1"></div>
        <div class="w-100 ">
          ${md`
~~~diff
+ @pytest.fixture(params=(((2, 3), 5),
+                         ((40, 2), 42),
+                         ((-10,20), 10)))
+ def additions(request):
+     return request.param

def test_add_numbers(additions):
-     assert add(2, 3) == 5
+     (a, b), result = additions
+     assert add(a, b) == result
~~~
          `}
        </div>
      </div>`,
  },
];
