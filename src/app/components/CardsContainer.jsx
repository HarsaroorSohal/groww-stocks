import Card from "../components/Card";

const CardsContainer = ({ cardsData }) => {
  if (!cardsData) return;
  return (
    <div className="flex flex-row gap-4 justify-center flex-wrap">
      {cardsData.map((ticker) => {
        return <Card key={ticker.ticker} ticker={ticker}></Card>;
      })}
    </div>
  );
};

export default CardsContainer;
