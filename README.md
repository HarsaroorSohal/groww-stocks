## Notes

1. [https://www.alphavantage.co/](https://www.alphavantage.co/) has a rate limit of 25 request per API key. Hence I've added some mock data to showcase the UI once the rate limit is hit.
2. Used random icons/avatars since there is no API to fetch ticker's logo.
3. Top 20 gainers and losers API does not have pagination for fetching more data, hence the Load more button/feature can not be implemented.

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Open [https://harsaroor-groww.vercel.app/](https://harsaroor-groww.vercel.app/) to see the deployed build on Vercel

## Tech Stack

1. NextJS : Framework (App router)
2. Tailwind CSS : Styling
3. Shadcn : UI Components
4. Mobx : State management
