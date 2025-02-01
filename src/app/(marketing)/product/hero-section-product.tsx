import { ArrowRight, CheckCircle, Command, Zap } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
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
              Une plateforme unifiée pour gérer, analyser et optimiser tous vos
              processus d&apos;entreprise. Gagnez en efficacité dès
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
  );
}
