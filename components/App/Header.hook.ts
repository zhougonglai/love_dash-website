import { useToggle } from '@vueuse/core'

export const useAppHeader = () => {

  const [
    mobileMenuOpen,
    toggleOpen
  ] = useToggle()

  const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
  ]

  return {
    navigation,

    toggleOpen,
    mobileMenuOpen,
  }
}
