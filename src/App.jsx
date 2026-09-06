import IdentityCard from "./components/identityCard";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">
        Identity Cards
      </h1>

      <div className="flex flex-wrap justify-center">
        <IdentityCard
          title="Harvie Marcelo"
          description="BS Information Technology Student"
          image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500"
        />

        <IdentityCard
          title="John Doe"
          description="Application Development Student"
          image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500"
        />
      </div>
    </div>
  );
}

export default App;