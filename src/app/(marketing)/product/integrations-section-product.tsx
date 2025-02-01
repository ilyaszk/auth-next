export default function IntegrationsSection() {
  return (
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
  );
}
