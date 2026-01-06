import type {Variants} from 'framer-motion'

export const sectionReveal: Variants = {
  hidden: {opacity: 0, y: 30},
  show: {
    opacity: 1,
    y: 0,
    transition: {duration: 0.5, ease: 'easeOut'},
  },
}

export const staggerChildren: Variants = {
  hidden: {opacity: 1},
  show: {
    opacity: 1,
    transition: {staggerChildren: 0.08, delayChildren: 0.05},
  },
}

export const itemFade: Variants = {
  hidden: {opacity: 0, y: 12},
  show: {
    opacity: 1,
    y: 0,
    transition: {duration: 0.4, ease: 'easeOut'},
  },
}
