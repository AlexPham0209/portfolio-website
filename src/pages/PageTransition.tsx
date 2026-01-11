export const Fade = {
  visible: { opacity: 1, transition: { when: "beforeChildren" }},
  hidden: { opacity: 0, transition: { when: "afterChildren" } }
}
