// ── Services ──────────────────────────────────────────────────────────────────

export const services = [
  {
    slug: 'ibs-gut-health',
    title: 'IBS & Gut Health',
    shortTitle: 'IBS & Gut Health',
    icon: '🌿',
    tagline: 'Calm your gut. Reclaim your life.',
    description:
      'Irritable Bowel Syndrome affects millions of people, yet so many suffer in silence without the right support. Jackie provides expert, personalised guidance to help you understand your triggers and find lasting relief.',
    symptoms: [
      'Bloating and abdominal pain',
      'Unpredictable bowel habits',
      'Food anxiety and restriction',
      'Social impact and embarrassment',
      'Fatigue and low energy',
    ],
    howHelps:
      'Jackie takes a thorough, evidence-based approach — beginning with a full dietary and symptom history to understand your unique picture. She uses validated assessment tools, dietary modification strategies, and the gold-standard low FODMAP protocol where appropriate.',
    outcomes: [
      'Significant reduction in bloating and pain',
      'Understanding your personal food triggers',
      'A sustainable, varied diet you enjoy',
      'Confidence eating socially',
      'Long-term symptom management skills',
    ],
    colour: 'sage',
  },
  {
    slug: 'low-fodmap',
    title: 'Low FODMAP Programme',
    shortTitle: 'Low FODMAP',
    icon: '🥗',
    tagline: 'The right guidance makes all the difference.',
    description:
      'The Low FODMAP diet is one of the most effective evidence-based approaches for IBS — but it\'s complex and should never be undertaken alone. Jackie guides you through every phase safely and effectively.',
    symptoms: [
      'Failed previous dietary attempts',
      'Confusing, conflicting advice online',
      'Anxiety about the reintroduction phase',
      'Not knowing which foods are safe',
      'Nutritional imbalance concerns',
    ],
    howHelps:
      'Jackie is one of the UK\'s most experienced Low FODMAP practitioners. She provides structured, phased guidance through elimination, reintroduction, and personalisation — ensuring you come out with a diet that\'s both symptom-free and nutritionally complete.',
    outcomes: [
      'Successful FODMAP elimination phase',
      'Systematic, confident food reintroduction',
      'Personalised long-term eating plan',
      'Freedom from unnecessary restriction',
      'Evidence-based skills for life',
    ],
    colour: 'eucalyptus',
  },
  {
    slug: 'type-1-diabetes',
    title: 'Type 1 Diabetes',
    shortTitle: 'Type 1 Diabetes',
    icon: '💙',
    tagline: 'Expert support for complex glucose management.',
    description:
      'Managing Type 1 diabetes through diet requires specialist knowledge. Jackie has extensive NHS experience working with people living with T1D, offering practical strategies that fit real life.',
    symptoms: [
      'Difficulty with glucose management',
      'Carbohydrate counting challenges',
      'Managing blood sugar around exercise',
      'Hypo and hyper anxiety',
      'Eating out and social situations',
    ],
    howHelps:
      'Jackie provides specialist dietetic support including carbohydrate counting education, insulin-to-carbohydrate ratio guidance, and strategies for managing blood glucose in everyday situations — including exercise, illness, and social events.',
    outcomes: [
      'Improved HbA1c and time-in-range',
      'Confident carbohydrate management',
      'Reduced fear of hypoglycaemia',
      'More flexibility in food choices',
      'Better quality of life',
    ],
    colour: 'stone',
  },
  {
    slug: 'type-2-diabetes',
    title: 'Type 2 Diabetes & Prediabetes',
    shortTitle: 'Type 2 Diabetes',
    icon: '🌱',
    tagline: 'Real change is possible with the right support.',
    description:
      'A Type 2 or prediabetes diagnosis can feel overwhelming — but with the right nutritional guidance, many people achieve remarkable improvements in their blood glucose, energy, and overall health.',
    symptoms: [
      'Newly diagnosed and unsure where to start',
      'Struggling to make sustainable changes',
      'Conflicting information about carbohydrates',
      'Weight management concerns',
      'Medication dependency concerns',
    ],
    howHelps:
      'Jackie provides practical, evidence-based guidance that goes beyond generic advice. She develops personalised meal plans, explains the impact of different foods on blood glucose, and supports sustainable lifestyle changes — without fads or unnecessary restriction.',
    outcomes: [
      'Improved blood glucose control',
      'Sustainable dietary habits',
      'Weight management if appropriate',
      'Reduced medication dependency in some cases',
      'Greater energy and wellbeing',
    ],
    colour: 'terracotta',
  },
  {
    slug: 'lifestyle-nutrition',
    title: 'Lifestyle Nutrition Coaching',
    shortTitle: 'Lifestyle Nutrition',
    icon: '✨',
    tagline: 'Build a healthier relationship with food.',
    description:
      'Not every nutrition goal is medical. Whether you want to eat better, manage your weight, improve your energy, or simply understand nutrition without the noise — Jackie offers expert, jargon-free guidance.',
    symptoms: [
      'Low energy and fatigue',
      'Confused by conflicting nutrition advice',
      'Emotional eating patterns',
      'Desire to eat more mindfully',
      'General health and prevention goals',
    ],
    howHelps:
      'Jackie takes a whole-person approach — looking at your lifestyle, habits, relationships with food, and practical constraints. She provides personalised strategies that are achievable, sustainable, and enjoyable, drawing on principles of mindful and intuitive eating.',
    outcomes: [
      'Clearer, more confident food choices',
      'Sustainable healthy habits',
      'Improved relationship with food',
      'Better energy and mood',
      'Long-term health investment',
    ],
    colour: 'gold',
  },
  {
    slug: 'family-nutrition',
    title: 'Family Nutrition',
    shortTitle: 'Family Nutrition',
    icon: '🏡',
    tagline: 'Practical nutrition for the whole family.',
    description:
      'Feeding a family is one of the most complex nutrition challenges there is. Jackie understands family life from the inside — offering realistic, practical guidance that works for busy households with varying tastes and needs.',
    symptoms: [
      'Fussy eaters at mealtimes',
      'Uncertainty about children\'s nutritional needs',
      'Balancing different dietary requirements',
      'Time pressure and convenience food reliance',
      'Feeding teenagers healthily',
    ],
    howHelps:
      'Jackie provides tailored family nutrition support — from meal planning and batch cooking strategies to understanding portion sizes, managing fussy eating, and ensuring everyone in the household gets what they need.',
    outcomes: [
      'Practical, achievable meal plans',
      'Reduced mealtime stress',
      'Children developing healthy relationships with food',
      'Whole-family nutritional balance',
      'Confidence in the kitchen',
    ],
    colour: 'sage',
  },
]

