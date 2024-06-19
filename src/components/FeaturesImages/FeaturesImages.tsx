import { Image, Text, Container, ThemeIcon, Title, SimpleGrid } from '@mantine/core';
import IMAGES from './images';
import classes from './FeaturesImages.module.css';

const data = [
  {
    image: 'dictionary',
    title: 'Dictionary',
    description: 'Explore the meanings and definitions of words in BISINDO (Indonesian Sign Language).',
  },
  {
    image: 'translate',
    title: 'Translate',
    description: 'Convert text from one language to BISINDO (Indonesian Sign Language) instantly.',
  },
  {
    image: 'predict',
    title: 'Predict',
    description: 'Upload your image and get the predict result for BISINDO.',
  },
  {
    image: 'favorite',
    title: 'Favorite',
    description: 'Save and access your most loved BISINDO signs quickly and easily.',
  },
];


export function FeaturesImages() {
  const items = data.map((item) => (
    <div className={classes.item} key={item.image}>
      <ThemeIcon variant="light" className={classes.itemIcon} size={60} radius="md">
        <Image src={IMAGES[item.image]} />
      </ThemeIcon>

      <div>
        <Text fw={700} fz="lg" className={classes.itemTitle}>
          {item.title}
        </Text>
        <Text c="dimmed">{item.description}</Text>
      </div>
    </div>
  ));

  return (
    <Container size={700} className={classes.wrapper}>
      <Text className={classes.supTitle}>About Signnary!</Text>

      <Title className={classes.title} order={2}>
        Signnary is  <span className={classes.highlight}>not</span>  an ordinary dictionary
      </Title>

      <Container size={660} p={0}>
        <Text c="dimmed" className={classes.description}>
        Signnary Is an Indonesian sign language dictionary application that consists of various features, such as dictionaries,
        as well as alphabet prediction.
        </Text>
      </Container>

      <SimpleGrid cols={{ base: 1, xs: 2 }} spacing={50} mt={30}>
        {items}
      </SimpleGrid>
    </Container>
  );
}
