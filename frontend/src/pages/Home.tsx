export function Home() {
  return (
    <section className="flex flex-col items-center">
      <div className="p-20 flex flex-col w-full justify-center not-lg:items-center text-white bg-[url('/bg_home.jpg')] min-h-screen bg-center bg-cover">
        <div className="space-y-6 border-2 rounded-xs md:w-xl p-5 text-justify">
          <h2 className="lg:text-6xl text-2xl font-semibold">THE BEST SUSHI DELIVERY IN THE CITY</h2>
          <p>
            Experience the true art of Japanese cuisine delivered to your door.
            Our chefs craft each sushi roll with the finest, freshest ingredients—perfectly balanced in taste, texture, and presentation.
            From delicate sashimi to signature rolls, every bite brings you closer to Tokyo’s culinary tradition.
          </p>
        </div>
      </div>
    </section>
  )
}
