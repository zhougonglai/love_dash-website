import { useToggle } from '@vueuse/core'

export const useAppHeader = () => {

  const [
    mobileMenuOpen,
    toggleOpen
  ] = useToggle()

  const navigation = [
    { name: '关于我们', href: '#' },
  ]

  return {
    navigation,

    toggleOpen,
    mobileMenuOpen,
  }
}
