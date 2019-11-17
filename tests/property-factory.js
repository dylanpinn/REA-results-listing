import { build, fake, sequence } from 'test-data-bot';

const propertyBuilder = build('Property').fields({
  price: fake(f => f.commerce.price()),
  agency: {
    brandingColors: {
      primary: fake(f => f.internet.color())
    },
    logo: fake(f => f.image.imageUrl())
  },
  id: sequence(i => i.toString()),
  mainImage: fake(f => f.image.imageUrl())
});

export default propertyBuilder;
