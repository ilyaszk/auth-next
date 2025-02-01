import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import Script from 'next/script';

export default function Contact() {
  return (
    <main>
      {/* Hero Section */}
      <section className='bg-gradient-to-b from-gray-900 to-purple-900 py-20'>
        <div className='mx-auto max-w-6xl px-4'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold text-white md:text-5xl'>
              Contactez-nous
            </h1>
            <p className='mt-4 text-lg text-purple-100'>
              Notre équipe est là pour vous aider et répondre à toutes vos
              questions
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className='relative -mt-10'>
        <div className='mx-auto max-w-6xl px-4'>
          <div className='grid gap-8 md:grid-cols-3'>
            {/* Contact Cards */}
            {[
              {
                icon: <Phone className='h-6 w-6' />,
                title: 'Sales',
                desc: 'Notre équipe commerciale est disponible',
                contact: '+33 1 23 45 67 89',
                link: 'tel:+33123456789',
              },
              {
                icon: <Mail className='h-6 w-6' />,
                title: 'Support',
                desc: 'Support technique 24/7',
                contact: 'support@example.com',
                link: 'mailto:support@example.com',
              },
              {
                icon: <MapPin className='h-6 w-6' />,
                title: 'Bureau',
                desc: 'Venez nous rencontrer',
                contact: 'Paris, France',
                link: '#',
              },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className='group relative rounded-2xl bg-white p-8 shadow-xl transition-transform hover:-translate-y-1'
              >
                <div className='mb-4 inline-flex rounded-lg bg-purple-100 p-3 text-purple-600'>
                  {item.icon}
                </div>
                <h3 className='mb-2 text-xl font-semibold'>{item.title}</h3>
                <p className='mb-4 text-sm text-gray-500'>{item.desc}</p>
                <p className='font-medium text-gray-900'>{item.contact}</p>
              </Link>
            ))}
          </div>

          {/* Contact Form */}
          <div className='mt-12 rounded-2xl bg-white p-8 shadow-xl'>
            <form className='grid gap-6 md:grid-cols-2'>
              <div>
                <label className='mb-2 block text-sm font-medium text-gray-900'>
                  Nom complet
                </label>
                <input
                  type='text'
                  className='w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20'
                  placeholder='John Doe'
                />
              </div>
              <div>
                <label className='mb-2 block text-sm font-medium text-gray-900'>
                  Email
                </label>
                <input
                  type='email'
                  className='w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20'
                  placeholder='john@example.com'
                />
              </div>
              <div>
                <label className='mb-2 block text-sm font-medium text-gray-900'>
                  Sujet
                </label>
                <input
                  type='text'
                  className='w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20'
                  placeholder='Comment pouvons-nous vous aider ?'
                />
              </div>
              <div>
                <label className='mb-2 block text-sm font-medium text-gray-900'>
                  Téléphone
                </label>
                <input
                  type='tel'
                  className='w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20'
                  placeholder='+33 1 23 45 67 89'
                />
              </div>
              <div className='md:col-span-2'>
                <label className='mb-2 block text-sm font-medium text-gray-900'>
                  Message
                </label>
                <textarea
                  rows={6}
                  className='w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20'
                  placeholder='Votre message...'
                ></textarea>
              </div>
              <div className='md:col-span-2'>
                <button
                  type='submit'
                  className='rounded-lg bg-purple-600 px-8 py-3 text-white transition-colors hover:bg-purple-700'
                >
                  Envoyer le message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className='mt-20'>
        <div className='h-96 w-full bg-gray-200'>
          {/* Intégrer ici une carte Google Maps ou autre */}
          <iframe
            className='h-full w-full'
            frameBorder='0'
            scrolling='no'
            id='gmap_canvas'
            src='https://maps.google.com/maps?width=1920&amp;height=382&amp;hl=en&amp;q=Av.%20Gustave%20Eiffel%20Paris+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
          ></iframe>
          <Link href='http://mapswebsite.net/fr'> Google Maps</Link>
          <Script
            type='text/javascript'
            src='https://embedmaps.com/google-maps-authorization/script.js?id=1687256ab7ca4b10e1dbad7e26eca9463b3fe845'
          ></Script>
        </div>
      </section>
    </main>
  );
}
