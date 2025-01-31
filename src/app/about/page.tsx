import { Code, Target, Users } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Active Users', value: '10K+' },
    { label: 'Companies', value: '300+' },
    { label: 'Countries', value: '50+' },
    { label: 'Team Members', value: '25+' },
  ];

  const values = [
    {
      icon: <Target className='h-6 w-6 text-purple-600' />,
      title: 'Excellence',
      description:
        "Nous visons l'excellence dans chaque aspect de notre service pour garantir votre réussite.",
    },
    {
      icon: <Users className='h-6 w-6 text-purple-600' />,
      title: 'Innovation Continue',
      description:
        'Nous développons constamment de nouvelles solutions pour anticiper vos besoins.',
    },
    {
      icon: <Code className='h-6 w-6 text-purple-600' />,
      title: 'Engagement Client',
      description:
        'Votre satisfaction est notre priorité absolue, avec un support dédié 24/7.',
    },
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Notre Création',
      description: 'Lancement avec une vision innovante.',
    },
    {
      year: '2021',
      title: 'Levée de Fonds',
      description: '10M€ pour accélérer notre développement.',
    },
    {
      year: '2022',
      title: 'Expansion Internationale',
      description: 'Ouverture de bureaux à Londres et Singapour.',
    },
    {
      year: '2023',
      title: 'Version Entreprise',
      description: 'Nouvelles fonctionnalités de sécurité avancées.',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className='bg-gradient-to-b from-gray-900 to-purple-900 text-white'>
        <div className='mx-auto max-w-6xl px-4 py-24'>
          <div className='relative z-10 grid gap-12 md:grid-cols-2'>
            <div className='text-white'>
              <h1 className='text-4xl font-bold md:text-5xl lg:text-6xl'>
                Solution innovante pour votre entreprise
              </h1>
              <p className='mt-6 text-lg text-purple-100'>
                Transformez votre façon de travailler avec notre plateforme
                intelligente, conçue pour optimiser vos processus et stimuler la
                croissance.
              </p>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className='rounded-xl bg-white/10 p-6 backdrop-blur-sm'
                >
                  <div className='bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-4xl font-bold text-transparent'>
                    {stat.value}
                  </div>
                  <div className='text-md mt-2 font-semibold text-gray-200'>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>
      </section>

      {/* Vision Section */}
      <section className='py-20'>
        <div className='mx-auto max-w-6xl px-4'>
          <h2 className='text-center text-3xl font-bold'>Notre Vision</h2>
          <div className='mt-12 grid gap-8 md:grid-cols-3'>
            {values.map((value, index) => (
              <div
                key={index}
                className='group relative overflow-hidden rounded-2xl bg-gradient-to-b from-purple-50 to-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md'
              >
                <div className='mb-4'>{value.icon}</div>
                <h3 className='mb-2 text-xl font-semibold'>{value.title}</h3>
                <p className='text-gray-600'>{value.description}</p>
                <div className='absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-purple-600 to-purple-400 transition-transform duration-300 group-hover:scale-x-100'></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className='bg-gray-50 py-20'>
        <div className='mx-auto max-w-6xl px-4'>
          <h2 className='text-center text-3xl font-bold'>Notre Histoire</h2>
          <div className='mt-12'>
            <div className='relative'>
              <div className='absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-purple-200'></div>
              <div className='space-y-12'>
                {timeline.map((event, index) => (
                  <div key={index} className='relative'>
                    <div className='flex items-center'>
                      <div className='absolute left-1/2 -translate-x-1/2'>
                        <div className='flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-white'>
                          <div className='h-3 w-3 rounded-full bg-white'></div>
                        </div>
                      </div>
                      <div
                        className={`w-1/2 ${
                          index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'
                        }`}
                      >
                        <div className='text-sm font-semibold text-purple-600'>
                          {event.year}
                        </div>
                        <div className='mt-1 text-xl font-semibold'>
                          {event.title}
                        </div>
                        <div className='mt-2 text-gray-600'>
                          {event.description}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-gray-900 py-24 text-white'>
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className='absolute inset-0 bg-gradient-to-t from-purple-900/50'></div>

        <div className='relative mx-auto max-w-6xl px-4'>
          <div className='grid gap-12 md:grid-cols-2 md:items-center'>
            <div>
              <h2 className='text-3xl font-bold md:text-4xl'>
                Rejoignez l&apos;Aventure
              </h2>
              <p className='mt-6 text-lg text-purple-100'>
                Nous recherchons des talents passionnés pour façonner
                l&apos;avenir de la collaboration numérique. Découvrez nos
                opportunités et développez votre potentiel dans un environnement
                innovant.
              </p>
              <div className='mt-8 flex flex-col gap-4 sm:flex-row'>
                <a
                  href='/careers"
                  className='inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-purple-900 transition-colors hover:bg-purple-100'
                >
                  Voir les Postes
                </a>
                <a
                  href='/culture'
                  className='inline-flex items-center justify-center gap-2 rounded-lg border border-white px-6 py-3 text-white transition-colors hover:bg-white/10'
                >
                  Notre Culture
                </a>
              </div>

              {/* Benefits */}
              <div className='mt-12 grid grid-cols-2 gap-6'>
                <div className='flex items-start gap-3'>
                  <div className='rounded-lg bg-purple-700/50 p-2'>
                    <svg
                      className='h-5 w-5'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M13 10V3L4 14h7v7l9-11h-7z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='font-semibold'>Innovation</h3>
                    <p className='text-sm text-purple-200'>
                      Technologies de pointe
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <div className='rounded-lg bg-purple-700/50 p-2'>
                    <svg
                      className='h-5 w-5'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='font-semibold'>Rémunération</h3>
                    <p className='text-sm text-purple-200'>Package attractif</p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <div className='rounded-lg bg-purple-700/50 p-2'>
                    <svg
                      className='h-5 w-5'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='font-semibold'>Remote First</h3>
                    <p className='text-sm text-purple-200'>
                      Flexibilité maximale
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <div className='rounded-lg bg-purple-700/50 p-2'>
                    <svg
                      className='h-5 w-5'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='font-semibold'>Formation</h3>
                    <p className='text-sm text-purple-200'>
                      Développement continu
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image/Stats Side */}
            <div className='relative'>
              <div className='rounded-2xl bg-gradient-to-br from-purple-700/50 to-purple-900/50 p-8 backdrop-blur-sm'>
                <div className='grid gap-6'>
                  <div className='space-y-2'>
                    <div className='text-sm font-medium text-purple-300'>
                      Positions Ouvertes
                    </div>
                    <div className='text-3xl font-bold'>12 Postes</div>
                  </div>
                  <div className='space-y-2'>
                    <div className='text-sm font-medium text-purple-300'>
                      Équipe Actuelle
                    </div>
                    <div className='text-3xl font-bold'>50+ Talents</div>
                  </div>
                  <div className='space-y-2'>
                    <div className='text-sm font-medium text-purple-300'>
                      Pays
                    </div>
                    <div className='text-3xl font-bold'>15+ Pays</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
