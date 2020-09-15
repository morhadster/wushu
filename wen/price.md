---
layout: default
title:  Стоимость занятий

price:
- title: Месячные абонементы

  first: 200
  once:  450
  batch:
    4:  1500
    8:  2800
    12: 3600
    16: 4200
    0: 5000
columns:
  - Количество занятий
  - Стоимость абонемента
  - Стоимость одного занятия
---
{% for z in page.price %}
## {{z.title}}

<table border>
  <tr>
    {% for q in page.columns %}<th>{{ q }}</th>{% endfor %}
  </tr>
  {% for q in z.batch %}
  <tr align='right'>{% if q[0] > 0 %}{% assign q0 = q[0] %}{% assign q2 = q[1] | divided_by: q0 %}{% else %}{% assign q0 = 'Безлимит' %}{% assign q2 = '-' %}{% endif %}
    <td>{{ q0 }}</td>
    <td>{{ q[1] }}</td>
    <td>{{ q2 }}</td>
  </tr>
  {% endfor %}
</table>

Пробное занятие (только 1 раз) - {{ z.first }} руб.

Разовая оплата - {{ z.once }} руб/1 занятие.

{% endfor %}

**Стоимость персонального занятия: от 800 руб/час (без учета аренды зала). **

**Скидки**

Скидка для пенсионеров - 20%.

Семейная скидка для взрослых - 10%, для детей - 20%.
