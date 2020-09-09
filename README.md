# Durham Delivers

## Content Entry

Content is entered in [Airtable](https://airtable.com/tblcgDnYltEUNJSd0/viwM06wECbc1hpHWP?blocks=hide), and pulled from Airtable when the site is deployed.

Notes:
- The `instructions` field in Airtable supports Markdown for links: `[link text](https://www.example.com)`
- [Instructions for generating calendar event links](https://support.google.com/calendar/answer/41207?hl=en)
- Create maps for locations without images at [snazzymaps.com](https://snazzymaps.com/style/8097/wy)

<form method="post" action="https://api.netlify.com/build_hooks/5f590c255cc41467f5c08561">
  <button type="submit"> Deploy `develop` to production </button>
</form>

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
