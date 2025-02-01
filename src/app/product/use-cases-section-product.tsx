export default function UseCasesSection() {
  return (
    <section className='bg-gray-900 py-20'>
      <div className='mx-auto max-w-6xl px-4'>
        <div className='mb-16 text-center'>
          <h2 className='text-3xl font-bold text-white'>
            Ils nous font confiance
          </h2>
          <p className='mt-4 text-gray-400'>
            Découvrez comment nos clients transforment leur entreprise
          </p>
        </div>

        <div className='grid gap-8 md:grid-cols-3'>
          {/* Finance */}
          <div className='group relative rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-1 transition-all duration-500 after:absolute after:inset-0 after:rounded-2xl after:border after:border-blue-500/0 after:transition-all after:duration-500 hover:after:border-blue-500/100'>
            <div className='relative z-10 h-full rounded-xl bg-gray-900 p-8'>
              <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10'>
                <svg
                  className='h-6 w-6 text-blue-500'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>
              <div className='mt-6'>
                <h3 className='text-xl font-semibold text-white'>Finance</h3>
                <p className='mt-2 text-gray-400'>
                  Automatisation des processus financiers et réduction des
                  erreurs
                </p>
              </div>
              <div className='mt-8 space-y-4'>
                <div className='flex items-baseline justify-between border-b border-gray-800 pb-4'>
                  <div className='text-sm text-gray-500'>Temps économisé</div>
                  <div className='text-2xl font-bold text-blue-500'>60%</div>
                </div>
                <div className='flex items-baseline justify-between border-b border-gray-800 pb-4'>
                  <div className='text-sm text-gray-500'>ROI</div>
                  <div className='text-2xl font-bold text-blue-500'>312%</div>
                </div>
              </div>
              <blockquote className='mt-8 border-l-2 border-blue-500 pl-4'>
                <p className='text-sm italic text-gray-400'>
                  &quot;Un gain de productivité significatif pour nos équipes
                  comptables.&quot;
                </p>
                <footer className='mt-2 text-sm text-gray-500'>
                  - CFO, Entreprise CAC 40
                </footer>
              </blockquote>
            </div>
          </div>

          {/* Tech */}
          <div className='group relative rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-1 transition-all duration-500 after:absolute after:inset-0 after:rounded-2xl after:border after:border-purple-500/0 after:transition-all after:duration-500 hover:after:border-purple-500/100'>
            <div className='relative z-10 h-full rounded-xl bg-gray-900 p-8'>
              <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10'>
                <svg
                  className='h-6 w-6 text-purple-500'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
                  />
                </svg>
              </div>
              <div className='mt-6'>
                <h3 className='text-xl font-semibold text-white'>Tech</h3>
                <p className='mt-2 text-gray-400'>
                  Optimisation du cycle de développement et déploiement
                </p>
              </div>
              <div className='mt-8 space-y-4'>
                <div className='flex items-baseline justify-between border-b border-gray-800 pb-4'>
                  <div className='text-sm text-gray-500'>Déploiements/jour</div>
                  <div className='text-2xl font-bold text-purple-500'>x5</div>
                </div>
                <div className='flex items-baseline justify-between border-b border-gray-800 pb-4'>
                  <div className='text-sm text-gray-500'>Bugs réduits</div>
                  <div className='text-2xl font-bold text-purple-500'>-45%</div>
                </div>
              </div>
              <blockquote className='mt-8 border-l-2 border-purple-500 pl-4'>
                <p className='text-sm italic text-gray-400'>
                  &quot;La plateforme a révolutionné notre façon de développer
                  et déployer.&quot;
                </p>
                <footer className='mt-2 text-sm text-gray-500'>
                  - CTO, Scale-up Tech
                </footer>
              </blockquote>
            </div>
          </div>

          {/* Retail */}
          <div className='group relative rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-1 transition-all duration-500 after:absolute after:inset-0 after:rounded-2xl after:border after:border-green-500/0 after:transition-all after:duration-500 hover:after:border-green-500/100'>
            <div className='relative z-10 h-full rounded-xl bg-gray-900 p-8'>
              <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10'>
                <svg
                  className='h-6 w-6 text-green-500'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
                  />
                </svg>
              </div>
              <div className='mt-6'>
                <h3 className='text-xl font-semibold text-white'>Retail</h3>
                <p className='mt-2 text-gray-400'>
                  Gestion omnicanale et expérience client optimisée
                </p>
              </div>
              <div className='mt-8 space-y-4'>
                <div className='flex items-baseline justify-between border-b border-gray-800 pb-4'>
                  <div className='text-sm text-gray-500'>
                    Satisfaction client
                  </div>
                  <div className='text-2xl font-bold text-green-500'>92%</div>
                </div>
                <div className='flex items-baseline justify-between border-b border-gray-800 pb-4'>
                  <div className='text-sm text-gray-500'>Ventes en ligne</div>
                  <div className='text-2xl font-bold text-green-500'>+83%</div>
                </div>
              </div>
              <blockquote className='mt-8 border-l-2 border-green-500 pl-4'>
                <p className='text-sm italic text-gray-400'>
                  &quot;Une transformation digitale réussie de notre réseau de
                  distribution.&quot;
                </p>
                <footer className='mt-2 text-sm text-gray-500'>
                  - Directeur Digital, Retail
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
