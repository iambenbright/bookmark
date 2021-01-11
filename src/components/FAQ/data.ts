export interface IExpansion {
  id: number;
  summary: string;
  details: string;
}

export const data: IExpansion[] = [
  {
    id: 1,
    summary: 'What is Bookmark',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.',
  },
  {
    id: 2,
    summary: 'How can I request a new browser?',
    details:
      'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.',
  },
  {
    id: 3,
    summary: 'Is there a mobile app?',
    details:
      'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.',
  },
  {
    id: 4,
    summary: 'What about other Chromium browsers?',
    details:
      'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.',
  },
];
