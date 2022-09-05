import Card from "./Card/Card";

export default function Grid() {
  return (
    <div className="row g-4">
      <div className="col">
        <Card />
      </div>
      <div className="col">
        <Card />
      </div>
      <div className="col">
        <Card />
      </div>
      <div className="col">
        <Card />
      </div>
    </div>
  );
}
