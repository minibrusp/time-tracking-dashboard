

export const numberAnimation = (elem, value) => {
   gsap.to(elem, {
      textContent: value,
      duration: 1.5,
      ease: Power1.easeIn,
      snap: { textContent: 1 },
      stagger: 1,
      delay: .5,
   })
}

export const numberAnimationZero = (elem) => {
   gsap.from(elem, {
      textContent: 0,
      duration: 1,
      ease: Power1.easeIn,
      snap: { textContent: 1 },
      stagger: 1,
      delay: .5,
   })
}

export const wordAnimation = (elem, text) => {
   gsap.to(elem, {
      duration: 1.5,
      text: {
         value: text,
      },
      ease: "power2",
      delay: .5,
   });
}

export const flipCardAnimation = (elem) => {
   gsap.to(elem, {
      duration: .5,
      rotateX: "90deg",
      ease: "power",
      yoyo: true,
      repeat: true
   })
}