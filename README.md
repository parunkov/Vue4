## Тестовое задание для фронтенд-разработчика

В тестовом задании представлены макеты дизайна двух страниц: страницы каталога продуктов и страница корзины. Тестовое задание состоит из нескольких уровней — обязательных (level 1) и необязательных (level 2 и level 3). В обязательных задачах мы проверяем знания необходимые для прохождения на эту позицию.
Необязательные задачи не должны занять много времени, но помогут вам показать себя с лучшей стороны. Вы можете сделать только часть из них, если что-то покажется вам интересным, или не делать их вовсе.

Условий несколько:
- Используйте JS (можно TypeScript);
- Vue.js (Nuxt.js);
- Работоспособность в двух последних версиях десктопных браузеров (Chrome, Safari, Firefox, ~~IE~~).

## Задачи
### Level 1

Реализовать список товаров, который можно отфильтровать с помощью расположенного слева списка брендов. Необходимые данные можно подгрузить из JSON-файлов [продукты](assets/products.json) и [бренды](assets/brands.json).

![](src/assets/images/catalog.png?raw=true "")

### Добавление товара в корзину
При добавлении в корзину необходимо отображать количество продуктов в корзине рядом с иконкой вверху.

### Вёрстка и дизайн
Для упрощения задания представлены не макеты в Sketch, Figma или PS, а мокапы, показывающие основную структуру страниц. В этой задаче вы вольны использовать любую сетку или не использовать вовсе.
Логотип можно взять [отсюда](assets/images/logo.png). Эта задача позволит нам понять, как вы видите в целом UI, как его сделать аккуратней и удобней для пользователя, не имея при этом чётких дизайнов или ограничений.

## Необязательные задачи

### Level 2

* Сделать респонсив начиная от 320px и выше. Можно использовать любой фреймворк или не использовать вовсе. Главное, чтобы интерфейс оставался удобным, аккуратным и эстетичным.
* Страница корзины

![](src/assets/images/cart-level-2.png?raw=true "")

Вывести добавленные ранее товары. Добавить поле с возможностью выбора количества и кнопку Удалить для удаления позиции из корзины. Текст с суммой всего заказа должен в реальном времени пересчитывать сумму. Переключение между страницей каталога и корзины можно реализовать с помощью Vue Router.

### Level 3

Добавлен новый тип продукта "[Настраиваемый](assets/level3/products.json)" (configurable) . У данного продукта есть опции (configurable_options), в нашем случае пользователь может выбрать цвет и размер товара. Также в информации о продукте присутствует список доступных вариантов товара (variants). 


![](src/assets/images/catalog-level-3.png?raw=true "")

* Необходимо реализовать добавление доступных вариантов товаров в корзину и  невозможность добавления несуществующих вариантов.
* Менять изображение товара при полном соответствии выбранных опций пользователя с одним из вариантов товара 
* Вывести выбранные опции в корзине (если выполнен level 2)

![](src/assets/images/cart-level-3.png?raw=true "")


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
