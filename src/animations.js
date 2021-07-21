export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.55,
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.55,
      },
    },
  },
};

export const fadeIn2 = {
  hidden: {
    opacity: 0,
  },
  show: {
    delay: 1,
    opacity: 1,
    transition: {
      duration: 0.7,
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.55,
      },
    },
  },
};

export const lineAnim = {
  hidden: { width: '0%' },
  show: {
    delay: 3000,
    width: '40%',
    transition: { duration: 1 },
  },
};

export const popup = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  },
};
