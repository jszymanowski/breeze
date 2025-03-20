# Breeze React

## Roadmap

### Upcoming (pre-1.0.0)

1. Clean up stories:
   - [ ] Refactor example displays, e.g. background color + border, particularly in `Box` stories
   - [ ] `Box` examples => Composition, merge with attribute stories, or remove
   - [ ] Use defined attributes in Composition examples
1. Reconsider defaults
   - [ ] `Text`: should default apply a color?  Or should an `inherit` option be added?
         - probably add `inherit`, as dark mode without a default text color essentially breaks (black text on dark background)
1. Write documentation

### Later (post-1.0.0)

1. Add subcomponents, to support nested CSS styles:
   - [ ] `Flex.Item`, to support [child classes like `flex-1`](https://tailwindcss.com/docs/flex#basic-example)
   - [ ] `Grid.Item`
1. Add responsive options to `Flex` and `Grid`
1. Add more options, from Tailwind, for all components:
   - [ ] stretch
   - [ ] numeric variants
   - [ ] box stuff
   - [ ] ...etc

### Long-term

1. Add Svelte version
