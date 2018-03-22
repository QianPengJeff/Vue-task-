VUE SAP task by QianPeng

## setup

clone of download the project

```npm install``` & ```npm run dev```

### imageData.json

```json
[
    {
        "url": "https://lorempixel.com/1024/480/technics/1/"
    },
    {
        "url": "https://lorempixel.com/1024/480/technics/2/"
    },
    {
        "url": "https://lorempixel.com/1024/480/technics/3/"
    },
    {
        "url": "https://lorempixel.com/1024/480/technics/4/"
    },
    {
        "url": "https://lorempixel.com/1024/480/technics/5/"
    },
    {
        "url": "https://lorempixel.com/1024/480/technics/6/"
    },
    {
        "url": "https://lorempixel.com/1024/480/technics/7/"
    },
    {
        "url": "https://lorempixel.com/1024/480/technics/8/"
    },
    {
        "url": "https://lorempixel.com/1024/480/technics/9/"
    },
    {
        "url": "https://lorempixel.com/1024/480/technics/10/"
    }
]
```

### dependencies used

```bootstrap-vue```
```vue-carousel```
```vue-router```
```sass-loader```

### About vue carousel

```Adjust the number of images can be displayed at different breakpoints```

```Use the 'perPageCustom' to configure the number of visible slides for responsive breakpoints.
Example:
 <carousel :perPageCustom="[[480, 1], [768, 3]]">```

```Configured breakpoints: 2 slides on mobile (<= 480px), 3 slides on tablet (<= 768).```

```More details: https://ssense.github.io/vue-carousel/```
