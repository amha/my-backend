// src/globals/HomePage.ts
import type { GlobalConfig } from 'payload/types';

const HomePage: GlobalConfig = {
  slug: 'home-page', 
  label: 'Home Page',
  fields: [
    {
      name: 'heroSection',
      type: 'group',
      label: 'Hero Section',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Hero Title',
          required: true,
        },
        {
          name: 'subtitle',
          type: 'textarea',
          label: 'Hero Subtitle',
        },
        
      ],
    },
    
  ],
};

export default HomePage;