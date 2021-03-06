## tl;dr

Вынести приложение в отдельную библиотеку, по аналогии с плеером EUMP1TV. Отдельный репозиторий позволит использовать современные инструменты сборки и не зависящая от окружения среды разработки НСП. Также **визивиг** можно будет использовать на других страницах, например, в спецпроектах.

Максимально разделить **визивиг** на модули/компоненты, оставив в **ядре** только базовый функционал для создания/удаления/перемещения блоков и попапа **визивига**, в который элементы будут вставлять свой функционал. Остальной функционал подключать модулями при необходимости. Это позволит использовать:

* совеременный синтаксис es6/es7;
* es6 в браузере(билд для современных браузеров, когда можно не поддерживать старые IE);
* именованых модулей/импортов/экспортов;
* установку пакетов через экосистему npm, а не через rails-assets.


## Инициализация

В страницу вставляется код

```html
<div class='wysiwyg' data-opts='{JSON}' data-content='{JSON}'></div>
```

В `data-opts` вставляется JSON с параметрами для инициализации **визивига**, какие элементы доступны и прочие настройки.
В `data-content` вставялется JSON с данными контента **визивига**, какие блоки и элементы как располагаются.

На странице через js вызывается инициализация **визивига** `var w = Vuesiwyg(opts);`, где в `opts` можно указать дополнительные параметры, которые будут слиты с параметрами из атрибутов `html`(приоритет перезаписи полей у объекта, переданного через js).

## Хранение данных

В базе данных для каждого визивига хранится 2 поля:

* JSON с данными для визивига
* Публичный HTML

## Сохранение данных

При нажатии на кнопку "Сохранить" запрашивать у **визивига** данные+html для хранения в БД.

## Взаимодействие с НСП

При добавлении компонента открывается попап **визивига**, в котором можно настраивать параметры, индивидуальные для конкретного элемента. В случае с добавлением **коллекции/видео/пр.** компонент автоматом вызывает попап **НСП** со стандартным интерфейсом(список видео/коллекций/и прочее), при выборе элемента его `id` (или другая информация) передаётся в попап **визивига**, где дальше обрабатывается логикой компонента **визивига**.

## API

* init(opts), инициализация плеера, если уже инициализирован - ничего не делать;
* get_content(), возвращает данные;
* set_content(jsonСontent), удаляет старые данные, устанавливает новые, заново рендерит отображение;
* get_html(), возвращает готовый html;
* get_opts(), возвращает настройки инициализации;
* destroy(), разрушает **визивиг** и подчищает за собой.

## Массовое изменение контента визивига

Иногда нам приходится приходится править `html` контента **визивига**, сейчас это делается через `rake`-задачи, это работает т.к. сейчас у нас источником правды является именно `html`, при переходе на современный фреймворк источником правды будет являться `JSON`, который через `Vue` будет рендерится в `html`. Нам нужно будет:

1. мигрировать данные текущих **визивигов** в новый
2. периодически изменять контент **визивигов**

Напрямую в `ruby` нельзя вызвать `js`-код и отрендерить контент через `Vue`, возможны следующие варианты:

* хранить данные в `JSON`, писать задачу по изменению `JSON` через `rake`, сохранять в БД `JSON` и отдельно сохранять список изменённых **визивигов**, затем обращаться на сервер `nodejs` через `XHR`, который будет возвращать готовый `html` для каджого **визивига**. Посылать запросы на сервер пачками по 100.
  > Возможно будет на много дольше, т.к. нужно будет делать много запросов.
* хранить данные в `JSON`, запускать задачи массового изменения через `nodejs`, потребуется доступ ноды к некоторым таблицам БД, рендеринг как в предыдущем варианте. Сервер должен располагаться физически там же, где и НСП;
  > Перед разработкой на данном варианте необходимо протестировать работу этого варианта https://ssr.vuejs.org/en/structure.html.
* хранить данные в `JSON`, при массовом редактировании править сразу и `html` и `JSON`;
* хранить данные в `html`, при старте визивига строить по нему `JSON`, работать с ним, после опять сохранять `html`; 

## Деплой

Страница с настройками в админке, где можно выбрать версию, которая будет загружаться. Влияет на загрузку js/css файлов в админке и css файла на публичке со стилями компонентов. Версия выбирается по тегу в `git`.

## Визивиг

### Ядро библиотеки

Включает в себя функционал попапа и базовые операции с блоками

* создавание
* перемещение
* удаление
* вызов настроек элемента. Если есть - вызвывает настройки элемента и передаёт управление элементу

### Блок

Контейнер для элементов, содержит в себе один элемент, который может состоять из нескольких `div`ов.

### Элемент

Элемент визивига, такой как **изображение**, **видео**, и т.д. В ядро визивига включается только элемент `HTML`, позволяющий вставить произвольный `html` код. Содержит в себе всю логику для:

* отображения в админке;
* дополнительный контролов;
* генерации html для публички;
* отображения настроек элемента в попапе;
