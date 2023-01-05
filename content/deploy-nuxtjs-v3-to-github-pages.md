---
title: Деплой Nuxt.js v3 проекта на GitHub Pages
date: 5 января, 2023
description: 'Нельзя просто так взять и задеплоить'
tags: ['dev']
---
Если создать свежий проект на Nuxt.js 3, сгенерировать статику, запушить все это
дело на GitHub и попробовать подключить GitHub Pages – работать оно, конечно, будет, но очень криво.

В консоли можно будет наблюдать кучу ошибок 404, исходя из этого, можно сделать вывод,
что мы либо похерили часть файлов на этапе сборки, либо лежат они не там где нам нужно.

![Базовый проект Nuxt.js v3](/img/nuxt-v3-github-pages-404-error.png "Не хватает файлов сборки")

## Почему так происходит
Данная проблема возникает из-за того что GitHub Pages под капотом использует
генератор статических сайтов [Jekyll](https://jekyllrb.com/){:target="_blank"},
который игнорирует файлы и папки, названия которых начинаются с символов: `.`, `_`, `#` или `~`.

> Every file or directory beginning with the following characters: ., _ , # or ~ in the
> source directory will not be included in the destination folder.
> Such paths will have to be explicitly specified via the config file in the
> include directive to make sure they’re copied over:
> ```
> include:
> - _pages
> - .htaccess
> ```

А, как мы знаем, наш любимый Nuxt.js складывает все свои скрипты в папку под названием `/_nuxt`,
которая впоследствии благополучно игнорируется Jekyll. Кроме того, c внедрением в Nuxt.js функционала
Full Static Generator, полезная нагрузка запросов стала выделяться в отдельный модуль `_payload.js`,
который также не будет обрабатываться.

## Как это исправить
Как оказалось, данная проблема уже имеет официальное
[решение](https://github.blog/2009-12-29-bypassing-jekyll-on-github-pages/){:target="_blank"} от команды GitHub.
Всё что нужно сделать – добавить специальный пустой файл `.nojekyll` в корень проекта, который
сообщит что для данной сборки использовать Jekyll не нужно.

Поэтому в корне нашего Nuxt.js проекта создаем папку `/public` и складываем туда пустой файл
с названием `.nojekyll`, пересобираем билд через `yarn generate`, делаем коммит и пушим.

> Если вы деплоите с помощью утилиты [gh-pages](https://www.npmjs.com/package/gh-pages){:target="_blank"},
> то, кроме всего прочего, необходимо в скрипт деплоя `gh-pages -d dist` добавить флаг `--dotfiles`.
> Без него файл `.nojekyll` не попадет в финальную сборку.

## Если всё еще не завелось
Даже если отключить Jekyll, файлы по-прежнему будут недоступны, но уже по причине их неверного URL.
Если внимательно посмотреть на ошибки 404, то можно увидеть, что вызваны они отсутствием файлов
примерно по такому адресу:
```
https://username.github.io/_nuxt/entry.f4606515.js
```

При этом GitHub Pages генерирует и размещает проекты на URL следующего вида:
```
https://username.github.io/reponame/
```
Т.е. стучимся мы не туда (отсутствует название репозитория).
Решить данную проблему можно очень просто двумя способами:
1. Прикрутить собственный домен
2. Указать `baseUrl` в файле `nuxt.config.js`

`baseUrl` указывается в конфигурации Nuxt.js следующим образом:

```javascript
export default defineNuxtConfig({
    app: {
        baseURL: '/reponame/'
    }
})
```
> Чтобы собственный домен не слетал каждый раз после очередного деплоя,
> нужно в папку `/public` добавить файл с названием `CNAME` и указать там домен,
> который привязали в формате `example.com`


### Ссылочная:
* [Jekyll](https://jekyllrb.com/){:target="_blank"}
* [gh-pages](https://www.npmjs.com/package/gh-pages){:target="_blank"}
* [Bypassing Jekyll On Github Pages](https://github.blog/2009-12-29-bypassing-jekyll-on-github-pages/){:target="_blank"}
* [Deploy Nuxt v2 on GitHub Pages](https://nuxtjs.org/deployments/github-pages/){:target="_blank"}