// ── Testimonials ──────────────────────────────────────────────────────────────

export const testimonials = [
  {
    id: 1,
    name: 'Linda',
    age: 51,
    condition: 'IBS & Low FODMAP',
    quote:
      'In just 6 weeks following the FODMAP diet with Jackie\'s guidance, I felt 100% better. She gave me the confidence to reintroduce food groups I\'d been avoiding for years.',
    result: '6 weeks to feeling 100% better',
    featured: true,
  },
  {
    id: 2,
    name: 'Jane',
    age: 57,
    condition: 'IBS',
    quote:
      'The diet changes made a remarkable difference. Five months in, the benefits are long-term — not temporary. I wish I had found Jackie sooner.',
    result: 'Long-term symptom improvement',
    featured: true,
  },
  {
    id: 3,
    name: 'Elizabeth',
    age: 57,
    condition: 'IBS & FODMAP',
    quote:
      'Without Jackie\'s support, the low FODMAP diet would have been impossible to follow. She was always quick to help when I hit a wall.',
    result: 'Successfully completed FODMAP programme',
    featured: true,
  },
  {
    id: 4,
    name: 'Bridget',
    age: 69,
    condition: 'IBS',
    quote:
      'I felt like a completely different person after following Jackie\'s FODMAP recommendations. Friendly, efficient, and deeply knowledgeable.',
    result: 'Transformed quality of life',
    featured: false,
  },
  {
    id: 5,
    name: 'Victoria',
    age: 36,
    condition: 'IBS',
    quote:
      'The service was excellent and professional. My IBS improved massively in a short period of time. Jackie\'s guidance was clear and supportive throughout.',
    result: 'Massive improvement in IBS symptoms',
    featured: true,
  },
  {
    id: 6,
    name: 'Katrina',
    age: undefined,
    condition: 'Multiple Food Intolerances',
    quote:
      'An experienced and thoroughly caring dietitian. I have never felt healthier in my life. Jackie\'s thoroughness and compassion made all the difference.',
    result: 'Healthiest she has ever felt',
    featured: false,
  },
  {
    id: 7,
    name: 'Alastair',
    age: 32,
    condition: 'General Nutrition',
    quote:
      'Jackie\'s warmth made it very easy to discuss personal matters. The consultation gave me genuine confidence to make lasting dietary changes.',
    result: 'Confident lasting dietary changes',
    featured: false,
  },
  {
    id: 8,
    name: 'Sarah',
    age: 42,
    condition: 'Anaemia & Iron Management',
    quote:
      'Jackie is down-to-earth and friendly. She helped me identify the right iron-rich foods to maintain my levels — simple, practical, effective.',
    result: 'Iron levels successfully managed',
    featured: false,
  },
]

