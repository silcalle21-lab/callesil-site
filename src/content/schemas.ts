import { z } from 'zod';
export const schemas = {
  home: z.object({
    "hero": z.object({
      "headline": z.string(),
      "subheadline": z.string(),
      "cta": z.string()
    }),
    "shopOurDesigns": z.object({
      "label": z.string(),
      "products": z.array(z.object({
        "id": z.string(),
        "name": z.string(),
        "image": z.string(),
        "etsyUrl": z.string()
      }))
    }),
    "featuredCollection": z.object({
      "label": z.string(),
      "products": z.array(z.object({
        "id": z.string(),
        "name": z.string(),
        "tag": z.string(),
        "price": z.string()
      }))
    }),
    "bestSellers": z.object({
      "label": z.string(),
      "products": z.array(z.object({
        "id": z.string(),
        "name": z.string(),
        "image": z.string(),
        "etsyUrl": z.string()
      }))
    }),
    "newArrivals": z.object({
      "label": z.string(),
      "headline": z.string(),
      "subtext": z.string(),
      "cta": z.string()
    }),
    "about": z.object({
      "label": z.string(),
      "headline": z.string(),
      "body": z.string(),
      "cta": z.string()
    }),
    "reviews": z.object({
      "label": z.string(),
      "items": z.array(z.object({
        "id": z.string(),
        "quote": z.string(),
        "author": z.string()
      }))
    }),
    "newsletter": z.object({
      "headline": z.string(),
      "subtext": z.string(),
      "placeholder": z.string(),
      "cta": z.string()
    }),
    "instagram": z.object({
      "label": z.string()
    })
  }),
  shop: z.object({
    "hero": z.object({
      "label": z.string(),
      "headline": z.string(),
      "subheadline": z.string()
    }),
    "filters": z.array(z.string()),
    "products": z.array(z.object({
      "id": z.string(),
      "name": z.string(),
      "category": z.string(),
      "price": z.string(),
      "tag": z.string(),
      "description": z.string(),
      "sizes": z.array(z.string())
    })),
    "cta": z.object({
      "headline": z.string(),
      "subtext": z.string(),
      "button": z.string()
    })
  }),
  about: z.object({
    "hero": z.object({
      "label": z.string(),
      "headline": z.string(),
      "subheadline": z.string()
    }),
    "story": z.object({
      "eyebrow": z.string(),
      "heading": z.string(),
      "paragraphs": z.array(z.string())
    }),
    "values": z.array(z.object({
      "id": z.string(),
      "title": z.string(),
      "description": z.string()
    })),
    "manifesto": z.object({
      "eyebrow": z.string(),
      "quote": z.string(),
      "body": z.string()
    }),
    "cta": z.object({
      "heading": z.string(),
      "subtext": z.string(),
      "button": z.string()
    })
  }),
  contact: z.object({
    "hero": z.object({
      "label": z.string(),
      "headline": z.string(),
      "subheadline": z.string()
    }),
    "form": z.object({
      "heading": z.string(),
      "subtext": z.string(),
      "topicLabel": z.string(),
      "topics": z.array(z.string()),
      "namePlaceholder": z.string(),
      "emailPlaceholder": z.string(),
      "messagePlaceholder": z.string(),
      "submitButton": z.string(),
      "successHeading": z.string(),
      "successBody": z.string()
    }),
    "faq": z.object({
      "heading": z.string(),
      "items": z.array(z.object({
        "id": z.string(),
        "question": z.string(),
        "answer": z.string()
      }))
    }),
    "shipping": z.object({
      "heading": z.string(),
      "items": z.array(z.object({
        "id": z.string(),
        "title": z.string(),
        "detail": z.string()
      }))
    })
  }),
  collections: z.object({
    "hero": z.object({
      "label": z.string(),
      "headline": z.string(),
      "subheadline": z.string()
    }),
    "collections": z.array(z.object({
      "id": z.string(),
      "slug": z.string(),
      "name": z.string(),
      "tagline": z.string(),
      "description": z.string(),
      "details": z.array(z.string()),
      "badge": z.string(),
      "available": z.boolean()
    })),
    "cta": z.object({
      "heading": z.string(),
      "subtext": z.string(),
      "button": z.string()
    })
  }),
  products: z.array(z.object({
    "id": z.string(),
    "slug": z.string(),
    "name": z.string(),
    "category": z.string(),
    "price": z.string(),
    "tag": z.string(),
    "shortDescription": z.string(),
    "description": z.string(),
    "details": z.array(z.string()),
    "sizes": z.array(z.string()),
    "fit": z.string(),
    "shipping": z.string(),
    "etsyUrl": z.string(),
    "reviews": z.array(z.object({
      "id": z.string(),
      "author": z.string(),
      "rating": z.number(),
      "text": z.string(),
      "date": z.string()
    }))
  }))
};
export type Schemas = typeof schemas;