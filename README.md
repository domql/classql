# ClassQL
DOM manipulation using document queries. Uses [domql](https://github.com/rackai/DOMQL) API.

### Installation
```
yarn add classql
```

### Examples

Initialization: 

```javascript
import DOM from '@rackai/classql'

DOM.query({
  logo: { query: '.logo' }
})
```

Attributes:
```javascript
DOM.query({
  modal: {
    query: '.modal',
    style: {
      display: 'none'
    }
  }
})
```

Events and update:
```javascript
DOM.query({
  CTA: {
    query: '.button',
    on: {
      click: (event, element, node) => {
        DOM.find('modal').update({
          style: {
            display: 'block'
          }
        })
      }
    }
  }
})
```
