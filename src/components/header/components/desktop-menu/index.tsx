import Link from 'next/link'

import { useRouter } from 'next/router'
import { DollarSign, Home, LogOut, Settings, Award } from 'react-feather'

interface DesktopMenuProps {
  backgroundStartTransparent?: boolean
  handleSignOut: (isMobile?: boolean) => void
  userIsProducer: boolean
  scrolling?: boolean
  homeLink: string
}

export const DesktopMenu = ({
  backgroundStartTransparent,
  handleSignOut,
  userIsProducer,
  scrolling,
  homeLink,
}: DesktopMenuProps) => {
  const { pathname } = useRouter()

  return (
    <ul className="hidden sm:flex flex-row justify-center mx-auto h-full">
      <li>
        <Link
          href={homeLink}
          aria-label="Página inicial"
          className={`text-lg flex items-center justify-center p-4 text-white border-b-[3px] ${
            pathname.includes('owner') || pathname.includes('sweepstakes')
              ? 'border-white active'
              : 'border-none'
          } h-full ${
            backgroundStartTransparent
              ? scrolling
                ? 'border-white active'
                : 'border-none'
              : 'border-white active'
          }`}
          aria-current="page"
        >
          <Home
            size={24}
            color="#fff"
            className={`hover:opacity-100 hover:transition duration-300
              ${
                pathname.includes('owner') || pathname.includes('sweepstakes')
                  ? ''
                  : 'opacity-50'
              }
            `}
          />
        </Link>
      </li>

      {userIsProducer && (
        <li>
          <Link
            href="/payment"
            aria-label="Página de pagamento"
            className={`text-lg flex items-center justify-center p-4 border-b-[3px] ${
              pathname === '/payment'
                ? 'border-white active'
                : 'border-transparent'
            } h-full`}
          >
            <DollarSign
              size={24}
              color="#fff"
              className={
                !pathname.includes('payment')
                  ? 'opacity-50 hover:opacity-100 hover:transition duration-300'
                  : ''
              }
            />
          </Link>
        </li>
      )}

      <li>
        <Link
          href="/profile"
          aria-label="Página de perfil"
          className={`text-lg flex items-center justify-center p-4 border-b-[3px] ${
            pathname === '/profile'
              ? 'border-white active'
              : 'border-transparent'
          } h-full`}
        >
          <Award
            size={24}
            color="#fff"
            className={
              !pathname.includes('profile')
                ? 'opacity-50 hover:opacity-100 hover:transition duration-300'
                : ''
            }
          />
        </Link>
      </li>

      <li>
        <Link
          href="/settings"
          aria-label="Página de configurações"
          className={`text-lg flex items-center justify-center p-4 border-b-[3px] ${
            pathname === '/settings'
              ? 'border-white active'
              : 'border-transparent'
          } h-full`}
        >
          <Settings
            size={24}
            color="#fff"
            className={
              !pathname.includes('settings')
                ? 'opacity-50 hover:opacity-100 hover:transition duration-300'
                : ''
            }
          />
        </Link>
      </li>

      <li>
        <button
          onClick={() => handleSignOut()}
          aria-label="Botão sair"
          className="text-lg flex items-center justify-center p-4 pr-0 border-transparent h-full"
        >
          <LogOut
            size={24}
            color="#fff"
            className="opacity-50 hover:opacity-100 hover:transition duration-300"
          />
        </button>
      </li>
    </ul>
  )
}