// ── Programmes & Pricing ──────────────────────────────────────────────────────

export const programmes = [
  {
    id: 'discovery',
    name: 'Discovery Call',
    tagline: 'The perfect starting point',
    price: 'Free',
    duration: '15 minutes',
    description:
      'A no-obligation conversation to discuss your health goals, answer your questions, and explore how Jackie can help.',
    includes: [
      '15-minute telephone or video call',
      'Discussion of your health goals',
      'Overview of relevant services',
      'Personalised recommendation',
      'No pressure, no obligation',
    ],
    cta: 'Book Free Call',
    highlight: false,
    badge: null,
  },
  {
    id: 'initial',
    name: 'Initial Consultation',
    tagline: 'Your complete health picture',
    price: '£120',
    duration: '60–90 minutes',
    description:
      'A comprehensive initial assessment covering your full dietary history, health background, and personal goals — with a personalised action plan.',
    includes: [
      'Full dietary and health assessment (60–90 mins)',
      'Personalised nutrition report',
      'Evidence-based dietary recommendations',
      'Written action plan',
      'Email follow-up support',
    ],
    cta: 'Book Consultation',
    highlight: false,
    badge: null,
  },
  {
    id: 'ibs-programme',
    name: 'IBS Coaching Programme',
    tagline: 'Our most popular package',
    price: 'From £350',
    duration: '8–12 weeks',
    description:
      'A structured, guided programme for IBS and gut health including the full Low FODMAP protocol — from elimination through to long-term personalisation.',
    includes: [
      'Initial 90-minute consultation',
      'Full low FODMAP guidance (all 3 phases)',
      '3 follow-up appointments',
      'Symptom diary review and analysis',
      'Personalised meal plans',
      'WhatsApp / email support between sessions',
      'Resource pack and food lists',
    ],
    cta: 'Start Programme',
    highlight: true,
    badge: 'Most Popular',
  },
  {
    id: 'diabetes-programme',
    name: 'Diabetes Support Programme',
    tagline: 'Specialist diabetes nutrition coaching',
    price: 'From £280',
    duration: '6–8 weeks',
    description:
      'Specialist dietetic support for Type 1 and Type 2 diabetes — including carbohydrate management, glucose strategies, and sustainable lifestyle changes.',
    includes: [
      'Initial 90-minute consultation',
      'Personalised diabetes nutrition plan',
      '2 follow-up appointments',
      'Carbohydrate counting education',
      'Blood glucose management strategies',
      'Email support between sessions',
    ],
    cta: 'Start Programme',
    highlight: false,
    badge: null,
  },
  {
    id: 'lifestyle',
    name: 'Lifestyle Nutrition Coaching',
    tagline: 'Sustainable change, expert guidance',
    price: 'From £220',
    duration: '4–6 weeks',
    description:
      'A personalised coaching programme for anyone looking to improve their relationship with food, manage weight, and build lasting healthy habits.',
    includes: [
      'Initial 60-minute consultation',
      'Personalised nutrition coaching plan',
      '2 follow-up sessions',
      'Meal planning support',
      'Mindful eating strategies',
      'Email support between sessions',
    ],
    cta: 'Get Started',
    highlight: false,
    badge: null,
  },
  {
    id: 'followup',
    name: 'Follow-Up Session',
    tagline: 'Ongoing expert support',
    price: '£65',
    duration: '30–45 minutes',
    description:
      'Keep your progress on track with a focused follow-up session to review progress, troubleshoot challenges, and adjust your plan.',
    includes: [
      '30–45 minute consultation',
      'Progress review',
      'Plan adjustment and fine-tuning',
      'Updated recommendations',
      'Written session summary',
    ],
    cta: 'Book Session',
    highlight: false,
    badge: null,
  },
  {
    id: 'supermarket',
    name: 'Supermarket Tour',
    tagline: 'Expert guidance in the aisles',
    price: '£95',
    duration: '90 minutes',
    description:
      'A guided supermarket tour with Jackie to learn how to read labels, choose the right products, and navigate the aisles with confidence.',
    includes: [
      '90-minute in-store tour',
      'Label reading education',
      'Personalised product recommendations',
      'Shopping list planning',
      'Follow-up summary report',
    ],
    cta: 'Book Tour',
    highlight: false,
    badge: 'Unique Service',
  },
]

