interface IFeature {
  id: number;
  title: string;
  body: string;
}

export const data: IFeature[] = [
  {
    id: 1,
    title: 'Bookmark in one click',
    body:
      'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
  },
  {
    id: 2,
    title: 'Intelligent search',
    body:
      'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
  },
  {
    id: 3,
    title: 'Share your bookmarks',
    body:
      'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
  },
];
