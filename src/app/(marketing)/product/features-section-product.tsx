export default function FeaturesSection() {
  return (
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
                  <h3 className='text-xl font-semibold'>Interface Intuitive</h3>
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
  );
}
