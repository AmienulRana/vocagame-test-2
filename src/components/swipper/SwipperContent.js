export default function SwipperContent({ title, desc }) {
  return (
      <div className="mb-5 text-center">
        <h2 className="text-lightgreen font-bold text-3xl">{title}</h2>
        <p className="my-3">{desc}</p>
      </div>
  );
}
