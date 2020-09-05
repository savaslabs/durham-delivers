# Durham Delivers

## Content Entry

- Content is entered in [Airtable](https://airtable.com/tblcgDnYltEUNJSd0/viwM06wECbc1hpHWP?blocks=hide), and pulled from Airtable on `yarn develop` and `yarn build`.
- Note: The `instructions` field in Airtable supports Markdown for links: `[link text](https://www.example.com)`
- @todo - once this set up is on prod, add a button to Deploy to Netlify so content editors can publish their updates.
- @todo Invite content editors to the Airtable with limited persmissions.

## Development

1. Clone repository
1. Create a `.env` file with the contents:

```
AIRTABLE_API_KEY='XXX'
```

where XXX is the read-only Airtable API key obtained from 1pass

1. run `yarn` to install dependencies
1. run `yarn develop` and navigate to http://localhost:8000/

## Deployment

Merging to `master` deploys to Netlify at https://www.durhamdelivers.org/
