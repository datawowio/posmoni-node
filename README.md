# Posmoni Node.js Library

The Posmoni Node.js library provides convenient access to the Posmoni API from
applications written in server-side JavaScript.

## Installation

Install the package with:

```sh
npm install posmoni --save
# or
yarn add posmoni
```

## Usage

The package needs to be configured with your project's secret key, which is
available in the Posmoni Dashboard. Require it with the key's
value:

<!-- prettier-ignore -->
```js
const posmoni = require('posmoni')({
  token: 'project-token',
});

posmoni.moderations.create({
  data: 'picture-url',
  customId: 'id-1',
})
  .then(customer => console.log(customer.id))
  .catch(error => console.error(error));
```

Or using ES modules and `async`/`await`:

```js
const posmoni = require('posmoni')({
  token: 'project-token',
});

(async() => {
  const response = await posmoni.moderations.get({
    query: 'moderation-id'
  });
  console.log(response.data);
})();
```

## Examples

### Create a moderation task to Posmoni
Creating a moderation can be done by using `posmoni.moderations.create` which accepts an required `data` argument and some of optional aguments.

`data` could be text or image's url depends on your project's template.

#### params

| Field        | Type           | Required  | Description |
| ------------- |:-------------:| :-----:| :-----|
| data | string | **Yes** | Image's url or text data |
| postback_url| string | No | URL for answer callback once task has been moderated |
| postback_method| string | No | Callback Configuration HTTP method (`GET`, `POST`, `PUT`, `PATCH`) |
| custom_id | string | No | Custom ID for retrieving moderation task |
| info | json | No | Additional info only for ID card check template |

```js
const posmoni = require('posmoni')({
  token: 'project-token',
});

posmoni.moderations
  .create({
    data: 'picture-url',
    customID: 'custom-id'
  })
  .then((result) => console.log(result.data))
  .catch((error) => console.log(error))
```

### List all moderations

After moderations are created, you can list them with `posmoni.moderations.get` and passing
a callback to it. The object returned from a list API will be a `list` object, which you
can access the raw data via `data` attribute:

```javascript
posmoni
  .moderations
  .get()
  .then((result) => console.log(result.data))
  .catch((error) => console.log(error))
```

We also support request with pagination. You can pass these arguments into the payload.

#### params

| Field        | Type           | Required  | Description |
| ------------- |:-------------:| :-----:| :-----|
| sortBy | string | No | Specific moderation field for sorting (Default is `id`) |
| sortDirection| string| No | Sorting direction which could be `asc` or `desc` (Default is `desc`) |
| page| integer | No | The number of page (Default is `1`) |
| perPage | integer | No | The number of item per page (Default is `10`) |

### Retrieve a moderation

You can retrieve specific created moderation by using `posmoni.moderations.get` and passing a
customer ID to it, e.g.

```javascript
posmoni.moderations
  .get({ query: 'custom-id-1'})
  .then((result) => consle.log(result.data))
  .catch((error) => console.log(error))
```
