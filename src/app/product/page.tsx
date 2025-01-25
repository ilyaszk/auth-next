import { ArrowRight, CheckCircle, Command, Zap } from 'lucide-react';
import Link from 'next/link';

export default function Product() {
  return (
    <main>
      <section className='overflow-hidden bg-gradient-to-b from-gray-900 to-purple-900 pb-20 pt-20'>
        <div className='mx-auto max-w-6xl px-4'>
          <div className='grid items-center gap-12 md:grid-cols-2'>
            <div>
              <div className='inline-flex items-center gap-2 rounded-full bg-purple-800/30 px-4 py-2 text-sm text-purple-200'>
                <Zap className='h-4 w-4' /> Nouvelle Version Disponible
              </div>
              <h1 className='mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl'>
                Simplifiez votre workflow
              </h1>
              <p className='mt-6 text-lg text-purple-100'>
                Une plateforme unifiée pour gérer, analyser et optimiser tous
                vos processus d&apos;entreprise. Gagnez en efficacité dès
                aujourd&apos;hui.
              </p>

              <div className='mt-8 flex flex-col gap-4 sm:flex-row'>
                <Link
                  href='/demo'
                  className='inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-purple-900 hover:bg-purple-50'
                >
                  Voir la démo <ArrowRight className='h-4 w-4' />
                </Link>
                <Link
                  href='/contact'
                  className='inline-flex items-center justify-center gap-2 rounded-lg border border-purple-400/30 px-6 py-3 text-white hover:bg-white/5'
                >
                  Contacter l&apos;équipe
                </Link>
              </div>

              <div className='mt-12 flex items-center gap-8 text-purple-200'>
                <div className='flex items-center gap-2'>
                  <CheckCircle className='h-5 w-5 text-purple-400' />
                  <span>14 jours d&apos;essai</span>
                </div>
                <div className='flex items-center gap-2'>
                  <CheckCircle className='h-5 w-5 text-purple-400' />
                  <span>Support 24/7</span>
                </div>
              </div>
            </div>

            <div className='relative'>
              <div className='relative rounded-xl bg-gradient-to-br from-purple-800/50 via-purple-900/50 to-gray-900/50 p-2 shadow-2xl backdrop-blur-sm'>
                <div className='absolute -right-2 -top-2'>
                  <Command className='h-8 w-8 text-purple-400' />
                </div>

                <div className='overflow-hidden rounded-lg border border-white/10 bg-gray-900'>
                  <div className='border-b border-white/10 px-4 py-3'>
                    <div className='flex items-center gap-2'>
                      <div className='h-3 w-3 rounded-full bg-red-500'></div>
                      <div className='h-3 w-3 rounded-full bg-yellow-500'></div>
                      <div className='h-3 w-3 rounded-full bg-green-500'></div>
                    </div>
                  </div>
                  <div className='space-y-4 p-8'>
                    <div className='h-4 w-3/4 rounded bg-gray-800'></div>
                    <div className='h-4 w-1/2 rounded bg-gray-800'></div>
                    <div className='flex gap-4'>
                      <div className='h-12 w-12 rounded bg-purple-800/50'></div>
                      <div className='flex-1 space-y-2'>
                        <div className='h-4 w-full rounded bg-gray-800'></div>
                        <div className='h-4 w-3/4 rounded bg-gray-800'></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='absolute -bottom-6 -right-6 h-48 w-48 rounded-full bg-purple-500/30 blur-3xl'></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className='bg-gradient-to-b from-white to-gray-50 py-20'>
        <div className='mx-auto max-w-6xl px-4'>
          <div className='text-center'>
            <h2 className='text-3xl font-bold'>Une plateforme complète</h2>
            <p className='mx-auto mt-4 max-w-2xl text-gray-600'>
              Découvrez comment notre solution s&apos;adapte à vos besoins avec
              des fonctionnalités pensées pour votre productivité.
            </p>
          </div>

          <div className='mt-20 grid gap-20 md:grid-cols-2'>
            {/* Left: Main Feature */}
            <div>
              <div className='sticky top-20'>
                <div className='overflow-hidden rounded-2xl bg-white shadow-xl'>
                  {/* Feature Header */}
                  <div className='bg-gradient-to-br from-purple-900 to-purple-800 p-8 text-white'>
                    <h3 className='text-xl font-semibold'>
                      Interface Intuitive
                    </h3>
                    <p className='mt-2 text-purple-100'>
                      Un design pensé pour une prise en main immédiate par vos
                      équipes
                    </p>
                  </div>

                  {/* Feature Preview */}
                  <div className='p-8'>
                    {/* Toolbar */}
                    <div className='mb-6 flex items-center gap-4 rounded-lg bg-gray-100 p-3'>
                      <div className='flex gap-2'>
                        <div className='h-8 w-8 rounded-lg bg-purple-600'></div>
                        <div className='h-8 w-8 rounded-lg bg-gray-200'></div>
                        <div className='h-8 w-8 rounded-lg bg-gray-200'></div>
                      </div>
                      <div className='h-6 w-px bg-gray-300'></div>
                      <div className='flex-1 rounded-md bg-white px-4 py-2 text-sm text-gray-400'>
                        Rechercher...
                      </div>
                    </div>

                    {/* Content Grid */}
                    <div className='grid grid-cols-2 gap-4'>
                      <div className='space-y-4 rounded-lg border border-gray-100 p-4'>
                        <div className='flex items-center gap-3'>
                          <div className='h-10 w-10 rounded-lg bg-purple-100'></div>
                          <div className='flex-1'>
                            <div className='h-3 w-3/4 rounded bg-gray-200'></div>
                            <div className='mt-1 h-3 w-1/2 rounded bg-gray-200'></div>
                          </div>
                        </div>
                        <div className='grid grid-cols-3 gap-2'>
                          {[...Array(6)].map((_, i) => (
                            <div
                              key={i}
                              className='aspect-video rounded bg-gray-100'
                            ></div>
                          ))}
                        </div>
                      </div>

                      <div className='space-y-4 rounded-lg border border-gray-100 p-4'>
                        <div className='flex items-center gap-3'>
                          <div className='h-10 w-10 rounded-lg bg-purple-100'></div>
                          <div className='flex-1'>
                            <div className='h-3 w-2/3 rounded bg-gray-200'></div>
                            <div className='mt-1 h-3 w-1/2 rounded bg-gray-200'></div>
                          </div>
                        </div>
                        <div className='grid grid-cols-2 gap-2'>
                          {[...Array(4)].map((_, i) => (
                            <div
                              key={i}
                              className='h-20 rounded bg-gray-100'
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Stats Preview */}
                    <div className='mt-6 grid grid-cols-3 gap-4 rounded-lg bg-gray-50 p-4'>
                      {[
                        { label: 'Projets', value: '24' },
                        { label: 'Équipes', value: '12' },
                        { label: 'Membres', value: '289' },
                      ].map((stat, i) => (
                        <div key={i} className='text-center'>
                          <div className='text-2xl font-bold text-purple-600'>
                            {stat.value}
                          </div>
                          <div className='text-sm text-gray-600'>
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Feature List */}
            <div className='space-y-8'>
              {/* Collaboration */}
              <div className='overflow-hidden rounded-2xl bg-white shadow-xl'>
                <div className='bg-gradient-to-br from-blue-900 to-blue-800 p-8 text-white'>
                  <h3 className='text-xl font-semibold'>
                    Collaboration en temps réel
                  </h3>
                  <p className='mt-2 text-blue-100'>
                    Travaillez ensemble instantanément, où que vous soyez
                  </p>
                </div>

                <div className='p-8'>
                  <div className='space-y-4'>
                    {/* Chat Preview */}
                    <div className='flex gap-4'>
                      <div className='flex-1 space-y-4'>
                        <div className='flex items-start gap-3'>
                          <div className='h-8 w-8 rounded-full bg-blue-100'></div>
                          <div className='rounded-lg bg-gray-100 p-3'>
                            <p className='text-sm text-gray-600'>
                              Message exemple...
                            </p>
                          </div>
                        </div>
                        <div className='flex items-start justify-end gap-3'>
                          <div className='rounded-lg bg-blue-500 p-3'>
                            <p className='text-sm text-white'>
                              Réponse exemple...
                            </p>
                          </div>
                          <div className='h-8 w-8 rounded-full bg-blue-100'></div>
                        </div>
                      </div>
                    </div>

                    {/* Activity Feed */}
                    <div className='rounded-lg bg-gray-50 p-4'>
                      <div className='space-y-3'>
                        <div className='flex items-center gap-3'>
                          <div className='h-2 w-2 rounded-full bg-green-500'></div>
                          <div className='text-sm text-gray-600'>
                            Julie a modifié le document
                          </div>
                          <div className='text-xs text-gray-400'>il y a 2m</div>
                        </div>
                        <div className='flex items-center gap-3'>
                          <div className='h-2 w-2 rounded-full bg-purple-500'></div>
                          <div className='text-sm text-gray-600'>
                            Thomas a ajouté un commentaire
                          </div>
                          <div className='text-xs text-gray-400'>il y a 5m</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Analytics */}
              <div className='overflow-hidden rounded-2xl bg-white shadow-xl'>
                <div className='bg-gradient-to-br from-green-900 to-green-800 p-8 text-white'>
                  <h3 className='text-xl font-semibold'>Analytics avancés</h3>
                  <p className='mt-2 text-green-100'>
                    Suivez vos performances en temps réel
                  </p>
                </div>

                <div className='p-8'>
                  <div className='space-y-6'>
                    {/* Chart */}
                    <div className='relative h-48'>
                      <div className='absolute inset-0 flex items-end justify-between gap-2'>
                        {[40, 70, 45, 90, 65, 85, 35, 60].map((height, i) => (
                          <div key={i} className='relative w-full'>
                            <div
                              className='w-full rounded-t-sm bg-green-600/20 transition-all hover:bg-green-600/30'
                              style={{ height: `${height}%` }}
                            >
                              <div className='absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-gray-600'>
                                {height}%
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className='grid grid-cols-3 gap-4'>
                      {[
                        { label: 'Croissance', value: '+24%' },
                        { label: 'Engagement', value: '89%' },
                        { label: 'Rétention', value: '94%' },
                      ].map((stat, i) => (
                        <div
                          key={i}
                          className='rounded-lg bg-gray-50 p-4 text-center'
                        >
                          <div className='text-xl font-bold text-green-600'>
                            {stat.value}
                          </div>
                          <div className='text-sm text-gray-600'>
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Security */}
              <div className='overflow-hidden rounded-2xl bg-white shadow-xl'>
                <div className='bg-gradient-to-br from-orange-900 to-orange-800 p-8 text-white'>
                  <h3 className='text-xl font-semibold'>Sécurité Enterprise</h3>
                  <p className='mt-2 text-orange-100'>
                    Protection maximale de vos données
                  </p>
                </div>

                <div className='p-8'>
                  <div className='space-y-4'>
                    <div className='grid grid-cols-2 gap-4'>
                      {[
                        { title: 'Chiffrement', desc: 'AES-256 bits' },
                        { title: 'Authentification', desc: '2FA & SSO' },
                        { title: 'Certifications', desc: 'ISO 27001' },
                        { title: 'Surveillance', desc: '24/7 Active' },
                      ].map((item, i) => (
                        <div key={i} className='rounded-lg bg-gray-50 p-4'>
                          <h4 className='font-medium text-gray-900'>
                            {item.title}
                          </h4>
                          <p className='mt-1 text-sm text-gray-600'>
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className='mt-4 rounded-lg bg-orange-50 p-4'>
                      <div className='flex items-center gap-3'>
                        <div className='rounded-full bg-orange-100 p-2'>
                          <svg
                            className='h-5 w-5 text-orange-600'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                            />
                          </svg>
                        </div>
                        <div className='flex-1'>
                          <h4 className='font-medium text-gray-900'>
                            Conformité RGPD
                          </h4>
                          <p className='mt-1 text-sm text-gray-600'>
                            Protection des données personnelles
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
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
                    <div className='text-sm text-gray-500'>
                      Déploiements/jour
                    </div>
                    <div className='text-2xl font-bold text-purple-500'>x5</div>
                  </div>
                  <div className='flex items-baseline justify-between border-b border-gray-800 pb-4'>
                    <div className='text-sm text-gray-500'>Bugs réduits</div>
                    <div className='text-2xl font-bold text-purple-500'>
                      -45%
                    </div>
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
                    <div className='text-2xl font-bold text-green-500'>
                      +83%
                    </div>
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

      {/* Integrations Section */}
      <section className='py-20'>
        <div className='mx-auto max-w-6xl px-4'>
          <div className='grid items-center gap-12 md:grid-cols-2'>
            {/* Left: Content */}
            <div>
              <h2 className='text-3xl font-bold'>Intégrations puissantes</h2>
              <p className='mt-4 text-lg text-gray-600'>
                Connectez vos outils préférés et automatisez votre workflow
              </p>

              {/* Integration Categories */}
              <div className='mt-8 space-y-6'>
                {[
                  {
                    title: 'Communication',
                    desc: 'Slack, Teams, Discord',
                    icon: (
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
                          d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
                        />
                      </svg>
                    ),
                  },
                  {
                    title: 'Gestion de Projet',
                    desc: 'Jira, Trello, Asana',
                    icon: (
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
                          d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
                        />
                      </svg>
                    ),
                  },
                  {
                    title: 'Développement',
                    desc: 'GitHub, GitLab, Bitbucket',
                    icon: (
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
                          d='M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                        />
                      </svg>
                    ),
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className='group flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-transparent hover:shadow-lg hover:shadow-purple-500/5'
                  >
                    <div className='rounded-lg bg-gray-50 p-3 transition-colors group-hover:bg-purple-50'>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className='font-semibold text-gray-900'>
                        {item.title}
                      </h3>
                      <p className='mt-1 text-gray-600'>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Integration Grid */}
            <div className='relative'>
              <div className='absolute inset-0 scale-y-[1.25] transform rounded-3xl bg-gradient-to-b from-purple-50 opacity-50 blur-2xl'></div>
              <div className='relative grid grid-cols-3 gap-4 rounded-2xl border border-gray-200 bg-white p-8 shadow-xl'>
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className='aspect-square rounded-xl bg-gray-50 p-4'
                  >
                    <div className='h-full w-full rounded-lg bg-gray-100'></div>
                  </div>
                ))}

                {/* Floating Cards */}
                <div className='absolute -left-8 top-1/4 rounded-lg border border-gray-200 bg-white p-4 shadow-lg'>
                  <div className='flex items-center gap-3'>
                    <div className='h-8 w-8 rounded bg-blue-100'></div>
                    <div className='flex-1'>
                      <div className='h-3 w-20 rounded bg-gray-200'></div>
                      <div className='mt-1 h-2 w-12 rounded bg-gray-100'></div>
                    </div>
                  </div>
                </div>

                <div className='absolute -right-8 top-2/3 rounded-lg border border-gray-200 bg-white p-4 shadow-lg'>
                  <div className='flex items-center gap-3'>
                    <div className='h-8 w-8 rounded bg-purple-100'></div>
                    <div className='flex-1'>
                      <div className='h-3 w-16 rounded bg-gray-200'></div>
                      <div className='mt-1 h-2 w-10 rounded bg-gray-100'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Final CTA Section */}
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
                    &quot;Une solution indispensable qui a transformé notre
                    façon de travailler.&quot;
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
    </main>
  );
}
