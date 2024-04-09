import { TestnetMBOTSPL, TokenContractData } from 'smartsale-contracts'

export const projects: Project[] = [
  {
    id: 1,
    title: 'bitcash',
    slug: 'bitcash',
    pitch: 'P2P exchange for local currency stablecoins. P2P exchange for local currency stablecoins. P2P exchange for local currency stablecoins. P2P exchange for local currency stablecoins',
    fundraiseGoal: '$200,000',
    maxAllocation: '$10,000',
    heroImage: '/images/projects/bitcash.png',
    badgeText: 'PRE-SALE ACTIVE',
    linkPath: '/bitcash',
    token: TestnetMBOTSPL,
    auctionId: 9,
    auctionClosed: true,
    twitterUsername: 'bitcashorg',
    telegramGroup: 'bitcashorg',
    discordServer: 'a4gwhT9G',
    content: {
      highlights: {
        title: 'Highlights',
        content: [
          [
            'Democratizing Access to Technology: bitcash aims to make cryptocurrency, AI, and decentralized finance accessible and beneficial for everyone, not just the technically savvy or financially affluent.',
            'Innovative Platform Design: Our platform features a user-friendly design, focusing on minimalism and functionality, enhanced by cutting-edge technologies like webauthn, account abstraction, and key recovery to significantly improve user experience.',
            'Sustainable Tokenomics: Inspired by proven equity shareholder models, our tokenomics are designed to provide a sustainable utility token system, ensuring fair and equitable participation and rewards for all stakeholders.',
            'Non-Profit L1 Blockchain: bitcash is developing a non-profit base layer L1 blockchain, characterized by one of the fairest token distributions to all unique humans, ensuring equitable access to our services.',
            'AI Launchpad Platform: Our launchpad platform is specifically designed for AI startups, offering tokenization, organization, and financial services to support and propel innovation in the AI space.',
            'Open Collaboration and Transparency: bitcash champions an open-source culture, building in public to foster a global community of innovators and ensuring sustainable incentives and collective intelligence.',
            'Comprehensive Security and Compliance: We are committed to high standards of regulatory compliance and security, implementing rigorous KYC and AML policies, and utilizing advanced security measures to protect our platform and users.',
            'Global Inclusively and Empowerment: Our mission is to harness the potential of blockchain and AI to empower billions around the world, creating solutions that are not only accessible but also transformative and meaningful.',
            'Focus on Human Connection: In anticipation of a future dominated by AI, bitcash aims to reinforce the value of authentic human connections, ensuring that technology serves to elevate and empower every individual.',
            'Building the Future Digital Economy: bitcash envisions establishing a new global economy where technology and finance serve humanity, guided by ethical principles and the collective well-being of the global community.',
          ],
          ['Join us on this transformative journey with bitcash, where we\'re not just preparing for the next decade but building the foundation for the future of digital economies.']
        ]
      },
      product: {
        title: 'Product Overview',
        content: [
          ['At the heart of bitcash lies a suite of innovative solutions designed to make cryptocurrency, AI, and decentralized finance (DeFi) not only accessible but intuitive and beneficial for everyone. Our products are crafted with the everyday user in mind, ensuring that the revolutionary potentials of these technologies are within reach for all, irrespective of their technical know-how. Here\'s a glimpse into the core offerings that define the bitcash ecosystem: '],
          ['bitcash Wallet'],
          [
            'Passwordless Webauthn System: Revolutionizing Web3 interactions with a system that secures private keys within the device\'s secure element, simplifying user experience without compromising security.',
            'Native Account Abstraction: Enhances user experience on the EOS blockchain, eliminating the complexity traditionally associated with blockchain transactions.',
            'Default Account Recovery: Provides users with a fail-safe mechanism to regain access through identity verification, with plans for a decentralized multi-factor recovery system.'
          ],
          ['P2P On-Ramp'],
          [
            'Facilitating Direct Exchanges: Connects users directly, enabling the exchange of local currency stablecoins (e.g., bitUSD, bitEUR, bitYEN, bitNGN) through traditional banking or digital wallet transfers, democratizing entry into the crypto ecosystem.'
          ],
          ['Forex and Local Stablecoins'],
          [
            'Real-time Exchange Rates: Offers local stablecoins over-collateralized with USDT, supported by an on-chain forex oracle, allowing for seamless currency exchanges and transactions in users\' local currency.'
          ],
          ['DAO Tools for Efficient Organization'],
          [
            'dBoard for Collaborative Decision-making: A comprehensive platform designed for DAOs, companies, and non-profits, facilitating streamlined collaboration, governance, and community engagement.'
          ],
          ['bitlauncher - AI Launchpad'],
          [
            'Innovative Fundraising and Organization: Utilizes the Gnosis Auction solidity smart contract on the EOS EVM, offering AI startups a secure and efficient platform to launch, grow, and access a global pool of investors.'
          ],
          ['Security and Compliance'],
          [
            'Robust Regulatory Adherence and Security Measures: bitcash is committed to upholding the highest standards of compliance and security, incorporating rigorous KYC and AML policies, regular security audits, and smart contract audits to ensure a secure and trustworthy platform.'
          ],
          ['Join the bitcash Ecosystem'],
          [
            'Our mission extends beyond product development; we are building a community. Whether you are a potential user curious about the benefits of cryptocurrency, a developer eager to contribute to groundbreaking projects, an investor looking for pioneering ventures in AI and DeFi, or simply someone passionate about the future of digital finance, bitcash offers a spectrum of opportunities to get involved, contribute, and grow with us.',
            'Explore the bitcash ecosystem today and be a part of redefining the global economy for the digital era. Join us on this transformative journey towards a future where technology and finance are accessible, equitable, and instrumental in fostering human connection and prosperity.'
          ]
        ]
      },
      problem: {
        title: 'Problem Statement',
        content: [
          [
            'In today\'s rapidly evolving digital landscape, the revolutionary potentials of cryptocurrency, artificial intelligence (AI), and decentralized finance (DeFi) are often gated behind complex technical barriers. This has led to a stark divide where the benefits of these innovations are concentrated in the hands of a few—those with technical expertise, sizable capital, and access to cutting-edge tools. The vast majority, however, remain bystanders in the shadow of this digital revolution.',
            'At Bitcash, we recognize that while technology strides forward, it often leaves behind the very people it seeks to empower. Billions around the globe face the following challenges:',
          ],
          [
            'Complexity Barrier: The intricate technical nature of current blockchain and cryptocurrency solutions is daunting for the average person, deterring widespread adoption.',
            'Accessibility Issues: Many users across the world lack the tools or platforms that can simplify the integration of AI and DeFi into their daily lives, making these technologies feel remote and unattainable.',
            'Inequality in Financial Tools: The current financial system is skewed towards the financially literate and affluent, making it difficult for the underbanked or those without access to traditional banking services to leverage the benefits of digital finance.',
            'Economic Disparity: Cryptocurrencies have created new avenues for investment and wealth accumulation, but these are often only navigable for those already in the know or with sufficient resources.',
            'Lack of Integration: There is a pressing need for a unified platform that seamlessly combines AI capabilities with blockchain and DeFi, offering a cohesive and simplified user experience.',
          ]
        ]
      },
      solution: {
        title: 'Solution Statement',
        content: [
          [
            'At Bitcash, we believe the future of our global economy hinges on the seamless integration of cryptocurrency, AI, and decentralized finance into everyday life. Our platform stands as a testament to the possible—where innovation is not only about pioneering technology but also about creating real-world solutions that are inclusive, empowering, and transformative.',
            'Here\'s how Bitcash addresses the challenges outlined in our Problem Statement:'
          ],
          [
            'Simplified User Experience: By designing an intuitive user interface, Bitcash removes the complexity of traditional blockchain interactions. Our passwordless webauthn system, account abstraction, and user-friendly wallet are built with the everyday user in mind, ensuring that anyone, regardless of technical expertise, can safely and easily access the world of cryptocurrency and AI.',
            'Accessibility and Inclusion: Bitcash\'s peer-to-peer on-ramp and local stablecoins enable access to digital economies across global markets. Our platform breaks down financial barriers, offering tools that foster inclusivity and provide a springboard for financial growth and stability.',
            'Equitable Financial Systems: Our non-profit L1 blockchain network aims to distribute tokens to every unique individual, offering a fairer financial future. This revolutionary model creates a dividend for life, heralding a new era of equitable wealth distribution.',
            'Integration and Innovation: Bitcash isn\'t just a platform; it\'s a launchpad for AI startups, a breeding ground for DeFi applications, and a holistic solution for users and developers. With our innovative bitLauncher and dBoard, we foster a dynamic ecosystem where anyone can contribute to and benefit from cutting-edge AI developments and decentralized financial products.',
            'Community and Growth: We build in public and invite collaboration, ensuring our community\'s intelligence and creativity drive our ecosystem.From grassroots initiatives to global hackathons, Bitcash is a platform for collective innovation, harnessing the collective power of our users to guide our growth strategy.',
            'Bitcash\'s solution extends beyond technology; it is about building a future that prioritizes the human element within the digital domain. Our commitment to security, regulatory compliance, and user education ensures that we\'re not only developing a platform but also nurturing a community that can thrive within the new digital economy.',
            'Join us on our mission to build a future where the benefits of blockchain and AI are universally accessible, where finance is a tool for empowerment, and where the global economy reflects the diversity and potential of its participants.With Bitcash, the foundations of a new global economy are within reach.Together, let\'s create a world where innovation is inclusive, growth is shared, and technology serves humanity.',
          ],
        ]
      },
      businessModel: {
        title: 'Business Model',
        content: [
          [
            'Bitcash presents a robust and pioneering business model designed to foster an inclusive and expansive global economy, anchored by the seamless integration of cryptocurrency, AI, and decentralized finance (DeFi). Our model is constructed on the premise of equitable access, shared prosperity, and community-driven innovation.',
            'Here\'s a breakdown of the Bitcash business model: '
          ],
          [
            'Utility Token System: Bitcash introduces a utility token that serves as the central cog in the ecosystem\'s engine.This token is the currency for all transactions within the platform, driving the adoption and utility of Bitcash services.Our mint- and - burn mechanism ensures that token supply aligns with the ecosystem\'s growth, creating a dynamic equilibrium that benefits all stakeholders.',
            'Diversified Revenue Streams: Our platform generates revenue through a suite of services including transaction fees, p2p exchange margins, and the provision of AI- driven DeFi applications.We are also pioneering the \'bitlauncher\' launchpad, which provides a tokenized fundraising platform for AI startups, earning a fee from successful auctions and fostering a new wave of AI innovation.',
            'Community-Centric Growth: Central to our model is the emphasis on collective growth.By inviting open - source development and contributions, we ensure that the platform evolves with the direct input of its users. This communal approach not only incentivizes contributions but also creates a self-sustaining cycle of innovation and improvement.',
            'Non-Profit L1 Blockchain: The development of our non-profit L1 blockchain facilitates a fair and decentralized distribution of tokens.This is not just a technical underpinning; it\'s a social commitment to ensure that the benefits of blockchain are shared by all, fostering an economy where every individual has a stake.',
            'Ethical Token Distribution: Our token distribution mimics the best practices of equity sharing in traditional businesses, rewarding contributions transparently and equitably.By valuing contributions in real - time, we avoid speculation and overvaluation, grounding our tokenomics in real value created for and by the community.',
            'Strategic Alliances and Partnerships: Bitcash proactively seeks strategic partnerships across industries to expand the reach and utility of its platform.These partnerships amplify our market presence and integrate Bitcash services into a broader array of business and consumer applications.',
            'Continuous Research and Development(R & D): Investment in R & D is vital to maintaining our technological edge.We continually seek to improve our offerings, adapt to emerging technologies, and set new standards for user experience and security within the digital economy.',
            'Compliance and Security: Bitcash dedicates substantial resources to regulatory compliance and platform security.By staying ahead of legal and security challenges, we ensure the longevity and trustworthiness of the platform, which in turn supports user retention and growth.',
            'Education and Community Engagement: We believe that an informed and engaged community is a catalyst for growth.Bitcash invests in educational initiatives and community - building activities, empowering users to fully leverage the platform\'s capabilities and contribute to its evolution.',
            'User Acquisition and Marketing: Our user-centric model is complemented by targeted marketing campaigns designed to attract a diverse user base.By showcasing real - world applications and success stories, we aim to demystify blockchain and AI, making them relatable and accessible to a mainstream audience.',
            'The Bitcash business model is more than a revenue-generating structure; it\'s a commitment to creating a sustainable and equitable digital economy.Our integrated approach ensures that as Bitcash grows, so does the value for every participant in the ecosystem. Join us on this transformative journey, and together, let\'s build the foundations of a new global economy where everyone can thrive.'
          ]
        ]
      },
      tokenomics: {
        title: 'Tokenomics of Bitcash: Architectonic Value and Growth',
        content: [
          [
            'The economic backbone of Bitcash is predicated on a comprehensive tokenomics strategy that underwrites our platform’s growth, incentivizes participation, and ensures a fair distribution of value across the ecosystem. Our tokenomics is tailored to the needs of our community, reflecting real contributions and fostering a sustainable environment for innovation and progress.',
          ],
          ['Token Structure and Distribution'],
          ['Bitcash has implemented a dual token system consisting of:'],
          [
            'Utility Token: The primary medium for transactions within the Bitcash ecosystem. It is used to pay for services, access platform features, and incentivize community participation.',
            'Governance Token: Bestowed upon contributors and stakeholders, allowing for voting rights and participation in the decision-making processes that guide the platform’s future.',
            'Tokens are initially distributed based on contributions, whether in the form of development work, community management, or capital investment. This approach ensures that the earliest supporters and contributors are rewarded for their trust and effort.'
          ],
          ['Mint-and-Burn Mechanism'],
          ['Our dynamic mint-and-burn policy ensures the supply of Bitcash tokens is aligned with the platform\'s growth and the community\'s needs.Tokens are minted to reward contributions and fund ecosystem development.To counteract inflationary pressures and reward token holders, a portion of the platform\'s revenue is used to repurchase and burn tokens, thereby reducing the total supply and potentially increasing the token\'s value.'],
          ['Revenue Generation'],
          ['Revenue streams for Bitcash are diversified, including but not limited to:'],
          [
            'Transaction fees from our wallet services and P2P exchange.',
            'Service fees from our Bitcash Launchpad.',
            'Commission from facilitating services such as the forex and stablecoin exchanges',
            'Strategic partnerships and collaborations with other blockchain- based services and AI initiatives.',
            'A portion of this revenue is dedicated to continuous development, security enhancements, marketing, and community initiatives, ensuring the long- term viability and growth of the Bitcash platform.'
          ],
        ]
      },
    }
  },
  {
    id: 2,
    title: 'bitlauncher',
    slug: 'bitlauncher',
    pitch: 'Specialized AI chatbots',
    fundraiseGoal: '$200,000',
    maxAllocation: '$10,000',
    heroImage: '/images/projects/masterbots.png',
    badgeText: 'COMING SOON',
    linkPath: '/bitlauncher',
    auctionId: 9,
    token: TestnetMBOTSPL,
    presaleOpen: true,
    twitterUsername: 'masterbotsai',
    telegramGroup: 'masterbotsai',
    discordServer: 'a4gwhT9G',
    content: {
      highlights: {
        title: 'Highlights',
        content: [
          [
            'Democratizing Access to Technology: bitcash aims to make cryptocurrency, AI, and decentralized finance accessible and beneficial for everyone, not just the technically savvy or financially affluent.',
            'Innovative Platform Design: Our platform features a user-friendly design, focusing on minimalism and functionality, enhanced by cutting-edge technologies like webauthn, account abstraction, and key recovery to significantly improve user experience.',
            'Sustainable Tokenomics: Inspired by proven equity shareholder models, our tokenomics are designed to provide a sustainable utility token system, ensuring fair and equitable participation and rewards for all stakeholders.',
            'Non-Profit L1 Blockchain: bitcash is developing a non-profit base layer L1 blockchain, characterized by one of the fairest token distributions to all unique humans, ensuring equitable access to our services.',
            'AI Launchpad Platform: Our launchpad platform is specifically designed for AI startups, offering tokenization, organization, and financial services to support and propel innovation in the AI space.',
            'Open Collaboration and Transparency: bitcash champions an open-source culture, building in public to foster a global community of innovators and ensuring sustainable incentives and collective intelligence.',
            'Comprehensive Security and Compliance: We are committed to high standards of regulatory compliance and security, implementing rigorous KYC and AML policies, and utilizing advanced security measures to protect our platform and users.',
            'Global Inclusively and Empowerment: Our mission is to harness the potential of blockchain and AI to empower billions around the world, creating solutions that are not only accessible but also transformative and meaningful.',
            'Focus on Human Connection: In anticipation of a future dominated by AI, bitcash aims to reinforce the value of authentic human connections, ensuring that technology serves to elevate and empower every individual.',
            'Building the Future Digital Economy: bitcash envisions establishing a new global economy where technology and finance serve humanity, guided by ethical principles and the collective well-being of the global community.',
          ],
          ['Join us on this transformative journey with bitcash, where we\'re not just preparing for the next decade but building the foundation for the future of digital economies.']
        ]
      },
      product: {
        title: 'Product Overview',
        content: [
          ['At the heart of bitcash lies a suite of innovative solutions designed to make cryptocurrency, AI, and decentralized finance (DeFi) not only accessible but intuitive and beneficial for everyone. Our products are crafted with the everyday user in mind, ensuring that the revolutionary potentials of these technologies are within reach for all, irrespective of their technical know-how. Here\'s a glimpse into the core offerings that define the bitcash ecosystem: '],
          ['bitcash Wallet'],
          [
            'Passwordless Webauthn System: Revolutionizing Web3 interactions with a system that secures private keys within the device\'s secure element, simplifying user experience without compromising security.',
            'Native Account Abstraction: Enhances user experience on the EOS blockchain, eliminating the complexity traditionally associated with blockchain transactions.',
            'Default Account Recovery: Provides users with a fail-safe mechanism to regain access through identity verification, with plans for a decentralized multi-factor recovery system.'
          ],
          ['P2P On-Ramp'],
          [
            'Facilitating Direct Exchanges: Connects users directly, enabling the exchange of local currency stablecoins (e.g., bitUSD, bitEUR, bitYEN, bitNGN) through traditional banking or digital wallet transfers, democratizing entry into the crypto ecosystem.'
          ],
          ['Forex and Local Stablecoins'],
          [
            'Real-time Exchange Rates: Offers local stablecoins over-collateralized with USDT, supported by an on-chain forex oracle, allowing for seamless currency exchanges and transactions in users\' local currency.'
          ],
          ['DAO Tools for Efficient Organization'],
          [
            'dBoard for Collaborative Decision-making: A comprehensive platform designed for DAOs, companies, and non-profits, facilitating streamlined collaboration, governance, and community engagement.'
          ],
          ['bitlauncher - AI Launchpad'],
          [
            'Innovative Fundraising and Organization: Utilizes the Gnosis Auction solidity smart contract on the EOS EVM, offering AI startups a secure and efficient platform to launch, grow, and access a global pool of investors.'
          ],
          ['Security and Compliance'],
          [
            'Robust Regulatory Adherence and Security Measures: bitcash is committed to upholding the highest standards of compliance and security, incorporating rigorous KYC and AML policies, regular security audits, and smart contract audits to ensure a secure and trustworthy platform.'
          ],
          ['Join the bitcash Ecosystem'],
          [
            'Our mission extends beyond product development; we are building a community. Whether you are a potential user curious about the benefits of cryptocurrency, a developer eager to contribute to groundbreaking projects, an investor looking for pioneering ventures in AI and DeFi, or simply someone passionate about the future of digital finance, bitcash offers a spectrum of opportunities to get involved, contribute, and grow with us.',
            'Explore the bitcash ecosystem today and be a part of redefining the global economy for the digital era. Join us on this transformative journey towards a future where technology and finance are accessible, equitable, and instrumental in fostering human connection and prosperity.'
          ]
        ]
      },
      problem: {
        title: 'Problem Statement',
        content: [
          [
            'In today\'s rapidly evolving digital landscape, the revolutionary potentials of cryptocurrency, artificial intelligence (AI), and decentralized finance (DeFi) are often gated behind complex technical barriers. This has led to a stark divide where the benefits of these innovations are concentrated in the hands of a few—those with technical expertise, sizable capital, and access to cutting-edge tools. The vast majority, however, remain bystanders in the shadow of this digital revolution.',
            'At Bitcash, we recognize that while technology strides forward, it often leaves behind the very people it seeks to empower. Billions around the globe face the following challenges:',
          ],
          [
            'Complexity Barrier: The intricate technical nature of current blockchain and cryptocurrency solutions is daunting for the average person, deterring widespread adoption.',
            'Accessibility Issues: Many users across the world lack the tools or platforms that can simplify the integration of AI and DeFi into their daily lives, making these technologies feel remote and unattainable.',
            'Inequality in Financial Tools: The current financial system is skewed towards the financially literate and affluent, making it difficult for the underbanked or those without access to traditional banking services to leverage the benefits of digital finance.',
            'Economic Disparity: Cryptocurrencies have created new avenues for investment and wealth accumulation, but these are often only navigable for those already in the know or with sufficient resources.',
            'Lack of Integration: There is a pressing need for a unified platform that seamlessly combines AI capabilities with blockchain and DeFi, offering a cohesive and simplified user experience.',
          ]
        ]
      },
      solution: {
        title: 'Solution Statement',
        content: [
          [
            'At Bitcash, we believe the future of our global economy hinges on the seamless integration of cryptocurrency, AI, and decentralized finance into everyday life. Our platform stands as a testament to the possible—where innovation is not only about pioneering technology but also about creating real-world solutions that are inclusive, empowering, and transformative.',
            'Here\'s how Bitcash addresses the challenges outlined in our Problem Statement:'
          ],
          [
            'Simplified User Experience: By designing an intuitive user interface, Bitcash removes the complexity of traditional blockchain interactions. Our passwordless webauthn system, account abstraction, and user-friendly wallet are built with the everyday user in mind, ensuring that anyone, regardless of technical expertise, can safely and easily access the world of cryptocurrency and AI.',
            'Accessibility and Inclusion: Bitcash\'s peer-to-peer on-ramp and local stablecoins enable access to digital economies across global markets. Our platform breaks down financial barriers, offering tools that foster inclusivity and provide a springboard for financial growth and stability.',
            'Equitable Financial Systems: Our non-profit L1 blockchain network aims to distribute tokens to every unique individual, offering a fairer financial future. This revolutionary model creates a dividend for life, heralding a new era of equitable wealth distribution.',
            'Integration and Innovation: Bitcash isn\'t just a platform; it\'s a launchpad for AI startups, a breeding ground for DeFi applications, and a holistic solution for users and developers. With our innovative bitLauncher and dBoard, we foster a dynamic ecosystem where anyone can contribute to and benefit from cutting-edge AI developments and decentralized financial products.',
            'Community and Growth: We build in public and invite collaboration, ensuring our community\'s intelligence and creativity drive our ecosystem.From grassroots initiatives to global hackathons, Bitcash is a platform for collective innovation, harnessing the collective power of our users to guide our growth strategy.',
            'Bitcash\'s solution extends beyond technology; it is about building a future that prioritizes the human element within the digital domain. Our commitment to security, regulatory compliance, and user education ensures that we\'re not only developing a platform but also nurturing a community that can thrive within the new digital economy.',
            'Join us on our mission to build a future where the benefits of blockchain and AI are universally accessible, where finance is a tool for empowerment, and where the global economy reflects the diversity and potential of its participants.With Bitcash, the foundations of a new global economy are within reach.Together, let\'s create a world where innovation is inclusive, growth is shared, and technology serves humanity.',
          ],
        ]
      },
      businessModel: {
        title: 'Business Model',
        content: [
          [
            'Bitcash presents a robust and pioneering business model designed to foster an inclusive and expansive global economy, anchored by the seamless integration of cryptocurrency, AI, and decentralized finance (DeFi). Our model is constructed on the premise of equitable access, shared prosperity, and community-driven innovation.',
            'Here\'s a breakdown of the Bitcash business model: '
          ],
          [
            'Utility Token System: Bitcash introduces a utility token that serves as the central cog in the ecosystem\'s engine.This token is the currency for all transactions within the platform, driving the adoption and utility of Bitcash services.Our mint- and - burn mechanism ensures that token supply aligns with the ecosystem\'s growth, creating a dynamic equilibrium that benefits all stakeholders.',
            'Diversified Revenue Streams: Our platform generates revenue through a suite of services including transaction fees, p2p exchange margins, and the provision of AI- driven DeFi applications.We are also pioneering the \'bitlauncher\' launchpad, which provides a tokenized fundraising platform for AI startups, earning a fee from successful auctions and fostering a new wave of AI innovation.',
            'Community-Centric Growth: Central to our model is the emphasis on collective growth.By inviting open - source development and contributions, we ensure that the platform evolves with the direct input of its users. This communal approach not only incentivizes contributions but also creates a self-sustaining cycle of innovation and improvement.',
            'Non-Profit L1 Blockchain: The development of our non-profit L1 blockchain facilitates a fair and decentralized distribution of tokens.This is not just a technical underpinning; it\'s a social commitment to ensure that the benefits of blockchain are shared by all, fostering an economy where every individual has a stake.',
            'Ethical Token Distribution: Our token distribution mimics the best practices of equity sharing in traditional businesses, rewarding contributions transparently and equitably.By valuing contributions in real - time, we avoid speculation and overvaluation, grounding our tokenomics in real value created for and by the community.',
            'Strategic Alliances and Partnerships: Bitcash proactively seeks strategic partnerships across industries to expand the reach and utility of its platform.These partnerships amplify our market presence and integrate Bitcash services into a broader array of business and consumer applications.',
            'Continuous Research and Development(R & D): Investment in R & D is vital to maintaining our technological edge.We continually seek to improve our offerings, adapt to emerging technologies, and set new standards for user experience and security within the digital economy.',
            'Compliance and Security: Bitcash dedicates substantial resources to regulatory compliance and platform security.By staying ahead of legal and security challenges, we ensure the longevity and trustworthiness of the platform, which in turn supports user retention and growth.',
            'Education and Community Engagement: We believe that an informed and engaged community is a catalyst for growth.Bitcash invests in educational initiatives and community - building activities, empowering users to fully leverage the platform\'s capabilities and contribute to its evolution.',
            'User Acquisition and Marketing: Our user-centric model is complemented by targeted marketing campaigns designed to attract a diverse user base.By showcasing real - world applications and success stories, we aim to demystify blockchain and AI, making them relatable and accessible to a mainstream audience.',
            'The Bitcash business model is more than a revenue-generating structure; it\'s a commitment to creating a sustainable and equitable digital economy.Our integrated approach ensures that as Bitcash grows, so does the value for every participant in the ecosystem. Join us on this transformative journey, and together, let\'s build the foundations of a new global economy where everyone can thrive.'
          ]
        ]
      },
      tokenomics: {
        title: 'Tokenomics of Bitcash: Architectonic Value and Growth',
        content: [
          [
            'The economic backbone of Bitcash is predicated on a comprehensive tokenomics strategy that underwrites our platform’s growth, incentivizes participation, and ensures a fair distribution of value across the ecosystem. Our tokenomics is tailored to the needs of our community, reflecting real contributions and fostering a sustainable environment for innovation and progress.',
          ],
          ['Token Structure and Distribution'],
          ['Bitcash has implemented a dual token system consisting of:'],
          [
            'Utility Token: The primary medium for transactions within the Bitcash ecosystem. It is used to pay for services, access platform features, and incentivize community participation.',
            'Governance Token: Bestowed upon contributors and stakeholders, allowing for voting rights and participation in the decision-making processes that guide the platform’s future.',
            'Tokens are initially distributed based on contributions, whether in the form of development work, community management, or capital investment. This approach ensures that the earliest supporters and contributors are rewarded for their trust and effort.'
          ],
          ['Mint-and-Burn Mechanism'],
          ['Our dynamic mint-and-burn policy ensures the supply of Bitcash tokens is aligned with the platform\'s growth and the community\'s needs.Tokens are minted to reward contributions and fund ecosystem development.To counteract inflationary pressures and reward token holders, a portion of the platform\'s revenue is used to repurchase and burn tokens, thereby reducing the total supply and potentially increasing the token\'s value.'],
          ['Revenue Generation'],
          ['Revenue streams for Bitcash are diversified, including but not limited to:'],
          [
            'Transaction fees from our wallet services and P2P exchange.',
            'Service fees from our Bitcash Launchpad.',
            'Commission from facilitating services such as the forex and stablecoin exchanges',
            'Strategic partnerships and collaborations with other blockchain- based services and AI initiatives.',
            'A portion of this revenue is dedicated to continuous development, security enhancements, marketing, and community initiatives, ensuring the long- term viability and growth of the Bitcash platform.'
          ],
        ]
      },
    }
  },
  {
    id: 3,
    title: 'masterbots',
    slug: 'masterbots',
    pitch: 'Specialized AI chatbots',
    fundraiseGoal: '$650,000',
    maxAllocation: '$10,000',
    heroImage: '/images/projects/masterbots.png',
    badgeText: 'COMING SOON',
    linkPath: '/masterbots',
    auctionId: 9,
    token: TestnetMBOTSPL,
    presaleOpen: true,
    twitterUsername: 'masterbotsai',
    telegramGroup: 'masterbotsai',
    discordServer: 'a4gwhT9G',
    content: {
      highlights: {
        title: 'Highlights',
        content: [
          [
            'Democratizing Access to Technology: bitcash aims to make cryptocurrency, AI, and decentralized finance accessible and beneficial for everyone, not just the technically savvy or financially affluent.',
            'Innovative Platform Design: Our platform features a user-friendly design, focusing on minimalism and functionality, enhanced by cutting-edge technologies like webauthn, account abstraction, and key recovery to significantly improve user experience.',
            'Sustainable Tokenomics: Inspired by proven equity shareholder models, our tokenomics are designed to provide a sustainable utility token system, ensuring fair and equitable participation and rewards for all stakeholders.',
            'Non-Profit L1 Blockchain: bitcash is developing a non-profit base layer L1 blockchain, characterized by one of the fairest token distributions to all unique humans, ensuring equitable access to our services.',
            'AI Launchpad Platform: Our launchpad platform is specifically designed for AI startups, offering tokenization, organization, and financial services to support and propel innovation in the AI space.',
            'Open Collaboration and Transparency: bitcash champions an open-source culture, building in public to foster a global community of innovators and ensuring sustainable incentives and collective intelligence.',
            'Comprehensive Security and Compliance: We are committed to high standards of regulatory compliance and security, implementing rigorous KYC and AML policies, and utilizing advanced security measures to protect our platform and users.',
            'Global Inclusively and Empowerment: Our mission is to harness the potential of blockchain and AI to empower billions around the world, creating solutions that are not only accessible but also transformative and meaningful.',
            'Focus on Human Connection: In anticipation of a future dominated by AI, bitcash aims to reinforce the value of authentic human connections, ensuring that technology serves to elevate and empower every individual.',
            'Building the Future Digital Economy: bitcash envisions establishing a new global economy where technology and finance serve humanity, guided by ethical principles and the collective well-being of the global community.',
          ],
          ['Join us on this transformative journey with bitcash, where we\'re not just preparing for the next decade but building the foundation for the future of digital economies.']
        ]
      },
      product: {
        title: 'Product Overview',
        content: [
          ['At the heart of bitcash lies a suite of innovative solutions designed to make cryptocurrency, AI, and decentralized finance (DeFi) not only accessible but intuitive and beneficial for everyone. Our products are crafted with the everyday user in mind, ensuring that the revolutionary potentials of these technologies are within reach for all, irrespective of their technical know-how. Here\'s a glimpse into the core offerings that define the bitcash ecosystem: '],
          ['bitcash Wallet'],
          [
            'Passwordless Webauthn System: Revolutionizing Web3 interactions with a system that secures private keys within the device\'s secure element, simplifying user experience without compromising security.',
            'Native Account Abstraction: Enhances user experience on the EOS blockchain, eliminating the complexity traditionally associated with blockchain transactions.',
            'Default Account Recovery: Provides users with a fail-safe mechanism to regain access through identity verification, with plans for a decentralized multi-factor recovery system.'
          ],
          ['P2P On-Ramp'],
          [
            'Facilitating Direct Exchanges: Connects users directly, enabling the exchange of local currency stablecoins (e.g., bitUSD, bitEUR, bitYEN, bitNGN) through traditional banking or digital wallet transfers, democratizing entry into the crypto ecosystem.'
          ],
          ['Forex and Local Stablecoins'],
          [
            'Real-time Exchange Rates: Offers local stablecoins over-collateralized with USDT, supported by an on-chain forex oracle, allowing for seamless currency exchanges and transactions in users\' local currency.'
          ],
          ['DAO Tools for Efficient Organization'],
          [
            'dBoard for Collaborative Decision-making: A comprehensive platform designed for DAOs, companies, and non-profits, facilitating streamlined collaboration, governance, and community engagement.'
          ],
          ['bitlauncher - AI Launchpad'],
          [
            'Innovative Fundraising and Organization: Utilizes the Gnosis Auction solidity smart contract on the EOS EVM, offering AI startups a secure and efficient platform to launch, grow, and access a global pool of investors.'
          ],
          ['Security and Compliance'],
          [
            'Robust Regulatory Adherence and Security Measures: bitcash is committed to upholding the highest standards of compliance and security, incorporating rigorous KYC and AML policies, regular security audits, and smart contract audits to ensure a secure and trustworthy platform.'
          ],
          ['Join the bitcash Ecosystem'],
          [
            'Our mission extends beyond product development; we are building a community. Whether you are a potential user curious about the benefits of cryptocurrency, a developer eager to contribute to groundbreaking projects, an investor looking for pioneering ventures in AI and DeFi, or simply someone passionate about the future of digital finance, bitcash offers a spectrum of opportunities to get involved, contribute, and grow with us.',
            'Explore the bitcash ecosystem today and be a part of redefining the global economy for the digital era. Join us on this transformative journey towards a future where technology and finance are accessible, equitable, and instrumental in fostering human connection and prosperity.'
          ]
        ]
      },
      problem: {
        title: 'Problem Statement',
        content: [
          [
            'In today\'s rapidly evolving digital landscape, the revolutionary potentials of cryptocurrency, artificial intelligence (AI), and decentralized finance (DeFi) are often gated behind complex technical barriers. This has led to a stark divide where the benefits of these innovations are concentrated in the hands of a few—those with technical expertise, sizable capital, and access to cutting-edge tools. The vast majority, however, remain bystanders in the shadow of this digital revolution.',
            'At Bitcash, we recognize that while technology strides forward, it often leaves behind the very people it seeks to empower. Billions around the globe face the following challenges:',
          ],
          [
            'Complexity Barrier: The intricate technical nature of current blockchain and cryptocurrency solutions is daunting for the average person, deterring widespread adoption.',
            'Accessibility Issues: Many users across the world lack the tools or platforms that can simplify the integration of AI and DeFi into their daily lives, making these technologies feel remote and unattainable.',
            'Inequality in Financial Tools: The current financial system is skewed towards the financially literate and affluent, making it difficult for the underbanked or those without access to traditional banking services to leverage the benefits of digital finance.',
            'Economic Disparity: Cryptocurrencies have created new avenues for investment and wealth accumulation, but these are often only navigable for those already in the know or with sufficient resources.',
            'Lack of Integration: There is a pressing need for a unified platform that seamlessly combines AI capabilities with blockchain and DeFi, offering a cohesive and simplified user experience.',
          ]
        ]
      },
      solution: {
        title: 'Solution Statement',
        content: [
          [
            'At Bitcash, we believe the future of our global economy hinges on the seamless integration of cryptocurrency, AI, and decentralized finance into everyday life. Our platform stands as a testament to the possible—where innovation is not only about pioneering technology but also about creating real-world solutions that are inclusive, empowering, and transformative.',
            'Here\'s how Bitcash addresses the challenges outlined in our Problem Statement:'
          ],
          [
            'Simplified User Experience: By designing an intuitive user interface, Bitcash removes the complexity of traditional blockchain interactions. Our passwordless webauthn system, account abstraction, and user-friendly wallet are built with the everyday user in mind, ensuring that anyone, regardless of technical expertise, can safely and easily access the world of cryptocurrency and AI.',
            'Accessibility and Inclusion: Bitcash\'s peer-to-peer on-ramp and local stablecoins enable access to digital economies across global markets. Our platform breaks down financial barriers, offering tools that foster inclusivity and provide a springboard for financial growth and stability.',
            'Equitable Financial Systems: Our non-profit L1 blockchain network aims to distribute tokens to every unique individual, offering a fairer financial future. This revolutionary model creates a dividend for life, heralding a new era of equitable wealth distribution.',
            'Integration and Innovation: Bitcash isn\'t just a platform; it\'s a launchpad for AI startups, a breeding ground for DeFi applications, and a holistic solution for users and developers. With our innovative bitLauncher and dBoard, we foster a dynamic ecosystem where anyone can contribute to and benefit from cutting-edge AI developments and decentralized financial products.',
            'Community and Growth: We build in public and invite collaboration, ensuring our community\'s intelligence and creativity drive our ecosystem.From grassroots initiatives to global hackathons, Bitcash is a platform for collective innovation, harnessing the collective power of our users to guide our growth strategy.',
            'Bitcash\'s solution extends beyond technology; it is about building a future that prioritizes the human element within the digital domain. Our commitment to security, regulatory compliance, and user education ensures that we\'re not only developing a platform but also nurturing a community that can thrive within the new digital economy.',
            'Join us on our mission to build a future where the benefits of blockchain and AI are universally accessible, where finance is a tool for empowerment, and where the global economy reflects the diversity and potential of its participants.With Bitcash, the foundations of a new global economy are within reach.Together, let\'s create a world where innovation is inclusive, growth is shared, and technology serves humanity.',
          ],
        ]
      },
      businessModel: {
        title: 'Business Model',
        content: [
          [
            'Bitcash presents a robust and pioneering business model designed to foster an inclusive and expansive global economy, anchored by the seamless integration of cryptocurrency, AI, and decentralized finance (DeFi). Our model is constructed on the premise of equitable access, shared prosperity, and community-driven innovation.',
            'Here\'s a breakdown of the Bitcash business model: '
          ],
          [
            'Utility Token System: Bitcash introduces a utility token that serves as the central cog in the ecosystem\'s engine.This token is the currency for all transactions within the platform, driving the adoption and utility of Bitcash services.Our mint- and - burn mechanism ensures that token supply aligns with the ecosystem\'s growth, creating a dynamic equilibrium that benefits all stakeholders.',
            'Diversified Revenue Streams: Our platform generates revenue through a suite of services including transaction fees, p2p exchange margins, and the provision of AI- driven DeFi applications.We are also pioneering the \'bitlauncher\' launchpad, which provides a tokenized fundraising platform for AI startups, earning a fee from successful auctions and fostering a new wave of AI innovation.',
            'Community-Centric Growth: Central to our model is the emphasis on collective growth.By inviting open - source development and contributions, we ensure that the platform evolves with the direct input of its users. This communal approach not only incentivizes contributions but also creates a self-sustaining cycle of innovation and improvement.',
            'Non-Profit L1 Blockchain: The development of our non-profit L1 blockchain facilitates a fair and decentralized distribution of tokens.This is not just a technical underpinning; it\'s a social commitment to ensure that the benefits of blockchain are shared by all, fostering an economy where every individual has a stake.',
            'Ethical Token Distribution: Our token distribution mimics the best practices of equity sharing in traditional businesses, rewarding contributions transparently and equitably.By valuing contributions in real - time, we avoid speculation and overvaluation, grounding our tokenomics in real value created for and by the community.',
            'Strategic Alliances and Partnerships: Bitcash proactively seeks strategic partnerships across industries to expand the reach and utility of its platform.These partnerships amplify our market presence and integrate Bitcash services into a broader array of business and consumer applications.',
            'Continuous Research and Development(R & D): Investment in R & D is vital to maintaining our technological edge.We continually seek to improve our offerings, adapt to emerging technologies, and set new standards for user experience and security within the digital economy.',
            'Compliance and Security: Bitcash dedicates substantial resources to regulatory compliance and platform security.By staying ahead of legal and security challenges, we ensure the longevity and trustworthiness of the platform, which in turn supports user retention and growth.',
            'Education and Community Engagement: We believe that an informed and engaged community is a catalyst for growth.Bitcash invests in educational initiatives and community - building activities, empowering users to fully leverage the platform\'s capabilities and contribute to its evolution.',
            'User Acquisition and Marketing: Our user-centric model is complemented by targeted marketing campaigns designed to attract a diverse user base.By showcasing real - world applications and success stories, we aim to demystify blockchain and AI, making them relatable and accessible to a mainstream audience.',
            'The Bitcash business model is more than a revenue-generating structure; it\'s a commitment to creating a sustainable and equitable digital economy.Our integrated approach ensures that as Bitcash grows, so does the value for every participant in the ecosystem. Join us on this transformative journey, and together, let\'s build the foundations of a new global economy where everyone can thrive.'
          ]
        ]
      },
      tokenomics: {
        title: 'Tokenomics of Bitcash: Architectonic Value and Growth',
        content: [
          [
            'The economic backbone of Bitcash is predicated on a comprehensive tokenomics strategy that underwrites our platform’s growth, incentivizes participation, and ensures a fair distribution of value across the ecosystem. Our tokenomics is tailored to the needs of our community, reflecting real contributions and fostering a sustainable environment for innovation and progress.',
          ],
          ['Token Structure and Distribution'],
          ['Bitcash has implemented a dual token system consisting of:'],
          [
            'Utility Token: The primary medium for transactions within the Bitcash ecosystem. It is used to pay for services, access platform features, and incentivize community participation.',
            'Governance Token: Bestowed upon contributors and stakeholders, allowing for voting rights and participation in the decision-making processes that guide the platform’s future.',
            'Tokens are initially distributed based on contributions, whether in the form of development work, community management, or capital investment. This approach ensures that the earliest supporters and contributors are rewarded for their trust and effort.'
          ],
          ['Mint-and-Burn Mechanism'],
          ['Our dynamic mint-and-burn policy ensures the supply of Bitcash tokens is aligned with the platform\'s growth and the community\'s needs.Tokens are minted to reward contributions and fund ecosystem development.To counteract inflationary pressures and reward token holders, a portion of the platform\'s revenue is used to repurchase and burn tokens, thereby reducing the total supply and potentially increasing the token\'s value.'],
          ['Revenue Generation'],
          ['Revenue streams for Bitcash are diversified, including but not limited to:'],
          [
            'Transaction fees from our wallet services and P2P exchange.',
            'Service fees from our Bitcash Launchpad.',
            'Commission from facilitating services such as the forex and stablecoin exchanges',
            'Strategic partnerships and collaborations with other blockchain- based services and AI initiatives.',
            'A portion of this revenue is dedicated to continuous development, security enhancements, marketing, and community initiatives, ensuring the long- term viability and growth of the Bitcash platform.'
          ],
        ]
      },
    }
  }
]

export interface Project {
  id: number
  title: string
  slug: string
  pitch: string
  fundraiseGoal: string
  maxAllocation: string
  heroImage: string
  badgeText: string
  linkPath: string
  twitterUsername: string
  telegramGroup: string
  discordServer: string
  content: Record<'highlights' | 'product' | 'problem' | 'solution' | 'businessModel' | 'tokenomics', Record<'title' | 'content', string | string[][]>>
  auctionId?: number
  token?: TokenContractData
  presaleOpen?: boolean
  registrationOpen?: boolean
  auctionClosed?: boolean
}

export type ProjectWithAuction = Required<
  Pick<Project, 'auctionId' | 'token'>
> &
  Project
