
import settings from '@/data/settings.json'

export function Hero() {
  return (
    <div className="relative h-[90vh] flex items-end justify-end pb-20 pr-12">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('https://roasterycoffee.co.in/wp-content/uploads/2025/04/roastery-lucknow5806-1024x683.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/40"/>
      </div>

      <div className="container-tight text-cream">
        <h1 className="h-serif text-5xl md:text-6xl font-semibold leading-tight max-w-3xl drop-shadow-md">
          {settings.heroTitle}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-cream/90">{settings.heroSubtitle}</p>
        <div className="mt-8 flex gap-4">
          <a href="#menu" className="btn btn-lg btn-primary">View Menu</a>
          <a href="#contact" className="btn btn-lg btn-outline">Find Us</a>
        </div>
      </div>
    </div>
  )
}
