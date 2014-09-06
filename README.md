# wushu[.ukoloff.tk]

Тестовый сайт на GitHub Pages

## Используемые технологии

* [GitHub Pages](https://pages.github.com/) - хостинг **статических** сайтов
  - [Git](http://ru.wikipedia.org/wiki/Git) - технология совместной удалённой работы с проектами
  - [GitHub](https://github.com/) - сайт, поддерживающий работу в технологии Git
* [Jekyll](http://jekyllrb.com/) - программа для генерации статических сайтов
  - Языки разметки
    + [HTML](http://ru.wikipedia.org/wiki/HTML) - основной язык разметки вебстраниц
    + [Markdown](http://ru.wikipedia.org/wiki/Markdown) - простой язык, транслируемый в HTML
    + [Textile](http://ru.wikipedia.org/wiki/Textile_(%D1%8F%D0%B7%D1%8B%D0%BA_%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%82%D0%BA%D0%B8))
  - [Liquid](http://liquidmarkup.org/) - язык шаблонов для генерации сложных страниц
    (документация:
      [1](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers),
      [2](http://docs.shopify.com/themes/liquid-basics))
  - [CSS](http://ru.wikipedia.org/wiki/CSS) - язык описания дизайна Веб-страниц
  - [YAML](http://ru.wikipedia.org/wiki/YAML) - язык записи произвольных данных в удобочитаемом виде
* [Disqus](http://disqus.com/) - сервис комментариев
* [Dot TK](http://www.dot.tk/) - бесплатная регистрация доменных имён .tk
* [Simple Form](http://getsimpleform.com/) - отправка веб-форм с уведомлением владельцу
  - [HuiTiao](https://github.com/ukoloff/huitiao) - встраивание формы контакта на статический сайт
* [Fotky](https://github.com/ukoloff/fotky) - встраивание галерей Яндекс-Фоток (и Google Picasa)
  на статический сайт

## Установка

Упомянутый ниже софт, необходимый для разработки сайта,
размещён [здесь](http://yadi.sk/d/FqGnoGb0MGt5z).

### Jekyll

Для установки Jekyll нужно:

1. Установить сначала язык [Ruby](https://www.ruby-lang.org/)

  Лучше всего скачать его с http://rubyinstaller.org/downloads/ (версия 2.0.0, лучше 32-битную версию)

2. Установить компилятор для Ruby-пакетов DevKit

  Скачать его с той же страницы (того же типа 32/64, что и Ruby), распаковать в любую папку (например C:\Ruby200\DevKit) и запустить команды
  ```sh
  ruby dk.rb init
  ruby dk.rb install
  ```
3. Установить необходимые пакеты

  ```sh
  gem install github-pages
  gem install wdm
  ```

### Git

Можно пользоваться утилитой командной строки `git`, но это явно не для начинающих. Так что
вариантов два:

- [GitHub для Windows](https://windows.github.com/) - минимум функций, английский язык
- [SourceTree](http://www.sourcetreeapp.com/) - множество возможностей, русский язык, через месяц
требуется бесплатная регистрация

### Редактор

Крайне рекомендуется пользоваться качественным редактором, например [SublimeText](http://www.sublimetext.com/) -
периодически предлагает заплатить, но работает и так ;-)

Рекомендуется добавить в настройки SublimeText (Preferenses / Settings - User)

  ```
    "default_line_ending": "unix",
    "ensure_newline_at_eof_on_save": true,
    "fade_fold_buttons": false,
    "tab_size": 2,
    "translate_tabs_to_spaces": true,
    "trim_trailing_white_space_on_save": true,
    "use_tab_stops": true,
    "word_wrap": false
   ```
### GitHub

Требуется зарегистрировать учётную запись на [GitHub](https://github.com/)

### Dot TK

Если нужно доменное имя в домене .tk, потребуется учётная запись в [Dot TK](http://www.dot.tk/)
(можно использовать учётные записи  [Facebook](https://www.facebook.com/) или
[Google](https://www.google.ru/))

## Файлы в репозитории

### [run.bat](/run.bat)

Запуск Jekyll на локальной машине в отладочном режиме.

Всё содержимое каталога компилируется (в папку [_site](#_site)),
запускается веб-сервер, веб-браузер и начинается процесс отслеживания изменений файлов
в репозитории. При изменении (почти) любого файла он тут же перекомпилируется.

Не отслеживаются только изменения в файле конфигурации ([_config.yml](#_configyml)), если изменения внесены в него,
Jekyll требуется перезапустить.

### [CNAME](/CNAME)

В этом файле размещается доменное имя сайта.

GitHub Pages учитывает содержимое этого файла, чтобы определять, какой сайт (из всех, размещённых на них) следует
показывать на конкретный запрос. Если этого файла нет, то сайт обслуживается по адресу вида `user.github.io/repository`.

Чтобы это работало, где-то в мире должен быть корректно настроен сервер DNS, содержащий запись вида

  ```
  site.name.domain CNAME user.github.io
  ```

### [.gitignore](/.gitignore)

Упомянутые здесь файлы никогда не попадают в репозиторий Git и не отслеживаются системой контроля версий.

### [_config.yml](/_config.yml)

Глобальный файл конфигурации Jekyll.

Здесь (в формате YAML)указаны различные параметры сайта, среди которых:

  - `paginate` - количество новостей на одной странице
  - `paginate_path` - адрес страницы со списком новостей
  - `permalink` - адрес, который получают индивидуальные страницы новостей
  - `exclude` - файлы репозитория, которые Jekyll **не** компилирует на сайт

### [_site](/_site)

Папка, где размещается откомпилированный сайт.

При каждом запуске Jekyll эта папка очищается, Jekyll просматривает все файлы репозитория и копирует их папку _site.
Если файл содержит YAML-пролог (то есть начинается со строки `---`, за которой идут данные в формате YAML
и ещё одна строка `---`), то он не просто копируется, а компилируется.

В частности, файлы с расширением `.md` или `.markdown` преобразуются из формата Markdown в HTML, а файлы `.textile` -
соответственно из формата Textile. Внутри файла исполняются теги Liquid (то есть конструкции `{% ... %}` и `{{ ...}}`)
и файл может быть дополнительно "обёрнут" в какой-нибудь другой файл (layout).

### [favicon.ico](/favicon.ico)

Иконка, которая показывается браузерами во вкладке сайта (слева от имени).

### [404.md](/404.md)

Страница, которая отображается, если указан несуществующий адрес страницы.

Работает только на GitHub Pages, локальный Jekyll это не поддерживает.

Эта страница, как и любая другая, может использовать не только формат Markdown, но и формат Textile или HTML.

### [index.html](/index.html)

Первая страница сайта.

По соглашению, если адрес вебстраницы заканчивается на `/`, то веб-сервер ищет в папке файл с именем `index.htm` и показывает его.
(Если такого файла нет, то показывается файл \404.html).

В корневой `index.html` встроен механизм отображения "горячих" новостей. В нём отображаются сначала все новости, помеченные
как `important: true` (в обратном хронологическом порядке), а после этого ещё несколько "обычных" новостей (без `important:`).
Общее количество новостей на главной странице определяется параметром `paginate: ` в YAML-пролог файла `index.html`,
а если оно там не указано - то глобальным параметром `paginate:` из файла [_config.yml](/_config.yml).

Трогать руками этот механизм не рекомендуется, но выше или ниже его можно вставить свой текст.

Для главной страницы отключены комментарии Disqus посредством параметра `no-disqus: true`.

### [xinwen](/xinwen/)

Папка, где Jekyll размещает списки новостей в обратном хронологическом порядке.

Формат списка новостей определяется файлом `index.html` в этой папке.

Количество новостей на страницу задаётся глобальным параметром `paginate:` из файла [_config.yml](/_config.yml).

Параметр `important:` в этих списках не учитывается, все новости идут строго по дате и времени.

На этих страницах (списках новостей) также отключены комментарии Disqus посредством параметра `no-disqus: true`.

### [_posts](_posts)

Здесь размещаются исходные файлы индивидуальных новостей.

Файлы здесь обязаны иметь имя вида YYYY-MM-DD-title.*, то есть в имени должны быть указаны дата и финальное имя страницы. Откомпилированный файл
будет помещён в другое место, указанное глобальным параметром `permalink` в файле файла [_config.yml](/_config.yml).

В остальном файлы новостей - такие же файлы, как все остальные, они могут создаваться в любом формате (HTML / Markdown / Textile).

В списках новостей отображается не полный текст новости, а её начало. На данным момент ограничителем (местом, где обрезается текст) является
первая пустая строка в тексте новости. Это можно изменить глобальным параметром `excerpt_separator` в файле [_config.yml](/_config.yml).

### [_layouts](/_layouts)

Здесь размещаются оформления страниц.

На данный момент имеется только одно оформление - [default](/_layouts/default.html), но при желании можно добавить и другие.

В какое из оформлений будет "обёрнута" вебстраница определяется параметром `layout` в её YAML-пролог.

### [yangshi](/yangshi)

Здесь хранятся таблицы стилей (CSS), определяющие внешний вид страниц.

На данный момент имеется только одна таблица стилей [qi](/yangshi/qi.css), но при желании можно добавить и другие.

В YAML-пролог любой страницы можно указать параметр `css` (массив или одно значение), тогда к странице будут подключены упомянутые
CSS-файлы. Если файл указан без пути и расширения, то он считается находящимся в папке /yangshi, иначе он вписывается в страницу
как указан

```yaml
---
layout: default
title:  Галерея
css:    fotky   # То есть получается /yangshi/fotky.css
```

### [js](/js)

Здесь хранятся таблицы программы на языке [JavaScript](http://ru.wikipedia.org/wiki/JavaScript), которые используются на страницах сайта.

В данный момент не используется никаких JavaScript-файлов, но в будущем это скорее всего изменится.

Требуемые страницей js-файлы (по аналогии с CSS) можно указать в её YAML-прологе. Аналогично, если путь и расширение не указаны,
подставляются `/js/` и `.js` соответственно.

### [huabao](/huabao)

Здесь размещаются файлы изображений.

Как изображения, используемые в служебных целях (фоны, иконки и т.п.), так и иллюстрации к статьям. Рекомендуется продумать структуру
хранения и размещать картинки не в куче, а раскладывая по логично организованным папкам.

Если картинка используется только в одной статье, то можно разместить её не здесь, а прямо возле самой статьи.
Впрочем, это должно определяться политикой сайта.

В этой же папке (в файле [index](/huabao/index.html)) подключена библиотека
[Fotky](https://github.com/ukoloff/fotky), отображающая фотоальбомы Яндекс-Фоток.

Размещение больших фотогалерей непосредственно на Jekyll-сайте хотя и вполне возможно,
оказывается крайне неудобным. Гораздо удобнее разместить их на специализированном
хостинге изображений, предлагающем необходимый сервис
(создание миниатюр, описание, упорядочивание).

Более того, возможно есть смысл даже одиночные изображения (иллюстрации к статьям)
размещать на внешних службах хранения изображений, а на сайте размещать только ссылки
на версию нужного размера.

### [wen](/wen)

Здесь размещаются тексты статей на сайте.

По аналогии с картинками (но ещё более строго), рекомендуется хранить их не одной кучей, а раскладывать по папкам.
Название папки не является выделенным, её можно назвать как угодно, или можно создать несколько папок в корне (и в каждой несколько подпапок).
Можно даже размещать некоторые статьи непосредственно в корне сайта/репозитория, но обычно это приводит к замусориванию и не
рекомендуется.

### [_data](/_data)

Здесь размещаются вспомогательные данные в формате YAML.

На данный момент здесь размещены описания:

- горизонтального меню [hmenu](/_data/hmenu.yml)
- вертикального меню [vmenu](/_data/vmenu.yml) _(реализованы динамические подменю второго уровня)_
- список ссылок, показываемых в углу отладочной (не на GitHub Pages) версии сайта [devlinks](/_data/devlinks.yml)
- список токенов для подключения внешних сервисов, используемых сайтом [tokens](/_data/tokens.yml)

Если какой-то текст в YAML стал не нужен (в отдельном YAML-файле или внутри YAML-пролога в заголовке файла),
его можно не стирать, а закомментировать при помощи знака `#`:

  ``` yaml
  ---
  layout: default
  title:  Поздравляем!
  #important: true
  ```

## Список литературы

Для работы с Git совершенно необходимо понимание базовых концепций - что это и как устроено.
Рекомендуется просмотреть какой-нибудь учебник, например [этот](http://git-scm.com/book/ru/).

Основной инструмент при такой разработке сайта - язык разметки HTML и в меньшей степени язык описания стилей CSS.
Лучшим справочником по тому и другому является [htmlbook.ru](http://htmlbook.ru/). Для начала рекомендуется хотя бы бегло пробежать
содержимое раздела "Самоучители". Неплох для общего развития раздел "Популярные рецепты".

Также рекомендуется ознакомиться с синтаксисом [Markdown](http://ru.wikipedia.org/wiki/Markdown) или [тут](http://vstarkov.ru/markdown-basics/).
