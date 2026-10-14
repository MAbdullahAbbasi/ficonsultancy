import { industryPath, servicePath } from './navigation'

export const heroContent = {
  title: 'Transform Your Business with',
  titleAccent: 'Expert Financial Guidance',
  subtitle:
    'Comprehensive auditing, taxation, and financial reporting solutions tailored to your business needs.',
}

export const aboutContent = {
  heading: 'About Us',
  paragraph:
    'We are a team of professional services firm specializing in auditing, taxation, financial reporting, and corporate reporting. Our purpose is to provide accurate, compliant, and insightful financial solutions that support informed decision-making. With a focus on integrity and excellence, we help businesses meet regulatory requirements and enhance transparency. Our services are tailored to strengthen financial health and build stakeholder confidence. Partner with us for reliable and value-driven financial expertise.',
  linkLabel: 'Explore \u00a0>',
}

export const servicesSection = {
  heading: 'Our Services',
  cards: [
    {
      id: 'imageid1',
      overlayId: 'overlay1',
      paraId: 'id1pra',
      buttonId: 'imagebuton1',
      title: 'Financial Reporting',
      text: 'Our financial reporting services ensure that businesses maintain accurate, compliant, and insightful financial statements, adhering to international accounting standards. We specialize in preparing financial reports that enhance transparency, facilitate decision-making, and meet regulatory requirements.',
      to: servicePath('financialreporting'),
      imageKey: 'financialReporting',
    },
    {
      id: 'imageid2',
      overlayId: 'overlay2',
      paraId: 'id2pra',
      buttonId: 'imagebuton2',
      title: 'Book Keeping',
      text: 'Accurate bookkeeping supports transparent financial management and informed business decisions We maintain your financial records accurately ensure full regulatory compliance and keep them audit ready at all times giving you control confidence and the freedom to focus on growing your business ',
      to: servicePath('bookkeeping'),
      imageKey: 'bookkeeping',
    },
    {
      id: 'imageid3',
      overlayId: 'overlay3',
      paraId: 'id3pra',
      buttonId: 'imagebuton3',
      title: 'Advisory',
      text: 'We provide tailored advisory services in financial planning risk management compliance and strategic consulting that support informed decisions ensure integrity demonstrate dedication and drive sustainable business growth Our approach builds partnerships',
      to: servicePath('advisory'),
      imageKey: 'advisory',
    },
    {
      id: 'imageid4',
      overlayId: 'overlay4',
      paraId: 'id4pra',
      buttonId: 'imagebuton4',
      title: 'Tax',
      text: 'We offer tailored tax planning, compliance, and advisory solutions to help your business meet regulatory requirements, manage risks, and improve tax efficiency. Our experienced professionals ensure accuracy, identify savings opportunities, and support strategic financial growth across all tax matters and jurisdictions.',
      to: servicePath('tax'),
      imageKey: 'tax',
    },
    {
      id: 'imageid5',
      overlayId: 'overlay5',
      paraId: 'id5pra',
      buttonId: 'imagebuton5',
      title: 'Audit',
      text: 'We offer independent, risk-focused audit services that ensure regulatory compliance, enhance financial accuracy, and reinforce internal controls. Our approach provides valuable insights, strengthens transparency, and supports informed decision-making—helping your business meet both legal obligations and stakeholder expectations.',
      to: servicePath('audit'),
      imageKey: 'audit',
    },
    {
      id: 'imageid6',
      overlayId: 'overlay6',
      paraId: 'id6pra',
      buttonId: 'imagebuton6',
      title: 'Integrated Solutions',
      text: 'We provide end-to-end business solutions, ensuring seamless integration of essential services for corporate clients. From auditing and taxation to advisory and financial reporting, our expert team delivers a unified approach, eliminating complexities and streamlining operations',
      to: servicePath('integrated-solutions'),
      imageKey: 'integratedSolutions',
    },
  ],
}

