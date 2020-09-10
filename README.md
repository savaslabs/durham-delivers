# Durham Delivers

## Content Entry

Content is entered in [Airtable](https://airtable.com/tblcgDnYltEUNJSd0/viwM06wECbc1hpHWP?blocks=hide), and pulled from Airtable when the site is deployed.

Notes:
- The `instructions` field in Airtable supports Markdown for links: `[link text](https://www.example.com)`
- [Instructions for generating calendar event links](https://support.google.com/calendar/answer/41207?hl=en)
- Create maps for locations without images at [snazzymaps.com](https://snazzymaps.com/style/8097/wy)

## Development

Prerequists:
- Node
- Yarn
- Gatsby CLI

1. Clone repository
1. Create a `.env` file with the contents:

```
AIRTABLE_API_KEY='XXX'
```

where XXX is the read-only Airtable API key obtained from 1pass

1. run `yarn` to install dependencies
1. run `yarn develop` and navigate to http://localhost:8000/

## Deployment

There are two ways to trigger a deployment to production:
1. Merge to `master`.
2. Navigate to https://savaslabs.github.io/durham-delivers/?XXX
where XXX is the build hook key obtained from Netlify.

- Preview hook deploys `develop` here: https://5f5924c2b90d650008c638c1--elegant-colden-fff27a.netlify.app/
- Production hook deploys `master` to https://www.durhamdelivers.org/

Deployments may take up to 5 minutes.