// ── FAQs ──────────────────────────────────────────────────────────────────────

export const faqs = [
  {
    q: 'What is a Registered Dietitian and how are they different from a nutritionist?',
    a: 'A Registered Dietitian (RD) is a protected title regulated by the Health and Care Professions Council (HCPC). Only those who have completed an approved degree and are registered with the HCPC can legally use this title. Dietitians are the only nutrition professionals qualified to provide medical nutrition therapy and treat clinical conditions. The title "nutritionist" is not legally protected — anyone can use it.',
  },
  {
    q: 'Do I need a GP referral to see Jackie?',
    a: 'No — you can self-refer directly. Simply get in touch via the contact form or phone, and we\'ll book you in. Jackie does work alongside GPs and consultants, but a referral is not required for private appointments.',
  },
  {
    q: 'Are consultations available online?',
    a: 'Yes. Jackie offers consultations via video call (Zoom or equivalent), telephone, and in-person. Online appointments are available including evenings and weekends to fit around your schedule.',
  },
  {
    q: 'How many sessions will I need?',
    a: 'This depends on your goals and health condition. Many clients see significant improvements within 6–8 weeks. For complex conditions like IBS or diabetes, a structured programme of 3–5 sessions tends to produce the best outcomes. Jackie will discuss this with you at your initial consultation.',
  },
  {
    q: 'Is Jackie registered and insured?',
    a: 'Yes. Jackie is registered with the Health and Care Professions Council (HCPC) and is a member of the British Dietetic Association (BDA). She holds full professional indemnity insurance.',
  },
  {
    q: 'What should I bring to my first appointment?',
    a: 'It helps to keep a 3–7 day food and symptom diary before your appointment. You may also want to bring a list of any medications and supplements, relevant blood test results, and a note of your main health concerns and goals.',
  },
  {
    q: 'Do you work with children and teenagers?',
    a: 'Yes. Jackie has experience working with children and families, and can support fussy eating, nutritional concerns, and family meal planning across all ages.',
  },
  {
    q: 'Can consultations be claimed on health insurance?',
    a: 'Many private health insurance policies cover dietitian consultations. Jackie recommends checking with your provider before booking. She can provide receipts and clinical notes for insurance claims.',
  },
]

// ── How It Works ──────────────────────────────────────────────────────────────

export const steps = [
  {
    number: '01',
    title: 'Free Discovery Call',
    description:
      'Start with a free 15-minute call to discuss your health goals. No obligation — just an honest conversation about how Jackie can help.',
  },
  {
    number: '02',
    title: 'Comprehensive Assessment',
    description:
      'Your initial 60–90 minute consultation covers your full health history, dietary habits, lifestyle, and goals to build a complete picture.',
  },
  {
    number: '03',
    title: 'Personalised Plan',
    description:
      'Jackie creates a bespoke, evidence-based nutrition plan tailored specifically to your needs — practical and achievable for real life.',
  },
  {
    number: '04',
    title: 'Ongoing Support',
    description:
      'Regular follow-ups keep you on track, troubleshoot challenges, and refine your plan as you progress toward your goals.',
  },
]

// ── Trust indicators ──────────────────────────────────────────────────────────

export const trustIndicators = [
  { label: 'HCPC Registered', detail: 'Health & Care Professions Council' },
  { label: 'BDA Member', detail: 'British Dietetic Association' },
  { label: '30+ Years', detail: 'Clinical Experience' },
  { label: 'NHS Specialist', detail: 'Consultant-level expertise' },
  { label: 'Free Discovery Call', detail: 'No obligation consultation' },
]
