import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className='mx-auto flex max-w-6xl items-center justify-center px-4'>
      <div className='relative w-full max-w-md'>
        <SignIn
          appearance={{
            variables: {
              colorPrimary: '#7c3aed',
              colorText: '#1f2937',
              colorTextSecondary: '#4b5563',
              colorBackground: '#ffffff',
              colorInputBackground: '#f9fafb',
              colorInputText: '#1f2937',
              borderRadius: '0.5rem',
            },
            elements: {
              formButtonPrimary:
                'bg-purple-600 hover:bg-purple-700 text-white rounded-lg',
              card: 'bg-white shadow-none',
              headerTitle: 'text-2xl font-bold text-gray-900',
              headerSubtitle: 'text-gray-600',
              socialButtonsBlockButton:
                'border border-gray-300 hover:border-gray-400 rounded-lg',
              socialButtonsBlockButtonText: 'text-gray-600 font-medium',
              dividerLine: 'bg-gray-200',
              dividerText: 'text-gray-500',
              formFieldLabel: 'text-gray-700',
              formFieldInput:
                'rounded-lg border-gray-300 focus:ring-purple-500 focus:border-purple-500',
              footerActionLink: 'text-purple-600 hover:text-purple-700',
              identityPreviewText: 'text-gray-600',
              identityPreviewEditButton:
                'text-purple-600 hover:text-purple-700',
            },
            layout: {
              socialButtonsPlacement: 'top',
              socialButtonsVariant: 'blockButton',
              privacyPageUrl: '/privacy',
              termsPageUrl: '/terms',
            },
          }}
        />
      </div>
    </div>
  );
}
