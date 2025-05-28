import { Sparkles, Droplets, Clock } from 'lucide-react';

const benefits = [
  {
    title: 'Alcohol-Free Formula',
    icon: <Droplets className="w-10 h-10 text-primary" />,
    description: 'Safe and gentle on all skin types, crafted with pure oils.',
  },
  {
    title: 'Long-Lasting Scents',
    icon: <Clock className="w-10 h-10 text-primary" />,
    description: 'Enjoy fragrances that stay with you all day.',
  },
  {
    title: 'Luxury in a Bottle',
    icon: <Sparkles className="w-10 h-10 text-primary" />,
    description: 'Premium blends designed to elevate your presence.',
  },
];

export default function Benefits() {
  return (
    <section className="py-16 bg-base-200 text-center">
      <h2 className="text-3xl font-bold mb-12">Why Choose Enscented?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
        {benefits.map((item, idx) => (
          <div key={idx} className="bg-base-100 p-6 rounded-xl shadow hover:shadow-md transition">
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-base-content/70">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
