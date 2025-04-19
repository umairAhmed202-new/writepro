export default [
  // Blog
  {
      name: 'Blog Title',
      desc: 'An AI tool that generates blog titles based on your blog information.',
      category: 'Blog',
      icon: 'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
      aiPrompt: 'Generate 5 creative blog title ideas in bullet points based on the provided niche and outline.',
      slug: 'generate-blog-title',
      form: [
          {
              label: 'Enter your blog niche',
              field: 'input',
              name: 'niche',
              required: true
          },
          {
              label: 'Enter blog outline',
              field: 'textarea',
              name: 'outline'
          }
      ]
  },
  {
      name: 'Blog Content',
      desc: 'An AI tool that serves as your personal blog post content generator, producing engaging content based on your input.',
      category: 'Blog',
      icon: 'https://cdn-icons-png.flaticon.com/128/4905/4905454.png',
      slug: 'blog-content-generation',
      aiPrompt: 'Create a detailed blog post content based on the given topic and outline.',
      form: [
          {
              label: 'Enter your blog topic',
              field: 'input',
              name: 'topic',
              required: true
          },
          {
              label: 'Enter blog Outline here',
              field: 'textarea',
              name: 'outline'
          }
      ]
  },
  {
      name: 'Blog Topic Ideas',
      desc: 'An AI tool that provides creative blog topic ideas in a concise bullet list.',
      category: 'Blog',
      icon: 'https://cdn-icons-png.flaticon.com/128/11497/11497847.png',
      slug: 'blog-topic-idea',
      aiPrompt: 'Provide 5 distinct blog topic ideas in bullet points based on the provided niche. ',
      form: [
          {
              label: 'Enter your Niche',
              field: 'input',
              name: 'niche',
              required: true
          }
      ]
  },
  {
    name: 'Blog Tags Generator',
    desc: 'Generate keyword-rich tags for your blog post.',
    category: 'Blog',
    icon: 'https://cdn-icons-png.flaticon.com/128/1728/1728563.png',
    slug: 'blog-tags-generator',
    aiPrompt: 'Generate a list of relevant blog tags based on the blog topic and content.',
    form: [
        { label: 'Enter your blog topic', field: 'input', name: 'topic', required: true },
        { label: 'Enter blog content or summary', field: 'textarea', name: 'content' }
    ]
},
{
  name: 'Blog Summary Generator',
  desc: 'Generate quick summaries for your posts.',
  category: 'Blog',
  icon: 'https://cdn-icons-png.flaticon.com/128/12492/12492411.png',
  slug: 'blog-summary-generator',
  aiPrompt: 'Summarize the blog post content into a short and engaging summary.',
  form: [
      { label: 'Enter your blog title', field: 'input', name: 'title', required: true },
      { label: 'Enter full blog content', field: 'textarea', name: 'content' }
  ]
},
  {
    name: 'Blog Conclusion Writer',
    desc: 'Craft strong closing paragraphs for your blog.',
    category: 'Blog',
    icon: 'https://cdn-icons-png.flaticon.com/128/6104/6104865.png',
    slug: 'blog-conclusion-writer',
    aiPrompt: 'Generate a strong conclusion paragraph for a blog based on the given topic and outline.',
    form: [
        { label: 'Enter your blog topic', field: 'input', name: 'topic', required: true },
        { label: 'Enter your blog outline or summary', field: 'textarea', name: 'outline' }
    ]
},
{
  name: 'Paragraph Expander',
  desc: 'Expand short blog sections into detailed paragraphs.',
  category: 'Blog',
  icon: 'https://cdn-icons-png.flaticon.com/128/4047/4047588.png',
  slug: 'paragraph-expander',
  aiPrompt: 'Expand the following paragraph into a more detailed and informative version.',
  form: [
      { label: 'Enter your short paragraph', field: 'textarea', name: 'paragraph', required: true }
  ]
},
{
  name: 'Sentence Rewriter',
  desc: 'Rephrase sentences to sound more engaging or professional.',
  category: 'Blog',
  icon: 'https://cdn-icons-png.flaticon.com/128/14175/14175102.png',
  slug: 'sentence-rewriter',
  aiPrompt: 'Rewrite the given sentence in a more engaging and clear way.',
  form: [
      { label: 'Enter the sentence to rewrite', field: 'input', name: 'sentence', required: true }
  ]
},
{
  name: 'Tone Adjuster',
  desc: 'Change the tone of your blog content (e.g., professional, friendly, casual).',
  category: 'Blog',
  icon: 'https://cdn-icons-png.flaticon.com/128/12606/12606313.png',
  slug: 'tone-adjuster',
  aiPrompt: 'Adjust the tone of the following blog content to the desired style.',
  form: [
      { label: 'Enter your content', field: 'textarea', name: 'content', required: true },
      { label: 'Desired tone (e.g., casual, formal)', field: 'input', name: 'tone' }
  ]
},
{
  name: 'Content Structure Optimizer',
  desc: 'Improve blog outlines and section flow.',
  category: 'Blog',
  icon: 'https://cdn-icons-png.flaticon.com/128/9422/9422863.png',
  slug: 'content-structure-optimizer',
  aiPrompt: 'Optimize the structure of this blog outline for flow and readability.',
  form: [
      { label: 'Enter your blog outline', field: 'textarea', name: 'outline', required: true }
  ]
},
{
  name: 'Old Blog Post Refresher',
  desc: 'Update outdated posts with modern angles and SEO.',
  category: 'Blog',
  icon: 'https://cdn-icons-png.flaticon.com/128/3043/3043508.png',
  slug: 'old-blog-refresher',
  aiPrompt: 'Suggest ways to refresh and update the following old blog content.',
  form: [
      { label: 'Paste old blog content or summary', field: 'textarea', name: 'oldContent', required: true }
  ]
},
{
  name: 'Blog-to-Tweet Thread',
  desc: 'Convert blogs into tweet threads for promotion.',
  category: 'Blog',
  icon: 'https://cdn-icons-png.flaticon.com/128/2518/2518173.png',
  slug: 'blog-to-tweet-thread',
  aiPrompt: 'Convert this blog post into a 5–10 tweet Twitter thread.',
  form: [
      { label: 'Enter blog title', field: 'input', name: 'title', required: true },
      { label: 'Enter blog content', field: 'textarea', name: 'content' }
  ]
},
{
  name: 'Blog-to-Video Script',
  desc: 'Turn a blog post into a short video script.',
  category: 'Blog',
  icon: 'https://cdn-icons-png.flaticon.com/128/6348/6348571.png',
  slug: 'blog-to-video-script',
  aiPrompt: 'Create a short video script (60–90 seconds) from the blog content.',
  form: [
      { label: 'Enter your blog title', field: 'input', name: 'title', required: true },
      { label: 'Paste your blog content or key points', field: 'textarea', name: 'content' }
  ]
},
{
  name: 'Content Repurposer',
  desc: 'Convert a blog into formats like emails, LinkedIn posts, or scripts.',
  category: 'Blog',
  icon: 'https://cdn-icons-png.flaticon.com/128/13284/13284005.png',
  slug: 'content-repurposer',
  aiPrompt: 'Repurpose this blog into another content format (e.g., email, LinkedIn, script).',
  form: [
      { label: 'Enter your blog content', field: 'textarea', name: 'content', required: true },
      { label: 'Enter target format (email, LinkedIn post, etc.)', field: 'input', name: 'format' }
  ]
},

  // YouTube Tools
  {
      name: 'Youtube SEO Title',
      desc: 'An AI tool that generates SEO-optimized YouTube title ideas to boost video performance.',
      category: 'YouTube Tools',
      icon: 'https://cdn-icons-png.flaticon.com/128/402/402075.png',
      slug: 'youtube-seo-title',
      aiPrompt: 'Generate 5 SEO-optimized YouTube title ideas in bullet point format based on the provided keywords and outline. Format the output using HTML tags.',
      form: [
          {
              label: 'Enter your youtube video topic keyowords',
              field: 'input',
              name: 'keywords',
              required: true
          },
          {
              label: 'Enter youtube description Outline here',
              field: 'textarea',
              name: 'outline'
          }
      ]
  },
  {
      name: 'Youtube Description',
      desc: 'An AI tool that generates concise and engaging YouTube video descriptions.',
      category: 'YouTube Tools',
      icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111748.png',
      slug: 'youtube-description',
      aiPrompt: 'Produce a concise YouTube video description (4-5 lines) with relevant emojis, based on the provided topic and outline. ',
      form: [
          {
              label: 'Enter your blog topic/title',
              field: 'input',
              name: 'topic',
              required: true
          },
          {
              label: 'Enter youtube Outline here',
              field: 'textarea',
              name: 'outline'
          }
      ]
  },
  {
      name: 'Youtube Tags',
      desc: 'An AI tool that generates relevant YouTube tags to improve video discoverability.',
      category: 'YouTube Tools',
      icon: 'https://cdn-icons-png.flaticon.com/128/4674/4674918.png',
      slug: 'youtube-tag',
      aiPrompt: 'Generate 10 relevant YouTube tags in bullet point format based on the provided title and outline. ',
      form: [
          {
              label: 'Enter your youtube title',
              field: 'input',
              name: 'title',
              required: true
          },
          {
              label: 'Enter youtube video Outline here (Optional)',
              field: 'textarea',
              name: 'outline'
          }
      ]
  },

  // Social Media
  {
      name: 'Instagram Post Generator',
      desc: 'An AI tool that generates creative Instagram post ideas to boost engagement.',
      category: 'Social Media',
      icon: 'https://cdn-icons-png.flaticon.com/128/15713/15713420.png',
      slug: 'instagram-post-generator',
      aiPrompt: 'Generate 3 creative Instagram post ideas based on the provided keywords. ',
      form: [
          {
              label: 'Enter Keywords for your post',
              field: 'input',
              name: 'keywords',
              required: true
          }
      ]
  },
  {
      name: 'Instagram Hash Tag Generator',
      desc: 'An AI tool that produces relevant Instagram hashtags to increase post visibility.',
      category: 'Social Media',
      icon: 'https://cdn-icons-png.flaticon.com/128/7045/7045432.png',
      slug: 'instagram-hash-tag-generator',
      aiPrompt: 'Generate 15 relevant Instagram hashtags based on the provided keywords. ',
      form: [
          {
              label: 'Enter Keywords for your instagram hastag',
              field: 'input',
              name: 'keywords',
              required: true
          }
      ]
  },
  {
      name: 'LinkedIn Post Generator',
      desc: 'AI-powered tool to create professional LinkedIn posts that engage your network',
      category: 'Social Media',
      icon: 'https://cdn-icons-png.flaticon.com/128/3536/3536505.png',
      slug: 'linkedin-post-generator',
      aiPrompt: 'Generate 3 LinkedIn post ideas with professional tone based on topic ',
      form: [
          {
              label: 'Enter post topic/keywords',
              field: 'input',
              name: 'topic',
              required: true
          }
      ]
  },
  {
      name: 'TikTok Video Ideas',
      desc: 'Generate viral TikTok video concepts based on your niche',
      category: 'Social Media',
      icon: 'https://cdn-icons-png.flaticon.com/128/3046/3046121.png',
      slug: 'tiktok-ideas',
      aiPrompt: 'Suggest 10 TikTok video ideas with trending concepts for [niche]',
      form: [
          {
              label: 'Your niche/content theme',
              field: 'input',
              name: 'niche',
              required: true
          }
      ]
  },
  {
      name: 'Social Media Bio',
      desc: 'Create engaging bios for Instagram, Twitter, TikTok profiles',
      category: 'Social Media',
      icon: 'https://cdn-icons-png.flaticon.com/128/4712/4712924.png',
      slug: 'social-bio',
      aiPrompt: 'Write 3 compelling social media bios for a [profession] professional focusing on [key skills]',
      form: [
          {
              label: 'Your profession/role',
              field: 'input',
              name: 'profession',
              required: true
          },
          {
              label: 'Key skills/accomplishments',
              field: 'textarea',
              name: 'skills'
          }
      ]
  },
  {
      name: 'LinkedIn Carousel Post',
      desc: 'Generate ideas for LinkedIn carousel content with engaging slides',
      category: 'Social Media',
      icon: 'https://cdn-icons-png.flaticon.com/128/3536/3536505.png',
      slug: 'linkedin-carousel',
      aiPrompt: 'Create outline for 5-slide LinkedIn carousel about [topic] with key points for each slide',
      form: [
          {
              label: 'Carousel Topic',
              field: 'input',
              name: 'topic',
              required: true
          }
      ]
  },
  {
      name: 'Instagram Reels Script',
      desc: 'Create engaging scripts for Instagram Reels videos',
      category: 'Social Media',
      icon: 'https://cdn-icons-png.flaticon.com/128/12595/12595897.png',
      slug: 'reels-script',
      aiPrompt: 'Write 30-second Instagram Reels script about [topic] with hook, main content, and CTA',
      form: [
          {
              label: 'Reel Topic',
              field: 'input',
              name: 'topic',
              required: true
          }
      ]
  },
  {
      name: 'Pinterest Pin Description',
      desc: 'Generate SEO-optimized descriptions for Pinterest pins',
      category: 'Social Media',
      icon: 'https://cdn-icons-png.flaticon.com/128/11389/11389502.png',
      slug: 'pinterest-description',
      aiPrompt: 'Write 3 Pinterest pin descriptions for [image subject] with relevant keywords',
      form: [
          {
              label: 'Pin Image Subject',
              field: 'input',
              name: 'subject',
              required: true
          }
      ]
  },
  {
      name: 'Twitter Thread Generator',
      desc: 'Create viral Twitter threads with engaging structure',
      category: 'Social Media',
      icon: 'https://cdn-icons-png.flaticon.com/128/733/733579.png',
      slug: 'twitter-thread',
      aiPrompt: 'Generate 5-tweet thread about [topic] with numbered points and conclusion',
      form: [
          {
              label: 'Thread Topic',
              field: 'input',
              name: 'topic',
              required: true
          }
      ]
  },
  {
      name: 'Facebook Group Post',
      desc: 'Create engaging posts for Facebook groups',
      category: 'Social Media',
      icon: 'https://cdn-icons-png.flaticon.com/128/124/124010.png',
      slug: 'fb-group-post',
      aiPrompt: 'Write 3 Facebook group post ideas for [niche] community to spark discussion',
      form: [
          {
              label: 'Group Niche',
              field: 'input',
              name: 'niche',
              required: true
          }
      ]
  },
   // SEO Tools
   {
    name: 'Meta Description',
    desc: 'Generate SEO-optimized meta descriptions for web pages',
    category: 'SEO Tools',
    icon: 'https://cdn-icons-png.flaticon.com/128/17930/17930129.png',
    slug: 'meta-description',
    aiPrompt: 'Create 3 meta descriptions (under 160 chars) based on page content',
    form: [
        {
            label: 'Page content/keywords',
            field: 'textarea',
            name: 'content',
            required: true
        }
    ]
},
{
    name: 'SEO Meta Tags',
    desc: 'Generate complete SEO meta tags for web pages',
    category: 'SEO',
    icon: 'https://cdn-icons-png.flaticon.com/128/1055/1055687.png',
    slug: 'meta-tags',
    aiPrompt: 'Create SEO meta title, description and keywords for page about [topic]',
    form: [
        {
            label: 'Page Topic',
            field: 'input',
            name: 'topic',
            required: true
        }
    ]
},
{
    name: 'Schema Markup Generator',
    desc: 'Create JSON-LD schema markup for websites',
    category: 'SEO',
    icon: 'https://cdn-icons-png.flaticon.com/128/2721/2721620.png',
    slug: 'schema-markup',
    aiPrompt: 'Generate JSON-LD schema markup for [business type] with relevant properties',
    form: [
        {
            label: 'Business Type',
            field: 'input',
            name: 'businessType',
            required: true
        }
    ]
},
{
    name: 'SEO Content Brief',
    desc: 'Generate comprehensive content briefs for SEO articles',
    category: 'SEO',
    icon: 'https://cdn-icons-png.flaticon.com/128/3579/3579143.png',
    slug: 'content-brief',
    aiPrompt: 'Create SEO content brief for article about [topic] with target keywords and outline',
    form: [
        {
            label: 'Article Topic',
            field: 'input',
            name: 'topic',
            required: true
        }
    ]
},
{
    name: 'Local SEO Business Description',
    desc: 'Create optimized business descriptions for local SEO',
    category: 'SEO',
    icon: 'https://cdn-icons-png.flaticon.com/128/15954/15954737.png',
    slug: 'local-seo-description',
    aiPrompt: 'Write 3 local SEO-optimized business descriptions for [business type] in [location]',
    form: [
        {
            label: 'Business Type',
            field: 'input',
            name: 'businessType',
            required: true
        }
    ]
},
{
    name: 'Backlink Outreach Email',
    desc: 'Generate personalized emails for backlink outreach',
    category: 'SEO',
    icon: 'https://cdn-icons-png.flaticon.com/128/726/726623.png',
    slug: 'backlink-email',
    aiPrompt: 'Write 3 personalized backlink outreach email templates for [website]',
    form: [
        {
            label: 'Your Website',
            field: 'input',
            name: 'website',
            required: true
        }
    ]
},

  // Writing Assistant
  {
      name: 'Text Improver',
      desc: 'This tool refines your writing by correcting errors and enhancing clarity and tone.',
      category: 'Writing Assistant',
      icon: 'https://cdn-icons-png.flaticon.com/128/1686/1686815.png',
      slug: 'text-improver',
      aiPrompt: 'Enhance the provided text by correcting grammar and improving clarity. ',
      form: [
          {
              label: 'Enter text that you want to re-write or improve',
              field: 'textarea',
              name: 'textToImprove'
          }
      ]
  },
  {
      name: 'Add Emojis to Text',
      desc: 'An AI tool that creatively enhances your text by adding relevant emojis.',
      category: 'Writing Assistant',
      icon: 'https://cdn-icons-png.flaticon.com/128/2584/2584606.png',
      slug: 'add-emoji-to-text',
      aiPrompt: 'Enhance the provided text by adding creative and relevant emojis.',
      form: [
          {
              label: 'Enter your text to add emojis',
              field: 'textarea',
              name: 'outline',
              required: true
          }
      ]
  },
  {
      name: 'English Grammar Check',
      desc: 'AI Model to correct your English grammar and improve sentence structure.',
      category: 'Writing Assistant',
      icon: 'https://cdn-icons-png.flaticon.com/128/12596/12596700.png',
      slug: 'english-grammer-checker',
      aiPrompt: 'Correct the grammatical errors in the provided text and rewrite it for improved clarity.',
      form: [
          {
              label: 'Enter text to correct the grammer',
              field: 'input',
              name: 'inputText',
              required: true
          }
      ]
  },
  // Rewriting Tool
  {
    name: 'Rewrite Article (Plagiarism Free)',
    desc: 'Use this tool to rewrite an article or blog post to ensure it is plagiarism-free and bypass AI detectors.',
    category: 'Rewriting Tool',
    icon: 'https://cdn-icons-png.flaticon.com/128/3131/3131607.png',
    slug: 'rewrite-article',
    aiPrompt: 'Rewrite the provided article or blog post to ensure it is plagiarism-free while preserving its meaning and tone.',
    form: [
        {
            label: '🤖 Provide your Article/Blogpost or any other content to rewrite.',
            field: 'textarea',
            name: 'article',
            required: true
        }
    ]
},

  // Coding
  {
      name: 'Write Code',
      desc: 'AI Model to generate programming code in any language based on your description.',
      category: 'Coding',
      icon: 'https://cdn-icons-png.flaticon.com/128/6062/6062646.png',
      slug: 'write-code',
      aiPrompt: 'Based on the user\'s description, generate the corresponding programming code.',
      form: [
          {
              label: 'Enter description of code you want along with Programming Lang',
              field: 'textarea',
              name: 'codeDesscripton',
              required: true
          }
      ]
  },
  {
      name: 'Explain Code',
      desc: 'AI Model to provide a detailed, step-by-step explanation of programming code.',
      category: 'Coding',
      icon: 'https://cdn-icons-png.flaticon.com/128/8488/8488751.png',
      slug: 'explain-code',
      aiPrompt: 'Provide a line-by-line explanation of the provided code, clarifying the purpose and function of each segment.',
      form: [
          {
              label: 'Enter code which you want to understand',
              field: 'textarea',
              name: 'codeDesscripton',
              required: true
          }
      ]
  },
  {
      name: 'API Documentation',
      desc: 'Generate clear API documentation for developers',
      category: 'Coding',
      icon: 'https://cdn-icons-png.flaticon.com/128/6213/6213731.png',
      slug: 'api-docs',
      aiPrompt: 'Create API documentation for [endpoint] with parameters, examples, and responses',
      form: [
          {
              label: 'API Endpoint',
              field: 'input',
              name: 'endpoint',
              required: true
          },
          {
              label: 'Key Parameters',
              field: 'textarea',
              name: 'parameters'
          }
      ]
  },
  {
      name: 'SQL Query Generator',
      desc: 'Create SQL queries based on your requirements',
      category: 'Coding',
      icon: 'https://cdn-icons-png.flaticon.com/128/2772/2772128.png',
      slug: 'sql-generator',
      aiPrompt: 'Generate a SQL query to [action] from [table] with [conditions]',
      form: [
          {
              label: 'What you need to do',
              field: 'input',
              name: 'action',
              required: true
          },
          {
              label: 'Table Structure',
              field: 'textarea',
              name: 'tables'
          }
      ]
  },
  {
      name: 'Error Message Explanation',
      desc: 'Explain technical error messages in simple terms',
      category: 'Coding',
      icon: 'https://cdn-icons-png.flaticon.com/128/753/753345.png',
      slug: 'error-explainer',
      aiPrompt: 'Explain the error [message] and suggest 3 solutions',
      form: [
          {
              label: 'Error Message',
              field: 'textarea',
              name: 'message',
              required: true
          }
      ]
  },
  {
      name: 'JavaScript Code Debugger',
      desc: 'Help debug and explain JavaScript code errors',
      category: 'Programming',
      icon: 'https://cdn-icons-png.flaticon.com/128/721/721671.png',
      slug: 'debug-js',
      aiPrompt: 'Analyze this JavaScript code and suggest fixes for any errors: [code]',
      form: [
          {
              label: 'Paste JavaScript Code',
              field: 'textarea',
              name: 'code',
              required: true
          }
      ]
  },
  {
      name: 'Python Script Generator',
      desc: 'Generate Python scripts for automation tasks',
      category: 'Programming',
      icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968350.png',
      slug: 'python-script',
      aiPrompt: 'Write Python script to [task] with comments explaining each section',
      form: [
          {
              label: 'Task Description',
              field: 'input',
              name: 'task',
              required: true
          }
      ]
  },
  {
      name: 'API Integration Guide',
      desc: 'Create step-by-step API integration guides',
      category: 'Programming',
      icon: 'https://cdn-icons-png.flaticon.com/128/6213/6213731.png',
      slug: 'api-guide',
      aiPrompt: 'Write guide for integrating [API] with [platform] including code samples',
      form: [
          {
              label: 'API Name',
              field: 'input',
              name: 'api',
              required: true
          }
      ]
  },
  {
      name: 'Git Command Helper',
      desc: 'Generate Git commands for version control tasks',
      category: 'Programming',
      icon: 'https://cdn-icons-png.flaticon.com/128/6577/6577287.png',
      slug: 'git-commands',
      aiPrompt: 'Provide Git commands to [action] with explanations for each flag',
      form: [
          {
              label: 'What you need to do',
              field: 'input',
              name: 'action',
              required: true
          }
      ]
  },
  {
      name: 'Regular Expression Generator',
      desc: 'Create regex patterns for text processing',
      category: 'Programming',
      icon: 'https://cdn-icons-png.flaticon.com/128/2721/2721287.png',
      slug: 'regex-generator',
      aiPrompt: 'Generate regex pattern to [purpose] with explanation of each component',
      form: [
          {
              label: 'Pattern Purpose',
              field: 'input',
              name: 'purpose',
              required: true
          }
      ]
  },

  // Marketing
  {
      name: 'Email Subject Line',
      desc: 'Generate attention-grabbing email subject lines to improve open rates',
      category: 'Marketing',
      icon: 'https://cdn-icons-png.flaticon.com/128/14699/14699174.png',
      slug: 'email-subject-line',
      aiPrompt: 'Create 7 compelling email subject lines based on purpose ',
      form: [
          {
              label: 'Email purpose/content',
              field: 'textarea',
              name: 'purpose',
              required: true
          }
      ]
  },
  {
      name: 'Ad Copy Generator',
      desc: 'Create persuasive ad copies for social media and Google Ads',
      category: 'Marketing',
      icon: 'https://cdn-icons-png.flaticon.com/128/15139/15139461.png',
      slug: 'ad-copy-generator',
      aiPrompt: 'Generate 3 ad variations based on product details ',
      form: [
          {
              label: 'Product/service details',
              field: 'textarea',
              name: 'details',
              required: true
          }
      ]
  },
  {
      name: 'Cold Email',
      desc: 'Generate professional cold email templates for outreach',
      category: 'Marketing',
      icon: 'https://cdn-icons-png.flaticon.com/128/3829/3829119.png',
      slug: 'cold-email',
      aiPrompt: 'Create 3 cold email templates based on purpose ',
      form: [
          {
              label: 'Email purpose/context',
              field: 'textarea',
              name: 'purpose',
              required: true
          }
      ]
  },
  {
      name: 'Facebook Ad Copy Generator',
      desc: 'Generate high-converting Facebook ad copies for your marketing campaigns.',
      category: 'Marketing',
      icon: 'https://cdn-icons-png.flaticon.com/128/2504/2504903.png',
      slug: 'facebook-ad-copy',
      aiPrompt: 'Create 3 Facebook ad copy variations (50-60 words each) based on the product description.',
      form: [
          {
              label: 'Product/Service Name',
              field: 'input',
              name: 'product',
              required: true
          },
          {
              label: 'Key Features/Benefits',
              field: 'textarea',
              name: 'features'
          }
      ]
  },
  {
      name: 'Google Ads Copy',
      desc: 'Generate high-converting Google Search Ad copies',
      category: 'Marketing',
      icon: 'https://cdn-icons-png.flaticon.com/128/2991/2991117.png',
      slug: 'google-ads',
      aiPrompt: 'Create 3 Google Search Ad variations (headline + description) for [product]',
      form: [
          {
              label: 'Product/Service Name',
              field: 'input',
              name: 'product',
              required: true
          },
          {
              label: 'Unique Selling Points',
              field: 'textarea',
              name: 'usp'
          }
      ]
  },
  {
      name: 'Landing Page Copy',
      desc: 'Generate high-converting landing page content',
      category: 'Marketing',
      icon: 'https://cdn-icons-png.flaticon.com/128/1055/1055683.png',
      slug: 'landing-page',
      aiPrompt: 'Write landing page copy for [product] with headline, subheadline, benefits and CTA',
      form: [
          {
              label: 'Product/Service',
              field: 'input',
              name: 'product',
              required: true
          }
      ]
  },
  {
      name: 'Google Ads Script',
      desc: 'Create scripts for Google Ads automation',
      category: 'Marketing',
      icon: 'https://cdn-icons-png.flaticon.com/128/2303/2303971.png',
      slug: 'google-ads-script',
      aiPrompt: 'Generate Google Ads script to [purpose] with detailed comments',
      form: [
          {
              label: 'Script Purpose',
              field: 'input',
              name: 'purpose',
              required: true
          }
      ]
  },
  {
      name: 'Lead Magnet Ideas',
      desc: 'Generate ideas for high-value lead magnets',
      category: 'Marketing',
      icon: 'https://cdn-icons-png.flaticon.com/128/1063/1063183.png',
      slug: 'lead-magnets',
      aiPrompt: 'Suggest 5 lead magnet ideas for [business] targeting [audience]',
      form: [
          {
              label: 'Business Type',
              field: 'input',
              name: 'business',
              required: true
          }
      ]
  },
  {
      name: 'Email Drip Campaign',
      desc: 'Create sequences for email drip campaigns',
      category: 'Marketing',
      icon: 'https://cdn-icons-png.flaticon.com/128/15139/15139100.png',
      slug: 'drip-campaign',
      aiPrompt: 'Generate 5-email drip campaign sequence for [purpose] with day intervals',
      form: [
          {
              label: 'Campaign Purpose',
              field: 'input',
              name: 'purpose',
              required: true
          }
      ]
  },
  {
      name: 'Affiliate Product Review',
      desc: 'Write compelling affiliate product reviews',
      category: 'Marketing',
      icon: 'https://cdn-icons-png.flaticon.com/128/4813/4813110.png',
      slug: 'affiliate-review',
      aiPrompt: 'Write detailed affiliate review of [product] highlighting pros, cons and personal experience',
      form: [
          {
              label: 'Product Name',
              field: 'input',
              name: 'product',
              required: true
          }
      ]
  },
  // Business
  {
      name: 'Business Name',
      desc: 'Generate unique business name ideas for your startup',
      category: 'Business',
      icon: 'https://cdn-icons-png.flaticon.com/128/2640/2640788.png',
      slug: 'business-name',
      aiPrompt: 'Suggest 10 creative business names based on industry ',
      form: [
          {
              label: 'Industry/niche',
              field: 'input',
              name: 'industry',
              required: true
          }
      ]
  },
  {
      name: 'FAQ Generator',
      desc: 'Automatically generate FAQs based on product/service information',
      category: 'Business',
      icon: 'https://cdn-icons-png.flaticon.com/128/4305/4305551.png',
      slug: 'faq-generator',
      aiPrompt: 'Create 8 relevant FAQs with answers based on product info ',
      form: [
          {
              label: 'Product/service details',
              field: 'textarea',
              name: 'details',
              required: true
          }
      ]
  },
  {
      name: 'Press Release',
      desc: 'Generate professional press releases for company announcements',
      category: 'Business',
      icon: 'https://cdn-icons-png.flaticon.com/128/187/187823.png',
      slug: 'press-release',
      aiPrompt: 'Write press release based on announcement details ',
      form: [
          {
              label: 'Announcement details',
              field: 'textarea',
              name: 'details',
              required: true
          }
      ]
  },
  {
      name: 'Pitch Deck Outline',
      desc: 'Create professional pitch deck structures for startups',
      category: 'Business',
      icon: 'https://cdn-icons-png.flaticon.com/128/1055/1055683.png',
      slug: 'pitch-deck',
      aiPrompt: 'Generate a 10-slide pitch deck outline for a [industry] startup focusing on [value prop]',
      form: [
          {
              label: 'Industry',
              field: 'input',
              name: 'industry',
              required: true
          },
          {
              label: 'Value Proposition',
              field: 'textarea',
              name: 'value'
          }
      ]
  },
  {
      name: 'SaaS Feature Description',
      desc: 'Write compelling descriptions for software features',
      category: 'Business',
      icon: 'https://cdn-icons-png.flaticon.com/128/2920/2920277.png',
      slug: 'saas-feature',
      aiPrompt: 'Create 3 benefit-focused descriptions for a [software] feature that [functionality]',
      form: [
          {
              label: 'Software/Product Name',
              field: 'input',
              name: 'software',
              required: true
          },
          {
              label: 'Feature Functionality',
              field: 'textarea',
              name: 'functionality'
          }
      ]
  },

  // E-Commerce
  {
      name: 'Product Description Generator',
      desc: 'Generate SEO-friendly product descriptions for your e-commerce store.',
      category: 'E-Commerce',
      icon: 'https://cdn-icons-png.flaticon.com/128/9956/9956878.png',
      slug: 'product-description',
      aiPrompt: 'Write a detailed product description (100-150 words) highlighting key features and benefits.',
      form: [
          {
              label: 'Product Name',
              field: 'input',
              name: 'product',
              required: true
          },
          {
              label: 'Key Features/Specifications',
              field: 'textarea',
              name: 'features'
          }
      ]
  },
  {
      name: 'Product Review',
      desc: 'Generate detailed product reviews for e-commerce sites',
      category: 'E-Commerce',
      icon: 'https://cdn-icons-png.flaticon.com/128/9136/9136153.png',
      slug: 'product-review',
      aiPrompt: 'Write a 200-word honest product review for [product] highlighting [features]',
      form: [
          {
              label: 'Product Name',
              field: 'input',
              name: 'product',
              required: true
          },
          {
              label: 'Key Features',
              field: 'textarea',
              name: 'features'
          }
      ]
  },

  // Career
  {
      name: 'Resume Summary',
      desc: 'Create professional resume summaries tailored to job descriptions',
      category: 'Career',
      icon: 'https://cdn-icons-png.flaticon.com/128/942/942748.png',
      slug: 'resume-summary',
      aiPrompt: 'Write 3 professional resume summaries based on experience ',
      form: [
          {
              label: 'Your experience/skills',
              field: 'textarea',
              name: 'experience',
              required: true
          }
      ]
  },
  {
      name: 'Resume Bullet Points',
      desc: 'Create impactful bullet points for resumes',
      category: 'Career',
      icon: 'https://cdn-icons-png.flaticon.com/128/9119/9119108.png',
      slug: 'resume-bullets',
      aiPrompt: 'Write 5 achievement-oriented bullet points for [job title] role highlighting [skills]',
      form: [
          {
              label: 'Job Title',
              field: 'input',
              name: 'jobTitle',
              required: true
          }
      ]
  },
  {
      name: 'Cover Letter Generator',
      desc: 'Generate personalized cover letters for job applications',
      category: 'Career',
      icon: 'https://cdn-icons-png.flaticon.com/128/942/942748.png',
      slug: 'cover-letter',
      aiPrompt: 'Write cover letter for [job title] position at [company] emphasizing [skills]',
      form: [
          {
              label: 'Job Title',
              field: 'input',
              name: 'jobTitle',
              required: true
          }
      ]
  },
  {
      name: 'Interview Questions',
      desc: 'Generate practice questions for job interviews',
      category: 'Career',
      icon: 'https://cdn-icons-png.flaticon.com/128/12343/12343258.png',
      slug: 'interview-questions',
      aiPrompt: 'Create 10 common interview questions for [position] with suggested answers',
      form: [
          {
              label: 'Job Position',
              field: 'input',
              name: 'position',
              required: true
          }
      ]
  },
  {
      name: 'Salary Negotiation Script',
      desc: 'Create scripts for salary negotiation conversations',
      category: 'Career',
      icon: 'https://cdn-icons-png.flaticon.com/128/4771/4771654.png',
      slug: 'salary-negotiation',
      aiPrompt: 'Generate professional salary negotiation script for [position] with [experience]',
      form: [
          {
              label: 'Job Position',
              field: 'input',
              name: 'position',
              required: true
          }
      ]
  },
  {
      name: 'Performance Review',
      desc: 'Generate self-evaluation for performance reviews',
      category: 'Career',
      icon: 'https://cdn-icons-png.flaticon.com/128/3281/3281289.png',
      slug: 'performance-review',
      aiPrompt: 'Write professional self-evaluation for [role] highlighting [achievements]',
      form: [
          {
              label: 'Your Role',
              field: 'input',
              name: 'role',
              required: true
          }
      ]
  },

  // Writing
  {
      name: 'Quora Answer',
      desc: 'Generate comprehensive answers for Quora questions',
      category: 'Writing',
      icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111628.png',
      slug: 'quora-answer',
      aiPrompt: 'Write detailed answer for given Quora question',
      form: [
          {
              label: 'Quora question',
              field: 'textarea',
              name: 'question',
              required: true
          }
      ]
  },
  {
      name: 'Book Outline',
      desc: 'Generate chapter outlines for non-fiction books',
      category: 'Writing',
      icon: 'https://cdn-icons-png.flaticon.com/128/1570/1570912.png',
      slug: 'book-outline',
      aiPrompt: 'Create detailed book chapter outline based on topic ',
      form: [
          {
              label: 'Book topic/main idea',
              field: 'textarea',
              name: 'topic',
              required: true
          }
      ]
  },
  {
      name: 'Poem Generator',
      desc: 'Create beautiful poems based on themes or emotions',
      category: 'Writing',
      icon: 'https://cdn-icons-png.flaticon.com/128/5238/5238394.png',
      slug: 'poem-generator',
      aiPrompt: 'Write poem based on given theme/style ',
      form: [
          {
              label: 'Poem theme/style',
              field: 'textarea',
              name: 'theme',
              required: true
          }
      ]
  },
  {
      name: 'Speech Writer',
      desc: 'Generate speeches for presentations, weddings, or events',
      category: 'Writing',
      icon: 'https://cdn-icons-png.flaticon.com/128/1019/1019671.png',
      slug: 'speech-writer',
      aiPrompt: 'Write 500-word speech based on event details ',
      form: [
          {
              label: 'Event details/tone',
              field: 'textarea',
              name: 'details',
              required: true
          }
      ]
  },
  {
      name: 'Short Story Generator',
      desc: 'Create engaging short stories based on prompts',
      category: 'Writing',
      icon: 'https://cdn-icons-png.flaticon.com/128/1995/1995463.png',
      slug: 'short-story',
      aiPrompt: 'Write a 500-word [genre] story about [premise] with [elements]',
      form: [
          {
              label: 'Genre',
              field: 'input',
              name: 'genre',
              required: true
          },
          {
              label: 'Story Premise',
              field: 'textarea',
              name: 'premise'
          }
      ]
  },
  {
      name: 'Character Profile',
      desc: 'Develop detailed fictional character profiles',
      category: 'Writing',
      icon: 'https://cdn-icons-png.flaticon.com/128/5238/5238385.png',
      slug: 'character-profile',
      aiPrompt: 'Create a character profile for a [role] with [traits] in [setting]',
      form: [
          {
              label: 'Character Role',
              field: 'input',
              name: 'role',
              required: true
          },
          {
              label: 'Key Traits',
              field: 'input',
              name: 'traits'
          }
      ]
  },
  {
      name: 'Dialogue Generator',
      desc: 'Create natural-sounding dialogue for stories/screenplays',
      category: 'Writing',
      icon: 'https://cdn-icons-png.flaticon.com/128/1038/1038100.png',
      slug: 'dialogue',
      aiPrompt: 'Write a dialogue between [character1] and [character2] about [topic]',
      form: [
          {
              label: 'Character 1',
              field: 'input',
              name: 'character1',
              required: true
          },
          {
              label: 'Character 2',
              field: 'input',
              name: 'character2',
              required: true
          }
      ]
  },

  // Content
  {
      name: 'Podcast Ideas',
      desc: 'Generate podcast episode ideas based on your niche',
      category: 'Content',
      icon: 'https://cdn-icons-png.flaticon.com/128/2983/2983067.png',
      slug: 'podcast-ideas',
      aiPrompt: 'Suggest 10 podcast episode topics based on niche ',
      form: [
          {
              label: 'Podcast niche/topic',
              field: 'input',
              name: 'niche',
              required: true
          }
      ]
  },
  {
      name: 'Newsletter Template',
      desc: 'Generate email newsletter layouts for different purposes',
      category: 'Content',
      icon: 'https://cdn-icons-png.flaticon.com/128/3211/3211095.png',
      slug: 'newsletter',
      aiPrompt: 'Create a newsletter template for [topic] with 3 sections and a CTA',
      form: [
          {
              label: 'Newsletter Topic',
              field: 'input',
              name: 'topic',
              required: true
          }
      ]
  },
  {
      name: 'Case Study Outline',
      desc: 'Structure professional case studies for businesses',
      category: 'Content',
      icon: 'https://cdn-icons-png.flaticon.com/128/3652/3652191.png',
      slug: 'case-study',
      aiPrompt: 'Generate a case study structure for [company] showing [results] through [solution]',
      form: [
          {
              label: 'Company/Client Name',
              field: 'input',
              name: 'company',
              required: true
          },
          {
              label: 'Achieved Results',
              field: 'input',
              name: 'results'
          }
      ]
  },
  {
      name: 'Whitepaper Introduction',
      desc: 'Create compelling openings for whitepapers and reports',
      category: 'Content',
      icon: 'https://cdn-icons-png.flaticon.com/128/2383/2383447.png',
      slug: 'whitepaper-intro',
      aiPrompt: 'Write a 200-word whitepaper introduction about [topic] establishing [authority]',
      form: [
          {
              label: 'Whitepaper Topic',
              field: 'input',
              name: 'topic',
              required: true
          },
          {
              label: 'Authority Angle',
              field: 'input',
              name: 'authority'
          }
      ]
  },

  // Productivity
  {
      name: 'Meeting Agenda',
      desc: 'Generate professional meeting agendas',
      category: 'Productivity',
      icon: 'https://cdn-icons-png.flaticon.com/128/3058/3058976.png',
      slug: 'meeting-agenda',
      aiPrompt: 'Create a 1-hour meeting agenda for [purpose] with time allocations',
      form: [
          {
              label: 'Meeting Purpose',
              field: 'input',
              name: 'purpose',
              required: true
          }
      ]
  },
  {
      name: 'Project Timeline',
      desc: 'Create detailed project timelines with milestones',
      category: 'Productivity',
      icon: 'https://cdn-icons-png.flaticon.com/128/2906/2906274.png',
      slug: 'project-timeline',
      aiPrompt: 'Generate a 3-month project timeline for [project] with key milestones',
      form: [
          {
              label: 'Project Name',
              field: 'input',
              name: 'project',
              required: true
          },
          {
              label: 'Key Deliverables',
              field: 'textarea',
              name: 'deliverables'
          }
      ]
  },
  {
      name: 'Study Plan Generator',
      desc: 'Create personalized study schedules for any subject',
      category: 'Education',
      icon: 'https://cdn-icons-png.flaticon.com/128/3077/3077421.png',
      slug: 'study-plan',
      aiPrompt: 'Generate a 4-week study plan for [subject] covering [topics] with daily goals',
      form: [
          {
              label: 'Subject',
              field: 'input',
              name: 'subject',
              required: true
          },
          {
              label: 'Key Topics',
              field: 'textarea',
              name: 'topics'
          }
      ]
  },

  // Legal
  {
      name: 'Legal Document Summarizer',
      desc: 'Summarize complex legal documents in plain language',
      category: 'Legal',
      icon: 'https://cdn-icons-png.flaticon.com/128/2284/2284657.png',
      slug: 'legal-summary',
      aiPrompt: 'Summarize this legal document highlighting key clauses and implications',
      form: [
          {
              label: 'Paste Legal Document',
              field: 'textarea',
              name: 'document',
              required: true
          }
      ]
  },
  {
      name: 'Rental Agreement Generator',
      desc: 'Create customized rental/lease agreements',
      category: 'Real Estate',
      icon: 'https://cdn-icons-png.flaticon.com/128/2284/2284657.png',
      slug: 'rental-agreement',
      aiPrompt: 'Generate a rental agreement for [property type] in [state] including standard clauses and local requirements',
      form: [
          {
              label: 'State/Province',
              field: 'input',
              name: 'location',
              required: true
          }
      ]
  },

  // Health
  {
      name: 'Medical Explanation',
      desc: 'Explain medical terms and conditions in patient-friendly language',
      category: 'Health',
      icon: 'https://cdn-icons-png.flaticon.com/128/2964/2964069.png',
      slug: 'medical-explainer',
      aiPrompt: 'Explain [condition] in simple terms with causes, symptoms and treatments',
      form: [
          {
              label: 'Medical Term/Condition',
              field: 'input',
              name: 'condition',
              required: true
          }
      ]
  },
  {
      name: 'Fitness Plan',
      desc: 'Create personalized workout routines',
      category: 'Health',
      icon: 'https://cdn-icons-png.flaticon.com/128/2936/2936886.png',
      slug: 'fitness-plan',
      aiPrompt: 'Generate a 4-week [level] workout plan for [goals] with [equipment]',
      form: [
          {
              label: 'Fitness Level',
              field: 'input',
              name: 'level',
              required: true
          },
          {
              label: 'Workout Goals',
              field: 'input',
              name: 'goals'
          }
      ]
  },
  {
      name: 'Meditation Script',
      desc: 'Create guided meditation scripts',
      category: 'Wellness',
      icon: 'https://cdn-icons-png.flaticon.com/128/2936/2936886.png',
      slug: 'meditation-script',
      aiPrompt: 'Write 10-minute guided meditation script for [purpose] with calming language',
      form: [
          {
              label: 'Meditation Purpose',
              field: 'input',
              name: 'purpose',
              required: true
          }
      ]
  },
  {
      name: 'Meal Plan Generator',
      desc: 'Create personalized weekly meal plans',
      category: 'Wellness',
      icon: 'https://cdn-icons-png.flaticon.com/128/3081/3081842.png',
      slug: 'meal-plan',
      aiPrompt: 'Generate 7-day meal plan for [diet] with [calories] calories per day',
      form: [
          {
              label: 'Diet Type',
              field: 'input',
              name: 'diet',
              required: true
          }
      ]
  },
  {
      name: 'Sleep Improvement Tips',
      desc: 'Generate science-backed tips for better sleep',
      category: 'Wellness',
      icon: 'https://cdn-icons-png.flaticon.com/128/809/809052.png',
      slug: 'sleep-tips',
      aiPrompt: 'Provide 10 evidence-based sleep improvement tips for [demographic]',
      form: [
          {
              label: 'Target Demographic',
              field: 'input',
              name: 'demographic',
              required: true
          }
      ]
  },
  {
      name: 'Stress Management Guide',
      desc: 'Create personalized stress reduction plans',
      category: 'Wellness',
      icon: 'https://cdn-icons-png.flaticon.com/128/2964/2964069.png',
      slug: 'stress-management',
      aiPrompt: 'Generate 5 stress management techniques for [situation] with implementation tips',
      form: [
          {
              label: 'Stressful Situation',
              field: 'input',
              name: 'situation',
              required: true
          }
      ]
  },
  {
      name: 'Gratitude Journal Prompts',
      desc: 'Generate thought-provoking gratitude journal prompts',
      category: 'Wellness',
      icon: 'https://cdn-icons-png.flaticon.com/128/3281/3281289.png',
      slug: 'gratitude-prompts',
      aiPrompt: 'Create 30 gratitude journal prompts for [timeframe] with reflective questions',
      form: [
          {
              label: 'Timeframe',
              field: 'input',
              name: 'timeframe',
              required: true
          }
      ]
  },
  {
      name: 'Fitness Challenge Plan',
      desc: 'Generate 30-day fitness challenge plans',
      category: 'Fitness',
      icon: 'https://cdn-icons-png.flaticon.com/128/2936/2936886.png',
      slug: 'fitness-challenge',
      aiPrompt: 'Create a 30-day [type] fitness challenge with daily workouts, nutrition tips, and progress tracking',
      form: [
          {
              label: 'Challenge Type',
              field: 'input',
              name: 'challengeType',
              required: true
          }
      ]
  },
  {
      name: 'Workout Modifications',
      desc: 'Get customized workout modifications for different needs',
      category: 'Fitness',
      icon: 'https://cdn-icons-png.flaticon.com/128/863/863684.png',
      slug: 'workout-modifications',
      aiPrompt: 'Provide 5 modifications for [exercise] suitable for [specific need] with safety tips',
      form: [
          {
              label: 'Specific Need/Condition',
              field: 'input',
              name: 'need',
              required: true
          }
      ]
  },
  {
      name: 'Gym Business Plan',
      desc: 'Generate business plan templates for fitness studios',
      category: 'Fitness',
      icon: 'https://cdn-icons-png.flaticon.com/128/2640/2640788.png',
      slug: 'gym-business-plan',
      aiPrompt: 'Create a business plan outline for a [type] gym/fitness studio including market analysis, services, and financial projections',
      form: [
          {
              label: 'Gym/Fitness Studio Type',
              field: 'input',
              name: 'gymType',
              required: true
          }
      ]
  },
  {
      name: 'Personal Trainer Bio',
      desc: 'Write compelling bios for fitness professionals',
      category: 'Fitness',
      icon: 'https://cdn-icons-png.flaticon.com/128/3132/3132693.png',
      slug: 'trainer-bio',
      aiPrompt: 'Write 3 professional bios for a [specialty] personal trainer highlighting credentials, philosophy, and client success',
      form: [
          {
              label: 'Training Specialty',
              field: 'input',
              name: 'specialty',
              required: true
          }
      ]
  },
  {
      name: 'Meal Prep Guide',
      desc: 'Generate weekly meal prep plans with recipes',
      category: 'Fitness',
      icon: 'https://cdn-icons-png.flaticon.com/128/3081/3081842.png',
      slug: 'meal-prep',
      aiPrompt: 'Create a 7-day meal prep plan for [diet type] with [calorie target] calories per day including shopping list',
      form: [
          {
              label: 'Calorie Target',
              field: 'input',
              name: 'calories',
              required: true
          }
      ]
  },

  // Food
  {
      name: 'Recipe Generator',
      desc: 'Create unique recipes based on ingredients or dietary needs',
      category: 'Food',
      icon: 'https://cdn-icons-png.flaticon.com/128/3081/3081842.png',
      slug: 'recipe-generator',
      aiPrompt: 'Generate 3 recipes based on ingredients/diet ',
      form: [
          {
              label: 'Ingredients/dietary needs',
              field: 'textarea',
              name: 'ingredients',
              required: true
          }
      ]
  },

  // Real Estate
  {
      name: 'Real Estate Listing',
      desc: 'Create compelling property descriptions for real estate',
      category: 'Real Estate',
      icon: 'https://cdn-icons-png.flaticon.com/128/619/619153.png',
      slug: 'real-estate',
      aiPrompt: 'Write a property listing for a [type] in [location] highlighting [features]',
      form: [
          {
              label: 'Property Type',
              field: 'input',
              name: 'type',
              required: true
          },
          {
              label: 'Key Features',
              field: 'textarea',
              name: 'features'
          }
      ]
  },
  {
      name: 'Real Estate Listing Description',
      desc: 'Generate compelling property descriptions for real estate listings',
      category: 'Real Estate',
      icon: 'https://cdn-icons-png.flaticon.com/128/619/619153.png',
      slug: 'real-estate-description',
      aiPrompt: 'Write an engaging 150-word description for a [property type] in [location] highlighting [features]',
      form: [
          {
              label: 'Property Type',
              field: 'input',
              name: 'propertyType',
              required: true
          },
          {
              label: 'Key Features',
              field: 'textarea',
              name: 'features'
          }
      ]
  },
  {
      name: 'Airbnb Listing Optimizer',
      desc: 'Create optimized listings for Airbnb properties',
      category: 'Real Estate',
      icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111320.png',
      slug: 'airbnb-listing',
      aiPrompt: 'Generate an Airbnb listing title and description for a [property type] in [location] with [unique selling points]',
      form: [
          {
              label: 'Unique Selling Points',
              field: 'textarea',
              name: 'usp',
              required: true
          }
      ]
  },
  {
      name: 'Home Staging Tips',
      desc: 'Get AI-generated home staging recommendations',
      category: 'Real Estate',
      icon: 'https://cdn-icons-png.flaticon.com/128/2553/2553629.png',
      slug: 'home-staging',
      aiPrompt: 'Provide 10 home staging tips for a [property type] targeting [buyer demographic]',
      form: [
          {
              label: 'Target Buyer Demographic',
              field: 'input',
              name: 'demographic',
              required: true
          }
      ]
  },
  {
      name: 'Mortgage Calculator Explanation',
      desc: 'Explain mortgage terms and calculations in simple language',
      category: 'Real Estate',
      icon: 'https://cdn-icons-png.flaticon.com/128/4771/4771654.png',
      slug: 'mortgage-explainer',
      aiPrompt: 'Explain how a [mortgage type] works with examples for a [price] home with [down payment] down payment',
      form: [
          {
              label: 'Mortgage Type',
              field: 'input',
              name: 'mortgageType',
              required: true
          }
      ]
  },

  // Video
  {
      name: 'Video Script Template',
      desc: 'Generate scripts for YouTube videos or presentations',
      category: 'Video',
      icon: 'https://cdn-icons-png.flaticon.com/128/1384/1384023.png',
      slug: 'video-script',
      aiPrompt: 'Write a 5-minute video script about [topic] with introduction, main points, and conclusion',
      form: [
          {
              label: 'Video Topic',
              field: 'input',
              name: 'topic',
              required: true
          }
      ]
  },
  {
      name: 'TikTok Caption Generator',
      desc: 'Create engaging captions for TikTok videos',
      category: 'Video',
      icon: 'https://cdn-icons-png.flaticon.com/128/3046/3046121.png',
      slug: 'tiktok-captions',
      aiPrompt: 'Generate 5 catchy TikTok captions for videos about [content type] with relevant hashtags',
      form: [
          {
              label: 'Content Type',
              field: 'input',
              name: 'contentType',
              required: true
          }
      ]
  },
  {
      name: 'YouTube Channel Description',
      desc: 'Write compelling YouTube channel descriptions',
      category: 'Video',
      icon: 'https://cdn-icons-png.flaticon.com/128/1384/1384029.png',
      slug: 'youtube-channel-desc',
      aiPrompt: 'Create a YouTube channel description for [channel niche] that explains the value proposition and content schedule',
      form: [
          {
              label: 'Channel Niche',
              field: 'input',
              name: 'niche',
              required: true
          }
      ]
  },
  {
      name: 'Video Shot List',
      desc: 'Generate professional video shot lists',
      category: 'Video',
      icon: 'https://cdn-icons-png.flaticon.com/128/2991/2991481.png',
      slug: 'shot-list',
      aiPrompt: 'Create a detailed shot list for a [video type] video including camera angles and equipment needed',
      form: [
          {
              label: 'Video Type',
              field: 'input',
              name: 'videoType',
              required: true
          }
      ]
  },
  {
      name: 'Live Stream Outline',
      desc: 'Plan engaging live stream content',
      category: 'Video',
      icon: 'https://cdn-icons-png.flaticon.com/128/3059/3059518.png',
      slug: 'live-stream-plan',
      aiPrompt: 'Create a 60-minute live stream outline about [topic] with segments, talking points, and interactive elements',
      form: [
          {
              label: 'Stream Topic',
              field: 'input',
              name: 'topic',
              required: true
          }
      ]
  },

  // Nonprofit
  {
      name: 'Nonprofit Grant Proposal',
      desc: 'Generate templates for nonprofit grant applications',
      category: 'Nonprofit',
      icon: 'https://cdn-icons-png.flaticon.com/128/3281/3281289.png',
      slug: 'grant-proposal',
      aiPrompt: 'Write a grant proposal outline for [nonprofit cause] including needs statement, objectives, and budget justification',
      form: [
          {
              label: 'Nonprofit Cause',
              field: 'input',
              name: 'cause',
              required: true
          }
      ]
  },
  {
      name: 'Fundraising Email',
      desc: 'Create compelling fundraising email appeals',
      category: 'Nonprofit',
      icon: 'https://cdn-icons-png.flaticon.com/128/3059/3059518.png',
      slug: 'fundraising-email',
      aiPrompt: 'Write a fundraising email for [organization] seeking donations for [specific need] with emotional appeal and clear CTA',
      form: [
          {
              label: 'Specific Funding Need',
              field: 'input',
              name: 'need',
              required: true
          }
      ]
  },
  {
      name: 'Volunteer Recruitment Post',
      desc: 'Generate volunteer recruitment content',
      category: 'Nonprofit',
      icon: 'https://cdn-icons-png.flaticon.com/128/4771/4771654.png',
      slug: 'volunteer-recruitment',
      aiPrompt: 'Create 3 social media posts recruiting volunteers for [organization/event] highlighting benefits and requirements',
      form: [
          {
              label: 'Organization/Event Name',
              field: 'input',
              name: 'orgName',
              required: true
          }
      ]
  },
  {
      name: 'Donation Thank You Letter',
      desc: 'Generate personalized donor thank you letters',
      category: 'Nonprofit',
      icon: 'https://cdn-icons-png.flaticon.com/128/942/942748.png',
      slug: 'thank-you-letter',
      aiPrompt: 'Write a heartfelt thank you letter to donors for [specific campaign/project] with impact details',
      form: [
          {
              label: 'Campaign/Project Name',
              field: 'input',
              name: 'campaign',
              required: true
          }
      ]
  },
  {
      name: 'Annual Report Summary',
      desc: 'Create executive summaries for nonprofit annual reports',
      category: 'Nonprofit',
      icon: 'https://cdn-icons-png.flaticon.com/128/3281/3281289.png',
      slug: 'annual-report',
      aiPrompt: 'Write a 2-page annual report summary for [organization] highlighting key achievements, financials, and future goals',
      form: [
          {
              label: 'Fiscal Year',
              field: 'input',
              name: 'year',
              required: true
          }
      ]
  },

  // Travel
  {
      name: 'Travel Itinerary Generator',
      desc: 'Create detailed daily travel itineraries',
      category: 'Travel',
      icon: 'https://cdn-icons-png.flaticon.com/128/1809/1809565.png',
      slug: 'travel-itinerary',
      aiPrompt: 'Generate a [duration] day itinerary for [destination] focusing on [interests] with transportation and dining options',
      form: [
          {
              label: 'Trip Duration',
              field: 'input',
              name: 'duration',
              required: true
          }
      ]
  },
  {
      name: 'Packing List Generator',
      desc: 'Create customized packing lists for trips',
      category: 'Travel',
      icon: 'https://cdn-icons-png.flaticon.com/128/869/869869.png',
      slug: 'packing-list',
      aiPrompt: 'Generate a packing list for a [duration] [trip type] to [destination] during [season] accounting for [special needs]',
      form: [
          {
              label: 'Special Needs/Considerations',
              field: 'input',
              name: 'needs'
          }
      ]
  },
  {
      name: 'Hotel Review Generator',
      desc: 'Write comprehensive hotel reviews',
      category: 'Travel',
      icon: 'https://cdn-icons-png.flaticon.com/128/2503/2503161.png',
      slug: 'hotel-review',
      aiPrompt: 'Write a detailed review of [hotel name] covering rooms, amenities, service, and value for money',
      form: [
          {
              label: 'Hotel Name',
              field: 'input',
              name: 'hotel',
              required: true
          }
      ]
  },
  {
      name: 'Travel Blog Post',
      desc: 'Generate engaging travel blog content',
      category: 'Travel',
      icon: 'https://cdn-icons-png.flaticon.com/128/1570/1570912.png',
      slug: 'travel-blog',
      aiPrompt: 'Write a 1000-word travel blog post about [destination] highlighting top attractions, hidden gems, and practical tips',
      form: [
          {
              label: 'Destination',
              field: 'input',
              name: 'destination',
              required: true
          }
      ]
  },
  {
      name: 'Flight Cancellation Email',
      desc: 'Generate professional emails for flight compensation',
      category: 'Travel',
      icon: 'https://cdn-icons-png.flaticon.com/128/1046/1046821.png',
      slug: 'flight-compensation',
      aiPrompt: 'Write a formal email to [airline] requesting compensation for flight [disruption type] on [date] referencing relevant regulations',
      form: [
          {
              label: 'Disruption Type',
              field: 'input',
              name: 'disruption',
              required: true
          }
      ]
  },

  // Relationships
  {
      name: 'Wedding Vow Assistant',
      desc: 'Help write personalized wedding vows',
      category: 'Relationships',
      icon: 'https://cdn-icons-png.flaticon.com/128/5238/5238385.png',
      slug: 'wedding-vows',
      aiPrompt: 'Help write [length] wedding vows expressing [feelings] and mentioning [special memories] with [tone] tone',
      form: [
          {
              label: 'Desired Tone',
              field: 'input',
              name: 'tone',
              required: true
          }
      ]
  },
  {
      name: 'Date Night Ideas',
      desc: 'Generate creative date night suggestions',
      category: 'Relationships',
      icon: 'https://cdn-icons-png.flaticon.com/128/1077/1077114.png',
      slug: 'date-ideas',
      aiPrompt: 'Suggest 10 unique date night ideas for [couple type] in [location] with [budget] budget',
      form: [
          {
              label: 'Budget Range',
              field: 'input',
              name: 'budget',
              required: true
          }
      ]
  },
  {
      name: 'Love Letter Generator',
      desc: 'Create heartfelt love letters',
      category: 'Relationships',
      icon: 'https://cdn-icons-png.flaticon.com/128/1019/1019671.png',
      slug: 'love-letter',
      aiPrompt: 'Write a romantic love letter expressing [feelings] and recalling [special memories] in [tone] style',
      form: [
          {
              label: 'Special Memories',
              field: 'textarea',
              name: 'memories',
              required: true
          }
      ]
  },
  {
      name: 'Anniversary Message',
      desc: 'Generate personalized anniversary wishes',
      category: 'Relationships',
      icon: 'https://cdn-icons-png.flaticon.com/128/4771/4771654.png',
      slug: 'anniversary-message',
      aiPrompt: 'Write 3 heartfelt anniversary messages for [relationship type] celebrating [number] years together',
      form: [
          {
              label: 'Anniversary Number',
              field: 'input',
              name: 'years',
              required: true
          }
      ]
  },
  {
      name: 'Conflict Resolution Script',
      desc: 'Generate constructive communication scripts',
      category: 'Relationships',
      icon: 'https://cdn-icons-png.flaticon.com/128/3594/3594461.png',
      slug: 'conflict-resolution',
      aiPrompt: 'Create a constructive conversation script for addressing [issue] with [relationship] focusing on active listening and solutions',
      form: [
          {
              label: 'Specific Issue',
              field: 'input',
              name: 'issue',
              required: true
          }
      ]
  },

  // Pets
  {
      name: 'Pet Training Guide',
      desc: 'Generate customized pet training plans',
      category: 'Pets',
      icon: 'https://cdn-icons-png.flaticon.com/128/616/616408.png',
      slug: 'pet-training',
      aiPrompt: 'Create a [duration] training plan for [pet type] to learn [behavior/command] using [method] method',
      form: [
          {
              label: 'Training Method',
              field: 'input',
              name: 'method',
              required: true
          }
      ]
  },
  {
      name: 'Pet Social Media Bio',
      desc: 'Create fun social media bios for pets',
      category: 'Pets',
      icon: 'https://cdn-icons-png.flaticon.com/128/3663/3663335.png',
      slug: 'pet-bio',
      aiPrompt: 'Write 3 humorous social media bios for a [pet type] named [name] with [personality traits]',
      form: [
          {
              label: 'Pet Name',
              field: 'input',
              name: 'name',
              required: true
          }
      ]
  },
  {
      name: 'Vet Visit Questions',
      desc: 'Generate comprehensive vet visit checklists',
      category: 'Pets',
      icon: 'https://cdn-icons-png.flaticon.com/128/2964/2964069.png',
      slug: 'vet-questions',
      aiPrompt: 'Provide 10 important questions to ask the vet during a [type] visit for a [age] [pet type]',
      form: [
          {
              label: 'Visit Type',
              field: 'input',
              name: 'visitType',
              required: true
          }
      ]
  },
  {
      name: 'Pet Adoption Profile',
      desc: 'Write compelling adoption profiles for rescue animals',
      category: 'Pets',
      icon: 'https://cdn-icons-png.flaticon.com/128/3132/3132693.png',
      slug: 'adoption-profile',
      aiPrompt: 'Write an engaging adoption profile for a [age] [pet type] named [name] who is [description] and would be ideal for [home type]',
      form: [
          {
              label: 'Pet Description',
              field: 'textarea',
              name: 'description',
              required: true
          }
      ]
  },
  {
      name: 'Pet Memorial Tribute',
      desc: 'Create heartfelt memorials for beloved pets',
      category: 'Pets',
      icon: 'https://cdn-icons-png.flaticon.com/128/5238/5238394.png',
      slug: 'pet-memorial',
      aiPrompt: 'Write a touching memorial tribute for a [pet type] named [name] who passed away after [duration] years together',
      form: [
          {
              label: 'Years Together',
              field: 'input',
              name: 'years',
              required: true
          }
      ]
  },

  

  // Family
  {
      name: 'Parenting Advice',
      desc: 'Generate developmentally-appropriate parenting tips',
      category: 'Family',
      icon: 'https://cdn-icons-png.flaticon.com/128/4771/4771654.png',
      slug: 'parenting-tips',
      aiPrompt: 'Provide 5 positive parenting strategies for [age] children dealing with [challenge]',
      form: [
          {
              label: 'Child Age',
              field: 'input',
              name: 'age',
              required: true
          }
      ]
  },
  {
      name: 'Children\'s Story Generator',
      desc: 'Create engaging stories for children',
      category: 'Family',
      icon: 'https://cdn-icons-png.flaticon.com/128/1995/1995463.png',
      slug: 'kids-story',
      aiPrompt: 'Write 500-word children\'s story about [topic] with moral lesson for [age]',
      form: [
          {
              label: 'Story Topic',
              field: 'input',
              name: 'topic',
              required: true
          }
      ]
  }
];