export const valuesSection = {
  heading: 'Our Values',
  intro:
    'At the core of FI\u2019s vibrant culture are set of values that bring out the best in our people.',
  cards: [
    {
      id: 'valueimage1',
      icon: 'shield-alt',
      title: 'Integrity',
      subtitle: 'We do what is right',
      text: 'We take responsibility and accountability for our day-to-day behavior and we hold ourselves to the highest moral and ethical standards at all times \u2013 even when under pressure. We keep our promises and set an example for others to follow',
    },
    {
      id: 'valueimage2',
      icon: 'star',
      title: 'Excellence',
      subtitle: 'We never stop learning and improving',
      text: 'We do this by staying curious and taking personal responsibility for our learning. We constantly look to improve our work through data and insight, and are open to new challenges and feedback because that is how we develop and improve.',
    },
    {
      id: 'valueimage3',
      icon: 'handshake',
      title: 'Move Together',
      subtitle: 'We respect each other',
      text: 'Collaboration fuels creativity and shapes ideas. We value diverse perspectives, skills, and experiences, ensuring every voice is heard. Through respect and inclusion, we create a space where everyone feels they belong.',
    },
    {
      id: 'valueimage4',
      icon: 'bullseye',
      title: 'Focused on what matters',
      subtitle: 'We do what matters',
      text: 'We are dedicated to building trust in capital markets and businesses, driving sustainable change in communities and in society at large, striving to make the world a better place.',
    },
    {
      id: 'valueimage5',
      icon: 'heart',
      title: 'Well-being',
      subtitle: 'We cultivate harmony and resilience',
      text: 'Our dedication goes beyond business; we prioritize the well-being of employees, clients, and communities, creating a lasting positive impact.',
    },
    {
      id: 'valueimage6',
      icon: 'key',
      title: 'Unlock New Horizons',
      subtitle: 'We unlock new paths to success',
      text: 'We push boundaries and embrace innovation to redefine possibilities. By fostering creativity and forward-thinking solutions, we empower businesses to shape a future without limitations.',
    },
  ],
}

export const industriesSection = {
  heading: 'Industries',
  intro:
    'We provide an informed perspective on issues faced by the global business community.',
  description:
    'We deliver tailored financial solutions to meet the distinct needs of various industries. From manufacturing and technology to healthcare, retail our expertise ensures efficient financial management, compliance, and sustainable growth. Below is a concise overview of key sectors we serve.',
  cards: [
    {
      id: 'industryimage5',
      icon: 'dollar-sign',
      title: 'Financial Services',
      text: 'The financial services industry operates in a highly regulated and fast evolving environment Businesses face increasing challenges related to regulatory compliance accurate financial reporting risk management audit readiness and tax obligations......',
      to: industryPath('financial-services'),
    },
    {
      id: 'industryimage2',
      icon: 'shopping-bag',
      title: 'Consumer Retail',
      text: 'The consumer retail sector operates in a highly competitive and rapidly changing environment driven by evolving customer expectations regulatory requirements and market pressures......',
      to: industryPath('consumer-retail'),
    },
    {
      id: 'industryimage4',
      icon: 'satellite-dish',
      title: 'Information, Communication and Telecommunication',
      text: 'The information communication and telecommunication sector operates in a fast paced......',
      to: industryPath('ict'),
    },
    {
      id: 'industryimage3',
      icon: 'hospital',
      title: 'Infrastructure, Government and HealthCare',
      text: 'The infrastructure government and healthcare sector operates in a highly .....',
      to: industryPath('healthcare'),
    },
    {
      id: 'industryimage1',
      icon: 'hard-hat',
      title: 'Building & Construction',
      text: 'The building construction and real estate sector operates in a capital intensive and highly regulated environment .......',
      to: industryPath('building-construction'),
    },
    {
      id: 'industryimage6',
      icon: 'truck',
      title: 'Transportation',
      text: 'The transportation sector operates in a dynamic and highly regulated environment Businesses face continuous challenges including compliance regulatory complexity ........',
      to: industryPath('transportation'),
    },
  ],
}
