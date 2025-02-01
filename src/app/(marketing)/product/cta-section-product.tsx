import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CtaSection() {
  return (
    <section className='relative'>
      <div className='absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-900'></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

      <div className='relative mx-auto max-w-6xl px-4 py-24'>
        <div className='grid items-center gap-12 md:grid-cols-2'>
          <div className='text-white'>
            <h2 className='text-3xl font-bold md:text-4xl'>
              Prêt à transformer votre entreprise ?
            </h2>
            <p className='mt-4 text-lg text-purple-100'>
              Commencez gratuitement pendant 14 jours, sans engagement.
            </p>

            <div className='mt-8 flex flex-col gap-4 sm:flex-row'>
              <Link
                href='/signup'
                className='inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-purple-600 transition-colors hover:bg-purple-50'
              >
                Démarrer gratuitement <ArrowRight className='h-4 w-4' />
              </Link>
              <Link
                href='/demo'
                className='inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-medium text-white transition-colors hover:bg-white/10'
              >
                Demander une démo
              </Link>
            </div>

            <div className='mt-12 grid grid-cols-3 gap-8 border-t border-white/20 pt-8'>
              {[
                { label: 'Clients satisfaits', value: '10k+' },
                { label: 'Données sécurisées', value: '99.9%' },
                { label: 'Support réactif', value: '24/7' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className='text-2xl font-bold'>{stat.value}</div>
                  <div className='mt-1 text-sm text-purple-200'>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Signals */}
          <div className='rounded-2xl bg-white/10 p-8 backdrop-blur-sm'>
            <div className='flex items-center gap-4'>
              <div>
                <blockquote className='text-lg text-white'>
                  &quot;Une solution indispensable qui a transformé notre façon
                  de travailler.&quot;
                </blockquote>
                <div className='mt-2 text-sm text-purple-200'>
                  Marc Dupont, CEO @ TechCorp
                </div>
              </div>
            </div>

            <div className='mt-8'>
              <div className='text-sm font-medium text-purple-200'>
                Ils nous font confiance
              </div>
              <div className='mt-4 grid grid-cols-3 gap-4'>
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className='aspect-video rounded bg-white/10'
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
