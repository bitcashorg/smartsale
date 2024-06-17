import { BlogSections } from '@/components/routes/blog/sections'
import { ArticlesSection } from '@/services/datocms'
import { LangProp } from '@/types/routing.type'

export function RecentArticles({ lang }: LangProp) {
  return (
    <section>
      <h2 className="heading2 h-32 w-full pb-10 pt-6 text-center font-extrabold leading-loose tracking-tight">
        Recent Articles
      </h2>
      <BlogSections
        sections={[recentArcticles] as unknown as ArticlesSection[]}
        lang={lang}
      />
    </section>
  )
}

const recentArcticles = {
  name: 'Recent',
  slug: 'ai',
  articles: [
    {
      id: 'SpdLuuYEQgW8rwSHNzhmxA',
      topics: ['Apps'],
      title: '',
      slug: 'masterbots-elevating-ai-beyond-chatgpt-with-social-sharing-and-user-friendly-inno',
      authorName: 'Jun Dam',
      authorPicture: {
        url: 'https://www.datocms-assets.com/101962/1686758812-jdamx170-removebg-preview.png'
      },
      _publishedAt: '2024-04-04T23:48:35+01:00',
      description:
        'The blog introduces Masterbots, a platform revolutionizing AI interaction with user-friendly, domain-specific chatbots and a unique social sharing feature, inviting collaborators to join its open-source, community-driven development.',
      thumbnail: {
        url: 'https://www.datocms-assets.com/101962/1712270604-screenshot-2024-04-04-at-3-43-11-pm.png'
      },
      contentBlock: [
        {
          mainContent: {
            value: {
              schema: 'dast',
              document: {
                type: 'root',
                children: [
                  {
                    type: 'heading',
                    level: 2,
                    children: [
                      { type: 'span', value: 'Introducing ' },
                      {
                        url: 'https://masterbots.ai',
                        type: 'link',
                        children: [{ type: 'span', value: 'Masterbots.ai' }]
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          "Today, we're thrilled to launch the alpha version of Masterbots, inviting individuals to explore and provide feedback. But what is Masterbots, exactly?"
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          "Masterbots is a platform featuring a multitude of domain-specific chatbots, neatly organized into categories. These chatbots are equipped with comprehensive system instructions from the start, minimizing the need for users to become expert prompt engineers. The categorization further streamlines interaction, as there's no need to repeatedly specify the domain of expertise."
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          'Our primary objective is to simplify the AI experience for everyday users. While most can obtain decent responses, few are willing to exert the effort required to craft a refined prompt or optimize it for state-of-the-art replies. Consequently, many miss out on the exceptional experiences enjoyed by AI power users. Our aim is to refine our chatbots to deliver the highest quality and most relevant answers, sparing our users the time and effort.'
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          'A distinctive feature of our platform is the public sharing of conversations by default, introducing a social component. Many engaging dialogues with AI, worthy of being shared as a public resource, occur daily. Beyond its benefits for research and evaluation, this feature cultivates a social network-like atmosphere, where users can follow others who pose intriguing questions or interact with domain-specific bots that provide insightful answers. Additionally, this approach enhances platform efficiency by allowing users to search for existing answers, thereby conserving computational resources for model training.'
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          "Furthermore, we've designed our chatbots to offer unique insights, keeping conversations engaging and enhancing user experience (UX)."
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      { type: 'span', value: 'Additional Enhancements:' }
                    ]
                  },
                  {
                    type: 'list',
                    style: 'bulleted',
                    children: [
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                value:
                                  "We've improved UX by enabling users to click on chatbot responses to delve deeper into topics without continuously typing prompts. This click-to-navigate functionality mimics web browsing, making interactions smoother and more intuitive."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                value:
                                  'Users can now perform keyword searches within their conversation history, a feature still absent in ChatGPT.'
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                value:
                                  "Our Blank Bot allows users to craft custom prompts, and we plan to collaborate with domain experts to potentially monetize custom bots, akin to OpenAI's model."
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            }
          },
          topImages: [
            {
              basename: 'mbimg1',
              height: 700,
              width: 700,
              filename: 'mbimg1.webp',
              format: 'webp',
              alt: null,
              url: 'https://www.datocms-assets.com/101962/1712270731-mbimg1.webp'
            }
          ]
        },
        {
          mainContent: {
            value: {
              schema: 'dast',
              document: {
                type: 'root',
                children: [
                  {
                    type: 'heading',
                    level: 2,
                    children: [{ type: 'span', value: 'Looking Ahead' }]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          'Our focus is on enhancing the prompting UX, leveraging various standard techniques (e.g., few-shot learning, Chain-of-Thought, Tree-of-Thought) and integrating tools like DSPy where appropriate. We aim to introduce a user-friendly prompting tool with features like autocomplete, auto-correct, and prompt suggestions.'
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          "We're also excited about leveraging Claude3 Haiku for its cost-effective performance. If optimized to match GPT-4 levels at a lower cost than GPT-3.5, it could offer tremendous value. While we plan to open source our software, our business priority remains delivering the highest quality at the lowest cost."
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          'Monetization will be a focus, with options ranging from ad revenue to a pro version tailored to professional tasks, likely priced at $9.99 per month. We also envision developing language- and potentially country-specific versions of our platform to better serve global users.'
                      }
                    ]
                  },
                  {
                    type: 'heading',
                    level: 2,
                    children: [{ type: 'span', value: 'Enhancements' }]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          'Future updates will include the option for users to keep certain conversations private, though we encourage open sharing to the extent possible.'
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value: 'Competitive Advantage in Open Source:'
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          'Our team, also working on bitlauncher (powered by bitcash), is creating a launchpad to assist AI startups in fundraising from non-US investors via Web3. This dual focus on efficient fundraising and organizational tools positions us uniquely in the market. We believe that building a community, fostering a collaborative culture, and adhering to proper tokenomics will establish Masterbots as a leading open-source AI brand.'
                      }
                    ]
                  }
                ]
              }
            }
          },
          topImages: [
            {
              basename: 'mbimg2',
              height: 1012,
              width: 1012,
              filename: 'mbimg2.webp',
              format: 'webp',
              alt: null,
              url: 'https://www.datocms-assets.com/101962/1712270765-mbimg2.webp'
            }
          ]
        },
        {
          mainContent: {
            value: {
              schema: 'dast',
              document: {
                type: 'root',
                children: [
                  {
                    type: 'heading',
                    level: 2,
                    children: [{ type: 'span', value: 'Join Us' }]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          "We're seeking domain experts and developers to join our mission, offering a range of opportunities for collaboration based on your skills and interests. Contributions may be rewarded with platform credits or future utility tokens, providing access and voting rights."
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          "By building Masterbots in public, we aim to cultivate an open and collaborative culture, propelling this project to become a major household name. If you're interested in contributing, we'd love to hear from you.  Please email: jun@bitcash.org"
                      }
                    ]
                  }
                ]
              }
            }
          },
          topImages: [
            {
              basename: 'mbimg3',
              height: 1012,
              width: 1012,
              filename: 'mbimg3.webp',
              format: 'webp',
              alt: null,
              url: 'https://www.datocms-assets.com/101962/1712270806-mbimg3.webp'
            }
          ]
        }
      ],
      seo: null
    },
    {
      id: '190259319',
      topics: ['Summary', 'LLM', 'Training'],
      title: '',
      slug: 'latent-space-podcast-8-16-23-summary-the-mathematics-of-training-llms-with-que',
      authorName: 'Prof. Otto Nomos',
      authorPicture: {
        url: 'https://www.datocms-assets.com/101962/1692842125-profottonomosheadshot.png'
      },
      _publishedAt: '2023-10-05T09:19:45+01:00',
      description:
        'Explore the math behind training LLMs with Quentin Anthony from Eleuther AI. Dive into the Transformers Math 101 article & master distributed training techniques for peak GPU performance.',
      thumbnail: {
        url: 'https://www.datocms-assets.com/101962/1692324088-screenshot-2023-08-17-at-9-59-17-pm.png'
      },
      contentBlock: [
        {
          mainContent: {
            value: {
              schema: 'dast',
              document: {
                type: 'root',
                children: [
                  {
                    type: 'paragraph',
                    children: [
                      { type: 'span', value: 'Original Link: ' },
                      {
                        url: 'https://www.latent.space/p/transformers-math#details',
                        type: 'link',
                        children: [
                          {
                            type: 'span',
                            value:
                              'The Mathematics of Training LLMs — with Quentin Anthony of Eleuther AI'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: 'heading',
                    level: 2,
                    children: [
                      {
                        type: 'span',
                        marks: ['strong'],
                        value:
                          'The Mathematics Behind Training Large Language Models [Summary]'
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          "In the recent episode of the Latent Space podcast, hosts Alessio and Swyx are joined by Quentin Anthony, an integral figure from Eleuther.ai. They begin by appreciating Eleuther's Transformers Math 101 article, regarded by many as a highly authoritative source for understanding AI's underlying math and the intricacies of training large language models. Quentin elaborates on his journey, from being a PhD student at Ohio State University to joining Eleuther and diving deep into the challenges of distributed AI model training."
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          "Quentin also sheds light on the primary motivation behind writing the article. Despite many in the Deep Learning (DL) space being familiar with the theory of AI, few delve into the practical intricacies—such as understanding how AI inference runs correctly across multiple GPUs. With the article, Eleuther aimed to bridge this gap and share knowledge that would benefit engineers beyond the institution's walls."
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          'Further, Quentin emphasizes the importance of considering not just the dataset but also the computational requirements. This involves taking into account the total computational time and the cost associated with it, making the equation they discuss central to understanding compute requirements. The conversation steers towards the strategies for efficient GPU usage, pointing out the common pitfalls and challenges faced during high-scale deployments.'
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          'Throughout, the underlying theme is the need for practical intuition, with Quentin stressing the "good enough" approach over chasing perfection. The talk offers a blend of theoretical understanding and pragmatic insights into the world of AI and large model training.'
                      }
                    ]
                  }
                ]
              }
            }
          },
          topImages: [
            {
              basename: 'screenshot-2023-08-17-at-9-59-17-pm',
              height: 554,
              width: 1576,
              filename: 'screenshot-2023-08-17-at-9-59-17-pm.png',
              format: 'png',
              alt: null,
              url: 'https://www.datocms-assets.com/101962/1692324088-screenshot-2023-08-17-at-9-59-17-pm.png'
            }
          ]
        },
        {
          mainContent: {
            value: {
              schema: 'dast',
              document: {
                type: 'root',
                children: [
                  {
                    type: 'heading',
                    level: 2,
                    children: [
                      {
                        type: 'span',
                        value:
                          'Deep Dive into Computational Efficiencies and Memory Requirements in AI Systems'
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      { type: 'span', value: 'In a detailed discussion:' }
                    ]
                  },
                  {
                    type: 'list',
                    style: 'bulleted',
                    children: [
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                marks: ['strong'],
                                value: 'Forward and Backward Passes'
                              },
                              {
                                type: 'span',
                                value:
                                  ': Alessio questioned why computers have a 2:1 ratio for forward and backward passes (2PD for forward and 4PD for backward). Quentin explained that the forward pass involves simple propagation of inputs through a layer, whereas the backward pass is more complicated, entailing backpropagation.'
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                marks: ['strong'],
                                value: 'Deep Learning Math'
                              },
                              {
                                type: 'span',
                                value:
                                  ': Swyx mentioned the efficiency of deep learning mathematics, particularly backpropagation, compared to traditional numerical methods.'
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                marks: ['strong'],
                                value: 'Complexities Behind Simple Numbers'
                              },
                              {
                                type: 'span',
                                value:
                                  ": Alessio pointed out that while some math equations appear simple and elegant, the logic behind them can be complex. This sentiment is seen in the public's perception of optimal ratios on platforms like Twitter."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                marks: ['strong'],
                                value: 'Theoretical vs. Actual FLOPs'
                              },
                              {
                                type: 'span',
                                value:
                                  ": Swyx brought up the distinction between theoretical and actual FLOPs, noting discrepancies in reported values. Quentin explained that theoretical FLOPs are based on hardware expectations, but full utilization doesn't always occur due to synchronization waits, data movement between CPU and GPU, and other delays. He suggests benchmarking expected FLOPs against known GPU capabilities."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                marks: ['strong'],
                                value: 'GPU Considerations'
                              },
                              {
                                type: 'span',
                                value:
                                  ": The discussion touched on the differences between Nvidia and AMD GPUs. While AMD may offer better theoretical performance, Nvidia's CUDA software and vast open-source support offer practical advantages. Quentin highlighted that the choice often boils down to the efficiency of the software stack and the momentum in the open-source domain."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                marks: ['strong'],
                                value: 'Memory Requirements and Precision'
                              },
                              {
                                type: 'span',
                                value:
                                  ': Alessio and Swyx delved into memory requirements for training models, particularly focusing on precision and quantization. Quentin explained that transitioning from FP32 to mixed precision, like FP16 and FP32, or BF16 and FP32, often results in more memory usage due to storing both versions of weights. He also emphasized the evolution of precision types in response to hardware advancements, hinting at the future potential of using even smaller representations like INT4.'
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            }
          },
          topImages: [
            {
              basename: 'abls9-img1',
              height: 956,
              width: 956,
              filename: 'abls9-img1.png',
              format: 'png',
              alt: null,
              url: 'https://www.datocms-assets.com/101962/1692334531-abls9-img1.png'
            }
          ]
        },
        {
          mainContent: {
            value: {
              schema: 'dast',
              document: {
                type: 'root',
                children: [
                  {
                    type: 'heading',
                    level: 2,
                    children: [
                      {
                        type: 'span',
                        value:
                          "Deep Learning Memory Dilemmas: The Adam Optimizer's Challenge"
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          'In a discussion about deep learning and optimization methods, Quentin highlighted the RWKV paper as an exploration into achieving Transformer quality without the quadratic attention overhead. The essence of the dialogue revolves around the challenges and intricacies of handling the computational memory requirements of the Adam optimizer. Notably, Quentin points out that while Adam is efficient, it consumes more memory than SGD, particularly three times as much. As a result, distributing memory, especially when dealing with model parallelism and optimizer states, becomes crucial in deep learning operations. Alessio then underlines the memory implications of vanilla Adam, emphasizing that it uses 12 bytes per parameter, which balloons when considering other components like quantization levels. The overarching theme is the quest for efficiency and understanding in the realm of deep learning optimization and memory management.'
                      }
                    ]
                  }
                ]
              }
            }
          },
          topImages: [
            {
              basename: 'abls9-img2',
              height: 956,
              width: 956,
              filename: 'abls9-img2.png',
              format: 'png',
              alt: null,
              url: 'https://www.datocms-assets.com/101962/1692334519-abls9-img2.png'
            }
          ]
        },
        {
          mainContent: {
            value: {
              schema: 'dast',
              document: {
                type: 'root',
                children: [
                  {
                    type: 'heading',
                    level: 2,
                    children: [
                      {
                        type: 'span',
                        marks: ['strong'],
                        value:
                          'Optimizing Memory and Training Models in Deep Learning'
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          'Quentin, Swyx, and Alessio discuss memory challenges and optimizations in training large models.'
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      { type: 'span', marks: ['strong'], value: 'Key Points:' }
                    ]
                  },
                  {
                    type: 'list',
                    style: 'numbered',
                    children: [
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                marks: ['strong'],
                                value: 'Model vs. Optimizer Memory:'
                              },
                              {
                                type: 'span',
                                value:
                                  " While most attention is on the model's memory, the optimizer (e.g., Adam) typically requires more memory. It stores momentum, variance, and other parameters. Optimizing the optimizer can yield better memory efficiency than solely focusing on the model."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                marks: ['strong'],
                                value: 'Memory Components in Training:'
                              },
                              {
                                type: 'span',
                                value:
                                  ' When training a model, the main memory components are model parameters, optimizer states, gradients, and activation memory. Activation memory dynamically changes, which can cause unexpected out-of-memory issues.'
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                marks: ['strong'],
                                value: 'Activation Recomputation:'
                              },
                              {
                                type: 'span',
                                value:
                                  ' To handle memory concerns, some strategies involve recomputing activations rather than storing them. Strategies vary from recomputing everything, selective recomputation based on tensor sizes, or setting a static size threshold for which tensors are stored.'
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                marks: ['strong'],
                                value: 'Distributed Training with Zero:'
                              },
                              {
                                type: 'span',
                                value:
                                  ' The Zero algorithm optimizes distributed training. It scatters parameters, gradients, and optimizer states across multiple GPUs, then gathers them back during each training step. The aim is to shard the states across GPUs, but this increases communication overhead.'
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                marks: ['strong'],
                                value: 'Fine-tuning vs. Training:'
                              },
                              {
                                type: 'span',
                                value:
                                  ' While there are established methods and knowledge about training models, fine-tuning presents its challenges. Aspects like learning rate adjustments and transferring datasets are still areas of exploration.'
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                marks: ['strong'],
                                value: 'Considerations for Scaling:'
                              },
                              {
                                type: 'span',
                                value:
                                  ' The ideal number of GPUs for distributed training varies based on the interconnect speed and the total parameters. Too much sharding can introduce inefficiencies due to synchronization overheads.'
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          'The discussion underscores the intricacies of memory management and the importance of optimizing not just model parameters but also other components, like the optimizer, for efficient deep learning.'
                      }
                    ]
                  }
                ]
              }
            }
          },
          topImages: [
            {
              basename: 'abls9-img3',
              height: 956,
              width: 956,
              filename: 'abls9-img3.png',
              format: 'png',
              alt: null,
              url: 'https://www.datocms-assets.com/101962/1692334505-abls9-img3.png'
            }
          ]
        },
        {
          mainContent: {
            value: {
              schema: 'dast',
              document: {
                type: 'root',
                children: [
                  {
                    type: 'heading',
                    level: 2,
                    children: [
                      {
                        type: 'span',
                        value:
                          'Deciphering 3D Parallelism: A Deep Dive into Advanced AI Model Techniques'
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          'In a conversation between Alessio, Quentin, and Swyx, the concept of 3D parallelism in AI models is explored.'
                      }
                    ]
                  },
                  {
                    type: 'list',
                    style: 'bulleted',
                    children: [
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                marks: ['strong'],
                                value: '3D Parallelism'
                              },
                              { type: 'span', value: ':' }
                            ]
                          },
                          {
                            type: 'list',
                            style: 'numbered',
                            children: [
                              {
                                type: 'listItem',
                                children: [
                                  {
                                    type: 'paragraph',
                                    children: [
                                      {
                                        type: 'span',
                                        marks: ['strong'],
                                        value: 'Data Parallelism'
                                      },
                                      {
                                        type: 'span',
                                        value:
                                          ': Described as having a copy of the model on each GPU. If two GPUs are present, each has a copy of the model that performs a forward and backward pass, after which they synchronize and average the gradients.'
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                type: 'listItem',
                                children: [
                                  {
                                    type: 'paragraph',
                                    children: [
                                      {
                                        type: 'span',
                                        marks: ['strong'],
                                        value: 'Tensor Parallelism'
                                      },
                                      {
                                        type: 'span',
                                        value:
                                          ': This involves splitting the model. If two GPUs are present, the model is split in the middle, with each GPU operating on its specific tensor. Synchronization between GPUs happens only when necessary.'
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                type: 'listItem',
                                children: [
                                  {
                                    type: 'paragraph',
                                    children: [
                                      {
                                        type: 'span',
                                        marks: ['strong'],
                                        value: 'Pipeline Parallelism'
                                      },
                                      {
                                        type: 'span',
                                        value:
                                          ': Illustratively, if there are four layers in the model and four GPUs, each GPU holds one layer. As each GPU finishes its forward pass, it sends its output to the next GPU in line. The process is reminiscent of a pipeline, hence the name.'
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                marks: ['strong'],
                                value: 'Issues & Considerations'
                              },
                              { type: 'span', value: ':' }
                            ]
                          },
                          {
                            type: 'list',
                            style: 'numbered',
                            children: [
                              {
                                type: 'listItem',
                                children: [
                                  {
                                    type: 'paragraph',
                                    children: [
                                      {
                                        type: 'span',
                                        value:
                                          'A potential issue raised is the need for all GPUs to be uniform in their capabilities. Disparity in VRAM between GPUs can lead to bottlenecks. Similarly, having GPUs of varying speeds will lead to synchronization issues, making the system only as fast as the slowest GPU.'
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                type: 'listItem',
                                children: [
                                  {
                                    type: 'paragraph',
                                    children: [
                                      {
                                        type: 'span',
                                        value:
                                          'Quentin cites a real-world example where nodes had varying network switches, resulting in operations moving at the pace of the slowest switch.'
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                type: 'listItem',
                                children: [
                                  {
                                    type: 'paragraph',
                                    children: [
                                      {
                                        type: 'span',
                                        value:
                                          'When asked about the widespread adoption of the techniques discussed, Quentin mentions that while many GPT-based models use this scheme, a pure sharded system seems to be more prevalent as it offers simplicity.'
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                marks: ['strong'],
                                value: 'Future Challenges'
                              },
                              { type: 'span', value: ':' }
                            ]
                          },
                          {
                            type: 'list',
                            style: 'numbered',
                            children: [
                              {
                                type: 'listItem',
                                children: [
                                  {
                                    type: 'paragraph',
                                    children: [
                                      {
                                        type: 'span',
                                        value:
                                          'Adapting the 3D parallel scheme to new model features, especially with the rise of multimodal models which combine different data types like text and vision.'
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                type: 'listItem',
                                children: [
                                  {
                                    type: 'paragraph',
                                    children: [
                                      {
                                        type: 'span',
                                        value:
                                          'Communication becoming a bottleneck, especially when transferring data across nodes.'
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          'By the end, Quentin offers to answer further questions on the topic offline and mentions his swift response time on Discord. The talk concludes with Alessio and Swyx thanking Quentin for his insights.'
                      }
                    ]
                  }
                ]
              }
            }
          },
          topImages: [
            {
              basename: 'abls9-img4',
              height: 956,
              width: 956,
              filename: 'abls9-img4.png',
              format: 'png',
              alt: null,
              url: 'https://www.datocms-assets.com/101962/1692334478-abls9-img4.png'
            }
          ]
        }
      ],
      seo: null
    },
    {
      id: '190259129',
      topics: ['LLM', 'Hardware', 'Summary', 'Edge'],
      title: '',
      slug: 'latent-space-podcast-8-10-23-summary-llms-everywhere-running-70b-models-in-browse',
      authorName: 'Prof. Otto Nomos',
      authorPicture: {
        url: 'https://www.datocms-assets.com/101962/1692842125-profottonomosheadshot.png'
      },
      _publishedAt: '2023-10-05T09:18:37+01:00',
      description:
        "Explore the magic of MLC with Tianqi Chen: deploying 70B models on browsers & iPhones. Dive into XGBoost, TVM's creation, & the future of universal AI deployments. ",
      thumbnail: {
        url: 'https://www.datocms-assets.com/101962/1691894611-screenshot-2023-08-12-at-10-42-43-pm.png'
      },
      contentBlock: [
        {
          mainContent: {
            value: {
              schema: 'dast',
              document: {
                type: 'root',
                children: [
                  {
                    type: 'paragraph',
                    children: [
                      { type: 'span', value: 'Original Link: ' },
                      {
                        url: 'https://www.latent.space/p/llms-everywhere#details',
                        type: 'link',
                        children: [
                          {
                            type: 'span',
                            value:
                              'LLMs Everywhere: Running 70B models in browsers and iPhones using MLC — with Tianqi Chen of CMU / OctoML'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: 'heading',
                    level: 2,
                    children: [{ type: 'span', value: 'Summary' }]
                  },
                  {
                    type: 'heading',
                    level: 3,
                    children: [{ type: 'span', value: 'About TQ and XGBoost' }]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      { type: 'span', value: 'In the recent episode of the ' },
                      {
                        type: 'span',
                        marks: ['emphasis'],
                        value: 'Latent Space'
                      },
                      {
                        type: 'span',
                        value:
                          ' podcast, hosts Alessio and Swyx sat down with Tianqi Chen (TQ), an assistant professor at Carnegie Mellon University and a leading figure in the machine learning community. Tianqi wears many hats, including being associated with Catalyst Group and OctoML, and has a significant footprint in the open-source ecosystem, especially with projects like Apache TVM, XGBoost, and MXNet.'
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          'In a candid conversation, TQ shared that beyond his technical persona, he has a unique hobby of sketching design diagrams in real sketchbooks, chronicling his journey through various projects. These sketches serve as a blueprint for his software projects and provide a tangible record of his thought processes over the years.'
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          'Tianqi’s acclaimed project, XGBoost, came up for discussion, highlighting its origins and unexpected success. Originally designed as an alternative to the rising trend of deep learning models, XGBoost ended up establishing its own niche, particularly for tabular data where tree-based models excel. The discussion gravitated toward the balance and potential amalgamation of tree-based models and deep learning. TQ believes in the lasting relevance of tree-based models, especially considering their natural rules, scalability, and interoperability. The talk wrapped up with a glimpse into the future, hinting at the merging of transformer models and tree-based algorithms for enhanced data processing.'
                      }
                    ]
                  }
                ]
              }
            }
          },
          topImages: [
            {
              basename: 'screenshot-2023-08-12-at-10-42-43-pm',
              height: 548,
              width: 1538,
              filename: 'screenshot-2023-08-12-at-10-42-43-pm.png',
              format: 'png',
              alt: null,
              url: 'https://www.datocms-assets.com/101962/1691894611-screenshot-2023-08-12-at-10-42-43-pm.png'
            }
          ]
        },
        {
          mainContent: {
            value: {
              schema: 'dast',
              document: {
                type: 'root',
                children: [
                  {
                    type: 'heading',
                    level: 2,
                    children: [{ type: 'span', value: 'TVM Compiler, MXNet' }]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          "Alessio brought up Tianqi's development of the TVM compiler framework for models, which was released around the same time as ONNX, seeking clarity on their relationship. Tianqi recalled his history with deep learning, mentioning his work on ImageNet classification using convolutional restricted Boltzmann machines before the emergence of AlexNet. He shared challenges faced while handcrafting NVIDIA CUDA kernels, which took months, only to find the model wasn't highly effective. This experience introduced him to the complexities of optimizing performance on GPUs."
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          'Following his work on XGBoost, Tianqi collaborated on MXNet, which came before frameworks like CAFE and PyTorch. Recognizing the difficulties in optimization for different hardware, Tianqi sought to create a more automated and general solution, leading to the development of TVM. The TVM compiler can intake machine learning programs, apply optimization techniques, and generate low-level code compatible with various backends, including NVIDIA and non-NVIDIA platforms.'
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          "While Tianqi's shift from XGBoost to TVM seemed significant to Alessio, Tianqi clarified his motivation was less about impact and more about enjoying the coding process and addressing challenges. He identified as a problem-solver, and when faced with challenges, he seeks out tools or creates new ones to address them. This approach, he mentioned, is in line with an emerging trend in machine learning systems that consider both algorithmic and system optimizations."
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          "Discussing the community's growth, Tianqi highlighted MLsys, a conference focusing on machine learning systems. Swyx noted Tianqi's involvement in major conferences like ICML and NeurIPS, suggesting that community organization plays a role in his work, to which Tianqi responded affirmatively, noting it's part of his academic responsibilities."
                      }
                    ]
                  }
                ]
              }
            }
          },
          topImages: [
            {
              basename: 'abls3-img1',
              height: 936,
              width: 936,
              filename: 'abls3-img1.png',
              format: 'png',
              alt: null,
              url: 'https://www.datocms-assets.com/101962/1691897144-abls3-img1.png'
            }
          ]
        },
        {
          mainContent: {
            value: {
              schema: 'dast',
              document: {
                type: 'root',
                children: [
                  {
                    type: 'heading',
                    level: 2,
                    children: [{ type: 'span', value: 'MLsys, MCLLM & MLC' }]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          'In a conversation between Swyx, Tianqi, and Alessio, the discussion revolves around MLsys, MLCLLM, and machine learning compilation (MLC). Here are the key takeaways:'
                      }
                    ]
                  },
                  {
                    type: 'list',
                    style: 'numbered',
                    children: [
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                marks: ['strong'],
                                value: 'MLsys and MLCLLM'
                              },
                              {
                                type: 'span',
                                value:
                                  ": Swyx notes Tianqi's recent venture in MLsys and its integration with MLCLLM on mobile phones. He mentions using Llama 2 and Vicuña but seeks clarity about other models on offer."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                marks: ['strong'],
                                value: "Tianqi's MLC Journey"
                              },
                              {
                                type: 'span',
                                value:
                                  ": Tianqi explains his venture into MLC as an evolution from their initial project TVM. The main goal is to build an effective machine learning compiler. From the experience gained with TVM, they embarked on a second iteration named TVM Unity. MLCLLM is essentially an MLC initiative to develop machine learning compilation technology that can be applied widely. One achievement is getting machine learning models to run on phones and other universal platforms, including Apple's M2 Macs."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                marks: ['strong'],
                                value: 'Integration with PyTorch'
                              },
                              {
                                type: 'span',
                                value:
                                  ": Addressing Swyx's query about model integrations, Tianqi highlights that while many models are built in PyTorch, the aim is to bring them into the TVM's program representation called TVM script. The goal is to optimize the models across various platforms and ensure they're portable and efficient."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                marks: ['strong'],
                                value: 'MLC as a Discipline'
                              },
                              {
                                type: 'span',
                                value:
                                  ": Swyx points out that while many people specialize in compilers, Tianqi's niche in MLC seems innovative. Tianqi believes machine learning compilation will grow as a field, drawing inspiration from existing compiler optimizations and incorporating knowledge from machine learning and systems."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                marks: ['strong'],
                                value: 'Optimization and Libraries'
                              },
                              {
                                type: 'span',
                                value:
                                  ": Discussing the limitations of relying on existing libraries for optimization, Tianqi elaborates on TVM's approach, which combines using available libraries and automatically generating libraries. This method facilitates support for less well-supported hardware."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                marks: ['strong'],
                                value: 'Core Optimization Techniques'
                              },
                              {
                                type: 'span',
                                value:
                                  ': Tianqi touches upon four essential optimization techniques: Kernel fusion (combining operations smartly), memory planning (allocating memory efficiently), loop transformation (ensuring code runs efficiently), and weight quantization (reducing memory usage). He explains that these methods allow for both efficiency and portability in running machine learning models across various platforms.'
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          'In essence, the conversation underscores the significance of MLC and the evolution of platforms and optimization techniques to make machine learning models more universally applicable and efficient.'
                      }
                    ]
                  }
                ]
              }
            }
          },
          topImages: [
            {
              basename: 'abls3-img2',
              height: 936,
              width: 936,
              filename: 'abls3-img2.png',
              format: 'png',
              alt: null,
              url: 'https://www.datocms-assets.com/101962/1691897165-abls3-img2.png'
            }
          ]
        },
        {
          mainContent: {
            value: {
              schema: 'dast',
              document: {
                type: 'root',
                children: [
                  {
                    type: 'heading',
                    level: 2,
                    children: [{ type: 'span', value: 'LLM in Browser' }]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          "In a discussion with Swyx, Tianqi sheds light on the emerging trend of academics, like himself, transitioning from solely publishing insights to building tangible products, such as open-source projects and applications. Tianqi believes this hands-on approach enables academics to confront real-world problems directly and to ensure that their research provides immediate value to the public. In his field, machine learning systems, Tianqi sees the potential of deploying these systems into users' hands to drive innovation and solve genuine problems."
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          "He elaborates on his experience with running a 70 billion parameter model in a browser, specifically highlighting the challenges and requirements of executing such a feat. Using the latest MacBook with an M2 Max and WebGPU technology, Tianqi's team was able to successfully run the model, showcasing the possibility of operating powerful models on consumer devices without needing installations. He envisions diverse application scenarios, including hybrid models that run both on-edge and server components."
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          'Alessio queries about browser model integrations, and Tianqi introduces an NPM package, WebILM, which allows developers to embed their models onto web apps. Additionally, an OpenAI compatible REST API is under development to streamline integration further.'
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          'Lastly, Swyx touches upon the challenges of model downloads, wherein Tianqi mentions the Chrome cache system which prevents redundant downloads for similar web apps. When asked about the proliferation of local model projects, Tianqi emphasizes the importance of enhancing API capabilities and encourages a collaborative ecosystem that focuses on universal deployment.'
                      }
                    ]
                  }
                ]
              }
            }
          },
          topImages: [
            {
              basename: 'abls3-img3',
              height: 936,
              width: 936,
              filename: 'abls3-img3.png',
              format: 'png',
              alt: null,
              url: 'https://www.datocms-assets.com/101962/1691897179-abls3-img3.png'
            }
          ]
        },
        {
          mainContent: {
            value: {
              schema: 'dast',
              document: {
                type: 'root',
                children: [
                  {
                    type: 'heading',
                    level: 2,
                    children: [{ type: 'span', value: 'Octomel & Conclusion' }]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          "\nAlessio initiates the conversation by discussing Tianqi's involvement as the co-founder of Octomel and its recent release of OctoAI, a compute service focused on model runtime optimization. He inquires about Octomel's evolution from being a traditional MLOps tool to its current stance with OctoAI, particularly in the context of the market's shift towards pre-trained generative models."
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          'Tianqi explains that they identified challenges related to scalability, integration, and optimization. As the market shifts towards generative AI, OctoAI aims to simplify the process and alleviate the complexity for users, allowing them to focus on their models while Octomel handles the underlying infrastructure.'
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          'Alessio points out that a significant bottleneck in the market is around the execution of AI models. Earlier, the challenge was around building models due to a lack of talent, but now, with numerous models available, the challenge lies in running them efficiently.'
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          'Tianqi underscores the nuances associated with "running" AI models. Given the diversity in hardware availability and ever-changing user requests, execution challenges have multiplied. Efficiently managing model locations and ensuring proximity to the execution environment are paramount. The future, according to Tianqi, involves leveraging all available hardware to reduce costs and optimize the interplay between edge devices and the cloud.'
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          'When Alessio probes about the challenges of abstracting hardware details from end users, Tianqi emphasizes the importance of compatibility with various hardware and the ongoing iterative process of refining their product based on user needs and feedback.'
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          'Swyx steers the conversation towards the broader AI landscape, where Tianqi shares his enthusiasm for open-source projects, especially those that champion inter-model interactions, and the prospect of a diverse ecosystem of AI agents.'
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          'Swyx then inquires about potential architectures succeeding transformers. Tianqi mentions models like RWKV and other recurrent networks integrated with transformers, emphasizing the ongoing growth in the model space.'
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          'In the lightning round, Tianqi reveals his surprise at the swift emergence of conversational chatbots. When questioned about the most intriguing unsolved question in AI, he expresses his fascination with continuous learning and lifelong learning for AI.'
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          'As a final takeaway, Tianqi encourages listeners to adopt a holistic approach when building AI applications. A successful AI system demands the fusion of algorithms, system optimizations, and data curations.'
                      }
                    ]
                  }
                ]
              }
            }
          },
          topImages: [
            {
              basename: 'abls3-img4',
              height: 936,
              width: 936,
              filename: 'abls3-img4.png',
              format: 'png',
              alt: null,
              url: 'https://www.datocms-assets.com/101962/1691897193-abls3-img4.png'
            }
          ]
        }
      ],
      seo: null
    },
    {
      id: '190259087',
      topics: ['Summary', 'LLM', 'Code', 'Open Source', 'Small Models'],
      title: '',
      slug: 'latent-space-podcast-8-4-23-summary-latent-space-x-ai-breakdown-crossover-pod',
      authorName: 'Prof. Otto Nomos',
      authorPicture: {
        url: 'https://www.datocms-assets.com/101962/1692842125-profottonomosheadshot.png'
      },
      _publishedAt: '2023-10-05T09:16:33+01:00',
      description:
        'Join AI Breakdown & Latent Space for the summer AI tech roundup: Dive into GPT4.5, Llama 2, AI tools, the rising AI engineer, and more!',
      thumbnail: {
        url: 'https://www.datocms-assets.com/101962/1691539617-screenshot-2023-08-08-at-8-02-52-pm.png'
      },
      contentBlock: [
        {
          mainContent: {
            value: {
              schema: 'dast',
              document: {
                type: 'root',
                children: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        marks: ['strong'],
                        value: 'Original Podcast Link: '
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        url: 'https://www.latent.space/p/breakdown#details',
                        type: 'link',
                        children: [
                          {
                            type: 'span',
                            value:
                              '[AI Breakdown] Summer AI Technical Roundup: a Latent Space x AI Breakdown crossover pod!'
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: 'heading',
                    level: 2,
                    children: [{ type: 'span', value: 'Podcast Summary' }]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        marks: ['strong'],
                        value: '[0:00 - 11:51]'
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        marks: ['strong'],
                        value: 'Agenda and Introduction:'
                      }
                    ]
                  },
                  {
                    type: 'list',
                    style: 'bulleted',
                    children: [
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                value:
                                  'An initial exchange of pleasantries with participants expressing their excitement about the session.'
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                value:
                                  "Recognition that the AI audience is diverse, comprising both technical experts in the field and those who are non-technical but keenly aware of the rapid developments in AI. There's a strong interest in understanding the recent trends and major events in AI over the past month, particularly in July."
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        marks: ['strong'],
                        value: 'Discussion of Code Interpreter from OpenAI:'
                      }
                    ]
                  },
                  {
                    type: 'list',
                    style: 'bulleted',
                    children: [
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                value:
                                  'Code Interpreter is initially presented as a chat GPT plugin but has functionalities closer to GPT 4.5. The significant difference it offers from previous models, like the chat GPT, makes it worth noting.'
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                value:
                                  "The launch of the Code Interpreter wasn't heavily publicized by OpenAI but has garnered attention for its capabilities, which seem to surpass those of GPT-4. Some speculate it's a step forward but not officially labeled to avoid potential controversies."
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        marks: ['strong'],
                        value: 'Enhancements in GPT 4.5:'
                      }
                    ]
                  },
                  {
                    type: 'list',
                    style: 'bulleted',
                    children: [
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                value:
                                  "Code Interpreter handles non-coding queries and diversifies ChatGPT's coding support."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                value:
                                  'While previous models struggled with direct mathematical questions due to how numbers are tokenized, the Code Interpreter overcomes this by focusing on code that can answer such questions.'
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                value:
                                  'It caters not just to developers but also non-technical individuals, offering solutions to problems akin to a junior developer or analyst.'
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                value:
                                  'The significant distinction between GPT 4.5 and its predecessors is its capability to handle coding tasks effectively.'
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        marks: ['strong'],
                        value: 'Shift in AI Development Focus:'
                      }
                    ]
                  },
                  {
                    type: 'list',
                    style: 'bulleted',
                    children: [
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                value:
                                  'The shift from simply using larger datasets for training to focusing on inference time optimizations marks a change in AI development. This is believed to be the direction towards AGI (Artificial General Intelligence).'
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                value:
                                  "OpenAI's origins in gaming AI and the use of reinforcement learning environments hinted at this trend, where the AI would vary its inference time based on problem complexity."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                value:
                                  'GPT 4.5, particularly with the Code Interpreter, is viewed as an evolution that incorporates tools to enhance its capabilities. It is compared to humans evolving and then using tools to achieve tasks that were previously challenging.'
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                value:
                                  'Overall, the development and functionality of Code Interpreter represent a shift in AI capabilities, allowing the model to not just be bigger but smarter in its operations.'
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            }
          },
          topImages: [
            {
              basename: 'screenshot-2023-08-08-at-8-02-52-pm',
              height: 558,
              width: 1578,
              filename: 'screenshot-2023-08-08-at-8-02-52-pm.png',
              format: 'png',
              alt: null,
              url: 'https://www.datocms-assets.com/101962/1691539617-screenshot-2023-08-08-at-8-02-52-pm.png'
            }
          ]
        },
        {
          mainContent: {
            value: {
              schema: 'dast',
              document: {
                type: 'root',
                children: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        marks: ['strong'],
                        value:
                          '[11:51 - 19:36]\nPerformance concerns about GPT4: '
                      }
                    ]
                  },
                  {
                    type: 'list',
                    style: 'bulleted',
                    children: [
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                value:
                                  "There's been speculation and research indicating that GPT4's performance might have deteriorated over time or has been intentionally nerfed."
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        marks: ['strong'],
                        value: 'Challenges in Evaluation:'
                      }
                    ]
                  },
                  {
                    type: 'list',
                    style: 'bulleted',
                    children: [
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                value:
                                  'Evaluating the effectiveness of models like GPT4 is difficult, especially for open-ended tasks.'
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                value:
                                  'Examples of evaluation include assessing if code suggestions in programs like Co-pilot are maintained over time.'
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                value:
                                  "There's ambiguity in evaluations: e.g., changes in formatting might not necessarily indicate the model's inefficiency."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                value:
                                  "With reinforcement learning, it's hard to determine what the model is anchoring on, leading to inconsistencies."
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        marks: ['strong'],
                        value: 'Pressure on OpenAI:'
                      }
                    ]
                  },
                  {
                    type: 'list',
                    style: 'bulleted',
                    children: [
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                value:
                                  'OpenAI faces the challenge of ensuring safety and providing consistent outputs, especially as they roll out updates.'
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                value:
                                  'There\'s a suggestion to "version lock" the model to better understand its evolution and changes.'
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        marks: ['strong'],
                        value: 'Transition of OpenAI:'
                      }
                    ]
                  },
                  {
                    type: 'list',
                    style: 'bulleted',
                    children: [
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                value:
                                  'OpenAI has evolved from a research lab to a product/infrastructure company, creating challenges in balancing research evolution and product reliability.'
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                value:
                                  "There's an identified communication challenge within OpenAI: one spokesperson suggests models are static, while another suggests they're updated frequently. This creates confusion among users."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                value:
                                  "There's a comparison to Facebook's evolution, where even small algorithmic changes had immediate feedback and ramifications, but OpenAI doesn't receive the same immediate feedback."
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        marks: ['strong'],
                        value: 'Feedback Challenges:'
                      }
                    ]
                  },
                  {
                    type: 'list',
                    style: 'bulleted',
                    children: [
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                value:
                                  'Unlike platforms like Facebook, which could gauge success through metrics like click-through rates, OpenAI has limited immediate feedback mechanisms.'
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        marks: ['strong'],
                        value: 'Custom Instructions Feature:'
                      }
                    ]
                  },
                  {
                    type: 'list',
                    style: 'bulleted',
                    children: [
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                value:
                                  'OpenAI introduced a "custom instructions" feature that allows users to personalize GPT-4 more effectively.'
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                value:
                                  "This feature existed in OpenAI's playground and other platforms like Perplexity AI and Character AI. So, while significant for GPT users, it's not a brand-new capability in the AI chatbot sphere."
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            }
          },
          topImages: [
            {
              basename: 'abls1-img1',
              height: 936,
              width: 936,
              filename: 'abls1-img1.png',
              format: 'png',
              alt: null,
              url: 'https://www.datocms-assets.com/101962/1691540939-abls1-img1.png'
            }
          ]
        },
        {
          mainContent: {
            value: {
              schema: 'dast',
              document: {
                type: 'root',
                children: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        marks: ['strong'],
                        value: '[19:36 - 32:04]\n'
                      },
                      {
                        type: 'span',
                        value:
                          "Facebook's release of Llama 2 represents a significant step in AI development, symbolizing a shift in the balance between open-source and commercial models. Here's a comprehensive summary of the details and implications from the transcript:"
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        marks: ['strong'],
                        value: 'Technical Overview'
                      },
                      { type: 'span', value: ': ' }
                    ]
                  },
                  {
                    type: 'list',
                    style: 'bulleted',
                    children: [
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                value:
                                  'Llama 2 is described as the first fully commercially usable GPT-3.5 equivalent model. It can run on private infrastructure, opening new possibilities for government, healthcare, and financial sectors, and users can fine-tune it with full control over the internals.'
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        marks: ['strong'],
                        value: 'Open-Source Debate'
                      },
                      { type: 'span', value: ': ' }
                    ]
                  },
                  {
                    type: 'list',
                    style: 'bulleted',
                    children: [
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                value:
                                  'Despite not being fully open-source, Llama 2 has been generously shared with the community. The debate around its status has led to reflections on the need for better labeling and definition for models like this. An estimated $15 to $20 million has been effectively donated to the community, with many building on top of it.'
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        marks: ['strong'],
                        value: 'Shift in Value'
                      },
                      { type: 'span', value: ': ' }
                    ]
                  },
                  {
                    type: 'list',
                    style: 'bulleted',
                    children: [
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                value:
                                  "Llama 2 reflects a change in AI's relative value, with data becoming more valuable than compute. It marks a reversal in open-source culture, where the sequence of openness has shifted. There's a growing trend to restrict data while still providing access to models, indicating a more protective stance towards proprietary data."
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        marks: ['strong'],
                        value: 'Legal and Ethical Considerations'
                      },
                      { type: 'span', value: ': ' }
                    ]
                  },
                  {
                    type: 'list',
                    style: 'bulleted',
                    children: [
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                value:
                                  "There's a growing intrigue and concern around regulatory pressure and copyright issues in the AI space. Instances of training on copyrighted data like books have stirred debate on Twitter, highlighting the blurry lines around what constitutes fair use."
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        marks: ['strong'],
                        value: 'Impact on Business and Development'
                      },
                      { type: 'span', value: ': ' }
                    ]
                  },
                  {
                    type: 'list',
                    style: 'bulleted',
                    children: [
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                value:
                                  'Llama 2 has significantly impacted the evolution of the AI space and business strategies. Companies are now less reliant on startups for AI solutions, as technical teams can spin up their versions using open-source tools. It has raised the bar for what vendors must offer, shifting competition towards other areas of AI application production.'
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        marks: ['strong'],
                        value: 'Open-Source vs Commercial Models'
                      },
                      { type: 'span', value: ': ' }
                    ]
                  },
                  {
                    type: 'list',
                    style: 'bulleted',
                    children: [
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                value:
                                  'The discussion also brings to light the subtle nuances between truly open-source models and those that are labeled as such but come with certain restrictions. The conversation around Llama 2 has served as a focal point for a broader conversation about how the AI community navigates the balance between openness and commercial interests.'
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        marks: ['strong'],
                        value: 'Cultural Shift'
                      },
                      { type: 'span', value: ': ' }
                    ]
                  },
                  {
                    type: 'list',
                    style: 'bulleted',
                    children: [
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                value:
                                  "There's a cultural shift in how open-source models are handled, with a focus on functional use over strict definitions. The availability of tools like Llama 2 has changed the landscape, demanding more from vendors and reshaping how both startups and large companies approach AI development."
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          'In conclusion, the introduction of Llama 2 has ignited conversations and changes that reach far beyond its technical capabilities. It has become a symbol of the evolving dynamics in AI, marking a period of transition where the boundaries between open-source, commercial interests, regulation, and ethics are being actively explored and redefined.'
                      }
                    ]
                  }
                ]
              }
            }
          },
          topImages: [
            {
              basename: 'abls1-img2',
              height: 936,
              width: 936,
              filename: 'abls1-img2.png',
              format: 'png',
              alt: null,
              url: 'https://www.datocms-assets.com/101962/1691540952-abls1-img2.png'
            }
          ]
        },
        {
          mainContent: {
            value: {
              schema: 'dast',
              document: {
                type: 'root',
                children: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        marks: ['strong'],
                        value: '[32:04 - 44:40]\n'
                      },
                      { type: 'span', value: 'Perspective on AI developments.' }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        marks: ['strong'],
                        value: 'Highlighted Developments'
                      },
                      { type: 'span', value: ':' }
                    ]
                  },
                  {
                    type: 'list',
                    style: 'bulleted',
                    children: [
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                marks: ['strong'],
                                value: 'Context Window Expansion'
                              },
                              {
                                type: 'span',
                                value:
                                  ': A major change that allows for improved handling of data.'
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                marks: ['strong'],
                                value: "MLC Team's Experiment"
                              },
                              {
                                type: 'span',
                                value:
                                  ': The team wrapped llama two to run on MacBook GPUs. This is interesting because it bridges the gap between using token-based AI services and unlimited local usage.'
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                marks: ['strong'],
                                value: 'Open Source Creativity'
                              },
                              {
                                type: 'span',
                                value:
                                  ': Open Source offers unpredictable potential. The "AI girlfriend economy" is a booming, less-talked-about sector with millions of users. It also brings forth debates on societal perspectives of such technology.'
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                marks: ['strong'],
                                value: 'Significance of AI in Relationships'
                              },
                              { type: 'span', value: ':' }
                            ]
                          },
                          {
                            type: 'list',
                            style: 'bulleted',
                            children: [
                              {
                                type: 'listItem',
                                children: [
                                  {
                                    type: 'paragraph',
                                    children: [
                                      {
                                        type: 'span',
                                        value:
                                          'AI relationships might play a crucial role in addressing loneliness in the future, potentially reducing adverse societal events.'
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                type: 'listItem',
                                children: [
                                  {
                                    type: 'paragraph',
                                    children: [
                                      {
                                        type: 'span',
                                        value:
                                          'A prediction is made that future generations will find AI relationships normal, leading to generational debates.'
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                type: 'listItem',
                                children: [
                                  {
                                    type: 'paragraph',
                                    children: [
                                      {
                                        type: 'span',
                                        value:
                                          'Matthew McConaughey discussed the idea of computers assisting humans in interpersonal relationships. These AI tools can help individuals learn and better their interaction with others.'
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        marks: ['strong'],
                        value: 'Discussion on Claude 2 & Anthropic'
                      },
                      { type: 'span', value: ':' }
                    ]
                  },
                  {
                    type: 'list',
                    style: 'bulleted',
                    children: [
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                marks: ['strong'],
                                value: 'Claude 2'
                              },
                              {
                                type: 'span',
                                value:
                                  ': Considered significant for its longer context window and its utility in aiding developers.'
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                marks: ['strong'],
                                value: 'Anthropic'
                              },
                              {
                                type: 'span',
                                value:
                                  ": Positioned as a safer alternative to OpenAI, it has made a mark in the competitive CI landscape. While it has been overshadowed by giants like OpenAI, there's a growing appreciation in the developer community for its potential."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                marks: ['strong'],
                                value: 'Usage Recommendations'
                              },
                              {
                                type: 'span',
                                value:
                                  ': Suggestion made to run chats side by side on platforms like Tragicia, Claude, and Llama two to derive maximum benefits.'
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                marks: ['strong'],
                                value: 'Context Limitations'
                              },
                              {
                                type: 'span',
                                value:
                                  ": There's a discussion on whether too much context might be counterproductive. Models might retrieve data better from the start or end of a context window, but information in the middle might get lost."
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          "The conversation delves into recent AI developments, their implications, and societal perspectives on AI's role in human relationships."
                      }
                    ]
                  }
                ]
              }
            }
          },
          topImages: [
            {
              basename: 'abls1-img3b',
              height: 936,
              width: 936,
              filename: 'abls1-img3b.png',
              format: 'png',
              alt: null,
              url: 'https://www.datocms-assets.com/101962/1691540966-abls1-img3b.png'
            }
          ]
        },
        {
          mainContent: {
            value: {
              schema: 'dast',
              document: {
                type: 'root',
                children: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        marks: ['strong'],
                        value: '[44:40 - 58:37]'
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        marks: ['strong'],
                        value: 'Google Bard Updates:'
                      }
                    ]
                  },
                  {
                    type: 'list',
                    style: 'bulleted',
                    children: [
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                value:
                                  'Mid-month, Google Bard released several updates focused largely on business.'
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                value: 'Added support for more languages.'
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                value:
                                  'The main feature they highlighted was advancements in image recognition, signaling a move towards multimodality.'
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                value:
                                  'Some participants feel Google needs to enhance product level offerings, suggesting integrating Bard with tools like Google Maps.'
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                value:
                                  "Despite Bard's efforts in multi-modality, there's been criticism, with some feeling the updates aren't as innovative as they should be."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                value:
                                  'Bard did, however, achieve a general multimodal availability before GPT-4, where one can upload an image and have Bard describe it.'
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                value:
                                  "Some feel Google's consistency in product updates is lacking, referencing Google Adobe's discontinuation and other failed promises."
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        marks: ['strong'],
                        value: 'AI Trends in Developer Community:'
                      }
                    ]
                  },
                  {
                    type: 'list',
                    style: 'bulleted',
                    children: [
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                value:
                                  'Interest in auto GPT-like systems, mentioning GBT Engineer and Multi-on.'
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                value:
                                  "Agent technology hasn't died down; there's a push towards making agents more usable."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                value:
                                  'A rising trend of evaluation companies, which monitor the success of AI models and versions.'
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                value:
                                  "There's a shift from generic agent models to verticalized agents, combining industry-specific knowledge with AI capabilities."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                value:
                                  "SDXL, a text-to-image technology, has been on the horizon but hasn't gained the traction it should have."
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                value:
                                  'Character AI is becoming popular, potentially laying the foundation for AI-native social media platforms. These platforms could serialize personality and intelligence, perhaps hinting at "mind uploading."'
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                value:
                                  'Reports suggest Meta (formerly Facebook) might introduce AI personas.'
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        marks: ['strong'],
                        value: 'Predictions for August 2023:'
                      }
                    ]
                  },
                  {
                    type: 'list',
                    style: 'bulleted',
                    children: [
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                value:
                                  'Expect more public discourse on open-source models being used in production environments.'
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                value:
                                  'Despite current perceptions, some big companies might be transitioning from OpenAI models to open-source models.'
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'listItem',
                        children: [
                          {
                            type: 'paragraph',
                            children: [
                              {
                                type: 'span',
                                value:
                                  'August might be a preparation month, with bigger announcements coming later in the year.'
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'span',
                        value:
                          "The discussion appears to revolve around the rapid advancements in AI, with a specific focus on Google Bard's updates and the broader trends in the AI development community. There is an evident excitement and anticipation for what's to come in the AI landscape, especially as it begins to merge with other industries and consumer applications."
                      }
                    ]
                  }
                ]
              }
            }
          },
          topImages: [
            {
              basename: 'abls1-img4',
              height: 936,
              width: 936,
              filename: 'abls1-img4.png',
              format: 'png',
              alt: null,
              url: 'https://www.datocms-assets.com/101962/1691540978-abls1-img4.png'
            }
          ]
        }
      ],
      seo: null
    }
  ]
}
